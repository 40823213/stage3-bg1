var tipuesearch = {"pages": [{'title': 'About', 'text': '小組倉儲: \n https://github.com/40823245/stage3-bg1 \n https://github.com/40823251/stage3-bg1 \n https://github.com/40823208/stage3-bg1 \n https://github.com/40823246/stage3-bg1 \n https://github.com/40823213/stage3-bg1 \n https://github.com/40823232/stage3-bg1 \n https://github.com/40823234/stage3-bg1 \n https://github.com/40823235/stage3-bg1 \n 小組成員: \n 40823245 / 40823245 \n 40823251 / 40823251 \n 40823208 / 40823208 \n 40823246 / 40823246 \n 40823213 / 40823213 \n 40823232 / 40823232 \n 40823234 / 40823234 \n 40823235 / 40823235 \n', 'tags': '', 'url': 'About.html'}, {'title': '小組作業', 'text': '每周更新內容，放置作業和檔案 \n', 'tags': '', 'url': '小組作業.html'}, {'title': 'W9 統整各組資料', 'text': 'stage1 \n bg1 \n 主題:掃地機器人 \n 分工: 40823245-REVEAL製作、合併網站、程式模擬 40823251-PDF檔製作、提交請求、繪製圖檔 \n 簡述: 利用自動化機械結構來滿足靠人力打掃家中的需求，並實現節省時間及勞力的願景。 _________________________________________________________________ \n bg2 \n 主題:夾爪機構 \n 分工: 40823234-REVEAL製作、V-rep模擬 40823235-PDF檔製作、繪製圖檔 \n 簡述: 利用偏心輪帶動夾爪和滑軌來到達想要的位置來抓取物件。 _________________________________________________________________ \n bg8 \n 主題:自動分球機 \n 分工: 40823208-PDF製作、程式模擬 40823246-REVEAL製作、繪製圖檔 \n 簡述: 希望能把遊戲機台的不同大小的鋼珠自動的分類乾淨。 _________________________________________________________________ \n bg20 \n 主題:遊樂設施 \n 分工: 40823213-繪圖、inventor模擬\xa0 \xa0 40823232-CoppeliaSim模擬、pdf、reveal製作 \n 簡述: 了解設施的構造，和作動的方式 _________________________________________________________________ \n stage2 \n bg1 \n 主題:堆高機 \n 分工: 40823208-網頁編輯、reveal製作\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa040823245-CoppeliaSim 模擬 40823246-機構設計、CoppeliaSim 模擬\xa0 \xa0 \xa0\xa040823251-網頁編輯、PDF 製作 \n 簡述: 透過前方兩支支撐桿載運物品,並利用滑軌裝置實現抬升及下降的 動作,輪子可轉向用以達到目的地。 _________________________________________________________________ \n bg2 \n 主題:遊樂設施 \n 分工: 40823213-繪圖、inventor模擬\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa040823232-PDF 製作、reveal製作\xa0 \xa0 \xa0 \xa0 40823234-CoppeliaSim 模擬\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 40823235-網頁編輯 \n 簡述: 利用函數的曲線使桿件依照路徑升降，並上下移動。 _________________________________________________________________ \n stage3-bg1(heroku) \n 40823245 \n 40823251 \n 40823208 \n 40823234 \n 40823232 \n 40823246 \n 40823235 \n 40823213 \n', 'tags': '', 'url': 'W9 統整各組資料.html'}, {'title': 'W10 stage3討論', 'text': '\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0  4月30討論結果 主題: 生產線整合 分工: (1)繪圖:40823232、40823213 (2)幫忙及程式編輯:40823234、40823235、40823251 (3)模擬:40823246、40823208 (4)分工支援各種問題:40823245 \n 影片: \n', 'tags': '', 'url': 'W10 stage3討論.html'}, {'title': 'ipv4操作', 'text': '測試組員:40823251 \n 目的:複習及完成上課未完成連接ipv4之方法。 \n 步驟1.至網路/點選變更介面卡/找到目前已連線的網路按內容 \n 步驟2.選擇ipv4點選自用網址 \n 步驟3.輸入自己的編號連線 步驟4.開啟黑窗輸入 \n \n \n python -m http.server 8000 --bind 192.168.192.自己編號\n \n \n \n 步驟5.到網路上輸入192.168.192.自己編號:8000 查看是否成功 步驟6.開啟coppeliasim找到ttt檔和用白窗開啟程式 \n 步驟7.修改192.168.192.自己編號及名稱(學號) \n 步驟8.查看是否成功 \n 過程影片 \n', 'tags': '', 'url': 'ipv4操作.html'}, {'title': 'task1測試', 'text': '40823245編輯 \n stage3-2b.txt \n 使用程式跑出stage3的小組、組長、組員超連結，我參考老師的程式修改後成功執行，但過程有遇到很多問題，就上網找資料和查程式語法，下面2張圖簡單講大概意思，網路上找到的都很清楚(下面附參考網址)。 \n \n \n 程式碼 \n def stu2b(account):\n    if account == "40823231":\n        return account + "-2"\n    elif account[0:3] == "407":\n        return "s" + account\n    else:\n        return account\n\nteamb = []\n\n# open file, default is read mode, since txt content no chinese char\n# no encoding = "UTF-8" is needed\nwith open("stage3_2b.txt") as fh:\n    # readlines will read into the whole line and put into list format\n    # has \\n at the end of each line\n    data = fh.readlines()\n#print(len(data))\nfor i in range(len(data)):\n    group = data[i].rstrip("\\n").split("\\t")\n    teamb.append(group)\n    \noutput = ""    \nseperator = "-"*10 + "<br />"\n\nfor i in teamb[0:]:\n    team = i[0]\n    leader = stu2b(i[1])\n    m1 = stu2b(i[3])\n    m2 = stu2b(i[5])\n    m3 = stu2b(i[7])\n    m4 = stu2b(i[9])\n    m5 = stu2b(i[11])\n    m6 = stu2b(i[13])\n    \n    try:\n        m7 = stu2b(i[15])\n    except:\n        m7 = ""\n    try:\n        m8 = stu2b(i[17])\n    except:\n        m8 = ""\n        \n    leaderrepo = "<a href=\'http://github.com/" + leader + "/cd2021\'>" + leader + " repo</a>"\n    leadersite = "<a href=\'http://" + leader + ".github.io/cd2021\'>" + leader +  " site</a>"\n    m1repo = "<a href=\'http://github.com/" + m1 + "/cd2021\'>" + m1 + " repo</a>"\n    m1site = "<a href=\'http://" + m1 + ".github.io/cd2021\'>" + m1 +  " site</a>"\n    m2repo = "<a href=\'http://github.com/" + m2 + "/cd2021\'>" + m2 + " repo</a>"\n    m2site = "<a href=\'http://" + m2 + ".github.io/cd2021\'>" + m2 +  " site</a>"\n    m3repo = "<a href=\'http://github.com/" + m3 + "/cd2021\'>" + m3 + " repo</a>"\n    m3site = "<a href=\'http://" + m3 + ".github.io/cd2021\'>" + m3 +  " site</a>"\n    m4repo = "<a href=\'http://github.com/" + m4 + "/cd2021\'>" + m4 + " repo</a>"\n    m4site = "<a href=\'http://" + m4 + ".github.io/cd2021\'>" + m4 +  " site</a>"\n    m5repo = "<a href=\'http://github.com/" + m5 + "/cd2021\'>" + m5 + " repo</a>"\n    m5site = "<a href=\'http://" + m5 + ".github.io/cd2021\'>" + m5 +  " site</a>"\n    m6repo = "<a href=\'http://github.com/" + m6 + "/cd2021\'>" + m6 + " repo</a>"\n    m6site = "<a href=\'http://" + m6 + ".github.io/cd2021\'>" + m6 +  " site</a>"\n \n\n    teamrepo = "<a href=\'http://github.com/" + leader + "/" + team + "\'>" + team + " repo</a>"\n    teamsite =  "<a href=\'http://" + m1 + ".github.io/" + team + "\'>" + team +  " site</a>"\n\n    output += teamrepo + " | " + teamsite + " | " +leaderrepo + " | " + leadersite + " | " +m1repo + " | " + m1site + " | " +m2repo + " | " + m2site + " | " +m3repo + " | " + m3site + " | " +m4repo + " | " + m4site + " | " +m5repo + " | " + m5site + " | " +m6repo + " | " + m6site \n    \n    if m7 != "":\n       m7repo = "<a href=\'http://github.com/" + m7 + "/cd2021\'>" + m7 + " repo</a>"\n       m7site = "<a href=\'http://" + m7 + ".github.io/cd2021\'>" + m7 +  " site</a>"   \n       output += " |  " + m7repo + "| " + m7site\n    else:\n        output += "" \n    \n    if m8 != "":\n       m8repo = "<a href=\'http://github.com/" + m8 + "/cd2021\'>" + m8 + " repo</a>"\n       m8site = "<a href=\'http://" + m8 + ".github.io/cd2021\'>" + m8 +  " site</a>"   \n       output += " |  " + m8repo + "| " + m8site + "<br />" + seperator\n    else:\n        output += "<br />" + seperator\n\n\nprint(output)\n# the following will use group data to generate needed html \n 參考資料 \n 運算符號 、 運算符號-1 、 讀檔 、 for迴圈 、 for迴圈(範圍) 、 列表 、 切割字串 、 異常處理 \n 遇到問題 \n 列表超出範圍(list index out of range)，當時一直以為是沒有定義特殊情況，但之後發現是最後沒有設定好7、8、9人的特殊情況。 \n 跑程式的影片 \n \n 把白窗裡的輸出複製放入網頁 \n 結果如下 \n stage3-bg1 repo  |  stage3-bg1 site  |  40823245 repo  |  40823245 site  |  40823251 repo  |  40823251 site  |  40823208 repo  |  40823208 site  |  40823213 repo  |  40823213 site  |  40823232 repo  |  40823232 site  |  40823234 repo  |  40823234 site  |  40823235 repo  |  40823235 site  |  40823246 repo |  40823246 site ---------- stage3-bg2 repo  |  stage3-bg2 site  |  40823217 repo  |  40823217 site  |  40823201 repo  |  40823201 site  |  40823209 repo  |  40823209 site  |  40823210 repo  |  40823210 site  |  40823206 repo  |  40823206 site  |  40823207 repo  |  40823207 site  |  40823223 repo  |  40823223 site  |  40823224 repo |  40823224 site ---------- stage3-bg3 repo  |  stage3-bg3 site  |  40823236 repo  |  40823236 site  |  40823202 repo  |  40823202 site  |  40823203 repo  |  40823203 site  |  40823212 repo  |  40823212 site  |  40823219 repo  |  40823219 site  |  40823222 repo  |  40823222 site  |  40823231-2 repo  |  40823231-2 site  |  40823244 repo |  40823244 site ---------- stage3-bg4 repo  |  stage3-bg4 site  |  40823239 repo  |  40823239 site  |  s40723140 repo  |  s40723140 site  |  s40723128 repo  |  s40723128 site  |  s40723139 repo  |  s40723139 site  |  s40723106 repo  |  s40723106 site  |  s40723135 repo  |  s40723135 site  |  s40723143 repo  |  s40723143 site  |  s40723215 repo |  s40723215 site ---------- stage3-bg5 repo  |  stage3-bg5 site  |  40823221 repo  |  40823221 site  |  40823204 repo  |  40823204 site  |  40823205 repo  |  40823205 site  |  40823220 repo  |  40823220 site  |  40823228 repo  |  40823228 site  |  40823237 repo  |  40823237 site  |  40823242 repo  |  40823242 site  |  40823250 repo |  40823250 site  |  40832244 repo |  40832244 site ---------- stage3-bg6 repo  |  stage3-bg6 site  |  40823225 repo  |  40823225 site  |  40823214 repo  |  40823214 site  |  40823218 repo  |  40823218 site  |  40823211 repo  |  40823211 site  |  40823248 repo  |  40823248 site  |  40823247 repo  |  40823247 site  |  40823216 repo  |  40823216 site  |  40823238 repo |  40823238 site ---------- stage3-bg7 repo  |  stage3-bg7 site  |  40623144 repo  |  40623144 site  |  40823233 repo  |  40823233 site  |  s40723224 repo  |  s40723224 site  |  40823241 repo  |  40823241 site  |  40423155 repo  |  40423155 site  |  40823227 repo  |  40823227 site  |  s40723233 repo  |  s40723233 site ---------- \n \n', 'tags': '', 'url': 'task1測試.html'}, {'title': 'W11 OBS使用教學', 'text': '測試人員:40823251 \n 步驟一: 點選顯示器擷取點選需要的視窗即可錄製全螢幕。 \n 步驟二: 點擊右方開始串流且youtube點選直播即可完成。 備註:youtube第一次直播需等待24H 如需備份可同時點選下方的開始錄製或者至YOUTUBE下載直播檔。 \n 問題: (1.)錄製現場聲音過於吵雜。 \n 解決辦法:點選音訊源，點擊濾鏡。 選擇雜訊抑制即可有效改善錄音現況。 \n (2.)顯示器擷取是黑屏 參考資料: https://russquan.gitlab.io/obs-black-screen-fix-win10/ \n', 'tags': '', 'url': 'W11 OBS使用教學.html'}, {'title': 'W12 上課直播', 'text': '\n \n', 'tags': '', 'url': 'W12 上課直播.html'}, {'title': 'W13 Gitlab建立', 'text': '測試人員:40823245 \n 注:由於40823245的github被封，故由組員代替push。 \n gitlab步驟影片版本(用stage2-bg1做示範) \n \n 創建gitlab帳號 \n username:40823245 \n email:40823245@gm.nfu.edu.tw \n 新增空的倉儲 \n \n \n 輸入要同步過來的倉儲名稱(我用stage3-bg1當例子) \n 下面勾公開和不要有內建(空倉儲) \n \n 建完會看到下圖 \n \n 在對應的資料夾輸入git branch確認主分支 \n \n 如果無yml檔就建立，有yml檔就改(master→main) \n \n yml程式碼(檔名要存yml) \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n \n \n \n pages: \n \xa0\xa0 stage: deploy \n \xa0\xa0 script: \n \xa0\xa0 - mkdir .public \n \xa0\xa0 - cp -r * .public \n \xa0\xa0 - mv .public public \n \xa0\xa0 artifacts: \n \xa0\xa0\xa0\xa0 paths: \n \xa0\xa0\xa0\xa0 - public \n \xa0\xa0 only: \n \xa0\xa0 - main \n variables: \n \xa0\xa0 GIT_SUBMODULE_STRATEGY: recursive \n \n \n \n \n \n \n \n 推推看 \n \n 再檢查一次主分之 \n git remote到gitlab \n \n \n \n \n \n \n 1 \n \n \n \n git remote add gitlab https://gitlab.com/40823245/stage3-bg1.git \n \n \n \n \n \n \n \n 推到gitlab \n \n 可以看到gitlab為下圖 \n \n commit紀錄都在 \n \n 到設定找到gitlab同步後的網址 \n \n 若沒顯示下圖請重整頁面，它需要時間轉 \n \n 點連結可看到同步的頁面和網址 \n \n', 'tags': '', 'url': 'W13 Gitlab建立.html'}, {'title': 'gitlab-ssh', 'text': 'gitlab新增ssh影片操作 \n \n 基本和原本做ssh方法一樣，只是把github改成gitlab，和到gitlab設定ssh', 'tags': '', 'url': 'gitlab-ssh.html'}, {'title': 'TASK2測試區', 'text': '主題:生產線 \n 大綱: 有很多大大小小的箱子在一個轉軸（旋轉飛船原型）上，透過夾抓（40823234夾爪）將貨放到輸送帶上，然後利用分大小的機器（分球機原型）把每個貨物分到不同位子，再利用堆高機（40823245-stage2）把其中一個貨放到另一個地方，然後那一個貨裡面就是產品（裝掃地機器人）。 \n', 'tags': '', 'url': 'TASK2測試區.html'}, {'title': '掃地機器人', 'text': '掃地機器人 \n 測試組員:40823245 \n 第一版 ( py檔 ) \xa0 \xa0日期:2021/05/05 說明:先利用簡單的機構去測試是否遷入成功及程式是否可執行。 \n 第二版 ( py檔 ) 注意:本次影片測試速度設定為0故在原地不動。 問題:出現不正常運動軌跡、異常抖動情況。 \n 第三版 ( py檔 ) \xa0 \xa0日期:2021/05/06 說明:將原本機構簡化判斷是否為機構圖之問題。 \n \n 測試4 ( py檔 、 py檔-1 ):用api頁面操作 \n \n 測試5(檔同上測試4):新增x-y時間位置圖 \n \n 測試6( py檔 ):鍵盤控制 \n \n 頁面操作程式碼: \n \'\'\'remoteApiConnections.txt file content:\n\n// Let\'s start a continuous remote API server service on port 19997:\nportIndex1_port             = 19997\nportIndex1_debug            = false\nportIndex1_syncSimTrigger   = true\n19998:\nportIndex2_port             = 19998\nportIndex2_debug            = false\nportIndex2_syncSimTrigger   = true\n\'\'\'\nfrom flask import Flask, render_template, redirect\nfrom vrep_linefollower import VrepLineFollower\n\nline_follower = VrepLineFollower()\n\napp = Flask(__name__)\n\n@app.route("/")\ndef index():\n  return render_template(\'controls.html\')\n\n@app.route(\'/do/<direction>\')\ndef do(direction):\n  global line_follower\n  line_follower.to_direction(direction)\n  return redirect(\'/\')\n\n\nif __name__ == \'__main__\':\n  app.run(host=\'192.168.192.111\')\n \n \n 頁面操作程式碼-1: \n import sim as vrep\n\nclientID = vrep.simxStart(\'192.168.192.111\', 19997, True, True, 5000, 5)\n \nif clientID != -1:\n    print (\'Connected to remote API server\')\n \n    res = vrep.simxAddStatusbarMessage(\n        clientID, "text",\n        vrep.simx_opmode_oneshot)\n    if res not in (vrep.simx_return_ok, vrep.simx_return_novalue_flag):\n        print("Could not add a message to the status bar.")\nelse:\n       print (\'Failed connecting to remote API server\')\n\nclass VrepLineFollower:\n  def __init__(self):\n    vrep.simxFinish(-1) # just in case, close all opened connections\n    self.clientID = vrep.simxStart(\'192.168.192.111\', 19997, True, True, 5000, 5)\n    vrep.simxStartSimulation(self.clientID, vrep.simx_opmode_oneshot)\n    \n    self.wheelRadius = 0.027\n    self.linearVelocityLeft  = 0.1\n    self.linearVelocityRight = 0.1\n    \n    # vectors [left, right]\n    self.direction_v = {\n     \'up\':    [ 0.01,  0.01],\n     \'down\':  [-0.01, -0.01],\n     \'left\':  [-0.01,  0.01],\n     \'right\': [ 0.01, -0.01]\n    }\n\n    res, self.leftJointDynamic  = vrep.simxGetObjectHandle(self.clientID, "LBMotor",  vrep.simx_opmode_oneshot_wait)\n    res, self.rightJointDynamic = vrep.simxGetObjectHandle(self.clientID, "RBMotor", vrep.simx_opmode_oneshot_wait)\n\n  # direction = \'up\' | \'down\' | \'left\' | \'right\'\n  def to_direction(self, direction):\n        direction_vector = self.direction_v[direction]\n        self.linearVelocityLeft  += direction_vector[0]\n        self.linearVelocityRight += direction_vector[1]\n        self.set_motors()\n\n  # private\n  def set_motors(self):\n        t_left  = self.linearVelocityLeft  / self.wheelRadius\n        t_right = self.linearVelocityRight / self.wheelRadius\n        vrep.simxSetJointTargetVelocity(self.clientID, self.leftJointDynamic,  t_left,  vrep.simx_opmode_oneshot_wait)\n        vrep.simxSetJointTargetVelocity(self.clientID, self.rightJointDynamic, t_right, vrep.simx_opmode_oneshot_wait)\n \n \n \n 鍵盤操作程式碼: \n import sim as vrep\nimport math\nimport random\nimport time\nimport keyboard\n\nprint (\'Start\')\n\n# Close eventual old connections\nvrep.simxFinish(-1)\n# Connect to V-REP remote server\nclientID = vrep.simxStart(\'192.168.192.111\', 19997, True, True, 5000, 5)\n \nif clientID !=-1:\n    print (\'Connected to remote API server\')\n  \n    res = vrep.simxAddStatusbarMessage(\n        clientID, "40823245",\n        vrep.simx_opmode_oneshot)\n         \n    if res not in (vrep.simx_return_ok, vrep.simx_return_novalue_flag):\n        print("Could not add a message to the status bar.")\n         \n    opmode = vrep.simx_opmode_oneshot_wait\n    \n    vrep.simxStartSimulation(clientID, opmode)\n    ret,front_handle=vrep.simxGetObjectHandle(clientID,"FrontMotor",opmode)\n    ret,left_handle=vrep.simxGetObjectHandle(clientID,"LBMotor",opmode)\n    ret,right_handle=vrep.simxGetObjectHandle(clientID,"RBMotor",opmode)\n    ret,lfan_handle=vrep.simxGetObjectHandle(clientID,"LMotor",opmode)\n    ret,rfan_handle=vrep.simxGetObjectHandle(clientID,"RMotor",opmode)\n    while True:\n        if keyboard.is_pressed("w"):\n            vrep.simxSetJointTargetVelocity(clientID,front_handle,10,opmode)\n            vrep.simxSetJointTargetVelocity(clientID,left_handle,10,opmode)\n            vrep.simxSetJointTargetVelocity(clientID,right_handle,10,opmode)\n            print("go")\n           \n        if keyboard.is_pressed("s"):\n            vrep.simxSetJointTargetVelocity(clientID,front_handle,-10,opmode)\n            vrep.simxSetJointTargetVelocity(clientID,left_handle,-10,opmode)\n            vrep.simxSetJointTargetVelocity(clientID,right_handle,-10,opmode)\n            print("back")\n           \n        if keyboard.is_pressed("a"):\n            vrep.simxSetJointTargetVelocity(clientID,front_handle,0.05,opmode)\n            vrep.simxSetJointTargetVelocity(clientID,left_handle,0,opmode)\n            vrep.simxSetJointTargetVelocity(clientID,right_handle,10,opmode)\n            print("left")\n           \n        if keyboard.is_pressed("d"):\n            vrep.simxSetJointTargetVelocity(clientID,front_handle,0.05,opmode)\n            vrep.simxSetJointTargetVelocity(clientID,left_handle,10,opmode)\n            vrep.simxSetJointTargetVelocity(clientID,right_handle,0,opmode)\n            print("right")\n           \n        if keyboard.is_pressed("w+a"):\n            vrep.simxSetJointTargetVelocity(clientID,front_handle,5,opmode)\n            vrep.simxSetJointTargetVelocity(clientID,left_handle,0,opmode)\n            vrep.simxSetJointTargetVelocity(clientID,right_handle,10,opmode)\n            print("turn left")\n            \n        if keyboard.is_pressed("w+d"):\n            vrep.simxSetJointTargetVelocity(clientID,front_handle,5,opmode)\n            vrep.simxSetJointTargetVelocity(clientID,left_handle,10,opmode)\n            vrep.simxSetJointTargetVelocity(clientID,right_handle,0,opmode)    \n            print("turn right")\n            \n            \n        if keyboard.is_pressed("space"):\n            vrep.simxSetJointTargetVelocity(clientID,front_handle,0,opmode)\n            vrep.simxSetJointTargetVelocity(clientID,left_handle,0,opmode)\n            vrep.simxSetJointTargetVelocity(clientID,right_handle,0,opmode)\n            vrep.simxSetJointTargetVelocity(clientID,lfan_handle,0,opmode)\n            vrep.simxSetJointTargetVelocity(clientID,rfan_handle,0,opmode)\n            print("stop")\n            \n        if keyboard.is_pressed("q"):\n            vrep.simxSetJointTargetVelocity(clientID,lfan_handle,20,opmode)\n            print("turn left fan")\n           \n        if keyboard.is_pressed("e"):\n            vrep.simxSetJointTargetVelocity(clientID,rfan_handle,20,opmode)\n            print("turn right fan")\n            \nelse:\n    print (\'Failed connecting to  remote API server\')\n    print (\'End\') \n \n \n \n 參考資料 \n 網頁操作api 、 flask使用 、 render_template 、 物件導向 、 def-return 、 task2鍵盤操作 \n', 'tags': '', 'url': '掃地機器人.html'}, {'title': '分球機', 'text': '測試人員:40823208\xa0 \xa0 \xa0日期:2021/05/04 \n \xa0第一版 \n \n', 'tags': '', 'url': '分球機.html'}, {'title': '堆高機', 'text': '測試人員:40823246\xa0 \xa0 \xa0日期:2021/05/04 \n 內容:使其連線成功。 \n', 'tags': '', 'url': '堆高機.html'}, {'title': '夾爪機構', 'text': '測試人員:40823234\xa0 \xa0 \xa0日期:2021/05/05 \n \xa0第一版 \n \n 第一版 \n import sim as vrep\nimport math\nimport random\nimport time\n  \nprint (\'Start\')\n  \n# Close eventual old connections\nvrep.simxFinish(-1)\n# Connect to V-REP remote server\nclientID = vrep.simxStart(\'192.168.1.114\', 19997, True, True, 5000, 5)\n \nif clientID !=-1:\n    print (\'Connected to remote API server\')\n  \n    res = vrep.simxAddStatusbarMessage(\n        clientID, "40823234",\n        vrep.simx_opmode_oneshot)\n         \n    if res not in (vrep.simx_return_ok, vrep.simx_return_novalue_flag):\n        print("Could not add a message to the status bar.")\n         \n    opmode = vrep.simx_opmode_oneshot_wait\n    vrep.simxStartSimulation(clientID, opmode)\n    ret, wristHandle = vrep.simxGetObjectHandle(clientID, "VerticalJoint",opmode)\n    vrep.simxSetJointTargetVelocity(clientID,wristHandle,1,opmode)\n    ret, wristHandle = vrep.simxGetObjectHandle(clientID, "SpiritJoint",opmode)\n    vrep.simxSetJointTargetVelocity(clientID,wristHandle,1,opmode)\n    ret, wristHandle = vrep.simxGetObjectHandle(clientID, "joint",opmode)\n    vrep.simxSetJointTargetVelocity(clientID,wristHandle,1,opmode)\nelse:\n    print (\'Failed connecting to  remote API server\')\nprint (\'End\') \n \n 測試人員:40823234\xa0 \xa0 \xa0日期:2021/05/10 \n 第二版 使用python keyboard\xa0 檔案下載: remote api.zip \n \n \n 使用keyboard程式: \n import sim as vrep\nimport math\nimport random\nimport time\nimport keyboard\n  \nprint (\'Start\')\n  \n# Close eventual old connections\nvrep.simxFinish(-1)\n# Connect to V-REP remote server\nclientID = vrep.simxStart(\'192.168.1.114\', 19997, True, True, 5000, 5)\n \nif clientID !=-1:\n    print (\'Connected to remote API server\')\n  \n    res = vrep.simxAddStatusbarMessage(\n        clientID, "40823234",\n        vrep.simx_opmode_oneshot)\n         \n    if res not in (vrep.simx_return_ok, vrep.simx_return_novalue_flag):\n        print("Could not add a message to the status bar.")\n         \n    opmode = vrep.simx_opmode_oneshot_wait\n    vrep.simxStartSimulation(clientID, opmode)\n    ret,vertical_handle=vrep.simxGetObjectHandle(clientID,"VerticalJoint",opmode)#設定軸對應名稱\n    ret,spirit_handle=vrep.simxGetObjectHandle(clientID,"SpiritJoint",opmode)\n    ret,cam_handle=vrep.simxGetObjectHandle(clientID,"joint",opmode)\n    while True:\n        #keyboard "w" 前進\n     if keyboard.is_pressed("w"):\n            print("You pressed w")\n           \n            vrep.simxSetJointTargetVelocity(clientID,vertical_handle,0.1,opmode)\n     if keyboard.is_pressed("s"):#keyboard "s" 後退\n            print("You pressed s")\n           \n            vrep.simxSetJointTargetVelocity(clientID,vertical_handle,-0.1,opmode)\n     if keyboard.is_pressed("a"):#keyboard "a"向左 \n            print("You pressed a")\n           \n            vrep.simxSetJointTargetVelocity(clientID,spirit_handle,0.1,opmode)\n     if keyboard.is_pressed("d"):#keyboard "d" 向右\n            print("You pressed d")\n           \n            vrep.simxSetJointTargetVelocity(clientID,spirit_handle,-0.1,opmode)\n     if keyboard.is_pressed("q"):#keyboard "q" 前進後退停止\n            print("You pressed q")\n           \n            vrep.simxSetJointTargetVelocity(clientID,vertical_handle,0,opmode)\n     if keyboard.is_pressed("e"):#keyboard "e" 左右停止\n            print("You pressed e")\n           \n            vrep.simxSetJointTargetVelocity(clientID,spirit_handle,0,opmode) \n     if keyboard.is_pressed("r"):#keyboard "r" 凸輪轉動\n            print("You pressed r")\n           \n            vrep.simxSetJointTargetVelocity(clientID,cam_handle,1,opmode)   \n     if keyboard.is_pressed("f"):#keyboard "f" 凸輪停止\n            print("You pressed f")\n           \n            vrep.simxSetJointTargetVelocity(clientID,cam_handle,0,opmode)        \nelse:\n    print (\'Failed connecting to  remote API server\')\nprint (\'End\') \n \n', 'tags': '', 'url': '夾爪機構.html'}, {'title': '遊樂設施', 'text': '測試人員:40823232\xa0 \xa0 日期:2021/05/14 \n 成功驅動 \n \n import sim as vrep\nimport math\nimport random\nimport time\n  \nprint (\'Start\')\n  \n# Close eventual old connections\nvrep.simxFinish(-1)\n# Connect to V-REP remote server\nclientID = vrep.simxStart(\'192.168.192.115\', 19997, True, True, 5000, 5)\n  \nif clientID != -1:\n    print (\'Connected to remote API server\')\n  \n    res = vrep.simxAddStatusbarMessage(\n        clientID, "40823232",\n        vrep.simx_opmode_oneshot)\n    if res not in (vrep.simx_return_ok, vrep.simx_return_novalue_flag):\n        print("Could not add a message to the status bar.")\n    # Communication operating mode with the remote API : wait for its answer before continuing (blocking mode)\n    # http://www.coppeliarobotics.com/helpFiles/en/remoteApiConstants.htm\n    opmode = vrep.simx_opmode_oneshot_wait\n  \n    # Try to retrieve motors and robot handlers\n    # http://www.coppeliarobotics.com/helpFiles/en/remoteApiFunctionsPython.htm#simxGetObjectHandle\n    vrep.simxStartSimulation(clientID,opmode)\n    ret1,front_handle = vrep.simxGetObjectHandle(clientID, "Revolute_joint", opmode)\n     \n \nelse:\n    print (\'Failed connecting to remote API server\') \n', 'tags': '', 'url': '遊樂設施.html'}, {'title': '小組影片', 'text': '第九週 \n 第十週 (1)連接ipv4 (2)task1教學 \n', 'tags': '', 'url': '小組影片.html'}, {'title': '直播影片', 'text': 'W11\xa0 \xa0 \xa0日期:2021/05/07 \n 直播人員: 40823208 李翊帆 40823213 王鼎鈞 \n \n 直播人員: 40823245 林浩瑋 40823251 林進益 \n W12\xa0 \xa0 \xa0日期:2021/05/14 \n 直播人員: 40823208 李翊帆 40823235 邱璽 \n 直播人員: 40823246 朱晉賢 40823251 林進益 \n 日期:2021/05/21 \n \n', 'tags': '', 'url': '直播影片.html'}]};