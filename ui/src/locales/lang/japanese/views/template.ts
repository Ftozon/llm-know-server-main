export default {
  "title": "モデル",
  "provider": "プロバイダー",
  "providerPlaceholder": "プロバイダーを選択",
  "addModel": "モデルを追加",
  "searchBar": {
    "placeholder": "名前で検索"
  },
  "delete": {
    "confirmTitle": "モデル削除",
    "confirmMessage": "次のモデルを削除してもよろしいですか："
  },
  "tip": {
    "createSuccessMessage": "モデル作成成功",
    "createErrorMessage": "基本情報に不備があります",
    "errorMessage": "変数が既に存在します：",
    "emptyMessage1": "まず基本情報でモデルタイプとベースモデルを選択してください",
    "emptyMessage2": "選択したモデルはパラメータ設定をサポートしていません",
    "updateSuccessMessage": "モデル更新成功",
    "saveSuccessMessage": "モデルパラメータ保存成功",
    "downloadError": "ダウンロード失敗",
    "noModel": "Ollamaにモデルが存在しません"
  },
  "model": {
    "allModel": "全てのモデル",
    "publicModel": "公開モデル",
    "privateModel": "プライベートモデル",
    "LLM": "LLM",
    "EMBEDDING": "埋め込みモデル",
    "RERANKER": "リランク",
    "STT": "音声認識",
    "TTS": "TTS",
    "IMAGE": "画像認識モデル",
    "TTI": "画像生成"
  },
  "templateForm": {
    "title": {
      "baseInfo": "基本情報",
      "advancedInfo": "詳細設定",
      "modelParams": "モデルパラメータ",
      "editParam": "パラメータ編集",
      "addParam": "パラメータ追加",
      "paramSetting": "モデルパラメータ設定",
      "apiParamPassing": "インターフェースパラメータ"
    },
    "form": {
      "templateName": {
        "label": "モデル名",
        "placeholder": "ベースモデルの名前を設定",
        "tooltip": "LLM-Know内のカスタムモデル名",
        "requiredMessage": "モデル名は必須です"
      },
      "permissionType": {
        "label": "権限",
        "privateDesc": "現在のユーザーのみ利用可能",
        "publicDesc": "全ユーザーが利用可能",
        "requiredMessage": "権限は必須です"
      },
      "model_type": {
        "label": "モデルタイプ",
        "placeholder": "モデルタイプを選択",
        "tooltip1": "LLM：アプリ内AIチャット用推論モデル",
        "tooltip2": "埋め込みモデル：ナレッジ文書ベクトル化用",
        "tooltip3": "音声認識：アプリ内音声認識用",
        "tooltip4": "TTS：アプリ内音声合成用",
        "tooltip5": "リランク：高度編成アプリのマルチパスリコール用",
        "tooltip6": "画像認識：高度編成アプリの画像理解用",
        "tooltip7": "画像生成：高度編成アプリの画像生成用",
        "requiredMessage": "モデルタイプは必須です"
      },
      "base_model": {
        "label": "ベースモデル",
        "tooltip": "リストにないモデルは名前を入力後Enter",
        "placeholder": "ベースモデル名を入力してEnter",
        "requiredMessage": "ベースモデルは必須です"
      }
    }
  },
  "download": {
    "downloading": "ダウンロード中...",
    "cancelDownload": "ダウンロードをキャンセル"
  }
}