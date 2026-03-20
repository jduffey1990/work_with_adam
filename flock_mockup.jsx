import { useState } from "react";

const COLORS = {
  bg: "#F2F2F7",
  card: "#FFFFFF",
  text: "#1C1C1E",
  textSecondary: "#8E8E93",
  accent: "#007AFF",
  accentPurple: "#AF52DE",
  separator: "#E5E5EA",
  tabBar: "#F9F9F9",
  segmentBg: "#E9E9EB",
  segmentActive: "#FFFFFF",
  prayerWarrior: "#C850C0",
  green: "#34C759",
  qrBg: "#1C1C1E",
};

const PhoneFrame = ({ children, title }) => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
    <div
      style={{
        width: 280,
        height: 560,
        background: COLORS.bg,
        borderRadius: 36,
        border: "6px solid #1C1C1E",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        boxShadow: "0 20px 60px rgba(0,0,0,0.15), 0 8px 20px rgba(0,0,0,0.1)",
      }}
    >
      {/* Status Bar */}
      <div
        style={{
          height: 44,
          background: COLORS.bg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          flexShrink: 0,
        }}
      >
        <div style={{ width: 80, height: 22, background: "#1C1C1E", borderRadius: 12, position: "absolute", top: 8 }} />
        <span style={{ position: "absolute", left: 16, fontSize: 11, fontWeight: 600, color: COLORS.text, marginTop: 4 }}>10:21</span>
        <div style={{ position: "absolute", right: 16, display: "flex", gap: 4, alignItems: "center", marginTop: 4 }}>
          <span style={{ fontSize: 10, color: COLORS.text }}>●●●●</span>
          <span style={{ fontSize: 10, color: COLORS.text }}>📶</span>
          <span style={{ fontSize: 12, color: COLORS.text }}>🔋</span>
        </div>
      </div>
      {/* Content */}
      <div style={{ flex: 1, overflow: "hidden", display: "flex", flexDirection: "column" }}>{children}</div>
    </div>
    <p style={{ fontFamily: "'SF Pro Text', -apple-system, sans-serif", fontSize: 13, color: "#6B7280", fontWeight: 500, textAlign: "center", maxWidth: 260 }}>{title}</p>
  </div>
);

const SegmentedControl = ({ options, active, onSelect, small }) => (
  <div
    style={{
      background: COLORS.segmentBg,
      borderRadius: small ? 6 : 8,
      padding: 2,
      display: "flex",
      gap: 2,
      margin: small ? "0" : "0 16px",
    }}
  >
    {options.map((opt) => (
      <button
        key={opt}
        onClick={() => onSelect(opt)}
        style={{
          flex: 1,
          padding: small ? "4px 6px" : "6px 10px",
          borderRadius: small ? 5 : 6,
          border: "none",
          background: active === opt ? COLORS.segmentActive : "transparent",
          color: COLORS.text,
          fontSize: small ? 10 : 12,
          fontWeight: active === opt ? 600 : 400,
          cursor: "pointer",
          boxShadow: active === opt ? "0 1px 3px rgba(0,0,0,0.1)" : "none",
          fontFamily: "'SF Pro Text', -apple-system, sans-serif",
          whiteSpace: "nowrap",
        }}
      >
        {opt}
      </button>
    ))}
  </div>
);

const TabBar = ({ tabs, active }) => (
  <div
    style={{
      height: 70,
      background: COLORS.tabBar,
      borderTop: `0.5px solid ${COLORS.separator}`,
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-around",
      paddingTop: 6,
      flexShrink: 0,
    }}
  >
    {tabs.map((tab) => (
      <div
        key={tab.label}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          position: "relative",
        }}
      >
        {tab.isPlus ? (
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              background: COLORS.accent,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: -10,
              boxShadow: "0 2px 8px rgba(0,122,255,0.3)",
            }}
          >
            <span style={{ color: "white", fontSize: 22, fontWeight: 300, lineHeight: 1 }}>+</span>
          </div>
        ) : (
          <>
            <span style={{ fontSize: 20, opacity: active === tab.label ? 1 : 0.4 }}>{tab.icon}</span>
            <span
              style={{
                fontSize: 9,
                fontFamily: "'SF Pro Text', -apple-system, sans-serif",
                color: active === tab.label ? COLORS.accent : COLORS.textSecondary,
                fontWeight: active === tab.label ? 600 : 400,
              }}
            >
              {tab.label}
            </span>
          </>
        )}
      </div>
    ))}
  </div>
);

