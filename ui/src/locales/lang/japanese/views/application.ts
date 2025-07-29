export default {
  "title": "アプリ",
  "createApplication": "アプリ作成",
  "importApplication": "アプリインポート",
  "copyApplication": "アプリ複製",
  "workflow": "ワークフロー",
  "simple": "シンプル",
  "searchBar": {
    "placeholder": "名前で検索"
  },
  "setting": {
    "demo": "デモ"
  },
  "delete": {
    "confirmTitle": "このアプリを削除してもよろしいですか：",
    "confirmMessage": "削除するとサービス提供が停止します。操作にご注意ください。"
  },
  "tip": {
    "ExportError": "エクスポート失敗",
    "professionalMessage": "プロ版では最大5アプリまで作成可能",
    "saveErrorMessage": "保存失敗。入力内容を確認するか後ほど再試行してください",
    "loadingErrorMessage": "設定読み込み失敗。入力内容を確認するか後ほど再試行してください"
  },
  "applicationForm": {
    "title": {
      "appTest": "デバッグプレビュー",
      "copy": "コピー"
    },
    "form": {
      "appName": {
        "label": "名称",
        "placeholder": "アプリ名を入力",
        "requiredMessage": "アプリ名は必須です"
      },
      "appDescription": {
        "label": "説明",
        "placeholder": "アプリの使用シナリオを記述（例：XXX製品に関する質問対応アシスタント）"
      },
      "appType": {
        "label": "タイプ",
        "simplePlaceholder": "初心者向け簡易作成",
        "workflowPlaceholder": "上級者向けワークフローカスタマイズ"
      },
      "appTemplate": {
        "blankApp": "空白アプリ",
        "assistantApp": "ナレッジアシスタント"
      },
      "aiModel": {
        "label": "AIモデル",
        "placeholder": "AIモデルを選択"
      },
      "roleSettings": {
        "label": "システムロール",
        "placeholder": "あなたはXXXアシスタントです"
      },
      "prompt": {
        "label": "プロンプト",
        "noReferences": "（ナレッジ未参照）",
        "references": "（ナレッジ参照）",
        "placeholder": "プロンプトを入力",
        "requiredMessage": "プロンプト入力必須",
        "tooltip": "プロンプト調整で大規模言語モデルの回答方向を誘導",
        "noReferencesTooltip": "{question}変数でユーザー質問を参照可能なプロンプト設定",
        "referencesTooltip": "{data}変数でナレッジ情報、{question}変数で質問を参照可能",
        "defaultPrompt": `既知情報: {data}
          質問: {question}
          回答要件:
          - 簡潔で専門的な表現を使用
          `
      },
      "historyRecord": {
        "label": "チャット履歴"
      },
      "relatedKnowledge": {
        "label": "関連ナレッジ",
        "placeholder": "関連ナレッジ表示エリア"
      },
      "multipleRoundsDialogue": "マルチターン対話",
      "prologue": "プロローグ",
      "defaultPrologue": "XXXアシスタントです。XXX製品に関する質問を受け付けます\n- 主な機能は？\n- 対応LLMは？\n- 対応ドキュメント形式は？",
      "problemOptimization": {
        "label": "質問最適化",
        "tooltip": "チャット履歴に基づき質問を最適化しナレッジマッチング精度向上"
      },
      "voiceInput": {
        "label": "音声入力",
        "placeholder": "音声認識モデル選択",
        "requiredMessage": "音声入力モデル選択必須",
        "autoSend": "自動送信"
      },
      "voicePlay": {
        "label": "音声再生",
        "placeholder": "音声合成モデル選択",
        "requiredMessage": "音声再生モデル選択必須",
        "autoPlay": "自動再生",
        "browser": "ブラウザ再生（無料）",
        "tts": "TTSモデル",
        "listeningTest": "プレビュー"
      },
      "reasoningContent": {
        "label": "思考プロセス出力",
        "tooltip": "ラベル間の内容を思考プロセスとして認識",
        "start": "開始",
        "end": "終了"
      }
    },
    "buttons": {
      "publish": "保存＆公開",
      "addModel": "モデル追加"
    },
    "dialog": {
      "addDataset": "関連ナレッジ追加",
      "addDatasetPlaceholder": "同一埋め込みモデル使用必須",
      "selected": "選択済",
      "countDataset": "ナレッジ数",
      "selectSearchMode": "検索モード",
      "vectorSearch": "ベクトル検索",
      "vectorSearchTooltip": "大規模データ向けベクトル距離計算検索",
      "fullTextSearch": "全文検索",
      "fullTextSearchTooltip": "小規模データ向けテキスト類似度検索",
      "hybridSearch": "ハイブリッド検索",
      "hybridSearchTooltip": "中規模データ向け複合検索",
      "similarityThreshold": "最低類似度",
      "similarityTooltip": "値が高いほど関連性強",
      "topReferences": "トップN段落",
      "maxCharacters": "参照最大文字数",
      "noReferencesAction": "ナレッジ未参照時の対応",
      "continueQuestioning": "AIへの質問継続",
      "provideAnswer": "指定回答表示",
      "designated_answer": "XXX製品関連の質問のみ対応可能です",
      "defaultPrompt1": "括弧内の質問({question})を文脈に基づき推測補完",
      "defaultPrompt2": "タグ"
    }
  },
  "applicationAccess": {
    "title": "アプリ連携",
    "wecom": "WeCom",
    "wecomTip": "WeComインテリジェントアプリ作成",
    "dingtalk": "DingTalk",
    "dingtalkTip": "DingTalkインテリジェントアプリ作成",
    "wechat": "WeChat",
    "wechatTip": "WeChatインテリジェントアプリ作成",
    "lark": "Lark",
    "larkTip": "Larkインテリジェントアプリ作成",
    "setting": "設定",
    "callback": "コールバックURL",
    "callbackTip": "コールバックURL入力",
    "wecomPlatform": "WeComオープンプラットフォーム",
    "wechatPlatform": "WeChatオープンプラットフォーム",
    "dingtalkPlatform": "DingTalkオープンプラットフォーム",
    "larkPlatform": "Larkオープンプラットフォーム",
    "slack": "Slack",
    "slackTip": "Slackインテリジェントアプリ作成",
    "wecomSetting": {
      "title": "WeCom設定",
      "cropId": "企業ID",
      "cropIdPlaceholder": "企業ID入力",
      "agentIdPlaceholder": "エージェントID入力",
      "secretPlaceholder": "シークレット入力",
      "tokenPlaceholder": "トークン入力",
      "encodingAesKeyPlaceholder": "暗号化キー入力",
      "authenticationSuccessful": "認証成功",
      "urlInfo": "API受信URL設定手順"
    },
    "dingtalkSetting": {
      "title": "DingTalk設定",
      "clientIdPlaceholder": "クライアントID入力",
      "clientSecretPlaceholder": "クライアントシークレット入力",
      "urlInfo": "HTTPモード受信URL設定手順"
    },
    "wechatSetting": {
      "title": "WeChat設定",
      "appId": "APP ID",
      "appIdPlaceholder": "APP ID入力",
      "appSecret": "APP SECRET",
      "appSecretPlaceholder": "APP SECRET入力",
      "token": "TOKEN",
      "tokenPlaceholder": "TOKEN入力",
      "aesKey": "暗号化キー",
      "aesKeyPlaceholder": "メッセージ暗号化キー入力",
      "urlInfo": "サーバー設定URL手順"
    },
    "larkSetting": {
      "title": "Lark設定",
      "appIdPlaceholder": "APP ID入力",
      "appSecretPlaceholder": "APPシークレット入力",
      "verificationTokenPlaceholder": "検証トークン入力",
      "urlInfo": "イベント設定URL手順"
    },
    "slackSetting": {
      "title": "Slack設定",
      "signingSecretPlaceholder": "署名シークレット入力",
      "botUserTokenPlaceholder": "ボットトークン入力"
    },
    "copyUrl": "URLコピー"
  },
  "hitTest": {
    "title": "検索テスト",
    "text": "クエリテキストに対するナレッジ検索効果をテスト",
    "emptyMessage1": "検索結果表示エリア",
    "emptyMessage2": "該当段落なし"
  }
}