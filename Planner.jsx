'use client';

import React, { useState, useEffect } from 'react';

const DEFAULT_DATA = {
  dimensions: [
    {
      id: 'career',
      title: '工作與專業',
      subtitle: 'Work & Career',
      icon: '🏗️',
      color: '#2C3E50',
      accent: '#3498DB',
      goals: [
        {
          id: 'c1',
          text: '順利推進「天北天空塔A7案」里程碑，鞏固建築與不動產界影響力',
          progress: 0,
          isMainGoal: true
        }
      ],
      actions: [
        { id: 'ca1', text: '每月與開發團隊進行「AI導入建築流程」實驗性導入評估', completed: false, quarter: 'Q1-Q4' },
        { id: 'ca2', text: '履行台北市不動產開發公會委員職責，推動產業AI化提案', completed: false, quarter: 'Q1-Q4' }
      ]
    },
    {
      id: 'education',
      title: '學術進修',
      subtitle: 'Education - 雙軌併行',
      icon: '🎓',
      color: '#1A5276',
      accent: '#5DADE2',
      goals: [
        {
          id: 'e1',
          text: '台大土木系AI組博士班 (2026/04 考試)',
          progress: 0,
          isMainGoal: true,
          deadline: '2026-04-30'
        },
        {
          id: 'e2',
          text: '比利時國立列日大學 EMBA (2026/07 畢業)',
          progress: 0,
          isMainGoal: true,
          deadline: '2026-07-31'
        }
      ],
      actions: [
        { id: 'ea1', text: 'Q1 衝刺：每週10小時複習「營建管理+AI應用」研究計畫', completed: false, quarter: 'Q1' },
        { id: 'ea2', text: '對標指導教授研究方向，準備研究計畫書', completed: false, quarter: 'Q1' },
        { id: 'ea3', text: 'Q2 論文：整合AI技術顧問公司創業模型作為畢業論文', completed: false, quarter: 'Q2' },
        { id: 'ea4', text: '確保7月高分畢業', completed: false, quarter: 'Q2' }
      ]
    },
    {
      id: 'startup',
      title: '創業規劃',
      subtitle: 'Startups - AI 雙引擎',
      icon: '🚀',
      color: '#7D3C98',
      accent: '#AF7AC5',
      goals: [
        {
          id: 's1',
          text: 'AI-YouTube 個人創業：「建築師的AI生活/工作美學」',
          progress: 0,
          isMainGoal: true,
          target: '2026年底達 1萬訂閱'
        },
        {
          id: 's2',
          text: 'AI 技術顧問公司：建築開發與AI轉型SOP',
          progress: 0,
          isMainGoal: true
        }
      ],
      actions: [
        { id: 'sa1', text: '建立YouTube頻道品牌識別與內容策略', completed: false, quarter: 'Q1' },
        { id: 'sa2', text: '每週發布1-2支影片，累積內容資產', completed: false, quarter: 'Q1-Q4' },
        { id: 'sa3', text: 'Q3 進行首波法人客戶開發', completed: false, quarter: 'Q3' }
      ]
    },
    {
      id: 'wealth',
      title: '理財策略',
      subtitle: 'Wealth Management',
      icon: '💰',
      color: '#196F3D',
      accent: '#58D68D',
      goals: [
        {
          id: 'w1',
          text: '優化資產配置，建立被動收入系統',
          progress: 0,
          isMainGoal: true
        }
      ],
      actions: [
        { id: 'wa1', text: '與太太 Remy 定期舉行「家庭財務週報」', completed: false, quarter: 'Q1-Q4' },
        { id: 'wa2', text: '評估新光不動產與自營項目的投報率', completed: false, quarter: 'Q1-Q4' }
      ]
    },
    {
      id: 'family',
      title: '家庭生活',
      subtitle: 'Family',
      icon: '👨‍👩‍👦',
      color: '#B9770E',
      accent: '#F5B041',
      goals: [
        {
          id: 'f1',
          text: '與13歲的 Joseph（青春期）建立深層連結',
          progress: 0,
          isMainGoal: true
        }
      ],
      actions: [
        { id: 'fa1', text: '每月一次「父子冒險日」', completed: false, quarter: 'Q1-Q4' },
        { id: 'fa2', text: '支持太太 Remy 估價事務所數位化轉型', completed: false, quarter: 'Q1-Q4' }
      ]
    },
    {
      id: 'health',
      title: '健身與健康',
      subtitle: 'Fitness & Health',
      icon: '💪',
      color: '#922B21',
      accent: '#E74C3C',
      goals: [
        {
          id: 'h1',
          text: '體脂率控制在 20% 以下',
          progress: 0,
          isMainGoal: true
        },
        {
          id: 'h2',
          text: '維持高強度工作的體力',
          progress: 0,
          isMainGoal: true
        }
      ],
      actions: [
        { id: 'ha1', text: '每週 3 次重量訓練（深蹲與硬舉）', completed: false, quarter: 'Q1-Q4' },
        { id: 'ha2', text: '維持50歲骨密度與肌肉量', completed: false, quarter: 'Q1-Q4' },
        { id: 'ha3', text: '每日 20 分鐘冥想緩解多重職務壓力', completed: false, quarter: 'Q1-Q4' }
      ]
    }
  ],
  projects: [
    { id: 'p1', name: '天北天空塔A7案', description: 'Park Hyatt Taipei (2027/04) & Andaz Taipei (2027/11) 雙品牌酒店開發', status: '進行中', progress: 30, quarter: 'Q1-Q4', priority: 'high' },
    { id: 'p2', name: 'AI鋼構數量分析系統', description: '開發建築業AI估價與數量分析工具', status: '開發中', progress: 50, quarter: 'Q1-Q2', priority: 'high' },
    { id: 'p3', name: 'EMBA畢業論文', description: 'AI技術顧問公司創業模型研究', status: '撰寫中', progress: 20, quarter: 'Q2', priority: 'high' },
    { id: 'p4', name: 'YouTube頻道建立', description: '建築師的AI生活/工作美學頻道', status: '規劃中', progress: 10, quarter: 'Q1', priority: 'medium' }
  ],
  skills: [
    { id: 'sk1', name: 'AI Prompt Engineering', category: '人工智慧', level: '進階', progress: 70, resources: 'Claude, GPT-4, Midjourney' },
    { id: 'sk2', name: 'AI影片生成', category: '人工智慧', level: '中階', progress: 50, resources: 'Kling, Runway, Pika' },
    { id: 'sk3', name: '機器學習基礎', category: '人工智慧', level: '入門', progress: 20, resources: 'Python, TensorFlow' },
    { id: 'sk4', name: 'BIM + AI整合', category: '建築科技', level: '中階', progress: 40, resources: 'Revit, Dynamo' },
    { id: 'sk5', name: '營建管理AI應用', category: '建築科技', level: '研究中', progress: 30, resources: '博士班研究方向' }
  ],
  books: [
    { id: 'b1', title: 'AI 2041', author: '李開復、陳楸帆', category: 'AI趨勢', status: '待讀', progress: 0, notes: '' },
    { id: 'b2', title: 'The Lean Startup', author: 'Eric Ries', category: '創業', status: '待讀', progress: 0, notes: '' },
    { id: 'b3', title: '原子習慣', author: 'James Clear', category: '自我成長', status: '已讀', progress: 100, notes: '習慣堆疊、1%進步' },
    { id: 'b4', title: 'Deep Work', author: 'Cal Newport', category: '生產力', status: '閱讀中', progress: 40, notes: '' },
    { id: 'b5', title: '建築的法則', author: '馬修乐乐克', category: '建築專業', status: '待讀', progress: 0, notes: '' }
  ],
  notes: '',
  lastUpdated: new Date().toISOString()
};

