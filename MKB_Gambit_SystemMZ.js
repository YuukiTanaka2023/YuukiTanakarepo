//==============================================================================
// MKB_Gambit_System.js
// Copyright (c) 2020 maker-b
// Released under the MIT License.
// http://opensource.org/licenses/mit-license.php
//==============================================================================

/*:
 * @target MZ
 * @plugindesc ガンビットシステム ver0.24.47c(TPBのみ対応)
 * @author maker-b
 * 
 * @param gambitbase
 * @text ----Base----
 * 
 * @param Type of equip
 * @parent gambitbase
 * @type number
 * @default 6
 * @text 装備タイプ（本プラグイン用）
 * @desc この装備タイプは本プラグインで使用します
 * 
 * @param Type of armor IF
 * @parent gambitbase
 * @type number
 * @default 7
 * @text 防具タイプ（条件分岐用）
 * @desc この防具タイプはガンビットの条件分岐（IF）で使用します
 * 
 * @param Type of armor TARGET
 * @parent gambitbase
 * @type number
 * @default 8
 * @text 防具タイプ（ターゲット用）
 * @desc この防具タイプはガンビットのターゲット指定で使用します
 * 
 * @param autosuteid
 * @parent gambitbase
 * @text ガンビットステート番号
 * @desc ガンビットで使うステート番号
 * @default 11
 * @type number
 * @min 1
 * 
 * 
 * @param gambitMainMenu
 * @text ----MainMenu----
 * 
 * @param Show Command
 * @parent gambitMainMenu
 * @text メニューコマンド表示
 * @type boolean
 * @desc メニューにコマンドを表示するか
 * @default true
 *
 * @param Command Name
 * @parent gambitMainMenu
 * @text メニューコマンド表示名
 * @type string
 * @desc ガンビットシステムの名称
 * @default ガンビット
 *
 * @param Enable Switch Id
 * @parent gambitMainMenu
 * @text メニュー有効無効スイッチ番号
 * @type switch
 * @desc メニューの有効無効を切り替えるスイッチ番号
 *       0の場合は常に有効
 * @default 0
 * 
 * @param Setname of gambit
 * @parent gambitMainMenu
 * @type string
 * @default ガンビットセット
 * @text ガンビットセットの名前
 * @desc ガンビットセットの名前
 *  
 * @param Setname 1
 * @parent Setname of gambit
 * @type string
 * @default セットリスト１
 * @text セットリスト１番目の名前
 * @desc セットリスト１番目の名前
 *  
 * @param Setname 2
 * @parent Setname of gambit
 * @type string
 * @default セットリスト２
 * @text セットリスト２番目の名前
 * @desc セットリスト２番目の名前
 *  
 * @param Setname 3
 * @parent Setname of gambit
 * @type string
 * @default セットリスト３
 * @text セットリスト３番目の名前
 * @desc セットリスト３番目の名前
 *  
 * @command OpenGambitMenu
 * @text ガンビットメニューを開く
 * @desc ガンビットメニューを開く
 * 
 * @command addGambitSlot
 * @text ガンビットスロットを追加する
 * @desc ガンビットスロットを追加する
 *
 * @arg gambitActorId
 * @text アクターのID
 * @desc ガンビットスロットを増やすアクターのID
 * @default 0
 * @type number
 * 
 * @arg gambitAddNumber
 * @text ガンビットスロット増加数
 * @desc ガンビットスロットを増やす数
 * @default 1
 * @type number
 * 
 * @command addGambitSlotALL
 * @text パーティ全員のガンビットスロットを追加する
 * @desc パーティ全員のガンビットスロットを追加する
 * 
 * @arg gambitAddNumber
 * @text ガンビットスロット増加数
 * @desc ガンビットスロットを増やす数
 * @default 1
 * @type number
 * 
 * @command addGambitSlotFROMTOPACTOR
 * @text パーティ全員のガンビットスロットの最大値を合わせる
 * @desc パーティ全員のガンビットスロットを、パーティ内の最大値に合わせる
 *
 * @param gambitbattle
 * @text ----Battle----
 * 
 * @param Enable Switch Id autoGambit
 * @parent gambitbattle
 * @text オートガンビットモード
 * @type switch
 * @desc バトル開始時に自動でガンビットが発動するかどうかを判定するスイッチID
 *       0の場合は常に無効
 * @default 0
 * 
 * @param gambitcommandname
 * @parent gambitbattle
 * @text パーティコマンド名
 * @desc パーティコマンドに追加するコマンドの呼び名(未使用)
 * @default ガンビットチェンジ
 * @type string
 * 
 * @param Auto Battle Key
 * @parent gambitbattle
 * @text ガンビットモード開始キー
 * @desc ガンビットモードの開始に使用するキーです。
 * @default shift
 * 
 * @param Pause Key
 * @parent gambitbattle
 * @text ガンビット中ポーズキー
 * @desc ガンビット中に一時中断するキーです。
 * @default control
 * 
 * @param Auto Battle X
 * @parent gambitbattle
 * @text ガンビットwindow　x座標
 * @desc ガンビットwindow　x座標です。
 * @type number
 * @default 400
 * 
 * @param Auto Battle Y
 * @parent gambitbattle
 * @text ガンビットwindow　Y座標
 * @desc ガンビットwindow　Y座標です。
 * @type number
 * @default 0
 * 
 * @param Auto Battle Usable Message
 * @parent gambitbattle
 * @text ガンビットモード時表示文字
 * @desc ガンビットモード時に表示するのテキストです。
 * _keyを設定されているキーに変換します。
 * @default 現在ガンビット中 _keyで解除
 * 
 * @param Auto Battle Message
 * @parent gambitbattle
 * @text ガンビットモード時以外表示文字
 * @desc ガンビットモードではない時に表示するのテキストです。
 * _keyを設定されているキーに変換します。
 * @default _keyでガンビット開始
 * 
 * @param Show GAMBITWINDOW FRAME
 * @parent gambitbattle
 * @text ガンビットウィンドウのフレーム表示
 * @type boolean
 * @desc バトル画面のにガンビットウィンドウにフレームを表示するか
 * @default true
 * 
 * @param gambitSE1
 * @parent gambitbattle
 * @text SE1のファイル名
 * @desc
 * @default ok
 * @require 1
 * @dir audio/se/
 * @type file
 *
 * @param volume1
 * @parent gambitSE1
 * @text SE1のボリューム
 * @desc
 * @type number
 * @min 0
 * @default 90
 *
 * @param pitch1
 * @parent gambitSE1
 * @text SE1のピッチ
 * @desc
 * @type number
 * @max 1000000
 * @min 10
 * @default 100
 * 
 * @param Gambit Crown Name
 * @parent gambitbattle
 * @text ガンビットクラウンのファイル名
 * @desc
 * @default ok
 * @require 1
 * @dir img/system/
 * @type file
 * 
 * @param Gambit Crown X
 * @parent Gambit Crown Name
 * @text ガンビットクラウン　x座標
 * @desc アクターの頭上に輝くガンビット王冠の　x座標です。
 * @type number
 * @default 25
 * 
 * @param Gambit Crown Y
 * @parent Gambit Crown Name
 * @text ガンビットクラウン　Y座標
 * @desc アクターの頭上に輝くガンビット王冠の　Y座標です。
 * @type number
 * @default -60
 * 
 * @param Show GambitLog
 * @parent gambitbattle
 * @text ガンビットログの表示
 * @type boolean
 * @desc バトル画面上にガンビットログを表示するか
 * @default true
 * 
 * @param GambitLog X
 * @parent Show GambitLog
 * @text ガンビットログ　x座標
 * @desc ガンビットログの　x座標です。
 * @type number
 * @default 540
 * 
 * @param GambitLog Y
 * @parent Show GambitLog
 * @text ガンビットログ　Y座標
 * @desc ガンビットログの　Y座標です。
 * @type number
 * @default 100
 * 
 * @param GambitLog ROW
 * @parent Show GambitLog
 * @text ガンビットログ　行高さ
 * @desc ガンビットログの　１行あたり高さです。
 * @type number
 * @default 32
 * 
 * @param GambitLog FontSize
 * @parent Show GambitLog
 * @text ガンビットログ　フォントの大きさ
 * @desc ガンビットログの　フォントの大きさです。
 * @type number
 * @default 24
 * 
 * @param GambitLog NonGambit
 * @parent Show GambitLog
 * @text ガンビットが失敗した場合のコメント
 * @desc ガンビットが失敗した場合のコメントです。
 * @type string
 * @default ガンビットがないよ！
 * 
 * @param Show GambitChangeMessage
 * @parent gambitbattle
 * @text ガンビット切替時にテロップを表示
 * @type boolean
 * @desc この機能はトリアコンタン様の"DTextPicture.js"と適当な画像ファイルが必要です！
 * @default false
 * 
 * @param GambitChangeMessage Obi
 * @parent Show GambitChangeMessage
 * @text ガンビットテロップのファイル名
 * @desc ガンビット切替時のテロップ帯画像
 * @default obi
 * @require 1
 * @dir img/system/
 * @type file
 * 
 * @param GambitPicNumber Obi
 * @parent Show GambitChangeMessage
 * @text ガンビットテロップ画像の画像番号
 * @desc ガンビットテロップ帯部分の画像番号です。
 * @type number
 * @default 29
 * 
 * @param GambitPicNumber text
 * @parent Show GambitChangeMessage
 * @text ガンビットテキスト画像の画像番号
 * @desc ガンビットテキスト部分の画像番号です。
 * @type number
 * @default 30
 * 
 * @param GambitChangeMessage Text_ON
 * @parent Show GambitChangeMessage
 * @text ガンビットモードON時のテキストです
 * @desc ガンビットモードON時のテキストです。
 * @type string
 * @default ガンビットモード！
 * 
 * @param GambitChangeMessage Text_OFF
 * @parent Show GambitChangeMessage
 * @text ガンビットモードOFF時のテキストです
 * @desc ガンビットモードOFF時のテキストです。
 * @type string
 * @default マニュアルモード！
 * 
 * @param PlaySE GambitChangeMessage
 * @parent gambitbattle
 * @text ガンビット切替時にSE
 * @type boolean
 * @desc ガンビット切替時にSEを鳴らすか
 * @default false
 * 
 * @param gambitChangeSE1
 * @parent PlaySE GambitChangeMessage
 * @text ガンビットチェンジ時のSEファイル名
 * @desc ガンビットチェンジ時のSEファイル名
 * @default ok
 * @require 1
 * @dir audio/se/
 * @type file
 *
 * @param gambitChangeVolume1
 * @parent gambitChangeSE1
 * @text SE1のボリューム
 * @desc SE1のボリューム
 * @type number
 * @min 0
 * @default 90
 *
 * @param gambitChangePitch1
 * @parent gambitChangeSE1
 * @text SE1のピッチ
 * @desc SE1のボリューム
 * @type number
 * @max 1000000
 * @min 10
 * @default 100
 * 
 * @help
 * ガンビットプラグイン（TPB専用）
 * ※本プラグインは、TPBを前提に作成しております。通常ターン制だと
 * 　以下記載のバグがあります。
 * 
 * このプラグインは、某国民的RPG１２の自動戦闘っぽいことをします。
 * 基本的に、標準機能の「自動戦闘」をカスタムしており、
 * キャラを条件式に従って行動させる、というシンプルな考え方を実現します。
 * また、条件式は、上から順番に試行＞いけそうなら実行、
 * 無理なら下の順番へを、繰り返します。
 * なので、条件が厳しく、優先度が高いものを最上段におくのがセオリーです。
 * 詳しくは、ガンビット　FF12　とかで検索してみてください！理解が深まります。
 * 
 * このプラグインは、以下のプラグインを参考にカスタムしております。
 * この場を借りてプラグインを開発されたすべての作者様に感謝申し上げます。
 * 
 * 技術協力
 * Plasma Dark様
 * 
 * アイデア協力
 * アーヴェル様
 * 
 * プラグインカスタム
 * StateAutoBattle.js   yuwaka様
 * AutoBattle.js        yana様
 * 
 * 使い方
 * 本プラグインをONにしたのち、以下の設定が必要です。
 * １　ガンビットで使用するステートを１つ作ります。　
 *     ステート番号をプラグインに設定します。
 * 　　そのステートは、以下の設定にします。
 * 　　・特殊フラグに「自動戦闘」を追加する。
 * 　　・「戦闘終了時に解除」をチェックする。
 * 　　・「自動解除のタイミング」をなしにする。
 * 　　※「自動戦闘」追加以外は任意項目です。
 *       色々条件を試してみるのも面白いかもしれません。
 * 
 * ２　本プラグイン用の装備タイプを１つ設定します。
 * 　　この装備タイプは、本プラグイン専用となり、ショップや、装備画面
 * 　　ステータス画面で表示されなくなります。
 * 
 * ３　本プラグイン用の防具タイプを２つ設定します。
 * 　　防具タイプ１
 * 　　　条件式用防具タイプ
 * 　　防具タイプ２
 * 　　　ターゲット用防具タイプ
 * 
 * ４　その他、ウィンドウの表示位置や、音なんかは、好みで調整してください。
 * 　　ただし、音、画像はそれぞれ設定しておかないとエラーになります。
 * 　　ダミーでもよいので、なにかファイルをしてしてください。
 * 
 * -----------------------------------------------------------------------------
 * ガンビットの作り方
 * 
 * 本プラグインにて使う項目は、「防具」「アイテム」「スキル」です。
 * メモタグに記載する内容で制御が変わります。
 * 
 * 「条件式」に使う防具への記載方法
 * 記述の仕方
 * <gambit:["項目1","項目2","項目3","項目4"]>
 * 
 * メモタグは、４つの項目にわかれており、それぞれ意味合いがあります。
 * 
 * 項目はすべて、ダブルクオーテーションで囲い、
 * かつ半角英文字大文字、数字、記号で記載します。
 * 
 * 項目１（条件式）
 * セットできる値
 * "ALL"　：条件を設定しません。無条件となります。
 * "TROOP"　：条件の対象を敵とします
 * "PARTY"　：条件の対象を味方とします
 * 
 * 項目２（条件式　詳細）
 * セットできる値
 * "ALIVE_COUNT"　：条件の対象を生きているメンバーの総数とします
 * "BATTLE_COUNT"　：条件の対象をバトル開始からのカウントアップとします　※開始時の値は1
 * 
 * 項目３（比較式）
 * セットできる値
 * "LESS"　：条件の対象を項目２が項目４よりも小さい対象とします
 * "OVER"　：条件の対象を項目２が項目４よりも大きい対象とします
 * "="　：条件の対象を項目２と項目４が等しい対象とします
 * 
 * 項目４（値）
 * セットできる値
 * "数字"   ：項目２，項目３のしきい値及び、指定値として設定します
 * 
 * 以下例文です。コピペしてお使いください！
 * 
 * もし 生きている敵が４体以上　だったら
 * <gambit:["TROOP","ALIVE_COUNT","OVER","3"]>
 * 
 * もし 生きている味方が一人　だったら
 * <gambit:["PARTY","ALIVE_COUNT","OVER","0"]>
 * 
 * もし バトル開始直後（開幕）　だったら
 * <gambit:["","BATTLE_COUNT","=","1"]>
 * 
 * * もし バトル開始から３ターン過ぎたら　だったら
 * <gambit:["","BATTLE_COUNT","OVER","3"]>
 * 
 * いつでも　だったら
 * <gambit:["ALL","","",""]>
 * 
 * 
 * 
 * 「ターゲット」に使う防具への記載方法
 * 記述の仕方
 * <gambit:["項目1","項目2","項目3","項目4"]>
 * 
 * メモタグは、４つの項目にわかれており、それぞれ意味合いがあります。
 * 
 * 項目はすべて、ダブルクオーテーションで囲い、
 * かつ半角英文字大文字、数字、記号で記載します。
 * 
 * 項目１（ターゲット）
 * 味方、敵を設定します。
 * セットできる値
 * "PARTY"　：ターゲットの対象を味方とします
 * "TROOP"　：ターゲットの対象を敵とします
 * "MYSELF"　：ターゲットの対象を自分自身とします
 * 
 * 項目２（プロパティ）
 * 具体的な対象を設定します。
 * セットできる値
 * "HP"　：ガンビットの対象を項目１のHP関連とします
 * "MP"　：ガンビットの対象を項目１のMP関連とします
 * "TP"　：ガンビットの対象を項目１のTP関連とします
 * "HPRATE"　：ガンビットの対象を項目１のHPのレート％関連とします
 * "MPRATE"　：ガンビットの対象を項目１のMPのレート％関連とします
 * "TPRATE"　：ガンビットの対象を項目１のTPのレート％関連とします
 * "ATK"　：ガンビットの対象を項目１の攻撃力関連とします
 * "TYPE"　：ガンビットの対象を項目１のTYPE（属性）関連とします
 * "STATE"　：ガンビットの対象を項目１のSTATE（ステート）関連とします
 * "SELF"　：ガンビットの対象を自分自身とします（項目１のMYSELFと重複出来ません）
 * "DEAD"　：ガンビットの対象を項目１の戦闘不能対象とします
 * "ACTOR"　：ガンビットの対象をACTOR指定とします
 * "LASTTARGET"　：ガンビットの対象を項目１の中で直前のターゲットとします
 * "RANDOM"　：ガンビットの対象を項目１の中でランダム対象とします
 * "DISTANCE_X"　：ガンビットの対象を項目１のX座標関連とします
 * "DISTANCE_Y"　：ガンビットの対象を項目１のY座標関連とします
 * "LEADER"　:ガンビットの対象をパーティ内のリーダー（先頭キャラ）とします
 * "TOGETHER"　：ガンビットの対象を（敵・味方）がターゲットにしている（敵・味方）とします
 * "ONE"　：ガンビットの対象を項目１の１体とします
 *
 *  "ENEMIES"　：生存している敵の数で発動します　対象は、項目１からランダムです（通常、MYSELFが良いと思います）
 * 
 * 項目３（比較式）
 * 具体的な対象を設定します。
 * セットできる値
 * "LESS"　：ガンビットの対象を項目２が項目４よりも小さい対象とします
 * "OVER"　：ガンビットの対象を項目２が項目４よりも大きい対象とします
 * "="　：ガンビットの対象を項目２と項目４が等しい対象とします
 * 
 * 項目４（値）
 * 具体的な対象を設定します。
 * セットできる値
 * "数字"   ：項目２，項目３のしきい値及び、指定値として設定します
 * "MAX"   ：項目１の全対象のうち、項目２の値が最大値をもつターゲットを対象とします
 * "MIN"   ：項目１の全対象のうち、項目２の値が最小値をもつターゲットを対象とします
 * 
 * 
 * 超絶ややこしいですね・・・・
 * 以下に例文を記載します。コピペしてご活用ください！
 * 
 * 例１
 * HPが最も高い敵
 * <gambit:["TROOP","HP","","MAX"]>
 * 
 * HP＜50%の味方
 * <gambit:["PARTY","HPRATE","LESS","50"]>
 * 
 * 自分自身
 * <gambit:["PARTY","SELF","",""]>
 * 
 * アクター１が対象（No1のアクターは１になります）
 * <gambit:["PARTY","ACTOR","","0"]>
 * 　
 * 戦闘不能の味方
 * <gambit:["PARTY","DEAD","",""]>
 * 
 * 毒の味方（ステート４が毒の場合）
 * <gambit:["PARTY","STATE","","4"]>
 * 
 * 炎に弱い（最も効果的な）敵（タイプ２が火炎属性の場合）
 * <gambit:["TROOP","TYPE","OVER","2"]>
 * 
 * 直前のターゲット敵
 * <gambit:["TROOP","LASTTARGET","",""]>
 * 
 * ランダムなターゲット敵
 * <gambit:["TROOP","RANDOM","",""]>
 * 
 * 自分自身のMPが５０％の以上のとき、自分がターゲット
 * <gambit:["MYSELF","MPRATE","OVER","50"]>
 * 
 * 自分自身のステートが毒のとき、自分がターゲット（ステート４が毒の場合）
 * <gambit:["MYSELF","STATE","","4"]>
 * 
 * 自分自身が炎属性に弱いとき、自分がターゲット（タイプ２が火炎属性の場合）
 * <gambit:["MYSELF","TYPE","OVER","2"]>
 * 
 * パーティから最も遠い敵 （敵のX軸は、画面左よりなので、TROOP内の最もX座標が少ない敵が対象）
 * <gambit:["TROOP","DISTANCE_X","","MIN"]>
 * 
 * 最も高い敵 （敵のY軸で、TROOP内の最もY座標が少ない敵が対象）
 * <gambit:["TROOP","DISTANCE_Y","","MIN"]>
 * 
 * リーダー（パーティ内の先頭キャラ）
 * <gambit:["PARTY","LEADER","",""]>
 * 
 * リーダーが狙う敵(0番はリーダー)
 * <gambit:["TROOP","TOGETHER","=","0"]>
 * 
 * 
 * こんな感じですね・・・
 * まだまだ増やしたいです
 * 
 * -----------------------------------------------------------------------------
 * アクションの作り方
 * スキル、アイテムのそれぞれメモタグに以下を記載します。
 * 
 *<gambit:"ACTION">
 * このメモタグがあるアイテムは、ガンビットアクションで選択できるようになります。
 * 
 *<gambit:["CHANGE","1"]>  v0.17.29b以降 ※スキル限定
 * このメモタグがあるスキルは、ガンビットアクションで、自身のセットリストを第２引数の値へ変更します。
 * 
 * -----------------------------------------------------------------------------
 * 現在確認している仕様、バグ
 * ・すべてのガンビットを試していない（汗）のでどんな挙動か理解できていない
 * ・味方へ攻撃をセットできるが、実際に動かない
 * ・バトル時のガンビットボタンの位置を調整出来ない
 * ・バトル中、ガンビットオン、オフを押すと、同一アクターが無限に行動できる（ターン制時）
 * ・バトル中、マニュアルアクション中にガンビットオンすると、同一アクターがもう一度行動する（ターン制時）
 * ・ガンビット　ONEがまだまともに動作しない・・・
 * 
 * -----------------------------------------------------------------------------
 * のこり実現したいこと
 * ・ガンビット種類を増やす　目指せ１００種！
 * ・ポーズ機能の向上、ポーズ中ガンビット一覧表示
 * ・ガンビットセット毎の色変え
 * ・バグの始末・・・・
 * ・
 * -----------------------------------------------------------------------------
 * 【ライセンス】
 * このプラグインは MIT ライセンスで配布です。
 * ご自由にお使いください。
 * 転んでも泣かない！
 * http://opensource.org/licenses/mit-license.php
 * -----------------------------------------------------------------------------
 * 更新履歴
 * バージョンアップルール
 * 修正、バグ修正   + 0.0.1
 * 機能追加         + 0.1.0
 * 
 * 2021/06/07   v0.24.47c   バグ修正    （オートガンビット機能がフリーズする問題）
 * 2021/06/01   v0.24.46c   機能追加    （オートガンビット機能　バトル開始と同時にガンビットを実行する機能）
 * 2021/04/20   v0.23.46c   修正      （ガンビットON/OFF時、アクションの効果が消えてしまう問題　フラグ消し漏れ）
 * 2021/04/20   v0.23.45c   修正      （ガンビットON/OFF時、アクションの効果が消えてしまう問題）
 * 2021/04/20   v0.23.44c   修正      （DTextPicture.jsプラグインが無いとテロップを出さない機能）
 * 2021/04/20   v0.22.44c   修正      （ガンビットログが出るタイミングを調整　アクション直前で出る仕様に変更）
 * 2021/04/20   v0.22.43c   修正      （ガンビットON/OFF時のテロップ＋音を出す機能）
 * 2021/04/17   v0.21.43c   修正      （BattleManager初期化不足問題）
 * 2021/04/14   v0.21.42c   バグ修正  （アイテムリストにガンビットが表示されている問題）
 * 2020/12/24   v0.21.41c   バグ修正　（targetが定義されていない問題）
 * 2020/12/24   v0.21.40c   バグ修正  （IF文が機能しなかった問題）
 * 2020/12/08   v0.21.39c   バグ修正　（店で条件式が無制限に買える問題）
 * 2020/12/08   v0.21.38c   修正    　（大幅仕様変更　IF項目を独立、使い方マニュアル大幅更新）
 * -----過去バージョンとの互換性がなくなりました-----------------------------------------
 * 2020/12/06   v0.20.38b   機能追加　（IF文　実装ｘ２　IF　アクターのターン数が？？　IF　敵の数が？？） 
 * 2020/12/06   v0.18.38b   修正    　（不等式、等式の説明文において　”＝”の記載がなかったものを追加） 
 * 2020/12/04   v0.18.37b   バグ修正　（ガンビット　戦闘不能バグ問題　再） 
 * 2020/12/03   v0.18.36b   バグ修正　（ガンビット　戦闘不能バグ問題） 
 * 2020/12/03   v0.18.35b   バグ修正　（ガンビット　使用不可判定バグ問題） 
 * 2020/12/02   v0.18.34b   バグ修正　（ガンビット　使用不可判定バグ問題）
 * 2020/12/02   v0.18.33b   バグ修正　（ガンビット　ステート判定、使用不可判定問題） 
 * 2020/12/01   v0.18.32b   バグ修正　（ガンビット　アクターの問題） 
 * 2020/11/30   v0.18.31b   バグ修正　（下記機能のバグ） 
 * 2020/11/28   v0.18.30b   バグ修正　（下記機能のバグ） 
 *                          機能追加　（ガンビットセットリストを切り替えるアクションを実装） 
 * 2020/11/27   v0.17.29b   修正    　（ガンビットメニューにクラス表示追加）
 *                          バグ修正　（ガンビット　スキル、アイテム使用可否の問題） 
 * 2020/11/26   v0.17.27b   バグ修正　（ガンビット　味方の問題） 
 *                          バグ修正  （ガンビット　属性の問題）
 *                          バグ修正　（ガンビット　比較式の問題） 
 * 2020/11/21   v0.17.23b   バグ修正　（アクター追加時に_gambitLogWindowsの生成とUPDATEのよびだしズレ問題） 
 *                          修正　ガンビット選択時、３列表示に修正
 *                          バグ修正　（戦闘不能の味方がエラーになる問題）
 *                          バグ修正　（ガンビットがブランクだった場合の問題）
 *                          バグ修正　（ガンビット　OOを狙うOOで、OOが死んだ時の問題）
 * 2020/11/20   v0.17.18b   機能追加　ショップにてガンビットを販売した場合、一個しか買えない仕様
 *                          機能追加　ガンビット「TOGETHR」
 *                          修正　ガンビットメニュー修正（選択後、コマンドに戻る際、ハイライトが消えない問題）
 *                          バグ修正　（「TOGETHR」でevalのエラーになる問題)
 *                          機能追加　プラグインコマンド（addGambitSlotALL）全員のガンビットスロットを増やす機能
 *                          機能追加　プラグインコマンド（addGambitSlotFROMTOPACTOR)全員のガンビットスロットを最大値に合わせる
 *                          バグ修正　（「TOGETHR」でevalのエラーになる問題　再び)
 * 2020/11/12   v0.14.15b   機能追加　ガンビット「LEADER」 
 *                          機能追加　ガンビットが無い場合の文字列をパラメータに設定
 *                          修正　ガンビットログの致命的なバグを修正
 * 2020/11/11   v0.12.14b   修正　ガンビットが無い場合の挙動を整形 
 * 2020/11/10   v0.12.13b   バグ修正（バトル中にアクター増減した際、動作しない問題） 
 * 2020/11/10   v0.12.12b   修正　アイテム画面からガンビット対象を非表示に
 * 2020/11/08   v0.12.11b   修正　装備画面、ステータス画面からガンビット対象スロットを非表示に
 * 2020/11/06   v0.12.10b   バグ修正（ガンビットスロット追加が動作しない問題）
 *                          バグ修正（プラグインコマンドが動作しない問題）
 * 2020/10/28   v0.12.8b    機能追加　ポーズを暫定実装（画面を暗くする、バトルを止める）
 * 2020/10/27   v0.11.8b    バグ修正 
 * 2020/10/26   v0.11.7b    機能追加　ガンビットログを本実装（単体表示対応） 
 * 2020/10/22   v0.10.7b    機能追加　ガンビットウィンドウのフレーム表示ONOFFパラメータ化 
 *                          機能追加　ガンビットログのONOFFを追加
 *                          機能追加　ガンビットログの座標をパラメータ化 
 * 2020/10/22   v0.7.7b     機能追加　ガンビットログを実装
 *                          バグ修正　セットリストに一切アイテムをセットしていないと起こるエラーを修正
 *                          バグ修正　逃げる時に起こるエラーを修正
 *                          機能追加　メインメニューの選択中ガンビットセットとバトル中セットを区別
 *                          バグ修正　（ガンビットの初期化において致命的な問題）
 *                          機能追加　バトル時のセットリストにFACEを表示
 *                          機能追加　アクター単位でガンビットクラウンを追加
 *                          機能追加　ガンビット「DISTANCE_X」「DISTANCE_Y」
 *                          バグ修正
 * 2020/10/21   v0.3.3b     機能追加　アクター単位でのガンビットオン、オフ切り替え実装
 * 2020/10/19   v0.2.3b     機能追加　ガンビット「MYSELF」
 *                          修正　過去コードの不要部分削除
 *                          修正　「バトル時のパーティコマンドへガンビットの追加」を削除
 *                          修正　meta仕切り# > :
 * 2020/10/19   v0.1.3b     仕様大幅変更
 * 2020/10/18   v0.1.0b     こっそり公開・・・
 *
 * 
 * それでは皆様、よいツクールライフを！
 * 実装頑張ってください！
 * -----------------------------------------------------------------------------
 */