const NEW_TABS = [
  { label: "My Flock", icon: "👥" },
  { label: "Templates", icon: "📋" },
  { label: "+", icon: "+", isPlus: true },
  { label: "My Prayers", icon: "☰" },
  { label: "Settings", icon: "⚙️" },
];


const PrayerCard = ({ title, preview, author }) => (
  <div style={{ padding: "12px 16px", borderBottom: `0.5px solid ${COLORS.separator}` }}>
    {author && (
      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
        <div style={{ width: 18, height: 18, borderRadius: 9, background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontSize: 8, color: "white" }}>✝</span>
        </div>
        <span style={{ fontSize: 10, color: COLORS.textSecondary, fontFamily: "'SF Pro Text', -apple-system, sans-serif" }}>{author}</span>
      </div>
    )}
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
      <div style={{ flex: 1 }}>
        <p style={{ fontSize: 14, fontWeight: 600, color: COLORS.text, margin: "0 0 3px", fontFamily: "'SF Pro Text', -apple-system, sans-serif" }}>{title}</p>
        <p style={{ fontSize: 11, color: COLORS.textSecondary, margin: 0, fontFamily: "'SF Pro Text', -apple-system, sans-serif", lineHeight: 1.3 }}>{preview}</p>
      </div>
      <span style={{ color: COLORS.separator, fontSize: 16, marginLeft: 8, marginTop: 4 }}>›</span>
    </div>
  </div>
);

// Screen 1: Current app with old nav
const CurrentScreen = () => (
  <PhoneFrame title="Current: Pray On It has its own tab">
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "8px 16px 4px" }}>
        <h1 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 8px", color: COLORS.text, fontFamily: "'SF Pro Display', -apple-system, sans-serif" }}>My Prayers</h1>
        <div style={{ background: COLORS.segmentBg, borderRadius: 8, padding: "8px 12px", display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
          <span style={{ fontSize: 12, color: COLORS.textSecondary }}>🔍</span>
          <span style={{ fontSize: 13, color: COLORS.textSecondary, fontFamily: "'SF Pro Text', -apple-system, sans-serif" }}>Search prayers...</span>
        </div>
        <div style={{ background: COLORS.card, borderRadius: 12, padding: "10px 14px", marginBottom: 4 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: COLORS.prayerWarrior, fontFamily: "'SF Pro Text', -apple-system, sans-serif" }}>👑 Prayer Warrior</span>
            <span style={{ fontSize: 11, color: COLORS.textSecondary, fontFamily: "'SF Pro Text', -apple-system, sans-serif" }}>19 Prayers</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ fontSize: 11, color: COLORS.text, fontFamily: "'SF Pro Text', -apple-system, sans-serif" }}>✨ AI Generations</span>
            <span style={{ fontSize: 10, color: COLORS.textSecondary, fontFamily: "'SF Pro Text', -apple-system, sans-serif" }}>4 (unlimited)</span>
          </div>
        </div>
      </div>
      <div style={{ flex: 1, overflow: "auto", background: COLORS.card, borderRadius: "12px 12px 0 0", margin: "4px 16px 0" }}>
        <PrayerCard title="Petition Prayer" preview="Heavenly Father, We come before You today with hearts full o..." />
        <PrayerCard title="Nighttime Reflection" preview="Lord, as this day ends, I reflect on your faithfulness..." />
        <PrayerCard title="Serenity Prayer" preview="God, grant me the serenity to accept the things I cannot..." />
      </div>
    </div>
    <TabBar
      tabs={[
        { label: "Pray On It", icon: "📋" },
        { label: "Templates", icon: "📖" },
        { label: "+", icon: "+", isPlus: true },
        { label: "My Prayers", icon: "☰" },
        { label: "Settings", icon: "⚙️" },
      ]}
      active="My Prayers"
    />
  </PhoneFrame>
);