// Storage key
const STORAGE_KEY = 'sean-2026-planner-data';

export default function Planner() {
  const [data, setData] = useState(null);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showAddAction, setShowAddAction] = useState(null);
  const [newActionText, setNewActionText] = useState('');
  const [newActionQuarter, setNewActionQuarter] = useState('Q1');
  const [isSaving, setIsSaving] = useState(false);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      try {
        setData(JSON.parse(savedData));
      } catch (e) {
        setData(DEFAULT_DATA);
      }
    } else {
      setData(DEFAULT_DATA);
    }
  }, []);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    if (data) {
      setIsSaving(true);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      const timer = setTimeout(() => setIsSaving(false), 500);
      return () => clearTimeout(timer);
    }
  }, [data]);

  // Don't render until data is loaded
  if (!data) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        color: '#E8E8E8'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>🚀</div>
          <div style={{ fontSize: 18 }}>載入中...</div>
        </div>
      </div>
    );
  }

  // Dimension functions
  const updateProgress = (dimId, goalId, value) => {
    setData(prev => ({
      ...prev,
      dimensions: prev.dimensions.map(dim =>
        dim.id === dimId
          ? {
              ...dim,
              goals: dim.goals.map(goal =>
                goal.id === goalId ? { ...goal, progress: parseInt(value) || 0 } : goal
              )
            }
          : dim
      ),
      lastUpdated: new Date().toISOString()
    }));
  };

  const toggleAction = (dimId, actionId) => {
    setData(prev => ({
      ...prev,
      dimensions: prev.dimensions.map(dim =>
        dim.id === dimId
          ? {
              ...dim,
              actions: dim.actions.map(action =>
                action.id === actionId ? { ...action, completed: !action.completed } : action
              )
            }
          : dim
      ),
      lastUpdated: new Date().toISOString()
    }));
  };

  const addAction = (dimId) => {
    if (!newActionText.trim()) return;
    setData(prev => ({
      ...prev,
      dimensions: prev.dimensions.map(dim =>
        dim.id === dimId
          ? {
              ...dim,
              actions: [
                ...dim.actions,
                {
                  id: `${dimId}_${Date.now()}`,
                  text: newActionText,
                  completed: false,
                  quarter: newActionQuarter
                }
              ]
            }
          : dim
      ),
      lastUpdated: new Date().toISOString()
    }));
    setNewActionText('');
    setShowAddAction(null);
  };

  const removeAction = (dimId, actionId) => {
    setData(prev => ({
      ...prev,
      dimensions: prev.dimensions.map(dim =>
        dim.id === dimId
          ? { ...dim, actions: dim.actions.filter(a => a.id !== actionId) }
          : dim
      ),
      lastUpdated: new Date().toISOString()
    }));
  };

  const updateGoalText = (dimId, goalId, newText) => {
    setData(prev => ({
      ...prev,
      dimensions: prev.dimensions.map(dim =>
        dim.id === dimId
          ? {
              ...dim,
              goals: dim.goals.map(goal =>
                goal.id === goalId ? { ...goal, text: newText } : goal
              )
            }
          : dim
      ),
      lastUpdated: new Date().toISOString()
    }));
  };

  const updateActionText = (dimId, actionId, newText) => {
    setData(prev => ({
      ...prev,
      dimensions: prev.dimensions.map(dim =>
        dim.id === dimId
          ? {
              ...dim,
              actions: dim.actions.map(action =>
                action.id === actionId ? { ...action, text: newText } : action
              )
            }
          : dim
      ),
      lastUpdated: new Date().toISOString()
    }));
  };

  const updateActionQuarter = (dimId, actionId, newQuarter) => {
    setData(prev => ({
      ...prev,
      dimensions: prev.dimensions.map(dim =>
        dim.id === dimId
          ? {
              ...dim,
              actions: dim.actions.map(action =>
                action.id === actionId ? { ...action, quarter: newQuarter } : action
              )
            }
          : dim
      ),
      lastUpdated: new Date().toISOString()
    }));
  };

  // Project functions
  const updateProject = (projectId, field, value) => {
    setData(prev => ({
      ...prev,
      projects: prev.projects.map(p =>
        p.id === projectId ? { ...p, [field]: field === 'progress' ? (parseInt(value) || 0) : value } : p
      ),
      lastUpdated: new Date().toISOString()
    }));
  };

  const addProject = () => {
    setData(prev => ({
      ...prev,
      projects: [...prev.projects, {
        id: `p_${Date.now()}`,
        name: '新專案',
        description: '專案描述',
        status: '規劃中',
        progress: 0,
        quarter: 'Q1',
        priority: 'medium'
      }],
      lastUpdated: new Date().toISOString()
    }));
  };

  const removeProject = (projectId) => {
    setData(prev => ({
      ...prev,
      projects: prev.projects.filter(p => p.id !== projectId),
      lastUpdated: new Date().toISOString()
    }));
  };

  // Skill functions
  const updateSkill = (skillId, field, value) => {
    setData(prev => ({
      ...prev,
      skills: prev.skills.map(s =>
        s.id === skillId ? { ...s, [field]: field === 'progress' ? (parseInt(value) || 0) : value } : s
      ),
      lastUpdated: new Date().toISOString()
    }));
  };

  const addSkill = () => {
    setData(prev => ({
      ...prev,
      skills: [...prev.skills, {
        id: `sk_${Date.now()}`,
        name: '新技術',
        category: '其他',
        level: '入門',
        progress: 0,
        resources: ''
      }],
      lastUpdated: new Date().toISOString()
    }));
  };

  const removeSkill = (skillId) => {
    setData(prev => ({
      ...prev,
      skills: prev.skills.filter(s => s.id !== skillId),
      lastUpdated: new Date().toISOString()
    }));
  };

  // Book functions
  const updateBook = (bookId, field, value) => {
    setData(prev => ({
      ...prev,
      books: prev.books.map(b =>
        b.id === bookId ? { ...b, [field]: field === 'progress' ? (parseInt(value) || 0) : value } : b
      ),
      lastUpdated: new Date().toISOString()
    }));
  };

  const addBook = () => {
    setData(prev => ({
      ...prev,
      books: [...prev.books, {
        id: `b_${Date.now()}`,
        title: '新書籍',
        author: '作者',
        category: '其他',
        status: '待讀',
        progress: 0,
        notes: ''
      }],
      lastUpdated: new Date().toISOString()
    }));
  };

  const removeBook = (bookId) => {
    setData(prev => ({
      ...prev,
      books: prev.books.filter(b => b.id !== bookId),
      lastUpdated: new Date().toISOString()
    }));
  };

  // Reset data
  const resetData = () => {
    if (window.confirm('確定要重置所有資料嗎？此操作無法復原。')) {
      setData({ ...DEFAULT_DATA, lastUpdated: new Date().toISOString() });
    }
  };

  // Export data
  const exportData = () => {
    const dataStr = JSON.stringify(data, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `sean-2026-planner-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Import data
  const importData = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const importedData = JSON.parse(event.target.result);
          setData({ ...importedData, lastUpdated: new Date().toISOString() });
          alert('資料匯入成功！');
        } catch (err) {
          alert('匯入失敗：檔案格式錯誤');
        }
      };
      reader.readAsText(file);
    }
  };

  // Stats
  const getOverallProgress = () => {
    const allGoals = data.dimensions.flatMap(d => d.goals);
    if (allGoals.length === 0) return 0;
    return Math.round(allGoals.reduce((sum, g) => sum + g.progress, 0) / allGoals.length);
  };

  const getCompletedActions = () => {
    return data.dimensions.flatMap(d => d.actions).filter(a => a.completed).length;
  };

  const getTotalActions = () => {
    return data.dimensions.flatMap(d => d.actions).length;
  };

  const getCurrentQuarter = () => {
    const month = new Date().getMonth() + 1;
    if (month <= 3) return 'Q1';
    if (month <= 6) return 'Q2';
    if (month <= 9) return 'Q3';
    return 'Q4';
  };

  const inputStyle = {
    width: '100%',
    padding: '8px 12px',
    background: 'rgba(255,255,255,0.08)',
    border: '1px solid rgba(255,255,255,0.15)',
    borderRadius: 6,
    color: '#E2E8F0',
    fontSize: 13,
    outline: 'none'
  };

  const selectStyle = {
    ...inputStyle,
    cursor: 'pointer'
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      fontFamily: "'Noto Sans TC', 'SF Pro Display', -apple-system, sans-serif",
      color: '#E8E8E8',
      padding: '0'
    }}>
      {/* Header */}
      <header style={{
        background: 'rgba(255,255,255,0.03)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        padding: '16px 24px',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <div>
            <h1 style={{
              fontSize: 24,
              fontWeight: 700,
              margin: 0,
              background: 'linear-gradient(135deg, #F8F9FA 0%, #94A3B8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              2026 生涯藍圖
            </h1>
            <p style={{ margin: '4px 0 0', fontSize: 12, color: '#64748B', display: 'flex', alignItems: 'center', gap: 8 }}>
              SEAN HSIEH · 建築師 · 創業家 · 終身學習者
              {isSaving && <span style={{ color: '#22C55E' }}>● 已儲存</span>}
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
            <div style={{
              background: 'rgba(99, 102, 241, 0.15)',
              padding: '6px 12px',
              borderRadius: 10,
              border: '1px solid rgba(99, 102, 241, 0.3)'
            }}>
              <span style={{ fontSize: 11, color: '#818CF8' }}>進度 </span>
              <span style={{ fontSize: 16, fontWeight: 700, color: '#A5B4FC' }}>{getOverallProgress()}%</span>
            </div>
            <div style={{
              background: 'rgba(34, 197, 94, 0.15)',
              padding: '6px 12px',
              borderRadius: 10,
              border: '1px solid rgba(34, 197, 94, 0.3)'
            }}>
              <span style={{ fontSize: 11, color: '#4ADE80' }}>行動 </span>
              <span style={{ fontSize: 16, fontWeight: 700, color: '#86EFAC' }}>{getCompletedActions()}/{getTotalActions()}</span>
            </div>
            <div style={{
              background: 'rgba(251, 146, 60, 0.15)',
              padding: '6px 12px',
              borderRadius: 10,
              border: '1px solid rgba(251, 146, 60, 0.3)'
            }}>
              <span style={{ fontSize: 11, color: '#FB923C' }}>專案 </span>
              <span style={{ fontSize: 16, fontWeight: 700, color: '#FDBA74' }}>{data.projects.length}</span>
            </div>
            <div style={{
              background: 'rgba(168, 85, 247, 0.15)',
              padding: '6px 12px',
              borderRadius: 10,
              border: '1px solid rgba(168, 85, 247, 0.3)'
            }}>
              <span style={{ fontSize: 11, color: '#A855F7' }}>書籍 </span>
              <span style={{ fontSize: 16, fontWeight: 700, color: '#C4B5FD' }}>{data.books.filter(b => b.status === '已讀').length}/{data.books.length}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav style={{
        background: 'rgba(255,255,255,0.02)',
        padding: '0 24px',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        overflowX: 'auto'
      }}>
        <div style={{ display: 'flex', gap: 0, minWidth: 'max-content' }}>
          {[
            { id: 'dashboard', label: '📊 總覽' },
            { id: 'projects', label: '🎯 執行專案' },
            { id: 'skills', label: '🧠 學習成長' },
            { id: 'books', label: '📚 書籍閱讀' },
            { id: 'timeline', label: '📅 時間軸' },
            { id: 'details', label: '📝 詳細規劃' },
            { id: 'settings', label: '⚙️ 設定' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '14px 18px',
                background: activeTab === tab.id ? 'rgba(99, 102, 241, 0.15)' : 'transparent',
                border: 'none',
                borderBottom: activeTab === tab.id ? '2px solid #818CF8' : '2px solid transparent',
                color: activeTab === tab.id ? '#A5B4FC' : '#64748B',
                fontSize: 13,
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main style={{ padding: '24px', maxWidth: 1400, margin: '0 auto' }}>
        
        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 20 }}>
            {data.dimensions.map(dim => {
              const dimProgress = dim.goals.length > 0
                ? Math.round(dim.goals.reduce((s, g) => s + g.progress, 0) / dim.goals.length)
                : 0;
              const completedActions = dim.actions.filter(a => a.completed).length;

              return (
                <div
                  key={dim.id}
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    borderRadius: 16,
                    padding: 20,
                    border: '1px solid rgba(255,255,255,0.08)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    background: `linear-gradient(90deg, ${dim.color}, ${dim.accent})`
                  }} />

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                    <div>
                      <span style={{ fontSize: 28 }}>{dim.icon}</span>
                      <h3 style={{ margin: '6px 0 0', fontSize: 16, fontWeight: 600, color: '#F1F5F9' }}>
                        {dim.title}
                      </h3>
                      <p style={{ margin: '2px 0 0', fontSize: 11, color: '#64748B' }}>{dim.subtitle}</p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: 24, fontWeight: 700, color: dim.accent }}>{dimProgress}%</div>
                      <div style={{ fontSize: 10, color: '#64748B' }}>{completedActions}/{dim.actions.length} 行動</div>
                    </div>
                  </div>

                  <div style={{
                    height: 5,
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: 3,
                    overflow: 'hidden',
                    marginBottom: 12
                  }}>
                    <div style={{
                      height: '100%',
                      width: `${dimProgress}%`,
                      background: `linear-gradient(90deg, ${dim.color}, ${dim.accent})`,
                      borderRadius: 3,
                      transition: 'width 0.5s ease'
                    }} />
                  </div>

                  {dim.goals.slice(0, 2).map(goal => (
                    <div key={goal.id} style={{
                      background: 'rgba(255,255,255,0.05)',
                      borderRadius: 8,
                      padding: 10,
                      marginBottom: 6,
                      fontSize: 12,
                      color: '#CBD5E1'
                    }}>
                      🎯 {goal.text.length > 40 ? goal.text.substring(0, 40) + '...' : goal.text}
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        )}

        {/* Projects Tab */}
        {activeTab === 'projects' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <h2 style={{ fontSize: 20, fontWeight: 600, color: '#F1F5F9', margin: 0 }}>
                🎯 2026 執行專案
              </h2>
              <button
                onClick={addProject}
                style={{
                  padding: '10px 20px',
                  background: 'linear-gradient(135deg, #3B82F6, #2563EB)',
                  border: 'none',
                  borderRadius: 10,
                  color: 'white',
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                + 新增專案
              </button>
            </div>

            <div style={{ display: 'grid', gap: 16 }}>
              {data.projects.map(project => (
                <div
                  key={project.id}
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    borderRadius: 14,
                    padding: 20,
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderLeft: `4px solid ${project.priority === 'high' ? '#EF4444' : project.priority === 'medium' ? '#F59E0B' : '#22C55E'}`
                  }}
                >
                  <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr auto', gap: 16, alignItems: 'start' }}>
                    <div>
                      <input
                        type="text"
                        value={project.name}
                        onChange={(e) => updateProject(project.id, 'name', e.target.value)}
                        style={{ ...inputStyle, fontSize: 15, fontWeight: 600, marginBottom: 8 }}
                      />
                      <textarea
                        value={project.description}
                        onChange={(e) => updateProject(project.id, 'description', e.target.value)}
                        style={{ ...inputStyle, resize: 'none', height: 50 }}
                        rows={2}
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: 10, color: '#64748B', display: 'block', marginBottom: 4 }}>狀態</label>
                      <select
                        value={project.status}
                        onChange={(e) => updateProject(project.id, 'status', e.target.value)}
                        style={selectStyle}
                      >
                        <option value="規劃中">規劃中</option>
                        <option value="開發中">開發中</option>
                        <option value="進行中">進行中</option>
                        <option value="撰寫中">撰寫中</option>
                        <option value="測試中">測試中</option>
                        <option value="已完成">已完成</option>
                        <option value="暫停">暫停</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ fontSize: 10, color: '#64748B', display: 'block', marginBottom: 4 }}>季度</label>
                      <select
                        value={project.quarter}
                        onChange={(e) => updateProject(project.id, 'quarter', e.target.value)}
                        style={selectStyle}
                      >
                        <option value="Q1">Q1</option>
                        <option value="Q2">Q2</option>
                        <option value="Q3">Q3</option>
                        <option value="Q4">Q4</option>
                        <option value="Q1-Q2">Q1-Q2</option>
                        <option value="Q3-Q4">Q3-Q4</option>
                        <option value="Q1-Q4">全年</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ fontSize: 10, color: '#64748B', display: 'block', marginBottom: 4 }}>優先級</label>
                      <select
                        value={project.priority}
                        onChange={(e) => updateProject(project.id, 'priority', e.target.value)}
                        style={selectStyle}
                      >
                        <option value="high">🔴 高</option>
                        <option value="medium">🟡 中</option>
                        <option value="low">🟢 低</option>
                      </select>
                    </div>
                    <button
                      onClick={() => removeProject(project.id)}
                      style={{
                        padding: '8px 12px',
                        background: 'rgba(239, 68, 68, 0.2)',
                        border: 'none',
                        borderRadius: 6,
                        color: '#F87171',
                        fontSize: 12,
                        cursor: 'pointer'
                      }}
                    >
                      刪除
                    </button>
                  </div>
                  <div style={{ marginTop: 16 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <span style={{ fontSize: 11, color: '#64748B' }}>進度</span>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={project.progress}
                        onChange={(e) => updateProject(project.id, 'progress', e.target.value)}
                        style={{ flex: 1, accentColor: '#3B82F6' }}
                      />
                      <input
                        type="number"
                        min="0"
                        max="100"
                        value={project.progress}
                        onChange={(e) => updateProject(project.id, 'progress', Math.min(100, Math.max(0, e.target.value)))}
                        style={{ ...inputStyle, width: 60, textAlign: 'center' }}
                      />
                      <span style={{ color: '#64748B', fontSize: 12 }}>%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills Tab */}
        {activeTab === 'skills' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <h2 style={{ fontSize: 20, fontWeight: 600, color: '#F1F5F9', margin: 0 }}>
                🧠 學習成長技術
              </h2>
              <button
                onClick={addSkill}
                style={{
                  padding: '10px 20px',
                  background: 'linear-gradient(135deg, #8B5CF6, #7C3AED)',
                  border: 'none',
                  borderRadius: 10,
                  color: 'white',
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                + 新增技術
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 16 }}>
              {data.skills.map(skill => (
                <div
                  key={skill.id}
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    borderRadius: 14,
                    padding: 20,
                    border: '1px solid rgba(255,255,255,0.08)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: 12 }}>
                    <input
                      type="text"
                      value={skill.name}
                      onChange={(e) => updateSkill(skill.id, 'name', e.target.value)}
                      style={{ ...inputStyle, fontSize: 15, fontWeight: 600, flex: 1, marginRight: 10 }}
                    />
                    <button
                      onClick={() => removeSkill(skill.id)}
                      style={{
                        padding: '6px 10px',
                        background: 'rgba(239, 68, 68, 0.2)',
                        border: 'none',
                        borderRadius: 6,
                        color: '#F87171',
                        fontSize: 11,
                        cursor: 'pointer'
                      }}
                    >
                      刪除
                    </button>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 12 }}>
                    <div>
                      <label style={{ fontSize: 10, color: '#64748B', display: 'block', marginBottom: 4 }}>類別</label>
                      <select
                        value={skill.category}
                        onChange={(e) => updateSkill(skill.id, 'category', e.target.value)}
                        style={selectStyle}
                      >
                        <option value="人工智慧">人工智慧</option>
                        <option value="建築科技">建築科技</option>
                        <option value="程式開發">程式開發</option>
                        <option value="商業管理">商業管理</option>
                        <option value="其他">其他</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ fontSize: 10, color: '#64748B', display: 'block', marginBottom: 4 }}>程度</label>
                      <select
                        value={skill.level}
                        onChange={(e) => updateSkill(skill.id, 'level', e.target.value)}
                        style={selectStyle}
                      >
                        <option value="入門">入門</option>
                        <option value="中階">中階</option>
                        <option value="進階">進階</option>
                        <option value="專家">專家</option>
                        <option value="研究中">研究中</option>
                      </select>
                    </div>
                  </div>

                  <div style={{ marginBottom: 12 }}>
                    <label style={{ fontSize: 10, color: '#64748B', display: 'block', marginBottom: 4 }}>學習資源</label>
                    <input
                      type="text"
                      value={skill.resources}
                      onChange={(e) => updateSkill(skill.id, 'resources', e.target.value)}
                      style={inputStyle}
                      placeholder="工具、課程、書籍..."
                    />
                  </div>

                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span style={{ fontSize: 11, color: '#64748B' }}>掌握度</span>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={skill.progress}
                        onChange={(e) => updateSkill(skill.id, 'progress', e.target.value)}
                        style={{ flex: 1, accentColor: '#8B5CF6' }}
                      />
                      <span style={{ fontSize: 13, color: '#A78BFA', fontWeight: 600, minWidth: 40 }}>
                        {skill.progress}%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Books Tab */}
        {activeTab === 'books' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <h2 style={{ fontSize: 20, fontWeight: 600, color: '#F1F5F9', margin: 0 }}>
                📚 書籍閱讀清單
              </h2>
              <button
                onClick={addBook}
                style={{
                  padding: '10px 20px',
                  background: 'linear-gradient(135deg, #10B981, #059669)',
                  border: 'none',
                  borderRadius: 10,
                  color: 'white',
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                + 新增書籍
              </button>
            </div>

            {/* Reading Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: 12,
              marginBottom: 24
            }}>
              {['待讀', '閱讀中', '已讀'].map(status => {
                const count = data.books.filter(b => b.status === status).length;
                const colors = {
                  '待讀': { bg: 'rgba(251, 146, 60, 0.15)', border: 'rgba(251, 146, 60, 0.3)', text: '#FB923C' },
                  '閱讀中': { bg: 'rgba(59, 130, 246, 0.15)', border: 'rgba(59, 130, 246, 0.3)', text: '#3B82F6' },
                  '已讀': { bg: 'rgba(34, 197, 94, 0.15)', border: 'rgba(34, 197, 94, 0.3)', text: '#22C55E' }
                };
                return (
                  <div key={status} style={{
                    background: colors[status].bg,
                    border: `1px solid ${colors[status].border}`,
                    borderRadius: 10,
                    padding: '12px 16px',
                    textAlign: 'center'
                  }}>
                    <div style={{ fontSize: 24, fontWeight: 700, color: colors[status].text }}>{count}</div>
                    <div style={{ fontSize: 12, color: '#94A3B8' }}>{status}</div>
                  </div>
                );
              })}
            </div>

            <div style={{ display: 'grid', gap: 14 }}>
              {data.books.map(book => (
                <div
                  key={book.id}
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    borderRadius: 14,
                    padding: 20,
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderLeft: `4px solid ${book.status === '已讀' ? '#22C55E' : book.status === '閱讀中' ? '#3B82F6' : '#64748B'}`
                  }}
                >
                  <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr auto', gap: 14, alignItems: 'start' }}>
                    <div>
                      <input
                        type="text"
                        value={book.title}
                        onChange={(e) => updateBook(book.id, 'title', e.target.value)}
                        style={{ ...inputStyle, fontSize: 15, fontWeight: 600, marginBottom: 6 }}
                        placeholder="書名"
                      />
                      <input
                        type="text"
                        value={book.author}
                        onChange={(e) => updateBook(book.id, 'author', e.target.value)}
                        style={{ ...inputStyle, fontSize: 12 }}
                        placeholder="作者"
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: 10, color: '#64748B', display: 'block', marginBottom: 4 }}>類別</label>
                      <select
                        value={book.category}
                        onChange={(e) => updateBook(book.id, 'category', e.target.value)}
                        style={selectStyle}
                      >
                        <option value="AI趨勢">AI趨勢</option>
                        <option value="創業">創業</option>
                        <option value="自我成長">自我成長</option>
                        <option value="生產力">生產力</option>
                        <option value="建築專業">建築專業</option>
                        <option value="商業策略">商業策略</option>
                        <option value="其他">其他</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ fontSize: 10, color: '#64748B', display: 'block', marginBottom: 4 }}>狀態</label>
                      <select
                        value={book.status}
                        onChange={(e) => updateBook(book.id, 'status', e.target.value)}
                        style={selectStyle}
                      >
                        <option value="待讀">待讀</option>
                        <option value="閱讀中">閱讀中</option>
                        <option value="已讀">已讀</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ fontSize: 10, color: '#64748B', display: 'block', marginBottom: 4 }}>進度</label>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <input
                          type="number"
                          min="0"
                          max="100"
                          value={book.progress}
                          onChange={(e) => updateBook(book.id, 'progress', Math.min(100, Math.max(0, e.target.value)))}
                          style={{ ...inputStyle, width: 50, textAlign: 'center' }}
                        />
                        <span style={{ color: '#64748B', fontSize: 12 }}>%</span>
                      </div>
                    </div>
                    <button
                      onClick={() => removeBook(book.id)}
                      style={{
                        padding: '8px 12px',
                        background: 'rgba(239, 68, 68, 0.2)',
                        border: 'none',
                        borderRadius: 6,
                        color: '#F87171',
                        fontSize: 12,
                        cursor: 'pointer'
                      }}
                    >
                      刪除
                    </button>
                  </div>
                  <div style={{ marginTop: 12 }}>
                    <label style={{ fontSize: 10, color: '#64748B', display: 'block', marginBottom: 4 }}>閱讀筆記</label>
                    <input
                      type="text"
                      value={book.notes}
                      onChange={(e) => updateBook(book.id, 'notes', e.target.value)}
                      style={inputStyle}
                      placeholder="重點摘要、心得..."
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Timeline Tab */}
        {activeTab === 'timeline' && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 20, color: '#F1F5F9' }}>
              📅 2026 年度季度時間軸
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
              {['Q1', 'Q2', 'Q3', 'Q4'].map(quarter => {
                const isCurrentQuarter = getCurrentQuarter() === quarter;
                const quarterActions = data.dimensions.flatMap(dim =>
                  dim.actions.filter(a => a.quarter.includes(quarter)).map(a => ({ ...a, dimTitle: dim.title, dimIcon: dim.icon, dimAccent: dim.accent }))
                );
                const quarterProjects = data.projects.filter(p => p.quarter.includes(quarter));

                return (
                  <div
                    key={quarter}
                    style={{
                      background: isCurrentQuarter ? 'rgba(99, 102, 241, 0.1)' : 'rgba(255,255,255,0.03)',
                      borderRadius: 14,
                      padding: 18,
                      border: isCurrentQuarter ? '2px solid rgba(99, 102, 241, 0.5)' : '1px solid rgba(255,255,255,0.08)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                      <h3 style={{ fontSize: 18, fontWeight: 700, color: isCurrentQuarter ? '#A5B4FC' : '#94A3B8', margin: 0 }}>
                        {quarter}
                      </h3>
                      {isCurrentQuarter && (
                        <span style={{
                          background: '#818CF8',
                          color: '#1E1B4B',
                          padding: '3px 8px',
                          borderRadius: 10,
                          fontSize: 10,
                          fontWeight: 600
                        }}>
                          當前
                        </span>
                      )}
                    </div>

                    {quarterProjects.length > 0 && (
                      <div style={{ marginBottom: 12 }}>
                        <div style={{ fontSize: 10, color: '#64748B', marginBottom: 6, textTransform: 'uppercase' }}>專案</div>
                        {quarterProjects.map(p => (
                          <div key={p.id} style={{
                            background: 'rgba(59, 130, 246, 0.15)',
                            borderRadius: 6,
                            padding: 8,
                            marginBottom: 6,
                            fontSize: 12,
                            color: '#93C5FD'
                          }}>
                            🎯 {p.name}
                          </div>
                        ))}
                      </div>
                    )}

                    <div style={{ fontSize: 10, color: '#64748B', marginBottom: 6, textTransform: 'uppercase' }}>行動</div>
                    <div style={{ maxHeight: 200, overflowY: 'auto' }}>
                      {quarterActions.slice(0, 5).map(action => (
                        <div
                          key={action.id}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 8,
                            padding: '8px 0',
                            borderBottom: '1px solid rgba(255,255,255,0.05)',
                            fontSize: 12
                          }}
                        >
                          <span>{action.dimIcon}</span>
                          <span style={{
                            flex: 1,
                            color: action.completed ? '#64748B' : '#CBD5E1',
                            textDecoration: action.completed ? 'line-through' : 'none'
                          }}>
                            {action.text.length > 30 ? action.text.substring(0, 30) + '...' : action.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Details Tab */}
        {activeTab === 'details' && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 20, color: '#F1F5F9' }}>
              📝 六大維度詳細規劃
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {data.dimensions.map(dim => (
                <div
                  key={dim.id}
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    borderRadius: 14,
                    padding: 20,
                    border: '1px solid rgba(255,255,255,0.08)'
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    marginBottom: 16,
                    paddingBottom: 12,
                    borderBottom: `2px solid ${dim.accent}30`
                  }}>
                    <span style={{ fontSize: 24 }}>{dim.icon}</span>
                    <div>
                      <h3 style={{ margin: 0, fontSize: 16, fontWeight: 600, color: '#F1F5F9' }}>{dim.title}</h3>
                      <p style={{ margin: '2px 0 0', fontSize: 11, color: '#64748B' }}>{dim.subtitle}</p>
                    </div>
                  </div>

                  {/* Goals */}
                  <div style={{ marginBottom: 16 }}>
                    <h4 style={{ fontSize: 12, color: dim.accent, marginBottom: 10, textTransform: 'uppercase' }}>🎯 目標</h4>
                    {dim.goals.map(goal => (
                      <div key={goal.id} style={{
                        background: 'rgba(255,255,255,0.05)',
                        borderRadius: 8,
                        padding: 12,
                        marginBottom: 8
                      }}>
                        <textarea
                          value={goal.text}
                          onChange={(e) => updateGoalText(dim.id, goal.id, e.target.value)}
                          style={{
                            width: '100%',
                            background: 'transparent',
                            border: 'none',
                            color: '#E2E8F0',
                            fontSize: 13,
                            resize: 'none',
                            outline: 'none',
                            lineHeight: 1.5
                          }}
                          rows={2}
                        />
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 8 }}>
                          <span style={{ fontSize: 11, color: '#64748B' }}>進度</span>
                          <input
                            type="range"
                            min="0"
                            max="100"
                            value={goal.progress}
                            onChange={(e) => updateProgress(dim.id, goal.id, e.target.value)}
                            style={{ flex: 1, accentColor: dim.accent }}
                          />
                          <input
                            type="number"
                            min="0"
                            max="100"
                            value={goal.progress}
                            onChange={(e) => updateProgress(dim.id, goal.id, Math.min(100, Math.max(0, e.target.value)))}
                            style={{ ...inputStyle, width: 50, textAlign: 'center' }}
                          />
                          <span style={{ color: '#64748B', fontSize: 11 }}>%</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                      <h4 style={{ fontSize: 12, color: dim.accent, textTransform: 'uppercase', margin: 0 }}>⚡ 關鍵行動</h4>
                      <button
                        onClick={() => setShowAddAction(showAddAction === dim.id ? null : dim.id)}
                        style={{
                          padding: '5px 10px',
                          background: dim.accent,
                          border: 'none',
                          borderRadius: 6,
                          color: '#1E1B4B',
                          fontSize: 11,
                          fontWeight: 600,
                          cursor: 'pointer'
                        }}
                      >
                        + 新增
                      </button>
                    </div>

                    {showAddAction === dim.id && (
                      <div style={{
                        background: 'rgba(255,255,255,0.08)',
                        borderRadius: 8,
                        padding: 12,
                        marginBottom: 10,
                        display: 'flex',
                        gap: 8,
                        flexWrap: 'wrap'
                      }}>
                        <input
                          type="text"
                          value={newActionText}
                          onChange={(e) => setNewActionText(e.target.value)}
                          placeholder="輸入行動項目..."
                          style={{ ...inputStyle, flex: 1, minWidth: 200 }}
                        />
                        <select
                          value={newActionQuarter}
                          onChange={(e) => setNewActionQuarter(e.target.value)}
                          style={{ ...selectStyle, width: 80 }}
                        >
                          <option value="Q1">Q1</option>
                          <option value="Q2">Q2</option>
                          <option value="Q3">Q3</option>
                          <option value="Q4">Q4</option>
                          <option value="Q1-Q4">全年</option>
                        </select>
                        <button
                          onClick={() => addAction(dim.id)}
                          style={{
                            padding: '8px 16px',
                            background: dim.accent,
                            border: 'none',
                            borderRadius: 6,
                            color: '#1E1B4B',
                            fontSize: 12,
                            fontWeight: 600,
                            cursor: 'pointer'
                          }}
                        >
                          確認
                        </button>
                      </div>
                    )}

                    {dim.actions.map(action => (
                      <div
                        key={action.id}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 10,
                          padding: '10px 12px',
                          background: 'rgba(255,255,255,0.03)',
                          borderRadius: 6,
                          marginBottom: 6,
                          border: '1px solid rgba(255,255,255,0.05)'
                        }}
                      >
                        <button
                          onClick={() => toggleAction(dim.id, action.id)}
                          style={{
                            width: 20,
                            height: 20,
                            borderRadius: 4,
                            border: action.completed ? 'none' : '2px solid rgba(255,255,255,0.3)',
                            background: action.completed ? dim.accent : 'transparent',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: 11,
                            color: '#1E1B4B',
                            flexShrink: 0
                          }}
                        >
                          {action.completed && '✓'}
                        </button>
                        <input
                          type="text"
                          value={action.text}
                          onChange={(e) => updateActionText(dim.id, action.id, e.target.value)}
                          style={{
                            ...inputStyle,
                            flex: 1,
                            textDecoration: action.completed ? 'line-through' : 'none',
                            opacity: action.completed ? 0.6 : 1
                          }}
                        />
                        <select
                          value={action.quarter}
                          onChange={(e) => updateActionQuarter(dim.id, action.id, e.target.value)}
                          style={{ ...selectStyle, width: 70, fontSize: 11 }}
                        >
                          <option value="Q1">Q1</option>
                          <option value="Q2">Q2</option>
                          <option value="Q3">Q3</option>
                          <option value="Q4">Q4</option>
                          <option value="Q1-Q4">全年</option>
                        </select>
                        <button
                          onClick={() => removeAction(dim.id, action.id)}
                          style={{
                            padding: '4px 8px',
                            background: 'rgba(239, 68, 68, 0.2)',
                            border: 'none',
                            borderRadius: 4,
                            color: '#F87171',
                            fontSize: 11,
                            cursor: 'pointer'
                          }}
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 20, color: '#F1F5F9' }}>
              ⚙️ 設定與資料管理
            </h2>
            
            <div style={{ display: 'grid', gap: 20, maxWidth: 600 }}>
              {/* Export */}
              <div style={{
                background: 'rgba(255,255,255,0.03)',
                borderRadius: 14,
                padding: 20,
                border: '1px solid rgba(255,255,255,0.08)'
              }}>
                <h3 style={{ fontSize: 16, fontWeight: 600, color: '#F1F5F9', marginBottom: 8 }}>📤 匯出資料</h3>
                <p style={{ fontSize: 13, color: '#94A3B8', marginBottom: 16 }}>
                  將所有規劃資料匯出為 JSON 檔案備份
                </p>
                <button
                  onClick={exportData}
                  style={{
                    padding: '12px 24px',
                    background: 'linear-gradient(135deg, #3B82F6, #2563EB)',
                    border: 'none',
                    borderRadius: 10,
                    color: 'white',
                    fontSize: 14,
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  下載備份檔案
                </button>
              </div>

              {/* Import */}
              <div style={{
                background: 'rgba(255,255,255,0.03)',
                borderRadius: 14,
                padding: 20,
                border: '1px solid rgba(255,255,255,0.08)'
              }}>
                <h3 style={{ fontSize: 16, fontWeight: 600, color: '#F1F5F9', marginBottom: 8 }}>📥 匯入資料</h3>
                <p style={{ fontSize: 13, color: '#94A3B8', marginBottom: 16 }}>
                  從備份檔案還原規劃資料
                </p>
                <label style={{
                  display: 'inline-block',
                  padding: '12px 24px',
                  background: 'linear-gradient(135deg, #10B981, #059669)',
                  border: 'none',
                  borderRadius: 10,
                  color: 'white',
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: 'pointer'
                }}>
                  選擇檔案匯入
                  <input
                    type="file"
                    accept=".json"
                    onChange={importData}
                    style={{ display: 'none' }}
                  />
                </label>
              </div>

              {/* Reset */}
              <div style={{
                background: 'rgba(239, 68, 68, 0.1)',
                borderRadius: 14,
                padding: 20,
                border: '1px solid rgba(239, 68, 68, 0.3)'
              }}>
                <h3 style={{ fontSize: 16, fontWeight: 600, color: '#F87171', marginBottom: 8 }}>🗑️ 重置資料</h3>
                <p style={{ fontSize: 13, color: '#94A3B8', marginBottom: 16 }}>
                  清除所有資料並恢復預設值（此操作無法復原）
                </p>
                <button
                  onClick={resetData}
                  style={{
                    padding: '12px 24px',
                    background: 'rgba(239, 68, 68, 0.2)',
                    border: '1px solid rgba(239, 68, 68, 0.5)',
                    borderRadius: 10,
                    color: '#F87171',
                    fontSize: 14,
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  重置所有資料
                </button>
              </div>

              {/* Info */}
              <div style={{
                background: 'rgba(255,255,255,0.03)',
                borderRadius: 14,
                padding: 20,
                border: '1px solid rgba(255,255,255,0.08)'
              }}>
                <h3 style={{ fontSize: 16, fontWeight: 600, color: '#F1F5F9', marginBottom: 12 }}>ℹ️ 關於此應用</h3>
                <div style={{ fontSize: 13, color: '#94A3B8', lineHeight: 1.8 }}>
                  <p>📱 支援 PWA：可加到手機主畫面使用</p>
                  <p>💾 自動儲存：所有變更即時儲存至本機</p>
                  <p>🔒 資料隱私：所有資料僅儲存在您的裝置上</p>
                  <p style={{ marginTop: 12, color: '#64748B' }}>
                    版本 1.0.0 · Made for SEAN HSIEH
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer style={{
        padding: '16px 24px',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        textAlign: 'center'
      }}>
        <p style={{ fontSize: 11, color: '#64748B' }}>
          最後更新：{new Date(data.lastUpdated).toLocaleString('zh-TW')} · 
          Made with ❤️ for SEAN HSIEH's 2026 Journey
        </p>
      </footer>
    </div>
  );
}