var Imported = Imported || {};
Imported.MKB_Gambit_SystemMZ = true;

var MKB = MKB || {};
MKB.Gambit = MKB.Gambit || {};

(function (exports) {
    'use strict';
    exports.Param = (function () {
        var ret = {};
        var parameters = PluginManager.parameters("MKB_Gambit_SystemMZ");
        ret.ShowMenuCommand = Boolean(parameters["Show Command"] === "true" || false);
        ret.MenuCommandName = String(parameters["Command Name"]);
        ret.GAMBIT_SETNAME = String(parameters["Setname of gambit"]);
        ret.GAMBIT_SETNAME_1 = String(parameters["Setname 1"]);
        ret.GAMBIT_SETNAME_2 = String(parameters["Setname 2"]);
        ret.GAMBIT_SETNAME_3 = String(parameters["Setname 3"]);
        ret.MenuCommandEnableSwitchId = Number(parameters["Enable Switch Id"]);
        ret.AutoGambitEnableSwitchId = Number(parameters["Enable Switch Id autoGambit"] || 0);
        ret.Gambit_equipType = Number(parameters["Type of equip"]);
        ret.Gambit_IF_armorType = Number(parameters["Type of armor IF"]);
        ret.Gambit_TARGET_armorType = Number(parameters["Type of armor TARGET"]);
        ret.autosuteid = Number(parameters['autosuteid'] || 11);
        ret.gambitcommandname = parameters['gambitcommandname'] || 'ガンビット';
        ret.Gambit_ITEMWORD = "ACTION";
        ret.Gambit_CHANGEWORD = "CHANGE";
        ret.Gambit_ACTION_FOR_PARTY = "PARTY";
        ret.Gambit_ACTION_FOR_TROOP = "TROOP";
        ret.Gambit_ACTION_FOR_ME = "MYSELF";
        ret.autoBattleUsableMessage = String(parameters['Auto Battle Usable Message'] || 'ガンビット！　Shiftで解除');
        ret.autoBattleMessage = String(parameters['Auto Battle Message'] || 'Shiftでガンビット！');
        ret.autoBattleKey = String(parameters['Auto Battle Key'] || 'shift');
        ret.GAMBIT_PAUSE_KEY = String(parameters['Pause Key'] || 'control');
        ret.GAMBIT_WINDOW_FRAME = Boolean(parameters["Show GAMBITWINDOW FRAME"] === "true" || false);
        ret.gambitSEname1 = (parameters['gambitSE1'] || 'Ok');
        ret.gambitSEvolume1 = Number(parameters['volume1'] || 90);
        ret.gambitSEpitch1 = Number(parameters['pitch1'] || 100);
        ret.gambitWindowX = Number(parameters['Auto Battle X'] || 400);
        ret.gambitWindowY = Number(parameters['Auto Battle Y'] || 0);
        ret.GAMBIT_CROWNNAME = (parameters['Gambit Crown Name'] || 'Ok');
        ret.GAMBIT_CROWN_X = Number(parameters['Gambit Crown X'] || 25);
        ret.GAMBIT_CROWN_Y = Number(parameters['Gambit Crown Y'] || -60);
        ret.GAMBIT_LOG = Boolean(parameters["Show GambitLog"] === "true" || false);
        ret.GAMBIT_LOG_X = Number(parameters['GambitLog X'] || 340);
        ret.GAMBIT_LOG_Y = Number(parameters['GambitLog Y'] || 128);
        ret.GAMBIT_LOG_ROW = Number(parameters['GambitLog Row'] || 32);
        ret.GAMBIT_LOG_FONTSIZE = Number(parameters['GambitLog FontSize'] || 24);
        ret.GAMBIT_LOG_NOGAMBIT = String(parameters['GambitLog NonGambit'] || 'ガンビットがないよ！');
        ret.GAMBIT_CHANGEMESSAGE = Boolean(parameters["Show GambitChangeMessage"] === "true" || false);
        ret.GAMBIT_CHANGEMESSAGE_OBI = (parameters['GambitChangeMessage Obi'] || 'obi');
        ret.GAMBIT_PICNUMBER_OBI = Number(parameters['GambitPicNumber obi'] || 29);
        ret.GAMBIT_PICNUMBER_TEXT = Number(parameters['GambitPicNumber text'] || 30);
        ret.GAMBIT_CHANGEMESSAGE_TEXT_ON = String(parameters['GambitChangeMessage Text_ON'] || 'ガンビットモード！');
        ret.GAMBIT_CHANGEMESSAGE_TEXT_OFF = String(parameters['GambitChangeMessage Text_OFF'] || 'マニュアルモード！');
        ret.GAMBIT_CHANGEMESSAGE_SE = Boolean(parameters["PlaySE GambitChangeMessage"] === "true" || false);
        ret.GAMBIT_CHANGEMESSAGE_SE1 = (parameters['gambitChangeSE1'] || 'Ok');
        ret.GAMBIT_CHANGEMESSAGE_SE_VOL = Number(parameters['gambitChangeVolume1'] || 90);
        ret.GAMBIT_CHANGEMESSAGE_SE_PIT = Number(parameters['gambitChangePitch1'] || 100);
        return ret;
    })();

    //=============================================================================
    /** Window_MenuCommand */
    //=============================================================================
    (function () {
        const base = Window_MenuCommand.prototype.addOriginalCommands;
        Window_MenuCommand.prototype.addOriginalCommands = function () {
            base.call(this);
            if (exports.Param.ShowMenuCommand) {
                const enabled = (exports.Param.MenuCommandEnableSwitchId === 0) ? true : $gameSwitches.value(exports.Param.MenuCommandEnableSwitchId);
                this.addCommand(exports.Param.MenuCommandName, "gambit", enabled);
            }
        };
    }());

    //=============================================================================
    /** Scene_Menu */
    //=============================================================================
    (function () {
        const base = Scene_Menu.prototype.createCommandWindow;
        Scene_Menu.prototype.createCommandWindow = function () {
            base.call(this);
            this._commandWindow.setHandler("gambit", this.commandPersonal.bind(this));
        };
    }());

    (function () {
        const base = Scene_Menu.prototype.onPersonalOk;
        Scene_Menu.prototype.onPersonalOk = function () {
            switch (this._commandWindow.currentSymbol()) {
                case "gambit":
                    this._commandWindow.close();
                    SceneManager.push(Scene_Gambit);
                    break;
                default:
                    base.call(this);
                    break;
            }
        };
    }());

    //=============================================================================
    // Game_Interpreter
    //=============================================================================
    // Change Party Member
    let _MKB_Game_Interpreter_command129 = Game_Interpreter.prototype.command129;
    Game_Interpreter.prototype.command129 = function (params) {
        _MKB_Game_Interpreter_command129.call(this, params);
        if ($gameParty.inBattle()) {
            //ここにメンバー交代時の初期化メソッドを入れる
            $gameParty._actorChangeAction = true;
        }
        return true;
    };

    //=============================================================================
    // ColorManager
    //=============================================================================
    // 新しいアイテム背景色の定義です。必要なだけ定義します。
    ColorManager.MKB_Bule_Color = function () {
        return "rgba(125, 200, 255, 1)";
    };
    ColorManager.MKB_Red_Color = function () {
        return "rgba(255, 125, 125, 1)";
    };
    ColorManager.MKB_Yellow_Color = function () {
        return "rgba(200, 200, 125, 1)";
    };
    ColorManager.MKB_Gray_Color = function () {
        return "rgba(125, 125, 125, 1)";
    };
    ColorManager.MKB_White_Color = function () {
        return "rgba(255, 255, 255, 1)";
    };
    ColorManager.MKB_Black_Color = function () {
        return "rgba(50, 50, 60, 1)";
    };

    //=============================================================================
    // DataManager
    //=============================================================================
    //
    MKB.Gambit.DatabaseLoaded = false;
    MKB.Gambit.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
    DataManager.isDatabaseLoaded = function () {
        if (!MKB.Gambit.DataManager_isDatabaseLoaded.call(this)) return false;
        if (!MKB.Gambit.DatabaseLoaded) {
            DataManager.MKBActorNotetags($dataActors);
            MKB.DatabaseLoaded = true;
        }
        return true;
    };

    DataManager.MKBActorNotetags = function (group) {
        for (let n = 1; n < group.length; n++) {
            let obj = group[n];
            obj.gambits = Object.create(Game_Item.prototype);
            obj.gambit_Max;
            obj.gambitNow;
            obj.gambitSetIndex;
            obj.gambitMode = Object.create(Game_Item.prototype);
        }
    };

    const _DataManager_extractMetadata = DataManager.extractMetadata;
    DataManager.extractMetadata = function (data) {
        _DataManager_extractMetadata.call(this, data);
        if (data.meta.gambit) {
            data.meta.gambit = JSON.parse(data.meta.gambit);
        }
    };

    //=============================================================================
    //PluginManager
    //=============================================================================
    const pluginName = "MKB_Gambit_SystemMZ";
    PluginManager.registerCommand(pluginName, "OpenGambitMenu", args => {
        SceneManager.push(Scene_Gambit);
    });

    PluginManager.registerCommand(pluginName, "addGambitSlot", args => {
        const id = Number(args.gambitActorId);
        for (let i = 0; i < $gameParty.members().length; i++) {
            const actor = $gameParty.members()[i];
            if (actor._actorId === id) {
                if (actor) {
                    const addNum = Number(args.gambitAddNumber) * 4;
                    actor._gambit_Max = actor._gambit_Max + addNum;
                    const slots = actor.equipSlotsGambit();
                    const maxSlots = actor._gambit_Max;
                    for (let j = 0; j < 4; j++) {
                        for (let i = 0; i < addNum; i++) {
                            let tsuika = new Game_Item();
                            tsuika._canUse = true;
                            actor._gambitMode[j].push(tsuika);
                        }
                    }
                };
            };
        };
    });
    PluginManager.registerCommand(pluginName, "addGambitSlotALL", args => {
        const id = Number(args.gambitActorId);
        for (let i = 0; i < $gameParty.members().length; i++) {
            const actor = $gameParty.members()[i];
            if (actor) {
                const addNum = Number(args.gambitAddNumber) * 4;
                actor._gambit_Max = actor._gambit_Max + addNum;
                const slots = actor.equipSlotsGambit();
                const maxSlots = actor._gambit_Max;
                for (let j = 0; j < 4; j++) {
                    for (let i = 0; i < addNum; i++) {
                        let tsuika = new Game_Item();
                        tsuika._canUse = true;
                        actor._gambitMode[j].push(tsuika);
                    }
                };
            };
        };
    });
    PluginManager.registerCommand(pluginName, "addGambitSlotFROMTOPACTOR", args => {
        const maxSlotsActor = $gameParty.members().reduce((a, b) => { return a && a._gambit_Max > b._gambit_Max ? a : b; }, null);
        for (let i = 0; i < $gameParty.members().length; i++) {
            const actor = $gameParty.members()[i];
            if (actor._gambit_Max < maxSlotsActor._gambit_Max) {
                const addNum = maxSlotsActor._gambit_Max - actor._gambit_Max;
                actor._gambit_Max += addNum;
                const slots = actor.equipSlotsGambit();
                const maxSlots = actor._gambit_Max;
                for (let j = 0; j < 4; j++) {
                    for (let i = 0; i < addNum; i++) {
                        let tsuika = new Game_Item();
                        tsuika._canUse = true;
                        actor._gambitMode[j].push(tsuika);
                    }
                };
            };
        };
    });

    //=============================================================================
    //BattlenManager
    //=============================================================================
    var _MKB_BManager_startBattle = BattleManager.startBattle;
    BattleManager.startBattle = function () {
        _MKB_BManager_startBattle.call(this);
        if (exports.Param.AutoGambitEnableSwitchId > 0 && $gameSwitches.value(exports.Param.AutoGambitEnableSwitchId)) {
            //this.gambit_ON();
            //BattleManager.autoBattleDeactivateGambit();
            BattleManager._gambitWait = false;
            BattleManager.autoBattleActivateGambit();
            //BattleManager._gambitWait = true;
            console.log("オートモードのはず",BattleManager.isAutoBattleGambit());
        } else {
            BattleManager.autoBattleDeactivateGambit();
            BattleManager._gambitWait = false;
        }

    }

    //アクターやエネミーのアクションが終わった際に呼ばれる this._subjectがnullになる
    const _MKB_BattleManager_endAction = BattleManager.endAction;
    BattleManager.endAction = function () {
        _MKB_BattleManager_endAction.apply(this, arguments);
    };

    BattleManager.startAutoBattleGambit = function () {
        $gameParty.members().forEach(function (actor) {
            if (actor._gambitNow != 0) {
                actor.addState(exports.Param.autosuteid);
            }
        });
        BattleManager.updateTurnEnd();
        if (BattleManager.isInputting()) {
            this.startTurn()
        }
    };

    BattleManager.isAutoBattleGambit = function () {
        return this._autoBattleGambit;
    };

    BattleManager.autoBattleActivateGambit = function () {
        this._autoBattleGambit = true;
    };

    BattleManager.autoBattleDeactivateGambit = function () {
        this._autoBattleGambit = false;
    };

    var _MKB_BManager_startTurn = BattleManager.startTurn;
    BattleManager.startTurn = function () {
        _MKB_BManager_startTurn.call(this);
    };

    BattleManager.isAutoBattleGambitChange = function () {
        return this._gambitWindows;
    };

    BattleManager.autoBattleActivateGambitChange = function () {
        this._gambitWindows = true;
    };

    BattleManager.autoBattleDeactivateGambitChange = function () {
        this._gambitWindows = false;
    };

    BattleManager.isGambitWait = function () {
        return this._gambitWait;
    }

    //=============================================================================
    // Sprite_Battler
    //  ガンビットクラウンをアクター単位で用意します
    //=============================================================================
    let _MKB_Sprite_Actor_prototype_createMainSprite = Sprite_Actor.prototype.createMainSprite;
    Sprite_Actor.prototype.createMainSprite = function () {
        _MKB_Sprite_Actor_prototype_createMainSprite.apply(this, arguments);
        this.createGambitSprite();
    };

    Sprite_Actor.prototype.createGambitSprite = function () {
        this._gambitSprite = new Sprite();
        this._gambitSprite.bitmap = ImageManager.loadSystem(exports.Param.GAMBIT_CROWNNAME);
        this._gambitSprite.anchor.x = 0.5;
        this._gambitSprite.anchor.y = 0.5;
        this._gambitSprite.x = exports.Param.GAMBIT_CROWN_X;
        this._gambitSprite.y = exports.Param.GAMBIT_CROWN_Y;
        this._gambitSprite.visible = false;
        this.addChild(this._gambitSprite);
    };

    let _MKB_Sprite_Actor_prototype_update = Sprite_Actor.prototype.update;
    Sprite_Actor.prototype.update = function () {
        _MKB_Sprite_Actor_prototype_update.apply(this, arguments);
        if (this._actor) {
            if (this._actor._gambitNow > 0 && BattleManager.isAutoBattleGambit()) {
                this._gambitSprite.visible = true;
            } else {
                this._gambitSprite.visible = false;
            }
        }
    };

    //=============================================================================
    // Game_Actor
    //=============================================================================
    let _MKB_Gambit_Game_Actor_initMembers = Game_Actor.prototype.initMembers;
    Game_Actor.prototype.initMembers = function () {
        _MKB_Gambit_Game_Actor_initMembers.call(this);
        this._gambit_Max = 13;//kaihen
        this._gambitNow = 1;
        this._gambitSetIndex = 1;
        this._gambitMode = [];
        this._gambitLogId = 0;
    };

    let _MKB_Gambit_Game_Actor_setup = Game_Actor.prototype.setup;
    Game_Actor.prototype.setup = function (actorId) {
        _MKB_Gambit_Game_Actor_setup.call(this, actorId);
        const actor = $dataActors[actorId];
        this.initEquipsGambit(actor.gambits);
    };

    Game_Actor.prototype.gambits = function () {
        return this._gambitMode[this._gambitSetIndex].map(item => item.object());
    };

    Game_Actor.prototype.initEquipsGambit = function (gambits) {
        const slots = this.equipSlotsGambit();
        const maxSlots = this._gambit_Max;
        this._gambitMode = [];
        for (let i = 0; i < 4; i++) {
            let tsuika = [];
            for (let i = 0; i < maxSlots; i++) {
                tsuika[i] = new Game_Item();
                tsuika[i]._canUse = true;
            }
            this._gambitMode[i] = tsuika;
        }
        for (let j = 0; j < gambits.length; j++) {
            if (j < maxSlots) {
                this._gambitMode[this._gambitSetIndex][j].setEquipGmabit(slots[j] === 1, gambits[j]);
            }
        }
        this.releaseUnequippableItemsGambit(true);
        this.refresh();
    };

    Game_Actor.prototype.equipSlotsGambit = function () {
        const slots = [];
        for (let i = 1; i < this._gambit_Max; i++) {
            slots.push(i);
        }
        return slots;
    };

    Game_Actor.prototype.releaseUnequippableItemsGambit = function (forcing) {
        for (; ;) {
            const slots = this.equipSlotsGambit();
            const gambits = this.gambits();
            let changed = false;
            for (let i = 0; i < gambits.length; i++) {
                const item = gambits[i];
                if (item && (!this.canEquip(item) || item.etypeId !== slots[i])) {
                    if (!forcing) {
                        this.tradeItemWithPartyGambit(null, item);
                    }
                    this._gambitMode[this._gambitSetIndex][i].setObjectGambit(null);
                    changed = true;
                }
            }
            if (!changed) {
                break;
            }
        }
    };

    Game_Actor.prototype.clearEquipmentsGambit = function () {
        const maxSlots = this.equipSlotsGambit().length;
        for (let i = 0; i < maxSlots; i++) {
            this.changeEquipGambit(i, null);
        }
    };

    Game_Actor.prototype.changeEquipGambit = function (slotId, item) {
        /*if (
            this.tradeItemWithPartyGambit(item, this.gambits()[slotId]) &&
            (!item || this.equipSlotsGambit()[slotId] === item.etypeId)
        ) {*/
        //this._gambits[slotId].setObjectGambit(item);
        this._gambitMode[this._gambitSetIndex][slotId].setObjectGambit(item);
        this.refresh();
        //}
    };

    Game_Actor.prototype.tradeItemWithPartyGambit = function (newItem, oldItem) {
        if (newItem && !$gameParty.hasItem(newItem)) {
            return false;
        } else {
            $gameParty.gainItem(oldItem, 1);
            $gameParty.loseItem(newItem, 1);
            return true;
        }
    };

    //以下battle シーンで使う
    let _MKB_Gambit_Game_Actor_makeActions = Game_Actor.prototype.makeActions;
    Game_Actor.prototype.makeActions = function () {
        _MKB_Gambit_Game_Actor_makeActions.call(this);
        if (this.numActions() > 0) {
            this.setActionState("undecided");
        } else {
            this.setActionState("waiting");
        }
        if (this.isAutoBattle()) {
            this.makeAutoBattleActionsGambit();
        } else if (this.isConfused()) {
            this.makeConfusionActions();
        }
    };

    Game_Actor.prototype.playSE_Gambit = function () {//ガンビット音を出す
        const se = {
            name: exports.Param.gambitSEname1,
            pan: 0,
            pitch: exports.Param.gambitSEpitch1,
            volume: exports.Param.gambitSEvolume1,
        }
        AudioManager.playSe(se);
    }

    Game_Actor.prototype.makeAutoBattleActionsGambit = function () {
        //ガンビット実行時の音を出す
        this.playSE_Gambit();
        //actor_gambit arrayからデータを抽出して、ガンビットとアクション配列をもつ
        let gIfCMD = new Array;
        let gambitCMD = new Array;
        let gActionCMD = new Array;
        for (let i = 1; i < this._gambit_Max; i += 4) {//ガンビットをセットリストの中から抽出する　３つの配列を作る
            const ifId = this._gambitMode[this._gambitNow][i]._itemId;
            const gambitId = this._gambitMode[this._gambitNow][i + 1]._itemId;
            const actionId = this._gambitMode[this._gambitNow][i + 2]._itemId;
            if (ifId != 0 && gambitId != 0 && actionId != 0) {
                gIfCMD.push(this._gambitMode[this._gambitNow][i]);
                gambitCMD.push(this._gambitMode[this._gambitNow][i + 1]);
                gActionCMD.push(this._gambitMode[this._gambitNow][i + 2]);
            }
        }
        //アクションをひとつ作る
        let skillAction = new Game_Action(this);
        const actionForTroop = exports.Param.Gambit_ACTION_FOR_TROOP;
        const actionForParty = exports.Param.Gambit_ACTION_FOR_PARTY;
        const actionForMe = exports.Param.Gambit_ACTION_FOR_ME;
        let actionName;
        let gambitName;
        let ifName;
        let troopOrParty;
        let changeSetList = -1;
        //ガンビット決定プロセスループ
        for (let i = 0; i < gambitCMD.length; i++) {
            gambitName = "";
            actionName = "";
            ifName = "";
            console.log("ガンビット行", i)
            if (gambitCMD[i]._canUse) {//そもそも　その行が使えるか
                const gifX = $dataArmors[gIfCMD[i]._itemId].meta.gambit;
                let checkIf = true;
                checkIf = this.checkIfGambit(gifX);
                if (checkIf) {//IFがあったら無事通過すること
                    const gambitX = $dataArmors[gambitCMD[i]._itemId].meta.gambit;
                    switch (gambitX[0]) {
                        case actionForTroop:
                            troopOrParty = "$gameTroop.aliveMembers()";
                            const hanteiTroopX = this.makeGambit(troopOrParty, gambitX, this);
                            if (hanteiTroopX > -2) {//ここでガンビットは確定するので、次はアクションを判定する
                                gambitName = $dataArmors[gambitCMD[i]._itemId].name;
                                let itemId = -1;
                                switch (gActionCMD[i]._dataClass) {
                                    case "skill":
                                        if (this.canUse($dataSkills[gActionCMD[i]._itemId])) {
                                            itemId = i;
                                            skillAction.setSkill(gActionCMD[i]._itemId);//そのスキルをガンビットアクションにセット
                                            if (this.checkItem(skillAction, $gameTroop.members()[hanteiTroopX])) {//有効性チェック
                                                actionName = $dataSkills[gActionCMD[i]._itemId].name;
                                                skillAction._targetIndex = hanteiTroopX;//ガンビットをセット
                                                changeSetList = this.canChangeSetList(gActionCMD[i]);
                                                i = gambitCMD.length;//アクションネームが決まったのでループ終了
                                            }
                                        }
                                        break;
                                    case "item":
                                        if (this.canUse($dataItems[gActionCMD[i]._itemId])) {
                                            itemId = i;
                                            skillAction.setItem(gActionCMD[i]._itemId);//そのアイテムをガンビットアクションにセット
                                            if (this.checkItem(skillAction, $gameTroop.members()[hanteiTroopX])) {//有効性チェック
                                                actionName = $dataItems[gActionCMD[i]._itemId].name;
                                                skillAction._targetIndex = hanteiTroopX;//ガンビットをセット
                                                i = gambitCMD.length;//アクションネームが決まったのでループ終了
                                            }
                                        }
                                        break;
                                    default:
                                        break;
                                }
                            }
                            break;
                        case actionForParty:
                            troopOrParty = "$gameParty.aliveMembers()";
                            const hanteiPartyX = this.makeGambit(troopOrParty, gambitX, this);//ガンビット確定
                            gambitName = $dataArmors[gambitCMD[i]._itemId].name;
                            if (hanteiPartyX > -1) {
                                let itemId = -1;
                                switch (gActionCMD[i]._dataClass) {
                                    case "skill":
                                        if (this.canUse($dataSkills[gActionCMD[i]._itemId])) {//そのスキルが使えるか確認する
                                            itemId = i;
                                            skillAction.setSkill(gActionCMD[i]._itemId);//そのスキルをガンビットアクションにセット
                                            if (this.checkItem(skillAction, $gameParty.members()[hanteiPartyX])) {//有効性チェック
                                                actionName = $dataSkills[gActionCMD[i]._itemId].name;
                                                skillAction._targetIndex = hanteiPartyX;//ガンビットをセット
                                                changeSetList = this.canChangeSetList(gActionCMD[i]);
                                                i = gambitCMD.length;//アクションネームが決まったのでループ終了
                                            }
                                        }
                                        break;
                                    case "item":
                                        if (this.canUse($dataItems[gActionCMD[i]._itemId])) {
                                            itemId = i;
                                            skillAction.setItem(gActionCMD[i]._itemId);//そのアイテムをガンビットアクションにセット
                                            if (this.checkItem(skillAction, $gameParty.members()[hanteiPartyX])) {//有効性チェック
                                                actionName = $dataItems[gActionCMD[i]._itemId].name;
                                                skillAction._targetIndex = hanteiPartyX;//ガンビットをセット
                                                i = gambitCMD.length;//アクションネームが決まったのでループ終了
                                            }
                                        }
                                        break;
                                    default:
                                        break;
                                }
                            }
                            break;
                        case actionForMe:
                            troopOrParty = "$gameParty.aliveMembers().find((v) => v._actorId === this._actorId)";
                            const hanteiSelfX = this.makeGambit(troopOrParty, gambitX, this);//ガンビット確定
                            gambitName = $dataArmors[gambitCMD[i]._itemId].name;
                            if (hanteiSelfX != -1) {
                                let itemId = -1;
                                switch (gActionCMD[i]._dataClass) {
                                    case "skill":
                                        if (this.canUse($dataSkills[gActionCMD[i]._itemId])) {//そのスキルが使えるか確認する
                                            itemId = i;
                                            skillAction.setSkill(gActionCMD[i]._itemId);//そのスキルをガンビットアクションにセット
                                            if (this.checkItem(skillAction, $gameParty.members()[hanteiSelfX])) {//有効性チェック 
                                                actionName = $dataSkills[gActionCMD[i]._itemId].name;
                                                skillAction._targetIndex = hanteiSelfX;//ガンビットをセット
                                                changeSetList = this.canChangeSetList(gActionCMD[i]);
                                                i = gambitCMD.length;//アクションネームが決まったのでループ終了  
                                            }
                                        }
                                        break;
                                    case "item":
                                        if (this.canUse($dataItems[gActionCMD[i]._itemId])) {
                                            itemId = i;
                                            skillAction.setItem(gActionCMD[i]._itemId);//そのアイテムをガンビットアクションにセット
                                            if (this.checkItem(skillAction, $gameParty.members()[hanteiSelfX])) {//有効性チェック
                                                actionName = $dataItems[gActionCMD[i]._itemId].name;
                                                skillAction._targetIndex = hanteiSelfX;//ガンビットをセット
                                                i = gambitCMD.length;//アクションネームが決まったのでループ終了
                                            }
                                        }
                                        break;
                                    default:
                                        break;
                                }
                            }
                            break;
                        default:
                            break;
                    }
                }
            }
        }
        this._gambitLogFlag = true;
        this._gambitLogId = this._actorId;
        this._gambitResult = gambitName + " > " + actionName;
        if (changeSetList != -1) {
            this._gambitNow = changeSetList;
        } else {
            if (!gambitName || !actionName) {//結果うまくいかない場合は防御ね
                gambitName = "";
                actionName = "";
                skillAction.setSkill(2);
                skillAction._targetIndex = -1;
                actionName = $dataSkills[2].name;
                this._gambitResult = exports.Param.GAMBIT_LOG_NOGAMBIT;
            }
        }
        this.setAction(0, skillAction);//ここでガンビットを確定する
        this.setActionState("waiting");
    };

    Game_Actor.prototype.checkIfGambit = function (gambitX) {
        const x_item = gambitX[0];//IF文対象グループ
        const x_item1 = gambitX[1];//IF文プロパティ
        const x_item2 = gambitX[2];//IF文比較式
        const x_item3 = gambitX[3];//IF文値
        let hantei = true;
        let troopOrParty;
        let targetIf;
        let shiki;
        let atai;
        switch (x_item) {
            case "ALL":
                return hantei;
            case "TROOP":
                troopOrParty = "$gameTroop.aliveMembers()";
                break;
            case "PARTY":
                troopOrParty = "$gameParty.aliveMembers()";
                break;
            default:
                break;
        }
        switch (x_item1) {
            case "ALIVE_COUNT"://現在の生存者の数
                targetIf = ".length";
                break;
            case "BATTLE_COUNT"://現在のバトル進捗カウント
                if (BattleManager.isTpb()) {
                    troopOrParty = "";
                    targetIf = "this._tpbTurnCount";
                }
                break;
            default:
                break;
        }
        switch (x_item2) {
            case "OVER":
                shiki = ">";
                break;
            case "LESS":
                shiki = "<";
                break;
            case "="://HP
                shiki = "==";
                break;
            default:
                break;
        }
        atai = x_item3;
        hantei = eval(troopOrParty + targetIf + shiki + atai);
        return hantei;
    }

    Game_Actor.prototype.checkItem = function (action, target) {
        if (!target) {
            return false;
        }
        if (target.isDead()) {//ターゲットは死んでいる
            //アクションアイテムの中に蘇生関係（add state1）があるかチェックする
            if (action.item().effects.some(b => b.dataId === 1 && b.code === Game_Action.EFFECT_REMOVE_STATE)) {//含まれている
                return action.hasItemAnyValidEffects_MKB(target);
            } else {
                return false;
            }
        }
        //生きている時の分岐　effectsコードの一覧を取得する
        let hantei = false;
        const recoverHP = action.item().effects.filter(item => item.code === Game_Action.EFFECT_RECOVER_HP);//bob
        const recoverMP = action.item().effects.filter(item => item.code === Game_Action.EFFECT_RECOVER_MP);//bob
        const gainTP = action.item().effects.filter(item => item.code === Game_Action.EFFECT_GAIN_TP);//bob
        const addState = action.item().effects.filter(item => item.code === Game_Action.EFFECT_ADD_STATE);//bob
        const removeState = action.item().effects.filter(item => item.code === Game_Action.EFFECT_REMOVE_STATE);//bob
        const addBuff = action.item().effects.filter(item => item.code === Game_Action.EFFECT_ADD_BUFF);//bob
        const addDebuff = action.item().effects.filter(item => item.code === Game_Action.EFFECT_ADD_DEBUFF);//bob
        const removeBuff = action.item().effects.filter(item => item.code === Game_Action.EFFECT_REMOVE_BUFF);//bob
        const removeDebuff = action.item().effects.filter(item => item.code === Game_Action.EFFECT_REMOVE_DEBUFF);//bob
        //console.log(recoverHP, recoverMP, gainTP, addState, removeState, addBuff, addDebuff, removeBuff, removeDebuff);
        if (recoverHP.length || recoverMP.length || action.isHpRecover() || action.isMpRecover()) {
            if ((target.hp < target.mhp) || (target.mp < target.mmp)) {
                hantei = true;
            }
        }
        if (addState.length || removeState.length || addBuff.length || addDebuff.length || removeBuff.length || removeDebuff.length) {
            if (action.hasItemAnyValidEffects_MKB(target)) {
                hantei = true;
            }
        }
        if (action.isDrain()) {
            hantei = true;
        }
        if (action.isDamage()) {
            hantei = true;
        }
        return hantei;
    }

    //ここだけ Game_Action
    Game_Action.prototype.hasItemAnyValidEffects_MKB = function (target) {
        return this.item().effects.some(effect =>
            this.testItemEffect_MKB(target, effect)
        );
    };

    Game_Action.prototype.testItemEffect_MKB = function (target, effect) {
        switch (effect.code) {
            case Game_Action.EFFECT_RECOVER_HP:
                return (
                    target.hp < target.mhp || effect.value1 < 0 || effect.value2 < 0
                );
            case Game_Action.EFFECT_RECOVER_MP:
                return (
                    target.mp < target.mmp || effect.value1 < 0 || effect.value2 < 0
                );
            case Game_Action.EFFECT_ADD_STATE:
                return !target.isStateAffected(effect.dataId);
            case Game_Action.EFFECT_REMOVE_STATE:
                return target.isStateAffected(effect.dataId);
            case Game_Action.EFFECT_ADD_BUFF:
                return !target.isMaxBuffAffected(effect.dataId);
            case Game_Action.EFFECT_ADD_DEBUFF:
                return !target.isMaxDebuffAffected(effect.dataId);
            case Game_Action.EFFECT_REMOVE_BUFF:
                return target.isBuffAffected(effect.dataId);
            case Game_Action.EFFECT_REMOVE_DEBUFF:
                return target.isDebuffAffected(effect.dataId);
            case Game_Action.EFFECT_LEARN_SKILL:
                return target.isActor() && !target.isLearnedSkill(effect.dataId);
            default:
                return true;
        }
    };

    Game_Actor.prototype.canChangeSetList = function (item) {
        let x = -1;
        const items = $dataSkills[item._itemId].meta.gambit;
        if (Array.isArray(items)) {
            if (items[0] == exports.Param.Gambit_CHANGEWORD) {
                x = Number(items[1]);
            }
        }
        return x;
    };

    Game_Actor.prototype.makeGambit = function (troopOrParty, gambitX, actor) {//敵ガンビットセット
        let target;
        let item2;
        const x_item1 = gambitX[1];//ガンビットプロパティ
        const x_item2 = gambitX[2];//ガンビット比較式
        const x_item3 = gambitX[3];//ガンビット値
        switch (x_item2) {
            case "OVER":
                item2 = ">";
                break;
            case "LESS":
                item2 = "<";
                break;
            case "="://HP
                item2 = "==";
                break;
            default:
                break;
        }
        switch (x_item1) {
            case "HP"://現在のHP
                target = this.selectOne(troopOrParty, 'hp', item2, x_item3);
                break;
            case "MP"://現在のMP
                target = this.selectOne(troopOrParty, 'mp', item2, x_item3);
                break;
            case "TP"://現在のTP
                target = this.selectOne(troopOrParty, 'tp', item2, x_item3);
                break;
            case "HPRATE"://現在のHPRATE
                target = this.selectOne(troopOrParty, 'hpRate()', item2, x_item3);
                break;
            case "MPRATE"://現在のMPRATE
                target = this.selectOne(troopOrParty, 'mpRate()', item2, x_item3);
                break;
            case "TPRATE"://現在のTPRATE
                target = this.selectOne(troopOrParty, 'tpRate()', item2, x_item3);
                break;
            case "STATE"://現在付与されているステート
                target = this.selectOne(troopOrParty, 'isStateAffected', item2, x_item3);
                break;
            case "TYPE"://属性有効度
                target = this.selectOne(troopOrParty, 'elementRate', item2, x_item3);
                break;
            case "RANDOM"://ランダムターゲット
                return -1;
                break;
            case "LASTTARGET"://直前のターゲット
                return -2;
                break;
            case "ACTOR"://味方指定
                return $gameParty.members().indexOf($gameActors.actor(Number(x_item3)));
                break;
            case "SELF"://自分自身
                target = eval(troopOrParty + '.find(a => a.actorId() == ' + this._actorId + ')');
                break;
            case "ATK"://対象の攻撃力
                target = this.selectOne(troopOrParty, 'atk', item2, x_item3);
                break;
            case "DEF"://対象の防御力
                target = this.selectOne(troopOrParty, 'def', item2, x_item3);
                break;
            case "MAT"://対象の魔法攻撃力
                target = this.selectOne(troopOrParty, 'mat', item2, x_item3);
                break;
            case "MMDF"://対象の魔法防御力
                target = this.selectOne(troopOrParty, 'mdf', item2, x_item3);
                break;
            case "AGI"://対象の敏捷力
                target = this.selectOne(troopOrParty, 'agi', item2, x_item3);
                break;
            case "LUK"://対象の運
                target = this.selectOne(troopOrParty, 'luk', item2, x_item3);
                break;
            case "MHP"://対象の最大HP
                target = this.selectOne(troopOrParty, 'mhp', item2, x_item3);
                break;
            case "MMP"://対象の最大MP
                target = this.selectOne(troopOrParty, 'mmp', item2, x_item3);
                break;
            case "DEAD"://戦闘不能
                //戦闘不能の対象
                target = $gameParty.battleMembers().find(a => a.isDead() == true);
                if (!target) {
                    return -1;
                }
                break;
            case "DISTANCE_X"://X座標
                if (troopOrParty == "$gameTroop.aliveMembers()") {
                    target = this.selectOne(troopOrParty, 'x', item2, x_item3);
                } else {
                    return -2;
                }
                break;
            case "DISTANCE_Y"://X座標
                if (troopOrParty == "$gameTroop.aliveMembers()") {
                    target = this.selectOne(troopOrParty, 'y', item2, x_item3);
                } else {
                    return -2;
                }
                break;
            case "LEADER"://リーダー
                if (troopOrParty == "$gameParty.aliveMembers()") {
                    return 0;
                } else {
                    return -2;
                }
                break;
            case "TOGETHER"://（敵・味方）を狙う（敵・味方）
                target = this.selectOne(troopOrParty, 'TOGETHER', item2, x_item3);
                if (target == -2) { return target };
                break;
            case "ONE"://対象の１体
                const commandX = troopOrParty + '.reduce((a, b) => {return a && a.index() < b.index() ? a : b;}, null)';
                target = eval(commandX);
                //return target;
                break;
            default:
                break;
        }
        if (target == -2) {
            return -2;
        }
        switch (troopOrParty) {
            case "$gameTroop.aliveMembers()":
                return $gameTroop.members().indexOf(target);
            case "$gameParty.aliveMembers()":
                return $gameParty.members().indexOf(target);
            case "$gameParty.aliveMembers().find((v) => v._actorId === this._actorId)":
                return $gameParty.members().indexOf(target);
            default:
                break;
        }
    }

    Game_Actor.prototype.selectOne = function (troopOrParty, x_item1, x_item2, x_item3) {//HPMPTPを対象としたガンビット
        let commandX;
        let target;
        //HPMPTPATKが最大か、最小か
        switch (x_item3) {
            case "MAX":
                commandX = troopOrParty + '.reduce((a, b) => {return a && a.' + x_item1 + ' > b.' + x_item1 + ' ? a : b;}, null)';
                target = eval(commandX);
                return target;
            case "MIN":
                commandX = troopOrParty + '.reduce((a, b) => {return a && a.' + x_item1 + ' < b.' + x_item1 + ' ? a : b;}, null)';
                target = eval(commandX);
                return target;
            default:
                break;
        }
        //一定の％をしきい値に処理
        if ((x_item1 == 'hpRate()' || x_item1 == 'mpRate()' || x_item1 == 'tpRate()') && (x_item2 == ">" || x_item2 == "<" || x_item2 == "==")) {
            let tempX = [];
            if (troopOrParty == "$gameParty.aliveMembers().find((v) => v._actorId === this._actorId)") {
                tempX = $gameParty.aliveMembers().find((v) => v._actorId === this._actorId);
                commandX = 'tempX && tempX.' + x_item1 + '*100 ' + x_item2 + ' Number(' + x_item3 + ') ? tempX : null';
            } else {
                tempX = eval(troopOrParty + '.reduce((a, b) => {return a && a.' + x_item1 + ' ' + x_item2 + ' b.' + x_item1 + ' ? a : b;}, null)');
                commandX = 'tempX && tempX.' + x_item1 + '*100 ' + x_item2 + ' Number(' + x_item3 + ') ? tempX : null';
            }
            target = eval(commandX);
            if (!target) {
                target = -2;
            }
            return target;
        }
        //STATEにかかっている対象
        if (x_item1 == 'isStateAffected') {
            if (troopOrParty == "$gameParty.aliveMembers().find((v) => v._actorId === this._actorId)") {
                if (this.isStateAffected(Number(x_item3))) {
                    return this;
                }
            } else {
                target = eval(troopOrParty + '.find(a => a.' + x_item1 + '(' + x_item3 + '))');
            }

            return target;
        }
        //属性有効度のしきい値で対象
        if (x_item1 == 'elementRate') {
            if (troopOrParty == "$gameParty.aliveMembers().find((v) => v._actorId === this._actorId)") {
                if (eval("this.elementRate(Number(x_item3)) * 100 " + x_item2 + " 100")) {
                    return this;
                }
            } else {
                target = eval(troopOrParty + '.find(a => a.' + x_item1 + '(' + Number(x_item3) + ') * 100 ' + x_item2 + ' 100)');
            }
            if (!target) {
                target = -2;
            }
            return target;
        }
        //敵・味方を狙う敵・味方で対象
        if (x_item1 == 'TOGETHER') {
            if ($gameTroop.aliveMembers()) {
                const oppoUnit = eval(troopOrParty + '.find(a => a.isDead() != true).opponentsUnit()');
                const subjectX = oppoUnit.members().find((v) => v.index() === Number(x_item3));
                target = eval(troopOrParty + '.find((v) => v.index() === subjectX._lastTargetIndex)');
                if (!target) {
                    target = -2;
                }
                return target;
            } else {
                return -2;
            }
        }
    }

    //=============================================================================
    // Game_Item
    //=============================================================================
    Game_Item.prototype.setEquipGmabit = function (isWeapon, itemId) {
        this._dataClass = isWeapon ? "weapon" : "armor";
        this._itemId = itemId;
    };

    Game_Item.prototype.setObjectGambit = function (item) {
        if (DataManager.isSkill(item)) {
            this._dataClass = "skill";
        } else if (DataManager.isItem(item)) {
            this._dataClass = "item";
        } else if (DataManager.isWeapon(item)) {
            this._dataClass = "weapon";
        } else if (DataManager.isArmor(item)) {
            this._dataClass = "armor";
        } else {
            this._dataClass = "armor";
        }
        this._itemId = item ? item.id : 0;
    };

    //=============================================================================
    // Scene_Gambit
    // The scene class of the equipment screen.
    //=============================================================================
    function Scene_Gambit() {
        this.initialize(...arguments);
    }

    Scene_Gambit.prototype = Object.create(Scene_MenuBase.prototype);
    Scene_Gambit.prototype.constructor = Scene_Gambit;

    Scene_Gambit.prototype.initialize = function () {
        Scene_MenuBase.prototype.initialize.call(this);
    };

    Scene_Gambit.prototype.create = function () {
        Scene_MenuBase.prototype.create.call(this);
        this.createHelpWindow();
        this.createStatusWindow();
        this.createCommandWindow();
        this.createSlotWindow();
        this.createItemWindow();
        this.refreshActor();
    };

    Scene_Gambit.prototype.createStatusWindow = function () {
        const rect = this.statusWindowRect();
        this._statusWindow = new Window_GambitStatus(rect);
        this.addWindow(this._statusWindow);
    };

    Scene_Gambit.prototype.statusWindowRect = function () {
        const wx = 0;
        const wy = this.mainAreaTop();
        const ww = this.statusWidth();
        const wh = this.mainAreaHeight();
        return new Rectangle(wx, wy, ww, wh);
    };

    Scene_Gambit.prototype.createCommandWindow = function () {
        const rect = this.commandWindowRect();
        this._commandWindow = new Window_GambitCommand(rect);
        this._commandWindow.setHelpWindow(this._helpWindow);
        this._commandWindow.setHandler("equip", this.commandEquip.bind(this));
        this._commandWindow.setHandler("optimize", this.commandOptimizeGambit.bind(this));
        this._commandWindow.setHandler("clear", this.commandClear.bind(this));
        this._commandWindow.setHandler("cancel", this.popScene.bind(this));
        this._commandWindow.setHandler("pagedown", this.nextActor.bind(this));
        this._commandWindow.setHandler("pageup", this.previousActor.bind(this));
        this.addWindow(this._commandWindow);
    };

    Scene_Gambit.prototype.commandWindowRect = function () {
        const wx = this.statusWidth();
        const wy = this.mainAreaTop();
        const ww = Graphics.boxWidth - this.statusWidth();
        const wh = this.calcWindowHeight(1, true);
        return new Rectangle(wx, wy, ww, wh);
    };

    Scene_Gambit.prototype.createSlotWindow = function () {
        const rect = this.SlotWindowRect();
        this._SlotWindow = new Window_GambitSlot(rect);
        this._SlotWindow.setHelpWindow(this._helpWindow);
        this._SlotWindow.setStatusWindow(this._statusWindow);
        this._SlotWindow.setHandler("ok", this.onSlotOk.bind(this));
        this._SlotWindow.setHandler("cancel", this.onSlotCancel.bind(this));
        this.addWindow(this._SlotWindow);
    };

    Scene_Gambit.prototype.SlotWindowRect = function () {
        const commandWindowRect = this.commandWindowRect();
        const wx = this.statusWidth();
        const wy = commandWindowRect.y + commandWindowRect.height;
        const ww = Graphics.boxWidth - this.statusWidth();
        const wh = this.mainAreaHeight() - commandWindowRect.height;
        return new Rectangle(wx, wy, ww, wh);
    };

    Scene_Gambit.prototype.createItemWindow = function () {
        const rect = this.itemWindowRect();
        this._itemWindow = new Window_GambitItem(rect);
        this._itemWindow.setHelpWindow(this._helpWindow);
        this._itemWindow.setStatusWindow(this._statusWindow);
        this._itemWindow.setHandler("ok", this.onItemOk.bind(this));
        this._itemWindow.setHandler("cancel", this.onItemCancel.bind(this));
        this._itemWindow.hide();
        this._SlotWindow.setItemWindow(this._itemWindow);
        this.addWindow(this._itemWindow);
    };

    Scene_Gambit.prototype.itemWindowRect = function () {
        return this.SlotWindowRect();
    };

    Scene_Gambit.prototype.statusWidth = function () {
        return 192;
    };

    Scene_Gambit.prototype.needsPageButtons = function () {
        return true;
    };

    Scene_Gambit.prototype.arePageButtonsEnabled = function () {
        return !(this._itemWindow && this._itemWindow.active);
    };

    Scene_Gambit.prototype.refreshActor = function () {
        const actor = this.actor();
        actor._gambitSetIndex = actor._gambitNow;
        if (actor._gambitSetIndex == 0) {
            actor._gambitSetIndex = 1;
        }
        this._statusWindow.setActor(actor);
        this._SlotWindow.setActor(actor);
        this._itemWindow.setActor(actor);
    };

    Scene_Gambit.prototype.commandEquip = function () {
        this._SlotWindow.activate();
        this._SlotWindow.select(0);
    };

    Scene_Gambit.prototype.commandOptimizeGambit = function () {
        SoundManager.playEquip();
        let actor = this._actor;
        if (actor._gambitSetIndex < 3) {
            actor._gambitSetIndex++;
        } else {
            actor._gambitSetIndex = 1;
        }
        this._statusWindow.refresh();
        this._SlotWindow.refresh();
        this._commandWindow.activate();
    };

    Scene_Gambit.prototype.commandClear = function () {
        SoundManager.playEquip();
        this.actor().clearEquipmentsGambit();
        this._statusWindow.refresh();
        this._SlotWindow.refresh();
        this._commandWindow.activate();
    };

    Scene_Gambit.prototype.onSlotOk = function () {
        const maxCols = this._SlotWindow.maxCols();
        const index = this._SlotWindow._index;
        const lastIndex = this._SlotWindow._lastIndex;
        if (index % maxCols == 0) {//
            if (index == lastIndex) {
                SoundManager.playEquip();
                this._SlotWindow.switchCanUse(index);
                this._SlotWindow.activate();
                //this._SlotWindow.select(index);
                this._SlotWindow._lastIndex = -1;
                this._SlotWindow.refresh();
            } else {
                if (lastIndex != -1) {
                    SoundManager.playEquip();
                    this._SlotWindow.switchItems(index, lastIndex);//行を入れ替える
                    this._SlotWindow.activate();
                    this._SlotWindow.select(index);
                    this._SlotWindow._lastIndex = -1;
                    this._SlotWindow.refresh();
                } else {
                    SoundManager.playEquip();
                    this._SlotWindow.activate();
                    //this._SlotWindow.select(index);
                    this._SlotWindow._lastIndex = index;
                    this._SlotWindow.refresh();
                }
            }

        } else {
            this._SlotWindow._lastIndex = -1;
            this._SlotWindow.hide();
            this._itemWindow.show();
            this._itemWindow.activate();
            this._itemWindow.select(0);
        }
    };

    Scene_Gambit.prototype.onSlotCancel = function () {
        if (this._SlotWindow._lastIndex > -1) {
            this._SlotWindow._lastIndex = -1;
            this._SlotWindow.refresh();
        }
        this._SlotWindow.deselect();
        this._commandWindow.activate();
    };

    Scene_Gambit.prototype.onItemOk = function () {
        SoundManager.playEquip();
        this.executeEquipChangeGambit();
        this.hideItemWindow();
        this._SlotWindow.refresh();
        this._itemWindow.refresh();
        this._statusWindow.refresh();
    };

    Scene_Gambit.prototype.executeEquipChangeGambit = function () {
        const actor = this.actor();
        const slotId = this._SlotWindow.index();
        const item = this._itemWindow.item();
        actor.changeEquipGambit(slotId, item);
    };

    Scene_Gambit.prototype.onItemCancel = function () {
        this.hideItemWindow();
    };

    Scene_Gambit.prototype.onActorChange = function () {
        Scene_MenuBase.prototype.onActorChange.call(this);
        this.refreshActor();
        this.hideItemWindow();
        this._SlotWindow.deselect();
        this._SlotWindow.deactivate();
        this._commandWindow.activate();
    };

    Scene_Gambit.prototype.hideItemWindow = function () {
        this._SlotWindow.show();
        this._SlotWindow.activate();
        this._itemWindow.hide();
        this._itemWindow.deselect();
    };

    //=============================================================================
    // Window_GambitStatus
    // The window for displaying parameter changes on the equipment screen.
    //=============================================================================
    function Window_GambitStatus() {
        this.initialize(...arguments);
    }

    Window_GambitStatus.prototype = Object.create(Window_StatusBase.prototype);
    Window_GambitStatus.prototype.constructor = Window_GambitStatus;

    Window_GambitStatus.prototype.initialize = function (rect) {
        Window_StatusBase.prototype.initialize.call(this, rect);
        const h = this.innerHeight;
        const x = this.colSpacing() / 2;
        const y = h / 2 - this.lineHeight();
        this._actor = null;
        this._tempActor = null;
        this.refresh();
    };

    Window_GambitStatus.prototype.setActor = function (actor) {
        if (this._actor !== actor) {
            this._actor = actor;
            this.refresh();
        }
    };

    Window_GambitStatus.prototype.colSpacing = function () {
        return 0;
    };

    Window_GambitStatus.prototype.refresh = function () {
        this.contents.clear();
        if (this._actor) {
            const nameRect = this.itemLineRect(0);
            this.drawActorName(this._actor, nameRect.x, 0, nameRect.width);
            this.drawActorClass(this._actor, nameRect.x, nameRect.height, nameRect.width);
            this.drawActorFace(this._actor, nameRect.x, nameRect.height * 2);
            this.drawAllParamsGambit();
        }
    };

    Window_GambitStatus.prototype.paramXGambit = function () {
        const itemPadding = this.itemPadding();
        const rightArrowWidth = this.rightArrowWidth();
        const paramWidth = this.paramWidth();
        return this.innerWidth;// - itemPadding - paramWidth * 2 - rightArrowWidth;
    };

    Window_GambitStatus.prototype.drawAllParamsGambit = function () {
        const nameRect = this.itemLineRect(0);
        for (let i = 0; i < 4; i++) {
            const x = this.itemPadding();
            const y = this.paramY(i) + nameRect.height;
            this.drawParamNameGambit(x, y, i);
        }
    };

    Window_GambitStatus.prototype.drawParamNameGambit = function (x, y, i) {
        let setName = exports.Param.GAMBIT_SETNAME;
        const width = this.paramXGambit();// - this.itemPadding() * 2;
        this.changeTextColor(ColorManager.MKB_White_Color());
        switch (i) {
            case 0:
                this.changeTextColor(ColorManager.systemColor());
                break;
            case 1:
                setName = exports.Param.GAMBIT_SETNAME_1;
                break;
            case 2:
                setName = exports.Param.GAMBIT_SETNAME_2;
                break;
            case 3:
                setName = exports.Param.GAMBIT_SETNAME_3;
                break;
            default:
                break;
        }
        if (i == this._actor._gambitSetIndex) {
            this.changeTextColor(ColorManager.MKB_Red_Color());
        }
        this.drawText(setName, x, y, width);
    };

    Window_GambitStatus.prototype.setTempActor = function (tempActor) {
        if (this._tempActor !== tempActor) {
            this._tempActor = tempActor;
            this.refresh();
        }
    };

    Window_GambitStatus.prototype.drawAllParams = function () {
        for (let i = 0; i < 6; i++) {
            const x = this.itemPadding();
            const y = this.paramY(i);
            this.drawItem(x, y, 2 + i);
        }
    };

    Window_GambitStatus.prototype.drawItem = function (x, y, paramId) {
        const paramX = this.paramX();
        const paramWidth = this.paramWidth();
        const rightArrowWidth = this.rightArrowWidth();
        this.drawParamName(x, y, paramId);
        if (this._actor) {
            this.drawCurrentParam(paramX, y, paramId);
        }
        this.drawRightArrow(paramX + paramWidth, y);
        if (this._tempActor) {
            this.drawNewParam(paramX + paramWidth + rightArrowWidth, y, paramId);
        }
    };

    Window_GambitStatus.prototype.drawParamName = function (x, y, paramId) {
        const width = this.paramX() - this.itemPadding() * 2;
        this.changeTextColor(ColorManager.systemColor());
        this.drawText(TextManager.param(paramId), x, y, width);
    };

    Window_GambitStatus.prototype.drawCurrentParam = function (x, y, paramId) {
        const paramWidth = this.paramWidth();
        this.resetTextColor();
        this.drawText(this._actor.param(paramId), x, y, paramWidth, "right");
    };

    Window_GambitStatus.prototype.drawRightArrow = function (x, y) {
        const rightArrowWidth = this.rightArrowWidth();
        this.changeTextColor(ColorManager.systemColor());
        this.drawText("\u2192", x, y, rightArrowWidth, "center");
    };

    Window_GambitStatus.prototype.drawNewParam = function (x, y, paramId) {
        const paramWidth = this.paramWidth();
        const newValue = this._tempActor.param(paramId);
        const diffvalue = newValue - this._actor.param(paramId);
        this.changeTextColor(ColorManager.paramchangeTextColor(diffvalue));
        this.drawText(newValue, x, y, paramWidth, "right");
    };

    Window_GambitStatus.prototype.rightArrowWidth = function () {
        return 32;
    };

    Window_GambitStatus.prototype.paramWidth = function () {
        return 48;
    };

    Window_GambitStatus.prototype.paramX = function () {
        const itemPadding = this.itemPadding();
        const rightArrowWidth = this.rightArrowWidth();
        const paramWidth = this.paramWidth();
        return this.innerWidth - itemPadding - paramWidth * 2 - rightArrowWidth;
    };

    Window_GambitStatus.prototype.paramY = function (index) {
        const faceHeight = ImageManager.faceHeight;
        return faceHeight + Math.floor(this.lineHeight() * (index + 1.5));
    };

    Window_GambitStatus.prototype.update = function () {
        //this.updatebustPosition();//bob
        Window_Selectable.prototype.update.call(this);
    };

    //=============================================================================
    // Window_GambitCommand
    // The window for selecting a command on the equipment screen.
    //=============================================================================
    function Window_GambitCommand() {
        this.initialize(...arguments);
    }

    Window_GambitCommand.prototype = Object.create(Window_HorzCommand.prototype);
    Window_GambitCommand.prototype.constructor = Window_GambitCommand;

    Window_GambitCommand.prototype.initialize = function (rect) {
        Window_HorzCommand.prototype.initialize.call(this, rect);
    };

    Window_GambitCommand.prototype.maxCols = function () {
        return 3;
    };

    Window_GambitCommand.prototype.makeCommandList = function () {
        this.addCommand("装着", "equip");//bob
        this.addCommand("セットチェンジ", "optimize");
        this.addCommand("一括解除", "clear");
    };

    //=============================================================================
    // Window_GambitSlot
    // The window for selecting an equipment slot on the equipment screen.
    //=============================================================================

    function Window_GambitSlot() {
        this.initialize(...arguments);
    }

    Window_GambitSlot.prototype = Object.create(Window_StatusBase.prototype);
    Window_GambitSlot.prototype.constructor = Window_GambitSlot;

    Window_GambitSlot.prototype.initialize = function (rect) {
        Window_StatusBase.prototype.initialize.call(this, rect);
        this._actor = null;
        this._lastIndex = -1;
        this.refresh();
    };

    Window_GambitSlot.prototype.setActor = function (actor) {
        if (this._actor != actor) {//kaihen
            this._actor = actor;
            this.refresh();
        }
    };

    Window_GambitSlot.prototype.update = function () {
        Window_StatusBase.prototype.update.call(this);
        if (this._itemWindow) {
            this._itemWindow.setSlotId(this.index());
        }
    };

    Window_GambitSlot.prototype.maxItems = function () {
        return this._actor ? this._actor.equipSlotsGambit().length : 0;
    };

    Window_GambitSlot.prototype.drawItemBackground = function (index) {
        const rect = this.itemRect(index);
        const maxCols = this.maxCols();
        let sabun1 = 0;
        let sabun2 = 0;
        let sabun3 = 0;
        let canUseFlag = true;
        switch (index % maxCols) {
            case 0://列番号１　番号
                sabun1 = 1;
                sabun2 = 2;
                sabun3 = 3;
                canUseFlag = this._actor._gambitMode[this._actor._gambitSetIndex][index]._canUse;
                break;
            case 1://列番号２　ガンビットIF
                sabun1 = 0;
                sabun2 = 1;
                sabun3 = 2;
                canUseFlag = this._actor._gambitMode[this._actor._gambitSetIndex][index - 1]._canUse;
                break;
            case 2://列番号３　ガンビットTARGET
                sabun1 = -1;
                sabun2 = 0;
                sabun3 = 1;
                canUseFlag = this._actor._gambitMode[this._actor._gambitSetIndex][index - 2]._canUse;
                break;
            case 3://列番号４　アクション
                sabun1 = -2;
                sabun2 = -1;
                sabun3 = 0;
                canUseFlag = this._actor._gambitMode[this._actor._gambitSetIndex][index - 3]._canUse;
                break;
            default:
                break;
        }
        const gambitIFId = this._actor._gambitMode[this._actor._gambitSetIndex][index + sabun1]._itemId;
        const gambitTARGETId = this._actor._gambitMode[this._actor._gambitSetIndex][index + sabun2]._itemId;
        const actionId = this._actor._gambitMode[this._actor._gambitSetIndex][index + sabun3]._itemId;
        //色判定
        if (this._lastIndex != -1 && (index == this._lastIndex || index == this._lastIndex + 1 || index == this._lastIndex + 2 || index == this._lastIndex + 3)) {
            this.drawBackgroundRect_gambit(rect, -2);
        } else {
            if (canUseFlag) {
                if (gambitIFId === 0 && gambitTARGETId === 0 && actionId === 0) {
                    this.drawBackgroundRect(rect);
                } else {
                    if (gambitIFId === 0 || gambitTARGETId === 0 || actionId === 0) {
                        this.drawBackgroundRect_gambit(rect, -1);

                    } else {
                        this.drawBackgroundRect_gambit(rect, gambitTARGETId);
                    }
                }
            } else {
                this.drawBackgroundRect_gambit(rect, -3);
            }
        }

    };

    Window_GambitSlot.prototype.drawBackgroundRect_gambit = function (rect, gambitId) {
        let c1 = ColorManager.itemBackColor1();
        if (gambitId === -3) {
            c1 = ColorManager.MKB_Black_Color();
        } else {
            if (gambitId === -2) {
                c1 = ColorManager.MKB_White_Color();
            } else {
                if (gambitId === -1) {
                    c1 = ColorManager.MKB_Gray_Color();
                } else {
                    const actionForParty = exports.Param.Gambit_ACTION_FOR_PARTY;
                    const actionForTroop = exports.Param.Gambit_ACTION_FOR_TROOP;
                    const actionForMe = exports.Param.Gambit_ACTION_FOR_ME;
                    const gambitX = $dataArmors[gambitId].meta.gambit;
                    if (gambitX[0] === actionForParty) {
                        c1 = ColorManager.MKB_Bule_Color();
                    } else {
                        if (gambitX[0] === actionForTroop) {
                            c1 = ColorManager.MKB_Red_Color();
                        } else {
                            if (gambitX[0] === actionForMe) {
                                c1 = ColorManager.MKB_Yellow_Color();
                            }

                        }
                    }
                }
            }
        }
        const c2 = ColorManager.itemBackColor2();
        const x = rect.x;
        const y = rect.y;
        const w = rect.width;
        const h = rect.height;
        this.contentsBack.gradientFillRect(x, y, w, h, c1, c2, true);
        this.contentsBack.strokeRect(x, y, w, h, c1);
    };

    Window_GambitSlot.prototype.item = function () {
        return this.itemAt(this.index());
    };

    Window_GambitSlot.prototype.itemAt = function (index) {
        return this._actor ? this._actor.gambits()[index] : null;
    };

    Window_GambitSlot.prototype.itemRect = function (index) {
        const numberCol = 60;
        const maxCols = this.maxCols();
        const itemWidth = this.itemWidth();
        const itemHeight = this.itemHeight();
        const colSpacing = this.colSpacing();
        const rowSpacing = this.rowSpacing();
        const col = index % maxCols;
        const row = Math.floor(index / maxCols);
        var x;// = col * itemWidth + colSpacing / 2 - this.scrollBaseX();
        const y = row * itemHeight + rowSpacing / 2 - this.scrollBaseY();
        var width = itemWidth - colSpacing;
        const height = itemHeight - rowSpacing;

        switch (col) {
            case 0://１行目
                width = numberCol;
                x = col * itemWidth + colSpacing / 3 - this.scrollBaseX();
                break;
            case 1://２行目
                width = (itemWidth * maxCols - numberCol) / 3;
                x = numberCol + colSpacing / 3 - this.scrollBaseX();
                break;
            case 2://３行目
                width = (itemWidth * maxCols - numberCol) / 3;
                x = numberCol + colSpacing / 3 + width - this.scrollBaseX();
                break;
            case 3://４行目
                width = (itemWidth * maxCols - numberCol) / 3;
                x = numberCol + colSpacing / 3 + width * 2 - this.scrollBaseX();
                break;
            default:
                break;
        }
        return new Rectangle(x, y, width, height);
    };

    Window_GambitSlot.prototype.drawItem = function (index) {
        const maxCols = this.maxCols();
        if (this._actor) {
            const item = this.itemAt(index);
            let slotNameWidth = this.slotNameWidth();
            const rect = this.itemLineRect(index);
            let itemWidth = rect.width - slotNameWidth;
            let indexNumberString = "";
            switch (index % maxCols) {
                case 0:
                    indexNumberString = String((index / 4) + 1);
                    itemWidth = slotNameWidth;
                    break;
                case 1:
                    break;
                case 2:
                    break;
                case 3:
                    break;
                default:
                    break;
            }
            let myColor;
            if (this._actor._gambitMode[this._actor._gambitSetIndex][index]._canUse) {
                this.changeTextColor(ColorManager.systemColor());
                myColor = ColorManager.normalColor();
            } else {
                this.changeTextColor(ColorManager.MKB_Gray_Color());
                myColor = ColorManager.MKB_Gray_Color();
            }
            this.changePaintOpacity(this.isEnabled(index));
            this.drawText(indexNumberString, rect.x, rect.y, slotNameWidth, rect.height);//slotName
            this.drawItemNameGambit(item, rect.x + slotNameWidth - ImageManager.iconWidth, rect.y, itemWidth, myColor);
            this.changePaintOpacity(true);
        }
    };

    Window_GambitSlot.prototype.drawItemNameGambit = function (item, x, y, width, myColor) {
        if (item) {
            const iconY = y + (this.lineHeight() - ImageManager.iconHeight) / 2;
            const textMargin = ImageManager.iconWidth + 4;
            const itemWidth = Math.max(0, width - textMargin);
            this.resetTextColorGambit(myColor);
            this.drawIcon(item.iconIndex, x, iconY);
            this.drawText(item.name, x + textMargin, y, itemWidth);
        }
    };

    Window_GambitSlot.prototype.resetTextColorGambit = function (myColor) {
        this.changeTextColor(myColor);
        this.changeOutlineColor(ColorManager.outlineColor());
    };

    Window_GambitSlot.prototype.slotNameWidth = function () {
        return 36;//138
    };

    Window_GambitSlot.prototype.isEnabled = function (index) {
        return true;//this._actor ? this._actor.isEquipChangeOk(index) : false;
    };

    Window_GambitSlot.prototype.isCurrentItemEnabled = function () {
        return this.isEnabled(this.index());
    };

    Window_GambitSlot.prototype.setStatusWindow = function (statusWindow) {
        this._statusWindow = statusWindow;
        this.callUpdateHelp();
    };

    Window_GambitSlot.prototype.setItemWindow = function (itemWindow) {
        this._itemWindow = itemWindow;
    };

    Window_GambitSlot.prototype.updateHelp = function () {
        Window_StatusBase.prototype.updateHelp.call(this);
        this.setHelpWindowItem(this.item());
        if (this._statusWindow) {
            this._statusWindow.setTempActor(null);
        }
    };

    Window_GambitSlot.prototype.maxCols = function () {
        return 4;
    };

    Window_GambitSlot.prototype.switchItems = function (index, lastIndex) {
        const actor = this._actor;
        const gambitItemIF = actor._gambitMode[actor._gambitSetIndex][index + 1];
        const gambitItemTARGET = actor._gambitMode[actor._gambitSetIndex][index + 2];
        const actionItem = actor._gambitMode[actor._gambitSetIndex][index + 3];
        const gambitItemLastIF = actor._gambitMode[actor._gambitSetIndex][lastIndex + 1];
        const gambitItemLastTARGET = actor._gambitMode[actor._gambitSetIndex][lastIndex + 2];
        const actionItemLast = actor._gambitMode[actor._gambitSetIndex][lastIndex + 3];
        //入れ替え
        actor._gambitMode[actor._gambitSetIndex][index + 1] = gambitItemLastIF;
        actor._gambitMode[actor._gambitSetIndex][index + 2] = gambitItemLastTARGET;
        actor._gambitMode[actor._gambitSetIndex][index + 3] = actionItemLast;
        actor._gambitMode[actor._gambitSetIndex][lastIndex + 1] = gambitItemIF;
        actor._gambitMode[actor._gambitSetIndex][lastIndex + 2] = gambitItemTARGET;
        actor._gambitMode[actor._gambitSetIndex][lastIndex + 3] = actionItem;
    };

    Window_GambitSlot.prototype.switchCanUse = function (index, lastIndex) {
        const actor = this._actor;
        if (actor._gambitMode[actor._gambitSetIndex][index]._canUse) {
            actor._gambitMode[actor._gambitSetIndex][index]._canUse = false;
            actor._gambitMode[actor._gambitSetIndex][index + 1]._canUse = false;
            actor._gambitMode[actor._gambitSetIndex][index + 2]._canUse = false;
            actor._gambitMode[actor._gambitSetIndex][index + 3]._canUse = false;
        } else {
            actor._gambitMode[actor._gambitSetIndex][index]._canUse = true;
            actor._gambitMode[actor._gambitSetIndex][index + 1]._canUse = true;
            actor._gambitMode[actor._gambitSetIndex][index + 2]._canUse = true;
            actor._gambitMode[actor._gambitSetIndex][index + 3]._canUse = true;
        }
    };

    //=============================================================================
    // Window_GambitItem
    // The window for selecting an equipment item on the equipment screen.
    //=============================================================================
    function Window_GambitItem() {
        this.initialize(...arguments);
    }

    Window_GambitItem.prototype = Object.create(Window_ItemList.prototype);
    Window_GambitItem.prototype.constructor = Window_GambitItem;

    Window_GambitItem.prototype.initialize = function (rect) {
        Window_ItemList.prototype.initialize.call(this, rect);
        this._actor = null;
        this._slotId = 0;
    };

    Window_GambitItem.prototype.maxCols = function () {
        return 3;
    };

    Window_GambitItem.prototype.colSpacing = function () {
        return 8;
    };

    Window_GambitItem.prototype.setActor = function (actor) {
        if (this._actor !== actor) {
            this._actor = actor;
            this.refresh();
            this.scrollTo(0, 0);
        }
    };

    Window_GambitItem.prototype.setSlotId = function (slotId) {
        if (this._slotId !== slotId) {
            this._slotId = slotId;
            this.refresh();
            this.scrollTo(0, 0);
        }
    };

    Window_GambitItem.prototype.includes = function (item) {
        let x = DataManager.isArmor(item);
        return (x);
        /*if (item === null) {
            return true;
        }
        console.log(item.etypeId);
        console.log(this);
        return (
            //this._actor &&
            //this._actor.canEquip(item) &&
            item.etypeId === this.etypeId()
     
        );*/
    };

    Window_GambitItem.prototype.etypeId = function () {
        const x = exports.Param.Gambit_equipType;
        if (this._actor && this._slotId >= 0) {
            return x;//this._actor.equipSlotsGambit()[this._slotId];
            //return this._actor.equipSlots()[this._slotId];
        } else {
            return 0;
        }
    };

    Window_GambitItem.prototype.isEnabled = function (/*item*/) {
        return true;
    };

    Window_GambitItem.prototype.makeItemList = function () {
        //let x = $gameParty.allItems().filter(item => this.includes(item));//bob
        const maxColX = 4;
        const ITEMWORD = exports.Param.Gambit_ITEMWORD;
        const CHANGEWORD = exports.Param.Gambit_CHANGEWORD;
        const eTypeX = exports.Param.Gambit_equipType;
        const aTypeXIF = exports.Param.Gambit_IF_armorType;
        const aTypeXTARGET = exports.Param.Gambit_TARGET_armorType;
        let listItemX;
        switch (this._slotId % maxColX) {
            case 0:
                break;
            case 1:
                listItemX = $gameParty.allItems().filter(function (element) {
                    return element.etypeId === eTypeX && element.atypeId === aTypeXIF;
                });
                listItemX.unshift(null);
                break;
            case 2:
                listItemX = $gameParty.allItems().filter(function (element) {
                    return element.etypeId === eTypeX && element.atypeId === aTypeXTARGET;
                });
                listItemX.unshift(null);
                break;
            case 3:
                const getSkillX = this._actor.skills().filter(function (element) {
                    if (Array.isArray(element.meta.gambit)) {
                        return element.meta.gambit[0] == CHANGEWORD;
                    } else {
                        return element.meta.gambit == ITEMWORD;
                    }
                    //return element.meta.gambit == ITEMWORD || element.meta.gambit[0] == CHANGEWORD;//スキルを抽出
                });
                const getItemX = $gameParty.allItems().filter(function (element) {
                    return element.meta.gambit == ITEMWORD;
                });
                listItemX = getSkillX;//持っているアイテムを追加
                for (let i = 0; i < getItemX.length; i++) {
                    listItemX.push(getItemX[i]);
                }
                listItemX.unshift($dataSkills[2]);//防御を追加
                listItemX.unshift($dataSkills[1]);//攻撃を追加
                listItemX.unshift(null);
                break;
            default:
                break;
        }
        this._data = listItemX;
        if (this.includes(null)) {
            this._data.push(null);
        }
    };

    Window_GambitItem.prototype.selectLast = function () {
        //
    };

    Window_GambitItem.prototype.setStatusWindow = function (statusWindow) {
        this._statusWindow = statusWindow;
        this.callUpdateHelp();
    };

    Window_GambitItem.prototype.updateHelp = function () {
        Window_ItemList.prototype.updateHelp.call(this);
        if (this._actor && this._statusWindow && this._slotId >= 0) {
            const actor = JsonEx.makeDeepCopy(this._actor);
            //actor.forceChangeEquip(this._slotId, this.item());
            this._statusWindow.setTempActor(actor);
        }
    };

    Window_GambitItem.prototype.playOkSound = function () {
        //
    };

    Window_GambitItem.prototype.drawItem = function (index) {
        const item = this.itemAt(index);
        if (item) {
            const numberWidth = this.numberWidth();
            const rect = this.itemLineRect(index);
            this.changePaintOpacity(this.isEnabled(item));
            this.drawItemName(item, rect.x, rect.y, rect.width - numberWidth);
            this.changePaintOpacity(1);
        }
    };

    //=============================================================================
    // Window_AutoBattleGambit
    //ガンビットバトル表示用のウィンドウ
    //=============================================================================
    function Window_AutoBattleGambit() {
        this.initialize(...arguments);
    };

    Window_AutoBattleGambit.prototype = Object.create(Window_Base.prototype);
    Window_AutoBattleGambit.prototype.constructor = Window_AutoBattleGambit;

    Window_AutoBattleGambit.prototype.initialize = function () {
        const rect = this.WindowRectGambit();
        Window_Base.prototype.initialize.call(this, rect);
        this.refresh();
    };

    Window_AutoBattleGambit.prototype.loadWindowskin = function () {
        if (exports.Param.GAMBIT_WINDOW_FRAME) {
            this.windowskin = ImageManager.loadSystem("Window");
        }
    };

    Window_AutoBattleGambit.prototype.standardPadding = function () {
        return 6;
    };

    Window_AutoBattleGambit.prototype.WindowRectGambit = function () {
        const wx = exports.Param.gambitWindowX;
        const wy = exports.Param.gambitWindowY;
        const ww = 140;
        const wh = 54;
        return new Rectangle(wx, wy, ww, wh);
    };

    Window_AutoBattleGambit.prototype.refresh = function () {
        this.contents.clear();
        this.contents.fontSize = 28;
        var b1 = 'rgba(0,0,0,0)';
        var b2 = 'rgba(0,0,0,0.5)';
        //if (!showWindow){
        var w = this.contentsWidth() / 4;
        this.contents.gradientFillRect(0, 0, w, 32, b1, b2);
        this.contents.fillRect(w, 0, w * 2, 32, b2);
        this.contents.gradientFillRect(w * 3, 0, w, 32, b2, b1);
        //}
        var text = BattleManager.isAutoBattleGambit() ? exports.Param.autoBattleUsableMessage : exports.Param.autoBattleMessage;
        text = text.replace(/_key/, exports.Param.autoBattleKey);
        this.drawText(text, 0, 0, this.contentsWidth(), 'center');
    };

    //=============================================================================
    // Window_AutoBattleGambitCahnge
    //アクター個人単位のガンビットセット表示ウィンドウ
    //=============================================================================
    function Window_AutoBattleGambitChange() {
        this.initialize(...arguments);
    };

    Window_AutoBattleGambitChange.prototype = Object.create(Window_Base.prototype);
    Window_AutoBattleGambitChange.prototype.constructor = Window_AutoBattleGambitChange;

    Window_AutoBattleGambitChange.prototype.initialize = function (rect, index) {
        Window_Base.prototype.initialize.call(this, rect);
        const actor = $gameParty.battleMembers()[index];
        this._setList = actor._gambitNow;
        this.refresh(index);
    };

    Window_AutoBattleGambitChange.prototype.loadWindowskin = function () {
        if (exports.Param.GAMBIT_WINDOW_FRAME) {
            this.windowskin = ImageManager.loadSystem("Window");
        }
    };

    Window_AutoBattleGambitChange.prototype.standardPadding = function () {
        return 6;
    };

    Window_AutoBattleGambitChange.prototype.refresh = function (index) {
        this.contents.clear();
        this.contents.fontSize = 24;
        var b1 = 'rgba(0,0,0,0)';
        var b2 = 'rgba(0,0,0,0.5)';
        var w = this.contentsWidth() / 4;
        this.contents.gradientFillRect(0, 0, w, 32, b1, b2);
        this.contents.fillRect(w, 0, w * 2, 32, b2);
        this.contents.gradientFillRect(w * 3, 0, w, 32, b2, b1);
        const actor = $gameParty.battleMembers()[index];
        let text = "";
        switch (actor._gambitNow) {
            case 0:
                text = "マニュアル";
                break;
            case 1:
                text = exports.Param.GAMBIT_SETNAME_1;
                break;
            case 2:
                text = exports.Param.GAMBIT_SETNAME_2;
                break;
            case 3:
                text = exports.Param.GAMBIT_SETNAME_3;
                break;
            default:
                break;
        }
        //this._setList = actor._gambitNow;
        this.drawActorFace(actor, 0, 0);
        this.drawText(text, 0, 0, this.contentsWidth(), 'right');
    };

    Window_AutoBattleGambitChange.prototype.drawActorFace = function (
        actor, x, y, width, height
    ) {
        this.drawFace(actor.faceName(), actor.faceIndex(), x, y, width, height);
    };

    Window_AutoBattleGambitChange.prototype.drawFace = function (
        faceName, faceIndex, x, y, width, height
    ) {
        width = width || ImageManager.faceWidth;
        height = height || ImageManager.faceHeight;
        const bitmap = ImageManager.loadFace(faceName);
        const pw = ImageManager.faceWidth;
        const ph = ImageManager.faceHeight;
        const sw = Math.min(width, pw);
        const sh = Math.min(height, ph);
        const dx = Math.floor(x + Math.max(width - pw, 0) / 2);
        const dy = Math.floor(y + Math.max(height - ph, 0) / 2);
        const sx = (faceIndex % 4) * pw + (pw - sw) / 2;
        const sy = Math.floor(faceIndex / 4) * ph + (ph - sh) / 2;
        this.contents.addLoadListener(function () {
            this.contents.bltGambit(bitmap, sx, sy, sw, sh, dx, dy);
        }.bind(this));
    };

    Bitmap.prototype.bltGambit = function (source, sx, sy, sw, sh, dx, dy, dw, dh) {
        dw = dw || sw;
        dh = dh || sh;
        try {
            const image = source._canvas || source._image;
            this.context.globalCompositeOperation = "source-over";
            this.context.drawImage(image, sx, sy, sw * 0.8, sh * 0.8, dx, dy, dw * 0.25, dh * 0.25);
            this._baseTexture.update();
        } catch (e) {
            //
        }
    };

    //=============================================================================
    // Window_GambitLog
    //ガンビットログ表示用のウィンドウ
    //=============================================================================
    function Window_GambitLog() {
        this.initialize(...arguments);
    };

    Window_GambitLog.prototype = Object.create(Window_Base.prototype);
    Window_GambitLog.prototype.constructor = Window_GambitLog;

    Window_GambitLog.prototype.initialize = function (rect, index) {
        //const rect = this.WindowRectGambit(index);
        Window_Base.prototype.initialize.call(this, rect);
        this._gambitIndex = index;
        this._logCount = 0;
        this.refresh();
    };

    Window_GambitLog.prototype.loadWindowskin = function () {
        //this.windowskin = ImageManager.loadSystem("Window");
    };

    Window_GambitLog.prototype.standardPadding = function () {
        return 6;
    };

    Window_GambitLog.prototype.refresh = function (actor, count) {
        if (exports.Param.GAMBIT_LOG) {
            if (actor) {
                if (this._logCount == 1) {//ガンビットログを表示する
                    this.show_log(actor, count);
                } else {
                    if (this.x > exports.Param.GAMBIT_LOG_X) {
                        this.x -= 10;
                        this._logCount++;
                    } else {
                        this._logCount++;
                        if (this._logCount > 50) {
                            if (this.y > exports.Param.GAMBIT_LOG_Y - 50) {
                                this.y -= 2;
                                this.contentsOpacity -= 5;
                                return 0;
                            } else {
                                actor._gambitLogFlag = false;
                                this.close();
                            }
                        }
                    }
                }
            }
        }
        return count;
    };

    Window_GambitLog.prototype.show_log = function (actor, count) {
        this.x = exports.Param.GAMBIT_LOG_X + 100;
        this.contents.clear();
        this.contentsOpacity = 255;
        this.open();
        this.contents.fontSize = exports.Param.GAMBIT_LOG_FONTSIZE;
        let b1 = 'rgba(0,0,0,0)';
        let b2 = 'rgba(0,0,0,0.5)';
        const logRow = exports.Param.GAMBIT_LOG_ROW;
        let w = this.contentsWidth() / 4;
        this.contents.gradientFillRect(0, 0, w, logRow, b1, b2);
        this.contents.fillRect(w, 0, w * 2, logRow, b2);
        this.contents.gradientFillRect(w * 3, 0, w, logRow, b2, b1);
        this.drawText(actor._gambitResult, 0, 0, this.contentsWidth(), 'left');
        this.y = exports.Param.GAMBIT_LOG_Y + count * logRow * 2;
        this._logCount++;
    }

    //=============================================================================
    // Window_GambitPause
    //ガンビットポーズ表示用のウィンドウ
    //=============================================================================
    function Window_GambitPause() {
        this.initialize(...arguments);
    };

    Window_GambitPause.prototype = Object.create(Window_Base.prototype);
    Window_GambitPause.prototype.constructor = Window_GambitPause;

    Window_GambitPause.prototype.initialize = function () {
        const rect = this.WindowRectGambit();
        Window_Base.prototype.initialize.call(this, rect);
        this._pause = false;
        this.refresh();
    };

    Window_GambitPause.prototype.WindowRectGambit = function () {
        const wx = 0;
        const wy = 0;
        const ww = Graphics.boxWidth;
        const wh = Graphics.boxHeight;
        return new Rectangle(wx, wy, ww, wh);
    };

    Window_GambitPause.prototype.loadWindowskin = function () {
        //this.windowskin = ImageManager.loadSystem("Window");
    };

    Window_GambitPause.prototype.standardPadding = function () {
        return 6;
    };

    Window_GambitPause.prototype.refresh = function () {
        if (!this._pause) {
            this.contentsOpacity = 255;
            this.contents.fontSize = 100;
            let b1 = 'rgba(0,0,0,0)';
            let b2 = 'rgba(0,0,0,0.5)';
            const logRow = 300;
            let w = this.contentsWidth() / 4;
            this.drawText("Pause", 0, Graphics.boxHeight / 2, this.contentsWidth(), 'center');
            this._pause = true;
        }
    };

    //=============================================================================
    // Scene_Battle
    // The scene class of the battle screen.
    //=============================================================================
    //バトルシーンにおいてガンビット系を管理します
    let _MKB_gambit_createAllWindows = Scene_Battle.prototype.createAllWindows;
    Scene_Battle.prototype.createAllWindows = function () {
        _MKB_gambit_createAllWindows.call(this);
        this.createAutoBattleWindowGambit();
    };

    let _MKB_gambit_isTimeActive = Scene_Battle.prototype.isTimeActive;
    Scene_Battle.prototype.isTimeActive = function () {
        _MKB_gambit_isTimeActive.call(this);
        if (Input.isTriggered(exports.Param.GAMBIT_PAUSE_KEY) && this._autoBattleWindowGambit.isOpen()) {
            if (this._gambitPause) {
                this._gambitPause = false;
            } else {
                this._gambitPause = true;
            }
        }
        if (this._gambitPause) {
            this._gambitPauseWindow.open();
            //this._gambitPauseActorWindows.forEach(function (value, index) { value.open(); });
            //SceneManager._scene.children[0].parent._fadeOpacity = 128;
            this._fadeOpacity = 128;
            this._gambitPauseWindow.refresh();
        } else {
            this._gambitPauseWindow.close();
            this._gambitPauseWindow._pause = false;
            //this._gambitPauseActorWindows.forEach(function (value, index) { value.close(); });
            //SceneManager._scene.children[0].parent._fadeOpacity = 0;
            this._fadeOpacity = 0;
            if (BattleManager.isActiveTpb()) {
                return !this._skillWindow.active && !this._itemWindow.active;
            } else {
                return !this.isAnyInputWindowActive();
            }
        }
    };

    Scene_Battle.prototype.createAutoBattleWindowGambit = function () {
        this._autoBattleWindowGambit = new Window_AutoBattleGambit();
        this._autoBattleWindowGambit.hide();
        this._autoBattleWindowGambit.close();
        this.addWindow(this._autoBattleWindowGambit);
        this._gambitWindows = $gameParty.battleMembers().map((_, index) => new Window_AutoBattleGambitChange(this.WindowRectX(index), index));
        this._gambitWindows.forEach(window => this.addWindow(window));
        this._gambitWindows.forEach(function (value, index) { value.close(); });
        this._gambitLogWindows = $gameParty.battleMembers().map((_, index) => new Window_GambitLog(this.logWindowRectX(index), index));
        this._gambitLogWindows.forEach(window => this.addWindow(window));
        for (let i = 0; i < $gameParty.battleMembers().length; i++) {
            this._gambitLogWindows[i]._actorIndex = $gameParty.battleMembers()[i]._actorId;
            this._gambitLogWindows[i].close();
        };
        this._gambitLogCount = 0;
        this._gambitPause = false;
        this._gambitPauseWindow = new Window_GambitPause();
        this._gambitPauseWindow.close();
        this.addWindow(this._gambitPauseWindow);
        this._gambitPauseActorWindows = $gameParty.battleMembers().map((_, index) => new Window_AutoBattleGambitChange(this.WindowRectX(index), index));
        this._gambitPauseActorWindows.forEach(window => this.addWindow(window));
        this._gambitPauseActorWindows.forEach(function (value, index) { value.close(); });
    };

    Scene_Battle.prototype.WindowRectX = function (index) {
        const wx = index * 176;
        const wy = 0;
        const ww = 176;
        const wh = 54;
        return new Rectangle(wx, wy, ww, wh);
    };

    Scene_Battle.prototype.logWindowRectX = function (index) {
        const wx = exports.Param.GAMBIT_LOG_X + 100;//Graphics.boxWidth - ww - 20;
        const wy = exports.Param.GAMBIT_LOG_Y;
        const ww = 340;
        const wh = exports.Param.GAMBIT_LOG_ROW * 2;
        return new Rectangle(wx, wy, ww, wh);
    };

    Game_Action.prototype.getSubjectActorId_MKB = function () {//acitonから術者actorIDを取り出す
        if (this) {
            return this._subjectActorId;
        }
        return 0;
    };

    Scene_Battle.prototype.gambit_OFF = function () {
        BattleManager.autoBattleDeactivateGambit();
        BattleManager.autoBattleDeactivateGambitChange();
        this._autoBattleWindowGambit.refresh();
        this._gambitWindows.forEach(function (value, index) { value.refresh(index); });
        $gameParty.members().forEach(function (actor) {
            actor.removeState(exports.Param.autosuteid);
        });
        BattleManager.updateTurnEnd();
        SoundManager.playCancel();
        BattleManager._gambitWait = false;
    };

    Scene_Battle.prototype.gambit_ON = function () {
        this.activateAutoBattleGambit();
        SoundManager.playOk();
        this._partyCommandWindow.deactivate();
        this._actorCommandWindow.deactivate();
        BattleManager.startAutoBattleGambit();
        BattleManager._gambitWait = false;
    };

    var _MKB_SBattle_updateTurn = Scene_Battle.prototype.update;
    Scene_Battle.prototype.update = function () {
        if ($gameParty._actorChangeAction) {
            delete this._autoBattleWindowGambit;
            delete this._gambitLogWindows;
            delete this._gambitPauseWindow;
            delete this._gambitPauseActorWindows;
            $gameParty._actorChangeAction = false;
            this.createAutoBattleWindowGambit();
            return;
        }
        _MKB_SBattle_updateTurn.call(this);
        let subjectActor;
        if (BattleManager._action) {//アクションをするアクターを取得する
            subjectActor = $gameActors.actor(BattleManager._action.getSubjectActorId_MKB());
        }
        for (let i = 0; i < $gameParty.members().length; i++) {
            const actor = $gameParty.members()[i];
            const result = this._gambitLogWindows[i];
            const gambitWindow = this._gambitWindows[i];
            if (actor._gambitLogId > 0 && actor == subjectActor) {//アクターのターンの時だけgambitLogが動作するように
                result._logCount = 1;
                actor._gambitLogId = 0;
                this._gambitLogCount++;
            }
            if (result) {//もし_actorChangeActionがなかったらスキップ
                if (result._logCount > 0) {
                    const count = result.refresh(actor, this._gambitLogCount);
                    this._gambitLogCount = count;
                }
            }
            if (gambitWindow) {
                if (gambitWindow._setList != actor._gambitNow) {
                    gambitWindow._setList = actor._gambitNow;
                    gambitWindow.refresh(i);
                }
            }
        }

        if (BattleManager.isGambitWait() && BattleManager._subject == null) {//ガンビットON/OFFの切替判定
            if (BattleManager.isAutoBattleGambit()) {
                this.gambit_OFF();
            } else {
                let x = 0;
                $gameParty.members().forEach(function (actor) {
                    x = x + actor._gambitNow;
                });
                if (x > 0) {//一人でもガンビットモードがいける
                    this.gambit_ON();
                }
            }
            //BattleManager._gambitWait = false;
        }


        if (this._autoBattleWindowGambit.isOpen() && (Input.isTriggered(exports.Param.autoBattleKey) || this.onTouchCallAutoBattleGambit())) {
            if (BattleManager.isAutoBattleGambit()) {//オートバトル解除する
                if (exports.Param.GAMBIT_CHANGEMESSAGE_SE) {//音を出すかどうか
                    this.playSE_GambitChange();
                }
                if (exports.Param.GAMBIT_CHANGEMESSAGE) {//ガットインをするかどうか
                    const text = exports.Param.GAMBIT_CHANGEMESSAGE_TEXT_OFF;
                    this.cutIn_MKB(text);
                }
                BattleManager._gambitWait = true;
                if (BattleManager._subject == null) {//すでにsubjectに何も入っていなかったらガンビットを終了
                    this.gambit_OFF();
                }
            } else {
                let x = 0;
                $gameParty.members().forEach(function (actor) {
                    x = x + actor._gambitNow;
                });
                if (x > 0) {//一人でもガンビットモードがいける
                    if (exports.Param.GAMBIT_CHANGEMESSAGE_SE) {//音を出すかどうか
                        this.playSE_GambitChange();
                    }
                    if (exports.Param.GAMBIT_CHANGEMESSAGE && !!PluginManager._parameters['dtextpicture']) {//カットインするかどうか
                        const text = exports.Param.GAMBIT_CHANGEMESSAGE_TEXT_ON;
                        this.cutIn_MKB(text);
                    }
                    //this.gambit_ON();
                    BattleManager._gambitWait = true;
                    if (BattleManager._subject == null) {//すでにsubjectに何も入っていなかったらガンビットを終了
                        this.gambit_ON();
                    }
                } else {
                    SoundManager.playBuzzer();
                }
            }
        }

        if (this._autoBattleWindowGambit.isOpen() && (this.onTouchCallAutoBattleGambitChange())) {
            SoundManager.playOk();
            let actor = $gameParty.battleMembers()[this._touchIndex];
            switch (actor._gambitNow) {
                case 0:
                    actor._gambitNow++;
                    if (BattleManager.isAutoBattleGambit()) {
                        actor.addState(exports.Param.autosuteid);
                    }
                    break;
                case 1:
                    actor._gambitNow++;
                    break;
                case 2:
                    actor._gambitNow++;
                    break;
                case 3:
                    actor._gambitNow = 0;
                    actor.removeState(exports.Param.autosuteid);
                    break;
                default:
                    break;
            }
            this._gambitWindows.forEach(function (value, index) { value.refresh(index); });
        }
        this.endHideAutoBattleWindowGambit();
    };

    Scene_Battle.prototype.onTouchCallAutoBattleGambit = function () {
        if (TouchInput.isTriggered()) {
            var x = TouchInput.x;
            var y = TouchInput.y;
            var ax = this._autoBattleWindowGambit.x;
            var xw = ax + this._autoBattleWindowGambit.width;
            var ay = this._autoBattleWindowGambit.y;
            var yh = ay + this._autoBattleWindowGambit.height;
            return x >= ax && x <= xw && y >= ay && y <= yh;
        }
        return false;
    };

    Scene_Battle.prototype.onTouchCallAutoBattleGambitChange = function () {
        if (TouchInput.isTriggered()) {
            const x = TouchInput.x;
            const y = TouchInput.y;
            this._touchIndex = 0;
            let kekka = false;
            for (let i = 0; i < this._gambitWindows.length; i++) {
                const ax = this._gambitWindows[i].x;
                const xw = ax + this._gambitWindows[i].width;
                const ay = this._gambitWindows[i].y;
                const yh = ay + this._gambitWindows[i].height;
                if (x >= ax && x <= xw && y >= ay && y <= yh) {
                    this._touchIndex = i;
                    i = this._gambitWindows.length;
                    kekka = true;
                }
            }
            return kekka;
        }
        return false;
    };

    Scene_Battle.prototype.endHideAutoBattleWindowGambit = function () {
        if (BattleManager.isAborting() || $gameParty.members().length === 0 ||
            $gameParty.isAllDead() || $gameTroop.isAllDead()) {
            this.deactivateAutoBattleGambit();
        }
    };

    Scene_Battle.prototype.deactivateAutoBattleGambit = function () {
        BattleManager.autoBattleDeactivateGambit();
        this._autoBattleWindowGambit.refresh();
        if (this._autoBattleWindowGambit.isOpen()) { this._autoBattleWindowGambit.close() }
        BattleManager.autoBattleDeactivateGambitChange();
        this._gambitWindows.forEach(function (value, index) { value.refresh(index); });
        if (this._gambitWindows[0].isOpen()) { this._gambitWindows.forEach(function (value, index) { value.close(); }); }
    };

    Scene_Battle.prototype.activateAutoBattleGambit = function () {
        BattleManager.autoBattleActivateGambit();
        this._autoBattleWindowGambit.refresh();
        if (!this._autoBattleWindowGambit.isOpen()) { this._autoBattleWindowGambit.open() }
        BattleManager.autoBattleActivateGambitChange();
        this._gambitWindows.forEach(function (value, index) { value.refresh(index); });
        if (!this._gambitWindows[0].isOpen()) { this._gambitWindows.forEach(function (value, index) { value.open(); }); }
        Input.update();
        TouchInput.update();
    };

    const _MKB_SBattle_createPartyCommandWindow = Scene_Battle.prototype.createPartyCommandWindow
    Scene_Battle.prototype.createPartyCommandWindow = function () {
        _MKB_SBattle_createPartyCommandWindow.call(this);
        this._partyCommandWindow.setHandler('cancel', this.commandFight.bind(this));
    };

    const _MKB_SBattle_startPartyCommandSelection = Scene_Battle.prototype.startPartyCommandSelection;
    Scene_Battle.prototype.startPartyCommandSelection = function () {
        this._autoBattleWindowGambit.show();
        this._autoBattleWindowGambit.open();
        this._gambitWindows.forEach(function (value, index) { value.show(); });
        this._gambitWindows.forEach(function (value, index) { value.open(); });
        if (this._partyCommandSkipped && !($dataSystem.battleSystem === 0)) {
            _MKB_SBattle_startPartyCommandSelection.call(this);
        } else {
            this._partyCommandSkipped = true;
            this.selectNextCommand();
            this.gambit_ON();
        }
    };

    Scene_Battle.prototype.selectPreviousCommand = function () {
        BattleManager.selectPreviousCommand();
        if (BattleManager.isInputting() && BattleManager.actor()) {
            this.startActorCommandSelection();
        } else {
            _MKB_SBattle_createPartyCommandWindow.call(this);
        }
    };

    /*var _MKB_SBattle_startPartyCommandSelection = Scene_Battle.prototype.startPartyCommandSelection;
    Scene_Battle.prototype.startPartyCommandSelection = function () {
        this._autoBattleWindowGambit.show();
        this._autoBattleWindowGambit.open();
        this._gambitWindows.forEach(function (value, index) { value.show(); });
        this._gambitWindows.forEach(function (value, index) { value.open(); });
        if (BattleManager.isAutoBattleGambit() && exports.Param.AutoGambitEnableSwitchId > 0 && $gameSwitches.value(exports.Param.AutoGambitEnableSwitchId)) {
            //this.gambit_ON(); オートバトル無効
            //return;
        }
        _MKB_SBattle_startPartyCommandSelection.call(this);
    };*/

    var _MKB_SBattle_startActorCommandSelection = Scene_Battle.prototype.startActorCommandSelection;
    Scene_Battle.prototype.startActorCommandSelection = function () {
        _MKB_SBattle_startActorCommandSelection.call(this);
        this._autoBattleWindowGambit.open();
        this._gambitWindows.forEach(function (value, index) { value.open(); });
    };

    var _MKB_SBattle_commandSkill = Scene_Battle.prototype.commandSkill;
    Scene_Battle.prototype.commandSkill = function () {
        _MKB_SBattle_commandSkill.call(this);
        this._autoBattleWindowGambit.close();
        this._gambitWindows.forEach(function (value, index) { value.close(); });
    };

    var _MKB_SBattle_commandItem = Scene_Battle.prototype.commandItem;
    Scene_Battle.prototype.commandItem = function () {
        _MKB_SBattle_commandItem.call(this);
        this._autoBattleWindowGambit.close();
        this._gambitWindows.forEach(function (value, index) { value.close(); });
    };

    var _MKB_SBattle_onSkillCancel = Scene_Battle.prototype.onSkillCancel;
    Scene_Battle.prototype.onSkillCancel = function () {
        _MKB_SBattle_onSkillCancel.call(this);
        this._autoBattleWindowGambit.open();
        this._gambitWindows.forEach(function (value, index) { value.open(); });
    };

    var _MKB_SBattle_onItemCancel = Scene_Battle.prototype.onItemCancel;
    Scene_Battle.prototype.onItemCancel = function () {
        _MKB_SBattle_onItemCancel.call(this);
        this._autoBattleWindowGambit.open();
        this._gambitWindows.forEach(function (value, index) { value.open(); });
    };

    var _MKB_SBattle_commandEscape = Scene_Battle.prototype.commandEscape;
    Scene_Battle.prototype.commandEscape = function () {
        if (!BattleManager.isAutoBattleGambit()) { this._autoBattleWindowGambit.close() }
        this.deactivateAutoBattleGambit();
        _MKB_SBattle_commandEscape.call(this);
    };

    Scene_Battle.prototype.changeActorAction = function () {
    }


    Scene_Battle.prototype.playSE_GambitChange = function () {//ガンビット音を出す
        const se = {
            name: exports.Param.GAMBIT_CHANGEMESSAGE_SE1,
            pan: 0,
            pitch: exports.Param.GAMBIT_CHANGEMESSAGE_SE_PIT,
            volume: exports.Param.GAMBIT_CHANGEMESSAGE_SE_VOL,
        }
        AudioManager.playSe(se);
    }

    Scene_Battle.prototype.cutIn_MKB = function (text) {
        const fX = Graphics.width * 2;
        const fY = Graphics.height / 2 - 50;
        const obi_Num = exports.Param.GAMBIT_PICNUMBER_OBI;
        const text_Num = exports.Param.GAMBIT_PICNUMBER_TEXT;
        //showPicture(番号,"画像の名前",原点,x座標,y座標,幅の拡大率,高さの拡大率,不透明度,合成方法)
        $gameScreen.showPicture(obi_Num, "obi", 0, 0, fY, 100, 100, 125, 0);//テロップ背面に白透明の帯を表示
        $gameScreen.setDTextPicture('\\fs[80]' + text);//テロップ設定

        $gameScreen.showPicture(text_Num, "", 0, fX, fY, 100, 100, 255, 0);//テロップのｘ座標１６００に表示
        //movePicture(番号,原点,x座標,y座標,幅の拡大率,高さの拡大率,不透明度,合成方法,移動時間) 
        $gameScreen.movePicture(text_Num, 0, 300, fY + 10, 100, 100, 255, 0, 60, 2);
        setTimeout(function () {
            $gameScreen.movePicture(text_Num, 0, -1 * fX, fY + 10, 100, 100, 255, 0, 180, 2);
            setTimeout(function () {
                $gameScreen.erasePicture(obi_Num);
            }, 800);
        }, 1000);
    };

    //=============================================================================
    /** Window_EquipSlot ガンビットで使う装備は非表示にする　*/
    //=============================================================================
    Window_EquipSlot.prototype.maxItems = function () {//装備スロット総数から１を引く
        return this._actor ? this._actor.equipSlots().length - 1 : 0;
    };
    Window_EquipSlot.prototype.drawItem = function (index) {
        if (this._actor) {
            const slots = this._actor.equipSlots();
            if (slots[index] != exports.Param.Gambit_equipType) {//ガンビット用equipスロットだったら実行しない
                const slotName = this.actorSlotName(this._actor, index);
                const item = this.itemAt(index);
                const slotNameWidth = this.slotNameWidth();
                const rect = this.itemLineRect(index);
                const itemWidth = rect.width - slotNameWidth;
                this.changeTextColor(ColorManager.systemColor());
                this.changePaintOpacity(this.isEnabled(index));
                this.drawText(slotName, rect.x, rect.y, slotNameWidth, rect.height);
                this.drawItemName(item, rect.x + slotNameWidth, rect.y, itemWidth);
                this.changePaintOpacity(true);
            }
        }
    };
    //=============================================================================
    /** Window_StatusEquip ガンビットで使う装備は非表示にする　*/
    //=============================================================================
    Window_StatusEquip.prototype.maxItems = function () {//装備スロット総数から１を引く
        return this._actor ? this._actor.equipSlots().length - 1 : 0;
    };
    Window_StatusEquip.prototype.drawItem = function (index) {
        const slots = this._actor.equipSlots();
        if (slots[index] != exports.Param.Gambit_equipType) {//ガンビット用equipスロットだったら実行しない
            const rect = this.itemLineRect(index);
            const equips = this._actor.equips();
            const item = equips[index];
            const slotName = this.actorSlotName(this._actor, index);
            const sw = 138;
            this.changeTextColor(ColorManager.systemColor());
            this.drawText(slotName, rect.x, rect.y, sw, rect.height);
            this.drawItemName(item, rect.x + sw, rect.y, rect.width - sw);
        }
    };
    //=============================================================================
    /** Window_ItemList ガンビットで使う装備は非表示にする　*/
    //=============================================================================
    Window_ItemList.prototype.makeItemList = function () {
        if (this._category === "armor") {
            const aTypeXTARGET = exports.Param.Gambit_TARGET_armorType;
            const aTypeXIF = exports.Param.Gambit_IF_armorType;
            let listItemX
            listItemX = $gameParty.allItems().filter(item => this.includes(item)).filter(function (element) {
                return element.atypeId != aTypeXTARGET && element.atypeId != aTypeXIF;
            });
            this._data = listItemX;
        } else {
            this._data = $gameParty.allItems().filter(item => this.includes(item));
        }
        if (this.includes(null)) {
            this._data.push(null);
        }
    };

    //-----------------------------------------------------------------------------
    // Window_ShopBuy ショップでガンビットが販売されている場合、１つしか買えないようにする
    //
    // The window for selecting an item to buy on the shop screen.
    Window_ShopBuy.prototype.isEnabled = function (item) {
        const eTypeX = exports.Param.Gambit_equipType;
        const aTypeXTARGET = exports.Param.Gambit_TARGET_armorType;
        const aTypeXIF = exports.Param.Gambit_IF_armorType;
        if (item.etypeId === eTypeX && (item.atypeId === aTypeXTARGET || item.atypeId === aTypeXIF)) {
            if ($gameParty.armors().find((v) => v.id === item.id)) {
                return false;
            }
        }
        return item && this.price(item) <= this._money && !$gameParty.hasMaxItems(item);
    };

}((this.MKB_Gambit_SystemMZ = this.MKB_Gambit_SystemMZ || {})));
