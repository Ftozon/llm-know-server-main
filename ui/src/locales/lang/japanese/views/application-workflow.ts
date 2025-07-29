export default {
  "node": "ノード",
  "nodeName": "ノード名",
  "baseComponent": "ベーシック",
  "nodeSetting": "ノード設定",
  "workflow": "ワークフロー",
  "searchBar": {
    "placeholder": "名前で検索"
  },
  "info": {
    "previewVersion": "プレビュー版：",
    "saveTime": "最終保存："
  },
  "setting": {
    "restoreVersion": "以前のバージョンに復元",
    "restoreCurrentVersion": "このバージョンに復元",
    "addComponent": "追加",
    "public": "公開",
    "releaseHistory": "リリース履歴",
    "autoSave": "自動保存",
    "latestRelease": "最新リリース",
    "copyParam": "パラメータをコピー",
    "debug": "実行",
    "exit": "終了",
    "exitSave": "保存して終了"
  },
  "tip": {
    "publicSuccess": "公開成功",
    "noData": "関連結果が見つかりません",
    "nameMessage": "名前は必須です！",
    "onlyRight": "右アンカーからのみ接続可能",
    "notRecyclable": "ループ接続は禁止",
    "onlyLeft": "左アンカーへのみ接続可能",
    "applicationNodeError": "このアプリは利用不可",
    "functionNodeError": "この機能ノードは利用不可",
    "repeatedNodeError": "同名ノードが既に存在",
    "cannotCopy": "コピー不可",
    "copyError": "既にコピー済み",
    "paramErrorMessage": "既存パラメータ：",
    "saveMessage": "未保存の変更があります。保存しますか？"
  },
  "delete": {
    "confirmTitle": "このノードを削除しますか？",
    "deleteMessage": "このノードは削除不可"
  },
  "control": {
    "zoomOut": "縮小",
    "zoomIn": "拡大",
    "fitView": "画面に合わせる",
    "retract": "全て折り畳む",
    "extend": "全て展開",
    "beautify": "自動整列"
  },
  "variable": {
    "label": "変数",
    "global": "グローバル変数",
    "Referencing": "参照変数",
    "ReferencingRequired": "参照変数必須",
    "ReferencingError": "無効な参照変数",
    "NoReferencing": "参照変数が存在しません",
    "placeholder": "変数を選択"
  },
  "condition": {
    "title": "実行条件",
    "front": "前提条件",
    "AND": "全て",
    "OR": "いずれか",
    "text": "接続ノード実行後に現在ノードを実行"
  },
  "validate": {
    "startNodeRequired": "開始ノード必須",
    "startNodeOnly": "開始ノードは1つのみ",
    "baseNodeRequired": "基本情報ノード必須",
    "baseNodeOnly": "基本情報ノードは1つのみ",
    "notInWorkFlowNode": "ワークフロー外ノード",
    "noNextNode": "次ノードが存在しません",
    "nodeUnavailable": "ノード利用不可",
    "needConnect1": "ノードの分岐接続が必要",
    "cannotEndNode": "終端ノードとして使用不可"
  },
  "nodes": {
    "startNode": {
      "label": "開始",
      "question": "ユーザー質問",
      "currentTime": "現在時刻"
    },
    "baseNode": {
      "label": "基本情報",
      "appName": {
        "label": "アプリ名"
      },
      "appDescription": {
        "label": "アプリ説明"
      },
      "fileUpload": {
        "label": "ファイルアップロード",
        "tooltip": "有効時、Q&Aページにアップロードボタン表示"
      },
      "FileUploadSetting": {
        "title": "アップロード設定",
        "maxFiles": "最大アップロード数",
        "fileLimit": "最大ファイルサイズ（MB）",
        "fileUploadType": {
          "label": "許可ファイル形式",
          "documentText": "「文書解析」ノードで処理必要",
          "imageText": "「画像理解」ノードで処理必要",
          "audioText": "「音声認識」ノードで処理必要"
        }
      }
    },
    "aiChatNode": {
      "label": "AIチャット",
      "text": "AIモデルと対話",
      "answer": "AI回答",
      "returnContent": {
        "label": "返答内容",
        "tooltip": "無効時、ユーザーに表示されません"
      },
      "defaultPrompt": "既知情報",
      "think": "思考プロセス"
    },
    "searchDatasetNode": {
      "label": "ナレッジ検索",
      "text": "ナレッジから関連テキストを検索",
      "paragraph_list": "検索結果リスト",
      "is_hit_handling_method_list": "直接返答対象リスト",
      "result": "検索結果",
      "directly_return": "直接返答内容",
      "searchParam": "検索パラメータ",
      "searchQuestion": {
        "label": "検索質問",
        "placeholder": "検索質問を選択",
        "requiredMessage": "検索質問必須"
      }
    },
    "questionNode": {
      "label": "質問最適化",
      "text": "質問を最適化してナレッジ適合率向上",
      "result": "最適化結果",
      "defaultPrompt1": "文脈に基づき質問を最適化：",
      "defaultPrompt2": "最適化質問を出力",
      "systemDefault": "質問最適化専門家"
    },
    "conditionNode": {
      "label": "条件分岐",
      "text": "条件に応じ異なるノードを実行",
      "branch_name": "分岐名",
      "conditions": {
        "label": "条件",
        "info": "以下の条件を満たす場合",
        "requiredMessage": "条件選択必須"
      },
      "valueMessage": "値を入力",
      "addCondition": "条件追加",
      "addBranch": "分岐追加"
    },
    "replyNode": {
      "label": "指定返答",
      "text": "返答内容を指定（変数は文字列変換）",
      "content": "内容",
      "replyContent": {
        "label": "返答内容",
        "custom": "カスタム",
        "reference": "変数参照"
      }
    },
    "rerankerNode": {
      "label": "マルチパスリコール",
      "text": "複数ナレッジを再ランク付け",
      "result_list": "再ランク結果リスト",
      "result": "再ランク結果",
      "rerankerContent": {
        "label": "再ランク対象",
        "requiredMessage": "再ランク対象選択必須"
      },
      "higher": "高い",
      "ScoreTooltip": "値が高いほど関連性強",
      "max_paragraph_char_number": "最大文字数",
      "reranker_model": {
        "label": "再ランクモデル",
        "placeholder": "再ランクモデル選択"
      }
    },
    "formNode": {
      "label": "フォーム入力",
      "text": "ユーザー入力を収集し後続処理で利用",
      "form_content_format1": "以下のフォームを入力してください：",
      "form_content_format2": "入力後[送信]をクリック",
      "form_data": "全フォーム内容",
      "formContent": {
        "label": "出力内容",
        "requiredMessage": "{form}をプレースホルダーとして設定",
        "tooltip": "出力内容を定義（{form}はフォームプレースホルダー）"
      },
      "formAllContent": "全フォーム内容",
      "formSetting": "フォーム設定"
    },
    "documentExtractNode": {
      "label": "文書解析",
      "text": "文書内容を抽出",
      "content": "文書内容"
    },
    "imageUnderstandNode": {
      "label": "画像理解",
      "text": "画像分析で物体/情景を識別",
      "answer": "AI回答",
      "model": {
        "label": "画像認識モデル",
        "requiredMessage": "モデル選択必須"
      },
      "image": {
        "label": "画像選択",
        "requiredMessage": "画像選択必須"
      }
    },
    "variableAssignNode": {
      "label": "変数割当",
      "text": "グローバル変数を更新",
      "assign": "値設定"
    },
    "imageGenerateNode": {
      "label": "画像生成",
      "text": "テキストから画像生成",
      "answer": "AI生成結果",
      "model": {
        "label": "生成モデル",
        "requiredMessage": "モデル選択必須"
      },
      "prompt": {
        "label": "ポジティブプロンプト",
        "tooltip": "生成したい要素を記述"
      },
      "negative_prompt": {
        "label": "ネガティブプロンプト",
        "tooltip": "除外要素を記述",
        "placeholder": "除外要素（色、暴力的表現等）"
      }
    },
    "speechToTextNode": {
      "label": "音声認識",
      "text": "音声をテキスト変換",
      "stt_model": {
        "label": "音声認識モデル"
      },
      "audio": {
        "label": "音声ファイル選択",
        "placeholder": "音声ファイルを選択"
      }
    },
    "textToSpeechNode": {
      "label": "音声合成",
      "text": "テキストを音声変換",
      "tts_model": {
        "label": "音声合成モデル"
      },
      "content": {
        "label": "テキスト選択"
      }
    },
    "functionNode": {
      "label": "カスタム関数",
      "text": "スクリプト実行でデータ処理"
    },
    "applicationNode": {
      "label": "アプリノード"
    }
  },
  "compare": {
    "is_null": "空値",
    "is_not_null": "非空値",
    "contain": "含む",
    "not_contain": "含まない",
    "eq": "等しい",
    "ge": "以上",
    "gt": "より大きい",
    "le": "以下",
    "lt": "より小さい",
    "len_eq": "長さ等しい",
    "len_ge": "長さ以上",
    "len_gt": "長さ超過",
    "len_le": "長さ以下",
    "len_lt": "長さ未満"
  },
  "FileUploadSetting": {}
}