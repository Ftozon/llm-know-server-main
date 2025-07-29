export default {
  "uploadDocument": "ドキュメントをアップロード",
  "importDocument": "ドキュメントをインポート",
  "syncDocument": "ドキュメントを同期",
  "selected": "選択済み",
  "items": "件",
  "searchBar": {
    "placeholder": "ドキュメント名で検索"
  },
  "setting": {
    "migration": "移動",
    "cancelGenerateQuestion": "質問生成をキャンセル",
    "cancelVectorization": "ベクトル化をキャンセル",
    "cancelGenerate": "生成をキャンセル",
    "export": "エクスポート先"
  },
  "tip": {
    "saveMessage": "未保存の変更があります。終了しますか？",
    "cancelSuccess": "成功",
    "sendMessage": "成功",
    "vectorizationSuccess": "成功",
    "nameMessage": "ドキュメント名は必須です！",
    "importMessage": "成功",
    "migrationSuccess": "成功"
  },
  "upload": {
    "selectFile": "ファイルを選択",
    "selectFiles": "フォルダを選択",
    "uploadMessage": "ここにファイルをドラッグ＆ドロップ、または",
    "formats": "対応フォーマット：",
    "requiredMessage": "ファイルをアップロードしてください",
    "errorMessage1": "ファイルサイズが100MBを超えています",
    "errorMessage2": "非対応ファイル形式",
    "errorMessage3": "ファイルは空にできません",
    "errorMessage4": "最大50ファイルまで一括アップロード可能",
    "template": "テンプレート",
    "download": "ダウンロード"
  },
  "fileType": {
    "txt": {
      "label": "テキストファイル",
      "tip1": "1. アップロード前にファイル内のセグメント区切り記号を標準化することを推奨します",
      "tip2": "2. 最大50ファイル（各ファイル100MB以内）まで一括アップロード可能"
    },
    "table": {
      "label": "表形式",
      "tip1": "1. テンプレートをダウンロードし情報を入力してください：",
      "tip2": "2. 先頭行は列見出し（意味のある用語）である必要があります。各行はセグメントとして扱われます",
      "tip3": "3. シート名がドキュメント名として扱われます",
      "tip4": "4. 最大50ファイル（各ファイル100MB以内）まで一括アップロード可能"
    },
    "QA": {
      "label": "Q&Aペア",
      "tip1": "1. テンプレートをダウンロードし情報を入力してください：",
      "tip2": "2. シート名がドキュメント名として扱われます",
      "tip3": "3. 最大50ファイル（各ファイル100MB以内）まで一括アップロード可能"
    }
  },
  "setRules": {
    "title": {
      "setting": "セグメントルール設定",
      "preview": "プレビュー"
    },
    "intelligent": {
      "label": "自動セグメント化（推奨）",
      "text": "セグメント化ルールが不明な場合は自動セグメント化をご利用ください"
    },
    "advanced": {
      "label": "詳細設定",
      "text": "区切り記号/セグメント長/クリーニングルールをカスタマイズ可能"
    },
    "patterns": {
      "label": "区切り記号",
      "tooltip": "選択した記号順に再帰的に分割（セグメント長超過時は切り詰め）",
      "placeholder": "選択してください"
    },
    "limit": {
      "label": "セグメント長"
    },
    "with_filter": {
      "label": "自動クリーニング",
      "text": "重複記号/スペース/空行/タブ文字を自動削除"
    },
    "checkedConnect": {
      "label": "Q&Aペアインポート時に「関連質問」セクションを追加"
    }
  },
  "buttons": {
    "prev": "前へ",
    "next": "次へ",
    "import": "インポート開始",
    "preview": "適用"
  },
  "table": {
    "name": "ドキュメント名",
    "char_length": "文字数",
    "paragraph": "セグメント",
    "all": "全て",
    "updateTime": "更新日時"
  },
  "fileStatus": {
    "label": "ファイル状態",
    "SUCCESS": "成功",
    "FAILURE": "失敗",
    "EMBEDDING": "ベクトル化中",
    "PENDING": "待機中",
    "GENERATE": "生成中",
    "SYNC": "同期中",
    "REVOKE": "キャンセル中",
    "finish": "完了"
  },
  "enableStatus": {
    "label": "状態",
    "enable": "有効",
    "close": "無効"
  },
  "sync": {
    "label": "同期",
    "confirmTitle": "ドキュメントを同期しますか？",
    "confirmMessage1": "既存データを削除し新規データを取得します（注意が必要）",
    "confirmMessage2": "同期不可：ドキュメントURLを設定してください",
    "successMessage": "成功"
  },
  "delete": {
    "confirmTitle1": "次のドキュメントを一括削除します：",
    "confirmTitle2": "件",
    "confirmMessage": "関連セグメントも削除されます（注意が必要）",
    "successMessage": "成功",
    "confirmTitle3": "次のドキュメントを削除します：",
    "confirmMessage1": "このドキュメント内の",
    "confirmMessage2": "全セグメントが削除されます（注意が必要）"
  },
  "form": {
    "source_url": {
      "label": "ドキュメントURL",
      "placeholder": "1行1URL形式（不正URLはインポート失敗）",
      "requiredMessage": "URLを入力してください"
    },
    "selector": {
      "label": "セレクター",
      "placeholder": "デフォルトbody（.class名/#id名/タグ名入力可）"
    },
    "hit_handling_method": {
      "label": "検索対応方法",
      "tooltip": "検索結果に基づく対応方法を設定"
    },
    "similarity": {
      "label": "類似度閾値",
      "placeholder": "セグメント内容を直接返答",
      "requiredMessage": "類似度値を入力"
    }
  },
  "hitHandlingMethod": {
    "optimization": "モデル最適化",
    "directly_return": "直接返答"
  },
  "generateQuestion": {
    "title": "質問生成",
    "successMessage": "成功",
    "tip1": "プロンプト内{data}はセグメント内容のプレースホルダー",
    "tip2": "生成質問は",
    "tip3": "タグ内に配置（システム自動関連付け）",
    "tip4": "モデルとプロンプト調整で生成効果向上可能",
    "prompt1": "内容: {data}\n\n上記内容から5問の質問を生成\n要件:\n- 質問のみ出力\n- 各質問を",
    "prompt2": "タグ内に配置"
  }
}
