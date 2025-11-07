import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard(props) {
	// Prepare experiences as an array
	const experiences = props.experience
		? Array.isArray(props.experience)
			? props.experience
			: [props.experience]
		: [];

	const styles = {
		timelineWrap: {
			marginTop: 18,
			padding: "12px 8px",
			borderRadius: 8,
			// subtle background to lift the timeline from the card
			background: "linear-gradient(180deg, rgba(250,250,252,0.6), rgba(245,245,250,0.4))",
		},
		itemRow: { display: "flex", gap: 16, alignItems: "flex-start", marginBottom: 20 },
		markerCol: { width: 36, display: "flex", flexDirection: "column", alignItems: "center" },
		circle: {
			width: 16,
			height: 16,
			borderRadius: "50%",
			background: "linear-gradient(135deg,#7b2ff7,#2af598)",
			boxShadow: "0 6px 18px rgba(43,37,63,0.12), inset 0 -3px 8px rgba(255,255,255,0.08)",
			position: "relative",
			zIndex: 2,
			transition: "transform .18s ease",
		},
		connector: {
			width: 4,
			flex: 1,
			marginTop: 8,
			background: "linear-gradient(180deg, rgba(123,47,247,0.16), rgba(42,245,152,0.08))",
			borderRadius: 2,
			minHeight: 24,
		},
		contentWrap: { flex: 1, paddingRight: 6, minWidth: 0 /* allow text to shrink/wrap */ },
		/* allow title and meta to wrap on small screens */
		titleRow: { display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 8, flexWrap: "wrap" },
		role: { fontWeight: 700, fontSize: "1rem", color: "#ffffff" },
		companyBadge: {
			display: "inline-block",
			marginLeft: 8,
			background: "rgba(255,255,255,0.06)",
			color: "rgba(255,255,255,0.9)",
			padding: "4px 8px",
			borderRadius: 999,
			fontSize: 12,
			fontWeight: 600,
		},
		/* increase contrast so duration is visible on dark backgrounds */
		duration: { fontSize: 12, color: "rgba(255,255,255,0.78)", fontWeight: 700, marginLeft: 8 },
		desc: {
			marginTop: 8,
			color: "rgba(255,255,255,0.9)",
			lineHeight: 1.4,
			fontSize: 14,
			whiteSpace: "pre-wrap",
			wordBreak: "break-word",
			textAlign: "left",
		},
	};

	return (
		<Card className="quote-card-view">
			<Card.Body>
				<blockquote className="blockquote mb-0">
					<p style={{ textAlign: "justify" }}>
						Hi everyone! I’m <span className="purple">Dinesh Pradhan</span>{" "}
						from <span className="purple">a undergrad student at IIIT Allahabad</span>.
						<br />
						{/* I’m currently working as a{" "}
						<span className="purple">Software Developer</span> at{" "}
						<span className="purple">Juspay</span>.
						<br />I hold an Integrated M.Sc. (IMSc) in{" "}
						<span className="purple">Mathematics and Computing</span> from{" "}
						<span className="purple">BIT Mesra</span>.
						<br />
						<br />
						Outside of coding, I love engaging in activities that keep me
						creative and inspired: */}
					</p>
				</blockquote>

				{experiences.length > 0 && (
					<div style={styles.timelineWrap}>
						{experiences.map((exp, i) => (
							<div
								key={i}
								style={{
									...styles.itemRow,
									marginBottom: i === experiences.length - 1 ? 0 : 20,
								}}
							>
								<div style={styles.markerCol}>
									<div
										style={styles.circle}
										title={`${exp.role} @ ${exp.company}`}
									/>
									{i !== experiences.length - 1 && <div style={styles.connector} />}
								</div>

								<div style={styles.contentWrap}>
									<div style={styles.titleRow}>
										<div style={{ display: "flex", alignItems: "center", gap: 8 }}>
											<div style={styles.role}>{exp.role}</div>
											{exp.company && (
												<span style={styles.companyBadge}>{exp.company}</span>
											)}
										</div>

										{exp.duration && <div style={styles.duration}>{exp.duration}</div>}
									</div>

									{exp.description && <div style={styles.desc}>{exp.description}</div>}
								</div>
							</div>
						))}
					</div>
				)}
			</Card.Body>
		</Card>
	);
}

export default AboutCard;
