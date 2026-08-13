import React, { useEffect, useMemo, useState } from 'react';
import DATA from '../../data/dashboardData';
import logo from '../../assets/biogreen360-logo.png';
import './HubDashboard.css';

const n = (v, d = 0) =>
	v.toLocaleString('en-US', { minimumFractionDigits: d, maximumFractionDigits: d });
const money = (v) =>
	'$' + v.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

const PRI_ORDER = { high: 0, med: 1, low: 2 };

function Donut({ rows }) {
	const R = 52;
	const C = 2 * Math.PI * R;
	let off = 0;
	const arcs = rows.map((r) => {
		const len = (C * r.pct) / 100;
		const s = (
			<circle
				key={r.label}
				cx='70'
				cy='70'
				r={R}
				fill='none'
				stroke={r.color}
				strokeWidth='17'
				strokeDasharray={`${len} ${C - len}`}
				strokeDashoffset={-off}
				transform='rotate(-90 70 70)'
			/>
		);
		off += len;
		return s;
	});
	return (
		<svg viewBox='0 0 140 140' width='152' height='152' role='img' aria-label='Waste by department'>
			{arcs}
			<text
				x='70'
				y='66'
				textAnchor='middle'
				fontFamily='Inter,sans-serif'
				fontSize='21'
				fontWeight='700'
				fill='#1F2023'
			>
				{rows[0].pct}%
			</text>
			<text
				x='70'
				y='82'
				textAnchor='middle'
				fontFamily='IBM Plex Mono,monospace'
				fontSize='8'
				letterSpacing='1'
				fill='#5B5F66'
			>
				{rows[0].label.toUpperCase()}
			</text>
		</svg>
	);
}

function CategoryBars({ rows }) {
	const max = Math.max(...rows.map((r) => r.pct));
	const shades = ['#1D9A3B', '#2E6E4C', '#417E59', '#548E66', '#7FA890', '#A9C2B4'];
	return (
		<div className='bars'>
			{rows.map((r, i) => (
				<div className='bar-row' key={r.label}>
					<span className='bar-name'>{r.label}</span>
					<span className='bar-val'>{r.pct.toFixed(1)}%</span>
					<div className='bar-track'>
						<div
							className='bar-fill'
							style={{ width: `${(r.pct / max) * 100}%`, background: shades[i] }}
						/>
					</div>
					{r.costPerLb != null && (
						<div className='bar-cost'>
							{money(r.costPerLb)}/lb · {r.costShare.toFixed(1)}% of the week's food cost
						</div>
					)}
				</div>
			))}
		</div>
	);
}

function IngredientBars({ rows }) {
	const max = Math.max(...rows.map((r) => r.lbs));
	return (
		<div className='bars'>
			{rows.map((r) => (
				<div className='bar-row' key={r.name}>
					<span className='bar-name'>{r.name}</span>
					<span className='bar-val'>{r.lbs.toFixed(2)} lbs</span>
					<div className='bar-track'>
						<div
							className='bar-fill'
							style={{ width: `${(r.lbs / max) * 100}%`, background: '#1D9A3B' }}
						/>
					</div>
				</div>
			))}
		</div>
	);
}

function MenuTable({ rows, flags, menuSort, onSort }) {
	const hasCost = rows.some((r) => r.cost != null);
	const sorted = [...rows].sort((a, b) => {
		const av = a[menuSort.key] ?? -Infinity;
		const bv = b[menuSort.key] ?? -Infinity;
		return menuSort.dir === 'asc' ? av - bv : bv - av;
	});
	const arrow = (key) =>
		menuSort.key === key ? (menuSort.dir === 'asc' ? ' \u2191' : ' \u2193') : '';

	return (
		<table>
			<thead>
				<tr>
					<th>Menu item</th>
					{flags && <th>Issue</th>}
					<th className='num sortable' data-sort='lbs' onClick={() => onSort('lbs')}>
						Est. lbs{arrow('lbs')}
					</th>
					{hasCost && (
						<th className='num sortable' data-sort='cost' onClick={() => onSort('cost')}>
							Est. cost{arrow('cost')}
						</th>
					)}
				</tr>
			</thead>
			<tbody>
				{sorted.map((r) => (
					<tr key={r.item}>
						<td>{r.item}</td>
						{flags && <td className='suspect'>{r.flag || ''}</td>}
						<td className='num'>{r.lbs.toFixed(2)}</td>
						{hasCost && (
							<td className='num'>{r.cost != null ? money(r.cost) : ''}</td>
						)}
					</tr>
				))}
			</tbody>
		</table>
	);
}