// Screen 2: New My Prayers with toggle
const NewMyPrayers = () => {
  const [tab, setTab] = useState("My Prayers");
  return (
    <PhoneFrame title="New: Pray On It merges into My Prayers via toggle">
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "8px 16px 4px" }}>
          <h1 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 8px", color: COLORS.text, fontFamily: "'SF Pro Display', -apple-system, sans-serif" }}>My Prayers</h1>
          <SegmentedControl options={["My Prayers", "Pray On It"]} active={tab} onSelect={setTab} />
        </div>
        {tab === "My Prayers" ? (
          <div style={{ flex: 1, overflow: "auto" }}>
            <div style={{ padding: "8px 16px" }}>
              <div style={{ background: COLORS.segmentBg, borderRadius: 8, padding: "8px 12px", display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
                <span style={{ fontSize: 12, color: COLORS.textSecondary }}>🔍</span>
                <span style={{ fontSize: 13, color: COLORS.textSecondary, fontFamily: "'SF Pro Text', -apple-system, sans-serif" }}>Search prayers...</span>
              </div>
              <div style={{ background: COLORS.card, borderRadius: 12, padding: "10px 14px", marginBottom: 4 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                  <span style={{ fontSize: 12, fontWeight: 600, color: COLORS.prayerWarrior, fontFamily: "'SF Pro Text', -apple-system, sans-serif" }}>👑 Prayer Warrior</span>
                  <span style={{ fontSize: 11, color: COLORS.textSecondary, fontFamily: "'SF Pro Text', -apple-system, sans-serif" }}>19 Prayers</span>
                </div>
              </div>
            </div>
            <div style={{ background: COLORS.card, borderRadius: "12px 12px 0 0", margin: "0 16px" }}>
              <PrayerCard title="Petition Prayer" preview="Heavenly Father, We come before You today..." />
              <PrayerCard title="Nighttime Reflection" preview="Lord, as this day ends, I reflect on your..." />
              <PrayerCard title="Serenity Prayer" preview="God, grant me the serenity to accept..." />
            </div>
          </div>
        ) : (
          <div style={{ flex: 1, padding: "12px 16px", overflow: "auto" }}>
            <div style={{ background: COLORS.card, borderRadius: 12, overflow: "hidden" }}>
              {[
                { name: "Mom", category: "Family", focus: "Health & recovery" },
                { name: "Jake", category: "Friend", focus: "New job transition" },
                { name: "Sarah", category: "Youth Group", focus: "College decision" },
                { name: "Grandpa", category: "Family", focus: "Comfort & peace" },
              ].map((item, i) => (
                <div key={i} style={{ padding: "10px 14px", borderBottom: i < 3 ? `0.5px solid ${COLORS.separator}` : "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 600, color: COLORS.text, margin: "0 0 2px", fontFamily: "'SF Pro Text', -apple-system, sans-serif" }}>{item.name}</p>
                    <p style={{ fontSize: 10, color: COLORS.textSecondary, margin: 0, fontFamily: "'SF Pro Text', -apple-system, sans-serif" }}>{item.category} · {item.focus}</p>
                  </div>
                  <span style={{ color: COLORS.separator, fontSize: 16 }}>›</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <TabBar tabs={NEW_TABS} active="My Prayers" />
    </PhoneFrame>
  );
};

// Screen 3: My Flock - Member view (Prayer Content)
const FlockMemberView = () => (
  <PhoneFrame title="My Flock: Member sees prayer content from leaders">
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "8px 16px 4px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
          <h1 style={{ fontSize: 26, fontWeight: 700, margin: 0, color: COLORS.text, fontFamily: "'SF Pro Display', -apple-system, sans-serif" }}>My Flock</h1>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: COLORS.segmentBg, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
            <span style={{ fontSize: 16 }}>📷</span>
          </div>
        </div>
        <SegmentedControl options={["Prayer Content"]} active="Prayer Content" onSelect={() => {}} />
        <p style={{ fontSize: 10, color: COLORS.textSecondary, margin: "6px 0 0", fontFamily: "'SF Pro Text', -apple-system, sans-serif", textAlign: "center" }}>Following 2 leaders</p>
      </div>
      <div style={{ flex: 1, overflow: "auto", padding: "8px 16px" }}>
        <div style={{ background: COLORS.card, borderRadius: 12, overflow: "hidden", marginBottom: 10 }}>
          <PrayerCard author="Pastor David" title="Wednesday Youth Prayer" preview="Lord, be with these young hearts as they navigate the challenges of..." />
          <PrayerCard author="Pastor David" title="Sunday Blessing" preview="Heavenly Father, as we gather together this week, we ask for your..." />
        </div>
        <div style={{ background: COLORS.card, borderRadius: 12, overflow: "hidden" }}>
          <PrayerCard author="Minister Grace" title="Morning Devotion" preview="Dear God, as the sun rises on a new day, fill us with renewed..." />
        </div>
      </div>
    </div>
    <TabBar tabs={NEW_TABS} active="My Flock" />
  </PhoneFrame>
);

// Screen 4: Prayer detail with audio
const PrayerDetail = () => (
  <PhoneFrame title="Prayer detail: free members hear premium voice audio">
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "8px 16px", display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ fontSize: 16, color: COLORS.accent, cursor: "pointer" }}>‹</span>
        <span style={{ fontSize: 14, color: COLORS.accent, fontFamily: "'SF Pro Text', -apple-system, sans-serif" }}>Back</span>
      </div>
      <div style={{ flex: 1, padding: "0 16px", overflow: "auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
          <div style={{ width: 36, height: 36, borderRadius: 18, background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 16, color: "white" }}>✝</span>
          </div>
          <div>
            <p style={{ fontSize: 14, fontWeight: 600, color: COLORS.text, margin: 0, fontFamily: "'SF Pro Text', -apple-system, sans-serif" }}>Pastor David</p>
            <p style={{ fontSize: 10, color: COLORS.textSecondary, margin: 0, fontFamily: "'SF Pro Text', -apple-system, sans-serif" }}>Published 2 hours ago</p>
          </div>
        </div>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: COLORS.text, margin: "0 0 12px", fontFamily: "'SF Pro Display', -apple-system, sans-serif" }}>Wednesday Youth Prayer</h2>
        {/* Audio Player */}
        <div style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", borderRadius: 14, padding: "14px 16px", marginBottom: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
            <div style={{ width: 36, height: 36, borderRadius: 18, background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: 16, color: "white" }}>▶</span>
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: 12, fontWeight: 600, color: "white", margin: "0 0 2px", fontFamily: "'SF Pro Text', -apple-system, sans-serif" }}>Listen to this prayer</p>
              <p style={{ fontSize: 9, color: "rgba(255,255,255,0.7)", margin: 0, fontFamily: "'SF Pro Text', -apple-system, sans-serif" }}>Premium voice · Fish Audio</p>
            </div>
            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", fontFamily: "'SF Pro Text', -apple-system, sans-serif" }}>2:14</span>
          </div>
          <div style={{ height: 3, background: "rgba(255,255,255,0.2)", borderRadius: 2 }}>
            <div style={{ width: "0%", height: "100%", background: "white", borderRadius: 2 }} />
          </div>
        </div>
        <div style={{ background: COLORS.card, borderRadius: 12, padding: 14 }}>
          <p style={{ fontSize: 13, color: COLORS.text, lineHeight: 1.7, margin: 0, fontFamily: "'SF Pro Text', -apple-system, sans-serif" }}>
            Lord, be with these young hearts as they navigate the challenges of growing up in a complex world. Grant them courage when they feel uncertain, wisdom when they face difficult choices, and the unwavering knowledge that they are deeply loved.
          </p>
          <p style={{ fontSize: 13, color: COLORS.text, lineHeight: 1.7, margin: "10px 0 0", fontFamily: "'SF Pro Text', -apple-system, sans-serif" }}>
            Guide their steps this week. Let them feel Your presence in every classroom, every conversation, and every quiet moment...
          </p>
        </div>
      </div>
    </div>
    <TabBar tabs={NEW_TABS} active="My Flock" />
  </PhoneFrame>
);

// Screen 5: Leader manage view
const FlockLeaderView = () => (
  <PhoneFrame title="Leader view: Manage My Flock (Prayer Warrior tier)">
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "8px 16px 4px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
          <h1 style={{ fontSize: 26, fontWeight: 700, margin: 0, color: COLORS.text, fontFamily: "'SF Pro Display', -apple-system, sans-serif" }}>My Flock</h1>
          <div style={{ display: "flex", gap: 6 }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: COLORS.segmentBg, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: 14 }}>📷</span>
            </div>
          </div>
        </div>
        <SegmentedControl options={["Prayer Content", "Manage My Flock"]} active="Manage My Flock" onSelect={() => {}} />
      </div>
      <div style={{ flex: 1, overflow: "auto", padding: "10px 16px" }}>
        {/* Stats */}
        <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
          <div style={{ flex: 1, background: COLORS.card, borderRadius: 12, padding: "10px 12px", textAlign: "center" }}>
            <p style={{ fontSize: 22, fontWeight: 700, color: COLORS.accent, margin: 0, fontFamily: "'SF Pro Display', -apple-system, sans-serif" }}>47</p>
            <p style={{ fontSize: 10, color: COLORS.textSecondary, margin: 0, fontFamily: "'SF Pro Text', -apple-system, sans-serif" }}>Followers</p>
          </div>
          <div style={{ flex: 1, background: COLORS.card, borderRadius: 12, padding: "10px 12px", textAlign: "center" }}>
            <p style={{ fontSize: 22, fontWeight: 700, color: COLORS.prayerWarrior, margin: 0, fontFamily: "'SF Pro Display', -apple-system, sans-serif" }}>12</p>
            <p style={{ fontSize: 10, color: COLORS.textSecondary, margin: 0, fontFamily: "'SF Pro Text', -apple-system, sans-serif" }}>Published</p>
          </div>
        </div>
        {/* Actions */}
        <div style={{ background: COLORS.card, borderRadius: 12, overflow: "hidden", marginBottom: 12 }}>
          {[
            { icon: "✍️", label: "Create New Prayer", sub: "Write or AI-generate" },
            { icon: "🔊", label: "Select Voice", sub: "Azure Neural · Fish Audio" },
            { icon: "📱", label: "Show My QR Code", sub: "Let members scan to join" },
          ].map((item, i) => (
            <div key={i} style={{ padding: "12px 14px", borderBottom: i < 2 ? `0.5px solid ${COLORS.separator}` : "none", display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 18 }}>{item.icon}</span>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: 14, fontWeight: 600, color: COLORS.text, margin: 0, fontFamily: "'SF Pro Text', -apple-system, sans-serif" }}>{item.label}</p>
                <p style={{ fontSize: 10, color: COLORS.textSecondary, margin: 0, fontFamily: "'SF Pro Text', -apple-system, sans-serif" }}>{item.sub}</p>
              </div>
              <span style={{ color: COLORS.separator, fontSize: 16 }}>›</span>
            </div>
          ))}
        </div>
        {/* Published prayers */}
        <p style={{ fontSize: 12, fontWeight: 600, color: COLORS.textSecondary, margin: "0 0 6px", fontFamily: "'SF Pro Text', -apple-system, sans-serif", textTransform: "uppercase", letterSpacing: 0.5 }}>Published Prayers</p>
        <div style={{ background: COLORS.card, borderRadius: 12, overflow: "hidden" }}>
          {[
            { title: "Wednesday Youth Prayer", date: "2 hrs ago", listeners: 23 },
            { title: "Sunday Blessing", date: "4 days ago", listeners: 41 },
          ].map((item, i) => (
            <div key={i} style={{ padding: "10px 14px", borderBottom: i < 1 ? `0.5px solid ${COLORS.separator}` : "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <p style={{ fontSize: 13, fontWeight: 600, color: COLORS.text, margin: "0 0 2px", fontFamily: "'SF Pro Text', -apple-system, sans-serif" }}>{item.title}</p>
                <p style={{ fontSize: 10, color: COLORS.textSecondary, margin: 0, fontFamily: "'SF Pro Text', -apple-system, sans-serif" }}>{item.date} · {item.listeners} listens</p>
              </div>
              <span style={{ color: COLORS.separator, fontSize: 16 }}>›</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    <TabBar tabs={NEW_TABS} active="My Flock" />
  </PhoneFrame>
);

// Screen 6: QR Code screen
const QRCodeScreen = () => (
  <PhoneFrame title="Leader displays QR code for members to scan">
    <div style={{ flex: 1, display: "flex", flexDirection: "column", background: COLORS.qrBg }}>
      <div style={{ padding: "12px 16px", display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ fontSize: 14, color: COLORS.accent, fontFamily: "'SF Pro Text', -apple-system, sans-serif", cursor: "pointer" }}>‹ Back</span>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 30px" }}>
        <div style={{ width: 56, height: 56, borderRadius: 28, background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
          <span style={{ fontSize: 24, color: "white" }}>✝</span>
        </div>
        <p style={{ fontSize: 18, fontWeight: 700, color: "white", margin: "0 0 4px", fontFamily: "'SF Pro Display', -apple-system, sans-serif" }}>Pastor David</p>
        <p style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", margin: "0 0 20px", fontFamily: "'SF Pro Text', -apple-system, sans-serif" }}>Scan to join my flock</p>
        {/* QR Code placeholder */}
        <div style={{ width: 160, height: 160, background: "white", borderRadius: 16, padding: 12, marginBottom: 20 }}>
          <div style={{ width: "100%", height: "100%", borderRadius: 8, display: "grid", gridTemplateColumns: "repeat(8, 1fr)", gridTemplateRows: "repeat(8, 1fr)", gap: 2 }}>
            {Array.from({ length: 64 }).map((_, i) => (
              <div
                key={i}
                style={{
                  background: [0,1,2,5,6,7,8,15,16,23,24,31,35,36,37,38,40,42,44,46,48,50,52,54,56,57,58,61,62,63].includes(i)
                    ? "#1C1C1E"
                    : "white",
                  borderRadius: 1,
                }}
              />
            ))}
          </div>
        </div>
        <p style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", margin: 0, fontFamily: "'SF Pro Text', -apple-system, sans-serif", textAlign: "center" }}>Show this at service, youth group, or Bible study</p>
      </div>
    </div>
  </PhoneFrame>
);

export default function FlockMockups() {
  const [page, setPage] = useState(0);

  const screens = [
    { component: <CurrentScreen />, label: "Current App" },
    { component: <NewMyPrayers />, label: "New My Prayers" },
    { component: <FlockMemberView />, label: "Member Feed" },
    { component: <PrayerDetail />, label: "Prayer Detail" },
    { component: <FlockLeaderView />, label: "Leader Manage" },
    { component: <QRCodeScreen />, label: "QR Code" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #0f0c29 0%, #1a1a3e 40%, #24243e 100%)", padding: "32px 16px", fontFamily: "'SF Pro Text', -apple-system, sans-serif" }}>
      <div style={{ textAlign: "center", marginBottom: 28 }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, color: "white", margin: "0 0 6px", fontFamily: "'SF Pro Display', -apple-system, sans-serif" }}>
          My Flock — Screen Mockups
        </h1>
        <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", margin: 0 }}>
          Tap below to navigate through the flow
        </p>
      </div>

      {/* Navigation pills */}
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 6, marginBottom: 28, maxWidth: 600, margin: "0 auto 28px" }}>
        {screens.map((s, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            style={{
              padding: "6px 14px",
              borderRadius: 20,
              border: page === i ? "1.5px solid rgba(255,255,255,0.6)" : "1px solid rgba(255,255,255,0.15)",
              background: page === i ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.04)",
              color: page === i ? "white" : "rgba(255,255,255,0.5)",
              fontSize: 12,
              fontWeight: page === i ? 600 : 400,
              cursor: "pointer",
              fontFamily: "'SF Pro Text', -apple-system, sans-serif",
              transition: "all 0.2s ease",
            }}
          >
            {i + 1}. {s.label}
          </button>
        ))}
      </div>

      {/* Phone display */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        {screens[page].component}
      </div>

      {/* Arrow nav */}
      <div style={{ display: "flex", justifyContent: "center", gap: 16, marginTop: 20 }}>
        <button
          onClick={() => setPage((p) => Math.max(0, p - 1))}
          disabled={page === 0}
          style={{
            width: 40, height: 40, borderRadius: 20,
            border: "1px solid rgba(255,255,255,0.2)",
            background: page === 0 ? "transparent" : "rgba(255,255,255,0.08)",
            color: page === 0 ? "rgba(255,255,255,0.2)" : "white",
            fontSize: 16, cursor: page === 0 ? "default" : "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >
          ‹
        </button>
        <button
          onClick={() => setPage((p) => Math.min(screens.length - 1, p + 1))}
          disabled={page === screens.length - 1}
          style={{
            width: 40, height: 40, borderRadius: 20,
            border: "1px solid rgba(255,255,255,0.2)",
            background: page === screens.length - 1 ? "transparent" : "rgba(255,255,255,0.08)",
            color: page === screens.length - 1 ? "rgba(255,255,255,0.2)" : "white",
            fontSize: 16, cursor: page === screens.length - 1 ? "default" : "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >
          ›
        </button>
      </div>
    </div>
  );
}