export default {
    "title": "ナレッジ",
    "createDataset": "ナレッジ作成",
    "general": "一般",
    "web": "ウェブサイト",
    "relatedApplications": "連携アプリ",
    "document_count": "ドキュメント数",
    "relatedApp_count": "連携アプリ数",
    "searchBar": {
        "placeholder": "名前で検索"
    },
    "setting": {
        "vectorization": "ベクトル化",
        "sync": "同期"
    },
    "tip": {
        "professionalMessage": "最大50ナレッジまで作成可能",
        "syncSuccess": "同期タスクを正常に送信",
        "updateModeMessage": "埋め込みモデル変更後、ベクトル化が必要です。保存を続行しますか？"
    },
    "delete": {
        "confirmTitle": "ナレッジ削除確認：",
        "confirmMessage1": "このナレッジは",
        "confirmMessage2": "件のアプリと関連しています。削除すると復元できません。操作にご注意ください。"
    },
    "datasetForm": {
        "title": {
            "info": "ナレッジ設定"
        },
        "form": {
            "datasetName": {
                "label": "名称",
                "placeholder": "ナレッジ名を入力",
                "requiredMessage": "ナレッジ名必須"
            },
            "datasetDescription": {
                "label": "説明",
                "placeholder": "ナレッジ内容を詳細に記述（AIの理解精度向上に有効）",
                "requiredMessage": "説明文必須"
            },
            "EmbeddingModel": {
                "label": "埋め込みモデル",
                "placeholder": "埋め込みモデルを選択",
                "requiredMessage": "埋め込みモデル選択必須"
            },
            "datasetType": {
                "label": "タイプ",
                "generalInfo": "ローカルドキュメントをアップロード",
                "webInfo": "ウェブサイトからデータ同期"
            },
            "source_url": {
                "label": "ウェブルートURL",
                "placeholder": "ルートURLを入力",
                "requiredMessage": "URL入力必須"
            },
            "selector": {
                "label": "セレクター",
                "placeholder": "デフォルトbody（.class名/#id名/タグ名入力可）"
            }
        }
    },
    "ResultSuccess": {
        "title": "ナレッジ作成成功",
        "paragraph": "段落数",
        "paragraph_count": "段落",
        "documentList": "ドキュメント一覧",
        "loading": "インポート中",
        "buttons": {
            "toDataset": "ナレッジ一覧に戻る",
            "toDocument": "ドキュメントへ"
        }
    },
    "syncWeb": {
        "title": "ナレッジ同期",
        "syncMethod": "同期方法",
        "replace": "置換同期",
        "replaceText": "ウェブドキュメントを再取得し既存データを上書き",
        "complete": "完全同期",
        "completeText": "既存データ全削除後に再取得",
        "tip": "注意：同期操作は既存データを削除します。十分ご注意ください。"
    }
}