function HubDashboard() {
	const [current, setCurrent] = useState(DATA.default);
	const [currentWeekIdx, setCurrentWeekIdx] = useState(
		() => DATA.properties[DATA.default].weeks.length - 1
	);
	const [present, setPresent] = useState(false);
	const [menuSort, setMenuSort] = useState({ key: 'lbs', dir: 'desc' });

	const prop = DATA.properties[current];
	const wk = prop.weeks[currentWeekIdx];
	const p = { ...prop, ...wk };

	useEffect(() => {
		document.body.classList.toggle('present', present);
		return () => document.body.classList.remove('present');
	}, [present]);

	const selectProperty = (k) => {
		setCurrent(k);
		setCurrentWeekIdx(DATA.properties[k].weeks.length - 1);
		setMenuSort({ key: 'lbs', dir: 'desc' });
	};

	const handleMenuSort = (key) => {
		setMenuSort((prev) =>
			prev.key === key
				? { key, dir: prev.dir === 'asc' ? 'desc' : 'asc' }
				: { key, dir: 'desc' }
		);
	};

	const recs = wk.recommendations || prop.recommendations;
	const sortedRecs = useMemo(() => {
		if (!recs?.rows) return [];
		return [...recs.rows].sort((a, b) => {
			const ca = a.costDriven ? 0 : 1;
			const cb = b.costDriven ? 0 : 1;
			if (ca !== cb) return ca - cb;
			return (PRI_ORDER[a.pri] ?? 3) - (PRI_ORDER[b.pri] ?? 3);
		});
	}, [recs]);

	const hasCategories = !!(p.categories && p.categories.rows);
	const menu = p.menuAttribution;
	const cov = p.covers;
	const allTime = p.allTime;
	const impactCells = allTime
		? [
				[n(allTime.recycledTons, 2), <>tons food<br />recycled</>],
				[n(allTime.co2Tons, 2), <>tons CO<sub>2</sub><br />sequestered</>],
				[n(allTime.acres), <>acres<br />fertilised</>],
				[n(allTime.trees), <>tree seedlings<br />grown 10 yrs</>],
				[n(allTime.homes), <>homes<br />powered</>],
				[n(allTime.miles), <>miles not<br />driven</>],
			]
		: [];

	const menuCap = (() => {
		if (!menu || menu.status === 'pending') return null;
		const hasCost = menu.rows.some((r) => r.cost != null);
		const rowLbs = menu.rows.reduce((s, r) => s + r.lbs, 0);
		const rowCost = menu.rows.reduce((s, r) => s + (r.cost || 0), 0);
		const parts = [];
		if (p.totalLbs?.value != null) {
			parts.push(`${n(rowLbs, 2)} of the property's ${n(p.totalLbs.value, 1)} lbs total`);
		}
		if (hasCost && p.costLost?.display) {
			parts.push(`${money(rowCost)} of its ${p.costLost.display} total weekly food cost`);
		}
		if (!parts.length) return null;
		return `Rows below cover ${parts.join(' and ')} — the items the model could confidently trace to a specific menu dish. The remainder is real waste without a confident menu match, not missing data.`;
	})();

	return (
		<div className={present ? 'present' : undefined}>
			<header>
				<div className='wrap hbar'>
					<div className='brand'>
						<img src={logo} alt='BioGreen360' className='brand-logo' />
						<div className='b2'>{p.full}</div>
					</div>
					<div className='hspace' />
					<div className='picker' role='group' aria-label='Select property'>
						{Object.keys(DATA.properties).map((k) => (
							<button
								key={k}
								type='button'
								aria-pressed={k === current}
								onClick={() => selectProperty(k)}
							>
								{DATA.properties[k].name}
							</button>
						))}
					</div>
					<button className='toggle' type='button' onClick={() => setPresent((v) => !v)}>
						<span className='dot' />
						<span>{present ? 'Presentation view' : 'Internal view'}</span>
					</button>
				</div>
			</header>

			<main className='wrap'>
				<div>
					<section>
						<div className='eyebrow'>
							{p.period} · {p.name}
						</div>
						{prop.weeks.length > 1 && (
							<div className='week-picker' role='group' aria-label='Select week'>
								{prop.weeks.map((w, i) => (
									<button
										key={w.weekLabel}
										type='button'
										data-week-idx={i}
										aria-pressed={i === currentWeekIdx}
										onClick={() => setCurrentWeekIdx(i)}
									>
										{w.weekLabel}
									</button>
								))}
							</div>
						)}

						{p.noAnalysis ? (
							<div className='card card-pending'>
								<div className='banner'>
									<span className='bi'>NO DATA</span>
									<p>
										<b>No AI analysis available for this hub yet.</b> Volume and offset
										figures below are real. Everything analytical is absent, so nothing
										weekly can be shown for this property.
									</p>
								</div>
							</div>
						) : (
							<>
								<div
									className={`hero${p.costLost?.perLb != null ? ' hero-with-quad' : ''}`}
								>
									<div className='card'>
										<div className='stat-lbl'>
											Total food waste captured
											<span className='tag tag-confirmed internal-only'>Confirmed</span>
										</div>
										<div className='stat-big'>
											{n(p.totalLbs.value, 1)}
											<span className='u'>lbs</span>
										</div>
										{p.periodNote ? <div className='stat-cap'>{p.periodNote}</div> : null}
										<div className='splitbar'>
											{p.wasteType.rows.map((r) => (
												<span
													key={r.label}
													style={{ width: `${r.pct}%`, background: r.color }}
												/>
											))}
										</div>
										<div className='legend'>
											{p.wasteType.rows.map((r) => (
												<div key={r.label}>
													<i className='swatch' style={{ background: r.color }} />
													{r.label} <b>{r.pct}%</b>
												</div>
											))}
										</div>
									</div>
									{p.costLost?.perLb != null ? (
										<div className='hero-quad'>
											<div className='card'>
												<div className='stat-lbl'>
													Estimated food cost lost
													<span className={`tag tag-${p.costLost.status} internal-only`}>
														{cap(p.costLost.status)}
													</span>
												</div>
												<div className='stat-mid'>
													{p.costLost.display ||
														(p.costLost.low != null
															? `${money(p.costLost.low)} – ${money(p.costLost.high)}`
															: 'Not available')}
												</div>
												{p.costLost.caption ? (
													<div className='stat-cap'>{p.costLost.caption}</div>
												) : p.costLost.low == null && !p.costLost.display ? (
													<div className='stat-cap'>{p.costLost.note || ''}</div>
												) : null}
											</div>
											<div className='card'>
												<div className='stat-lbl'>
													Cost per pound wasted
													<span className={`tag tag-${p.costLost.status} internal-only`}>
														{cap(p.costLost.status)}
													</span>
												</div>
												<div className='stat-mid'>
													{money(p.costLost.perLb)}
													<span className='u'>/lb</span>
												</div>
											</div>
											<div className='card'>
												<div className='stat-lbl'>
													Avg. food waste per cover
													{cov?.wastePerCoverOz != null ? (
														<span
															className={`tag tag-${cov.status || 'estimated'} internal-only`}
														>
															{cap(cov.status || 'estimated')}
														</span>
													) : (
														<span className='tag tag-pending internal-only'>Needs input</span>
													)}
												</div>
												{cov?.wastePerCoverOz != null ? (
													<>
														<div className='stat-mid'>
															{cov.wastePerCoverOz}
															<span className='u'>oz</span>
														</div>
														{cov.wasteCaption ? (
															<div className='stat-cap'>{cov.wasteCaption}</div>
														) : null}
													</>
												) : (
													<div className='stat-placeholder'>Cover entry needed</div>
												)}
											</div>
											<div className='card'>
												<div className='stat-lbl'>
													Avg. cost per cover
													{cov?.costPerCover != null ? (
														<span
															className={`tag tag-${cov.status || 'estimated'} internal-only`}
														>
															{cap(cov.status || 'estimated')}
														</span>
													) : (
														<span className='tag tag-pending internal-only'>Needs input</span>
													)}
												</div>
												{cov?.costPerCover != null ? (
													<>
														<div className='stat-mid'>{money(cov.costPerCover)}</div>
														{cov.costCaption ? (
															<div className='stat-cap'>{cov.costCaption}</div>
														) : null}
													</>
												) : (
													<div className='stat-placeholder'>Cover entry needed</div>
												)}
											</div>
										</div>
									) : (
										<div className='card'>
											<div className='stat-lbl'>
												Estimated food cost lost
												<span className={`tag tag-${p.costLost.status} internal-only`}>
													{cap(p.costLost.status)}
												</span>
											</div>
											<div className='stat-mid'>
												{p.costLost.display ||
													(p.costLost.low != null
														? `${money(p.costLost.low)} – ${money(p.costLost.high)}`
														: 'Not available')}
											</div>
											{p.costLost.caption ? (
												<div className='stat-cap'>{p.costLost.caption}</div>
											) : p.costLost.low == null && !p.costLost.display ? (
												<div className='stat-cap'>{p.costLost.note || ''}</div>
											) : null}
										</div>
									)}
								</div>

								<section>
									<div className='insights-grid'>
										<div>
											<div className='shead'>
												<div>
													<div className='eyebrow'>Generated from this week's captures</div>
													<h2>Actionable Insights</h2>
												</div>
												<span className='tag tag-confirmed internal-only'>Confirmed</span>
											</div>
											{recs?.note ? (
												<div className='stat-cap' style={{ margin: '-6px 0 14px' }}>
													{recs.note}
												</div>
											) : null}
											{sortedRecs.map((r) => (
												<details
													key={r.title}
													className={`rec ${r.pri === 'high' ? 'rec-hi' : ''} ${r.costDriven ? 'rec-cost-glow' : ''}`}
												>
													<summary>
														<div className='rec-tagstack'>
															{r.costDriven ? null : (
																<span
																	className={`pri ${r.pri === 'high' ? 'pri-high' : 'pri-med'}`}
																>
																	{r.pri === 'high' ? 'High' : 'Medium'}
																</span>
															)}
															{r.costDriven ? (
																<span className='pri pri-cost'>$ Cost impact</span>
															) : null}
															{r.estSavings ? (
																<span className='rec-savings'>
																	Est. {r.estSavings} saved
																</span>
															) : null}
														</div>
														<div className='rec-head'>
															<h3>{r.title}</h3>
															<div className='rec-caption'>{r.support}</div>
														</div>
														<span className='rec-arrow' aria-hidden='true' />
													</summary>
													<div className='rec-body'>
														<p>{r.body}</p>
														{r.fixme ? (
															<div className='fixme internal-only'>{r.fixme}</div>
														) : null}
													</div>
												</details>
											))}
										</div>
										<div>
											<div className='shead'>
												<div>
													<div className='eyebrow'>Waste traced to the menu</div>
													<h2>Menu Item Attribution</h2>
												</div>
												<span className={`tag tag-${menu.status} internal-only`}>
													{cap(menu.status)}
												</span>
											</div>
											{menu.status === 'pending' ? (
												<div className='card card-pending'>
													<div className='banner'>
														<span className='bi'>HELD</span>
														<p>
															<b>Not shown pending a data fix.</b>{' '}
															{menu.pendingReason ||
																'Menu attribution here is derived from a single daypart, so the figures are skewed and are being withheld rather than presented.'}{' '}
															Ingredient-level analysis above is unaffected: it is read from
															the image, not the menu.
														</p>
													</div>
													<div className='internal-only'>
														<MenuTable
															rows={menu.rows}
															flags
															menuSort={menuSort}
															onSort={handleMenuSort}
														/>
													</div>
												</div>
											) : (
												<div className='card'>
													{menuCap ? (
														<div className='stat-cap' style={{ marginBottom: 12 }}>
															{menuCap}
														</div>
													) : null}
													<MenuTable
														rows={menu.rows}
														flags={false}
														menuSort={menuSort}
														onSort={handleMenuSort}
													/>
												</div>
											)}
										</div>
									</div>
								</section>

								<section>
									<div className='shead'>
										<div>
											<div className='eyebrow'>Where it comes from</div>
											<h2>Breakdown</h2>
										</div>
										<span className='tag tag-confirmed internal-only'>Confirmed</span>
									</div>
									<div className={`grid ${hasCategories ? 'g3' : 'g2'}`}>
										<div className='card'>
											<div className='stat-lbl' style={{ marginBottom: 16 }}>
												By department
											</div>
											<div style={{ display: 'flex', justifyContent: 'center' }}>
												<Donut rows={p.department.rows} />
											</div>
											<div
												className='legend'
												style={{ marginTop: 16, justifyContent: 'center' }}
											>
												{p.department.rows.map((r) => (
													<div key={r.label}>
														<i className='swatch' style={{ background: r.color }} />
														{r.label} <b>{r.pct}%</b>
													</div>
												))}
											</div>
										</div>
										{hasCategories && (
											<div className='card'>
												<div className='stat-lbl' style={{ marginBottom: 16 }}>
													By category
												</div>
												<CategoryBars rows={p.categories.rows} />
											</div>
										)}
										<div className='card'>
											<div className='stat-lbl' style={{ marginBottom: 16 }}>
												Top wasted ingredients
											</div>
											<IngredientBars rows={p.topIngredients.rows} />
											{p.topIngredients.note ? (
												<div className='stat-cap' style={{ marginTop: 10 }}>
													{p.topIngredients.note}
												</div>
											) : null}
										</div>
									</div>
								</section>
							</>
						)}
					</section>

					{allTime && (
						<section>
							<div className='impact'>
								<div className='eyebrow'>Since install · {p.installDate}</div>
								<h2 style={{ color: '#F3F7F4', fontSize: 19 }}>Diverted from landfill</h2>
								<div className='imp-grid'>
									{impactCells.map((c, i) => (
										<div key={i}>
											<div className='imp-v'>{c[0]}</div>
											<div className='imp-l'>{c[1]}</div>
										</div>
									))}
								</div>
							</div>
						</section>
					)}
				</div>

				<footer />
			</main>
		</div>
	);
}

export default HubDashboard;
