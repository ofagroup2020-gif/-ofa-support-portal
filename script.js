/* 全体のベース */
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Noto Sans JP", sans-serif;
  background: #f5f5f5;
  color: #222;
}

/* 隠す用 */
.hidden {
  display: none;
}

/* ===== ロック画面 ===== */
#lock-screen {
  min-height: 100vh;
  background: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
}

.lock-header {
  padding: 24px 16px 8px;
  text-align: center;
  background: linear-gradient(135deg, #ffeb3b, #f44336);
  color: #000;
}

.lock-header h1 {
  margin: 0;
  font-size: 20px;
  font-weight: 900;
}

.lock-header p {
  margin: 4px 0 0;
  font-size: 12px;
}

.lock-main {
  flex: 1;
  padding: 24px 16px 32px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.lock-text {
  font-size: 14px;
  margin-bottom: 16px;
  line-height: 1.6;
}

.lock-input {
  width: 100%;
  padding: 12px;
  margin-bottom: 12px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
}

.primary-button {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 700;
  background: #ffeb3b;
  color: #000;
  cursor: pointer;
}

.primary-button:active {
  opacity: 0.8;
}

.lock-message {
  margin-top: 8px;
  font-size: 13px;
  color: #ff9800;
}

/* ===== アプリ本体 ===== */
.app-header {
  background: #000;
  color: #ffeb3b;
  padding: 16px;
}

.app-header h1 {
  margin: 0;
  font-size: 18px;
  font-weight: 900;
}

.app-header p {
  margin: 4px 0 0;
  font-size: 12px;
  color: #fff;
}

.app-main {
  padding: 16px;
  max-width: 960px;
  margin: 0 auto;
}

/* セクション */
.block {
  margin-bottom: 24px;
}

.block h2 {
  font-size: 16px;
  margin: 0 0 12px;
  border-left: 4px solid #ffeb3b;
  padding-left: 8px;
}

/* カードレイアウト（スマホ優先） */
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}

@media (min-width: 640px) {
  .grid {
    grid-template-columns: 1fr 1fr;
  }
}

/* カード */
.card {
  display: block;
  text-decoration: none;
  background: #fff;
  border-radius: 10px;
  padding: 10px 12px;
  border: 1px solid #ddd;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  color: inherit;
}

.card-main {
  border-left: 4px solid #ffeb3b;
}

.card-alert {
  border-left: 4px solid #f44336;
}

.card h3 {
  margin: 0 0 4px;
  font-size: 14px;
  font-weight: 700;
}

.card p {
  margin: 0;
  font-size: 12px;
  color: #555;
}

/* フッター */
.app-footer {
  text-align: center;
  padding: 12px;
  font-size: 11px;
  color: #777;
}
