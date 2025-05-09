import AndroidUtils from "./application/android";
import ExcelsUtils from "./application/excels";
import ReactNativeUtils from "./application/reactnative";
const { DOMParser } = require('xmldom');


(async () => {
  let excelsData = await ExcelsUtils.readExcel("input/test.xlsx")
  const androidData = await AndroidUtils.stringsXml()
   AndroidUtils.creatStringsXML(androidData,excelsData)

//  console.log("excelsData",excelsData)




  // let reactData = ReactNativeUtils.readI18n()
  // ReactNativeUtils.creatJSfile(reactData, excelsData)
  // console.log(excelsData)


  //  console.log("read")
  //  let reactData = ReactNativeUtils.readI18n()
  // await ExcelsUtils.outputExcel(reactData,"DSAL準備翻譯文件")
  //  console.log("create")
  //  ReactNativeUtils.creatJSfile(reactData,excelsData)


  // //生成 android strings
  //
  //
  // const iosData = await IOSUtils.localizableStrings()
  // await ExcelsUtils.outputExcel(iosData,"IOS準備的翻譯文件")
  //  IOSUtils.creatLocalizable(iosData,excelsData)


  //
  // Vue.mergeFile(merge1,merge2)
  // console.log(JSON.stringify(sortObjectByKey(androidData)))
  // await ExcelsUtils.outputExcel(androidData, "Android準備的翻譯文件")

  // let reactData = ReactNativeUtils.readI18n()
  // await ExcelsUtils.outputExcel(reactData, "React準備翻譯文件")

  // await ExcelsUtils.outputAndroidAndIOSExcel(androidData, iosData, "FDCT翻譯文件")




  // await ExcelsUtils.outputExcel(androidData, "Android翻譯文件")

})()
function sortObjectByKey(obj) {
  var keys = Object.keys(obj);
  var sortedKeys = keys.sort();
  var sortedObj = {};

  for (var i = 0; i < sortedKeys.length; i++) {
    sortedObj[sortedKeys[i]] = obj[sortedKeys[i]];
  }

  return sortedObj;
}

function sortStringValuesFromXml(xmlContent) {
  // 使用DOMParser解析XML字符串
  var parser = new DOMParser();
  var xmlDoc = parser.parseFromString(xmlContent, "text/xml");

  // 获取所有<string>元素
  var stringElements = xmlDoc.getElementsByTagName("string");

  // 创建一个数组存储解析出的name-value对
  var stringArray = [];
  for (var i = 0; i < stringElements.length; i++) {
    var element = stringElements[i];
    // 提取name和value属性
    var name = element.getAttribute("name");
    var value = element.textContent;
    // 存储为对象
    stringArray.push({ name: name, value: value });
  }

  // 根据"value"对数组进行排序
  stringArray.sort(function (a, b) {
    return a.value.localeCompare(b.value);
  });

  // 打印排序后的value，仅作展示用途
  console.log(stringArray)

  // 创建一个映射，以值作为键，数组元素作为值
  const valueMap = {};

  // 遍历数组，填充映射
  stringArray.forEach(item => {
    if (!valueMap[item.value]) {
      valueMap[item.value] = [];
    }
    valueMap[item.value].push(item);
  });

  // 筛选出具有重复value的数组元素
  const duplicates = Object.keys(valueMap).reduce((result, key) => {
    return valueMap[key].length > 1 ? result.concat(valueMap[key]) : result;
  }, []);

  // 打印结果
  console.log(duplicates);

  // 返回排序后的数组，你可以根据需要进一步处理这个数组
  return stringArray;
}

var xmlContent = `<resources>
    <string name="to_get">" 至\n"</string>
    <string name="action">操作</string>
    <string name="action2">操作：</string>
    <string name="action_add_attachment_or_link_work">新增附件/關聯工作</string>
    <string name="action_close">關閉</string>
    <string name="action_complete">完成</string>
    <string name="action_complete_work">解決</string>
    <string name="action_edit">編輯</string>
    <string name="action_failure">操作失敗</string>
    <string name="action_message">留言</string>
    <string name="action_new">新建</string>
    <string name="action_new_working_reassign_restart">新建、工作中、重新指派及重啟</string>
    <string name="action_other">其他(留言，上傳...)</string>
    <string name="action_reassign">重新指派</string>
    <string name="action_restart">重啟</string>
    <string name="action_success">操作成功</string>
    <string name="action_type">操作類型</string>
    <string name="action_upload_attachment">上傳附件</string>
    <string name="add_attachments">新增附件</string>
    <string name="add_audio">上傳錄音</string>
    <string name="add_job_photo">新增工作照</string>
    <string name="add_photo">上傳相片</string>
    <string name="add_video">上傳錄影</string>
    <string name="added">新增</string>
    <string name="address">地址</string>
    <string name="agree_system_info">意見管理系統資訊</string>
    <string name="all_type">全部類型</string>
    <string name="all_upload">總未上傳</string>
    <string name="already_add_inspection">已新增巡查表</string>
    <string name="already_edit_job">已成功修改工作</string>
    <string name="alreay_regiter_wait">等待管理員確認</string>
    <string name="app_auto_clock_in">App自動打卡中</string>
    <string name="app_quit">再按一次退出應用</string>
    <string name="app_version">版本號</string>
    <string name="area">區域</string>
    <string name="area_number">面積</string>
    <string name="BUSINESS_OBJECT_AREA_SEARCH">區域 - 對象區域</string>
    <string name="attachment">附件</string>
    <string name="attachment_reload">附件上傳失敗，是否重新上傳</string>
    <string name="attachment2">附件：</string>
    <string name="attribute_data">屬性資料</string>
    <string name="audio">音頻</string>
    <string name="AUTO">自動打卡</string>
    <string name="base_data_sync_failure">有基礎數據同步失敗，請進行手動更新</string>
    <string name="basic_data">基本資料</string>
    <string name="basic_data_sync">基礎數據同步</string>
    <string name="build_task">新增任務</string>
    <string name="building_number_format">第%1$s座</string>
    <string name="business_obj_not_found">當前巡查類型對應的對象編號不存在</string>
    <string name="business_object">對象</string>
    <string name="business_object_name">對象名稱</string>
    <string name="business_object_number">對象編號</string>
    <string name="businessObject_null">項目對象必填</string>
    <string name="BUSINESSOBJECT_TYPE_ITEM_ABSTRACT_SEARCH">對象-工作摘要</string>
    <string name="BUSINESSOBJECT_TYPE_ITEM_SEARCH">對象 - 項目</string>
    <string name="BUSINESSOBJECT_TYPE_SEARCH">對象 - 項目類型</string>
    <string name="by_steop">（按順序巡查）</string>
    <string name="case_number">個案編號</string>
    <string name="check_clock_in">打卡記錄</string>
    <string name="chose_end_time_pleaz">請選擇結束時間</string>
    <string name="chose_scheduled_date_pleaz">請選擇巡查日期</string>
    <string name="chose_start_time_pleaz">請選擇開始時間</string>
    <string name="click_loading_more">點擊加載更多</string>
    <string name="clock_in">打卡</string>
    <string name="clock_in_failure">提交打卡記錄失敗</string>
    <string name="close_job">關閉工作</string>
    <string name="code_error">驗證碼錯誤</string>
    <string name="code_error_or_inv">驗證失敗</string>
    <string name="code_facility">設施編號</string>
    <string name="cofirm_out">確認退出</string>
    <string name="coloane">路環</string>
    <string name="common_type">常用類型</string>
    <string name="complaint_attributes">投訴屬性</string>
    <string name="confim_delete_attachment">確認刪除附件？</string>
    <string name="confim_delete_job_attachment">確定刪除工作照？</string>
    <string name="confim_delete_job_relation">確定解除關聯工作？</string>
    <string name="confirm">確認</string>
    <string name="confirm_edit">確認編輯</string>
    <string name="confirm_edit_job">確認修改工作嗎</string>
    <string name="confirm_initial">編輯初覆時間</string>
    <string name="confirm_job">確認新增工作嗎</string>
    <string name="content">內容</string>
    <string name="continue_do">繼續跟進</string>
    <string name="continue_inspection">繼續巡查</string>
    <string name="continue_job">繼續工作</string>
    <string name="controller">管理者</string>
    <string name="coordinates">坐標</string>
    <string name="create_date">建立日期</string>
    <string name="create_time">建立時間</string>
    <string name="current_location">當前位置</string>
    <string name="cycle_setting">週期設定</string>
    <string name="date_received">接收日期</string>
    <string name="deletel">刪除</string>
    <string name="description">描述</string>
    <string name="device_code">設備ID</string>
    <string name="device_register_name">請輸入設備名稱</string>
    <string name="doc">文檔</string>
    <string name="doorplate">門牌</string>
    <string name="download_failure">下載失敗%1$s</string>
    <string name="draft">草稿</string>
    <string name="edit_basic">編輯基本資料</string>
    <string name="end_time">結束時間</string>
    <string name="enter_app">進入APP</string>
    <string name="erro2">項目類型必填</string>
    <string name="erro22">項目必填</string>
    <string name="erro23">工作屬性必填</string>
    <string name="erro24">工作摘要必填</string>
    <string name="erro25">工作小類型必填</string>
    <string name="erro30">無執行單位</string>
    <string name="error">%1$s上傳附件記錄失敗;</string>
    <string name="error_">系统发生错误</string>
    <string name="error_MOBILE_NOT_EXISTS">驗證不通過，請檢查手機號</string>
    <string name="error_1">新建工作失敗(%1$s)；</string>
    <string name="error_10">不允許本機記錄存在巡查中的巡查</string>
    <string name="error_11">建立巡查失敗，%1$s</string>
    <string name="error_12">該對象無配置巡查模板</string>
    <string name="error_15">本機有巡查中待完成的巡查，請先完成巡查</string>
    <string name="error_17">本機有巡查中待完成的巡查，請先完成巡查，再開始執行該巡查</string>
    <string name="error_18">未到執行計劃時間，不可執行</string>
    <string name="error_2">更新打卡記錄失敗(%1$s)；</string>
    <string name="error_20">當前定位不在地點範圍內</string>
    <string name="error_3">更新操作：%1$s失敗（%2$s;</string>
    <string name="error_4">更新操作：%1$s的%2$s失敗（%3$s;</string>
    <string name="error_6">不可超過最大時間：%1$s</string>
    <string name="error_7">同步服務器時間失敗</string>
    <string name="error_8">驗證不通過，請檢查驗證碼或網絡</string>
    <string name="error_action_1">同步巡检失败，當前頁面數據非最新數據，請下拉刷新</string>
    <string name="error_AppError">无法打开App或App未安装。</string>
    <string name="error_ATTACHMENT_LOWER_LIMIT_ERROR">附件超過下限</string>
    <string name="error_ATTACHMENT_UPPER_LIMIT_ERROR">附件超過上限</string>
    <string name="error_JOB_SUB_TYPE_NOT_RELEVANCY">工作類型中沒有相關工作小類型</string>
    <string name="error_BrowserError">无法打开连结。</string>
    <string name="error_DATA_INTEGRITY_VIOLATION">編號已存在</string>
    <string name="error_ENTITY_NOT_FOUND">數據缺失</string>
    <string name="error_Error">系统发生错误[错误码是：%1$s]，请稍候重试！</string>
    <string name="error_GET_LOCALTION_ERROR">地址加載失敗</string>
    <string name="error_HttpError">网络协议出错。</string>
    <string name="error_OPER_DATA_ERROR">操作工作缺少參數</string>
    <string name="error_TIMEOUT_ERROR">連接超時</string>
    <string name="error_SSL_ERROR">證書出錯</string>
    <string name="error_NETWORK_ERROR">網絡錯誤</string>
    <string name="error_UNKNOWN">未知錯誤</string>
    <string name="error_NO_INSPECTION_RESULTS">無巡查結果可複製</string>
    <string name="error_LOWER_LIMIT_TIME_ERROR">執行時間不足</string>
    <string name="error_INSPECTION_STATUS_CLOSED">該巡查已有完成的記錄</string>
    <string name="error_NetworkError">网络连接失败，请检查网络设置。</string>
    <string name="ERROR_NOT_NFC">沒有 NFC 標籤記錄 (%1$s)</string>
    <string name="error_OpenFileError">没有找到第三方应用打开该文件[文件地址：%1$s]。</string>

    <string name="error_ASSIGN_AGAIN_ERROR">不可指派給目前的執行單位</string>
    <string name="error_UPDATE_ERROR">上傳文件出現異常</string>
    <string name="error_JOB_TASK_AREA_NOT_NULL">工作區域不能為空</string>
    <string name="error_JOB_TASK_ABSTRACT_NOT_NULL">工作摘要不能為空</string>
    <string name="error_JOB_SUB_TYPE_NOT_NULL">工作小類型不能為空</string>
    <string name="error_ITEM_JOB_PROPERTY_NOT_NULL">項目的工作屬性不能為空</string>
    <string name="error_ITEM_JOB_ABSTRACT_NOT_NULL">項目的工作摘要不能為空</string>
    <string name="error_INSPECTION_ITEM_NOT_NULL">項目不能為空</string>
    <string name="error_INSPECTION_TYPE_NOT_NULL">項目類型不能為空</string>
    <string name="error_BUSINESS_OBJECT_NOT_NULL">業務對象不能為空</string>
    <string name="error_CATEGORY_NOT_NULL">工作類型和巡查類型不能同時為空</string>
    <string name="error_OPER_SOLVE_WAY_ERROR">解決方式不能為空</string>
    <string name="error_OPER_FINISH_TIME_ERROR">完成時間不能為空</string>
    <string name="error_OPER_EXECUTION_WORK_GROUP_ERROR">執行單位不能為空</string>
    <string name="error_CAN_NOT_CREAT">該接口不能進行新增操作</string>
    <string name="error_JOB_NOT_FOUNT">沒有找到工作記錄</string>
    <string name="error_EXPORT_ERROR">導出異常</string>

    <string name="error_ParseError">解析数据发生错误。</string>
    <string name="error_ResponseError">后台接口错误，[错误码：%1$s]。</string>
    <string name="error_SslError">服务证书出错。</string>
    <string name="error_STATUS_ERROR">當前狀態無法進行該操作，請同步最新資料</string>
    <string name="error_Timeout">网络超时。</string>
    <string name="error_Token_Invalid">登入已失效，请重新登入。</string>
    <string name="error_UnexpectedResult">返回错误数据。</string>
    <string name="error_Unknown">未知错误。</string>
    <string name="error_PLAN_EXECUTION_ERROR">執行時間不在範圍內</string>
    <string name="error1">已超過執行計劃時間，不可執行</string>
    <string name="error13">未選擇巡查對象</string>
    <string name="error15">事項未完成跟進</string>
    <string name="error16">本機存在相同編號巡查，繼續在線的巡查將覆蓋本機記錄</string>
    <string name="error2">巡查時間未夠%1$d分鐘</string>
    <string name="error21">獲取工作詳情失敗</string>
    <string name="error22">當前工作地點需要定位，請獲取當前定位或選擇地圖工作</string>
    <string name="error24">工作摘要必填</string>
    <string name="error26">工作類型必填</string>
    <string name="error28">工作區域必填</string>
    <string name="error29">工作类别為空</string>
    <string name="error3">座標地圖加載失敗:%1$s</string>
    <string name="error31">用戶未配置報告單位，未能完成建立工作</string>
    <string name="error32">無報告人</string>
    <string name="error33">投訴屬性為必填</string>
    <string name="error34">優先級必填</string>
    <string name="error35">%1$s項目相片數量少於%2$s</string>
    <string name="error36">請填寫項目：%1$s</string>
    <string name="error37">請上傳工作照</string>
    <string name="error38">上傳巡查失敗(%1$s)；</string>
    <string name="error39">文件不存在:%1$s;</string>
    <string name="error41">上傳附件：%1$s失敗(%2$s)；</string>
    <string name="error42">提交失敗：%1$s</string>
    <string name="error43">編輯失敗:%1$s</string>
    <string name="error44">打卡失敗：%1$s</string>
    <string name="error45">地圖加載錯誤：%1$s</string>
    <string name="error46">在線工作失敗：%1$s</string>
    <string name="error47">工作上傳失敗：%1$s</string>
    <string name="errro40">%1$s 上傳附件：%2$s失敗(%3$s)；</string>
    <string name="event_name">事件名稱</string>
    <string name="every">每</string>
    <string name="executable">可執行</string>
    <string name="execute_immediately">立即執行</string>
    <string name="execute_inspection">執行巡查</string>
    <string name="executeEndAt">執行結束時間</string>
    <string name="executeStartAt">執行開始時間</string>
    <string name="executing_unit">執行單位</string>
    <string name="execution_time">執行時間</string>
    <string name="executor">執行人</string>
    <string name="facility_in_others_job">該設施編號已在其他工作應用，請確認是否繼續添加</string>
    <string name="file_add_failure">附件提交失敗</string>
    <string name="file_add_success">附件添加成功</string>
    <string name="filter_attachments">只查看有附件</string>
    <string name="finish_inspection">完成巡查</string>
    <string name="finish_time_is">完成時間為 %1$s</string>
    <string name="finished">已完成</string>
    <string name="finsh_time">完成時間</string>
    <string name="floor">樓層</string>
    <string name="floor_number_format">%1$s樓</string>
    <string name="FOLLOW_UP_COMPLETE">完成跟進</string>
    <string name="follow_up_status">跟進狀態</string>
    <string name="FOLLOWING_UP">跟進中</string>
    <string name="friday">星期五</string>
    <string name="ga_login">工作人員登入號</string>
    <string name="get_current_location">將獲取您當前位置</string>
    <string name="getcode">獲取手機驗證碼</string>
    <string name="gias">GIAS</string>
    <string name="got_current_location">已獲取當前定位</string>
    <string name="hold">暫存</string>
    <string name="iam">市政在線</string>
    <string name="in_progress">部分完成</string>
    <string name="inspection">執行中</string>
    <string name="inspection_area">巡查區域</string>
    <string name="inspection_audio">巡查錄音</string>
    <string name="inspection_business_object_attr">對象屬性及附件</string>
    <string name="inspection_category">巡查類別</string>
    <string name="inspection_date">巡查日期</string>
    <string name="inspection_event">巡查事件</string>
    <string name="inspection_event_code">巡查事件編號</string>
    <string name="inspection_execute_scope">按計劃執行</string>
    <string name="inspection_items">巡查項目</string>
    <string name="inspection_job_abstract">巡查工作摘要</string>
    <string name="inspection_name">巡查名稱</string>
    <string name="inspection_number1">巡查編號</string>
    <string name="inspection_object">巡查對象</string>
    <string name="inspection_period">週期性巡查</string>
    <string name="inspection_period_number">週期性編號</string>
    <string name="inspection_picture">巡查圖片</string>
    <string name="inspection_recording">巡查錄像</string>
    <string name="inspection_setup">新增巡查表</string>
    <string name="inspection_setup_event">新增巡查事件</string>
    <string name="inspection_setup_period">新增週期性巡查計劃</string>
    <string name="inspection_templated">巡查模板</string>
    <string name="inspection_time">巡查時間</string>
    <string name="inspection_time_must">計劃時間</string>
    <string name="inspection_business_type">巡查類型</string>
    <string name="INSPECTION_TYPE_ITEM_ABSTRACT_SEARCH">工作摘要 - 項目工作</string>
    <string name="INSPECTION_TYPE_ITEM_SEARCH">巡查 - 項目</string>
    <string name="INSPECTION_TYPE_SEARCH">巡查 - 項目類型</string>
    <string name="inspection_unit">巡查單位</string>
    <string name="inspection_user">巡查人</string>
    <string name="inspectionBusinessType_null">工作類型為空</string>
    <string name="is_use_address">是否應用該地址</string>
    <string name="jinji">緊急</string>
    <string name="job_abstract">工作摘要</string>
    <string name="job_action">變更記錄</string>
    <string name="job_area">工作區域</string>
    <string name="job_attributes">工作屬性</string>
    <string name="job_audio">工作錄音</string>
    <string name="job_describe">工作描述</string>
    <string name="job_failure">工作提交失敗</string>
    <string name="job_group">工作組</string>
    <string name="job_level">優先級</string>
    <string name="job_message_templete">留言模板</string>
    <string name="job_name">工作名稱</string>
    <string name="job_not_realate">*項目為%1$s、工作狀態為%2$s的工作</string>
    <string name="job_not_realate2">巡查類型為%1$s、工作狀態為%2$s的工作</string>
    <string name="job_number">工作編號</string>
    <string name="job_or_inspection_type">工作/巡查類型</string>
    <string name="job_picture">工作圖片</string>
    <string name="job_recording">工作錄像</string>
    <string name="job_setup">新增工作</string>
    <string name="job_setup_period">新增週期性工作</string>
    <string name="job_small_type">工作小類型</string>
    <string name="job_source">工作來源</string>
    <string name="job_status">工作狀態</string>
    <string name="job_type">工作類型</string>
    <string name="JOBABSTRACT_SEARCH">工作類型 - 工作摘要</string>
    <string name="JOBMESSAGE_TEMPLATESEARCH">工作留言範本</string>
    <string name="JOBTYPE_JOBSUBTYPE_SEARCH">工作類型 - 工作小類型</string>
    <string name="keywords">關鍵字</string>
    <string name="label_theme">主題標籤</string>
    <string name="latitude">緯度</string>
    <string name="leaving_message2">留言：</string>
    <string name="limit_lower">(至少%1$s個相片)</string>
    <string name="link_duplicate_case_inner">重複個案關聯(内)</string>
    <string name="link_duplicate_case_municipal">重複個案關聯(市)</string>
    <string name="load_failute">加載失敗，請重試</string>
    <string name="load_not_data">查詢不到數據</string>
    <string name="local">(本地)</string>
    <string name="local_search">本機查詢</string>
    <string name="local_search_result">查詢結果：共%1$d筆記錄</string>
    <string name="location_auto">自動定位</string>
    <string name="location_current">當前地點</string>
    <string name="location_detail">地址補充</string>
    <string name="location_error">獲取當前定位失敗：%1$s</string>
    <string name="location_failure">打卡失敗，未取得位置權限</string>
    <string name="location_manual">手動定位</string>
    <string name="location_map_select">地圖選點</string>
    <string name="location_nfc">NFC定位</string>
    <string name="location_record_detail">定位/NFC\n記錄</string>
    <string name="location_success">打卡成功</string>
    <string name="login">登錄</string>
    <string name="login_account_title">帳戶登錄</string>
    <string name="login_failure">登錄失敗</string>
    <string name="login_failure_message">登錄失敗:%1$s</string>
    <string name="login_input_name">登錄名稱</string>
    <string name="login_input_password">登錄密碼</string>
    <string name="login_not_binding">當前帳戶無綁定巡查帳號</string>
    <string name="login_password_plez">請輸入密碼</string>
    <string name="login_shangshetong">一戶通實體帳號</string>
    <string name="login_success">登錄成功</string>
    <string name="login_username_plez">請輸入用戶名</string>
    <string name="login_verification_code">手機驗證碼登入</string>
    <string name="logout">登出</string>
    <string name="logout_pleaz">確認登出帳戶嗎</string>
    <string name="longitude">經度</string>
    <string name="look_details">查看詳情</string>
    <string name="macao">澳門</string>
    <string name="make_sure_add_event">確認新建巡查事件嗎</string>
    <string name="make_sure_inspection_close">確認完成巡查嗎</string>
    <string name="make_sure_inspection_execute">確認執行巡查嗎？</string>
    <string name="mansion">大廈</string>
    <string name="manual_clock_in">手动打卡</string>
    <string name="map">地圖</string>
    <string name="menu_create">建立</string>
    <string name="menu_inspection">巡查</string>
    <string name="menu_job">工作</string>
    <string name="menu_main">主頁</string>
    <string name="menu_plant">計畫任務</string>
    <string name="mobile_login">手機登錄</string>
    <string name="monday">星期一</string>
    <string name="must_job_time">要求工作時間</string>
    <string name="must_required">%1$s為必填</string>
    <string name="name">名稱</string>
    <string name="new_and_relation_job">新增/關聯工作</string>
    <string name="NFC">NFC打卡</string>
    <string name="NFC_LABEL">NFC標籤</string>
    <string name="nfc_scan_card">請將手機靠近NFC卡</string>
    <string name="no">否</string>
    <string name="no_attachment">該項目無附件</string>
    <string name="NO_AUTO">手動打卡</string>
    <string name="no_data">暫無數據,點擊刷新</string>
    <string name="NO_FOLLOW_UP">無需跟進</string>
    <string name="normal">一般</string>
    <string name="not_add_attachment">無新增附件</string>
    <string name="not_attachments">無附件</string>
    <string name="not_file">沒有附件</string>
    <string name="not_get_location">無法獲取坐標</string>
    <string name="not_location">無坐標信息</string>
    <string name="not_started">未開始</string>
    <string name="not_uploaded">未上傳</string>
    <string name="nothing">無</string>
    <string name="notice_message">消息通知</string>
    <string name="notice1">巡查新建通知</string>
    <string name="notice10">工作未輸入初覆時間通知</string>
    <string name="notice11">工作未輸入預計完成時間通知</string>
    <string name="notice2">巡查超時通知</string>
    <string name="notice3">工作新建通知</string>
    <string name="notice4">工作留言通知</string>
    <string name="notice5">工作超時通知</string>
    <string name="notice6">工作狀態變更通知</string>
    <string name="notice7">工作預計完成時間通知</string>
    <string name="notice8">工作待開標的預計完成日期通知</string>
    <string name="notice9">工作狀態停留通知</string>
    <string name="notification_channel_des_1">打卡服務運行的前台通知</string>
    <string name="notification_channel_id_1">999</string>
    <string name="notification_channel_name_1">自動打卡服務</string>
    <string name="number">編號</string>
    <string name="number_format">%1$s號</string>
    <string name="object_or_address">對象/地址</string>
    <string name="obsolete">已過時</string>
    <string name="offline_job">離線工作</string>
    <string name="online">(在線)</string>
    <string name="online_job">在線工作</string>
    <string name="online_search">在線查詢</string>
    <string name="opening_hours">開放時間</string>
    <string name="order">次</string>
    <string name="others">其他</string>
    <string name="over_open_time">待開標的預計完成日期</string>
    <string name="parish">堂區</string>
    <string name="PENDING">待上傳</string>
    <string name="periodic_job">週期性工作</string>
    <string name="periodicity">週期性</string>
    <string name="permission_error">當前無GPS權限，請至設定中開啟</string>
    <string name="permission_location">App需要獲取定位權限已便打卡</string>
    <string name="permission_location_get">未取得位置權限</string>
    <string name="permissions_locations_tag">當前app打卡功能需要獲取位置權限，請前往設置頁打開</string>
    <string name="picture">圖片</string>
    <string name="plan_a_after_plan_b">計劃開始時間不應大於計劃結束時間</string>
    <string name="please_chose">請選擇</string>
    <string name="please_chose_end_date">請選擇結束日期</string>
    <string name="please_chose_start_date">請選擇開始日期</string>
    <string name="please_finish_time">請填寫完成時間</string>
    <string name="please_input_description">請輸入描述</string>
    <string name="please_input_event_time">請輸入巡查時間</string>
    <string name="please_input_follow_up_status">請輸跟進狀態</string>
    <string name="please_input_name">請輸入名稱</string>
    <string name="please_input_number">請輸入編號</string>
    <string name="please_input_template_type">請先完成以下巡查類別:</string>
    <string name="please_reset_job_group">請選擇重新指派的工作組</string>
    <string name="please_solveway">請選擇解決方式</string>
    <string name="pleaz_business_object">請選擇巡查對象</string>
    <string name="pleaz_end_time">請輸入結束時間</string>
    <string name="pleaz_get_code">請輸入驗證碼</string>
    <string name="pleaz_input_number">請輸入手機號碼</string>
    <string name="pleaz_inspection_template">請選擇巡查模板</string>
    <string name="pleaz_job_type">請選擇工作類型</string>
    <string name="pleaz_project">請先填寫項目</string>
    <string name="pleaz_search">請輸入關鍵字進行查詢</string>
    <string name="pleaz_start_time">請輸入開始時間</string>
    <string name="pleaz_workgroup_template">請選擇巡查單位</string>
    <string name="pleaze_write_project">請填寫項目</string>
    <string name="position">位置</string>
    <string name="process_uploading">上傳中</string>
    <string name="project">項目</string>
    <string name="project_type">項目類型</string>
    <string name="provide_time_estimated">確認預計完成時間</string>
    <string name="provide_time_estimated2">編輯確認預計完成時間</string>
    <string name="re_upload_attachment">重新上傳附件</string>
    <string name="read_data_error">讀取資料錯誤</string>
    <string name="record_local">本機記錄</string>
    <string name="record_online">在線記錄</string>
    <string name="recording">錄像</string>
    <string name="refresh_data_next">獲取數據失敗，當前頁面數據非最新數據</string>
    <string name="register_already">已註冊</string>
    <string name="register_device">註冊設備</string>
    <string name="register_success">註冊成功\n</string>
    <string name="relation_job">關聯工作</string>
    <string name="remark">備註</string>
    <string name="reply_date">回覆日期</string>
    <string name="reporter">報告人</string>
    <string name="reporter_unit">報告單位</string>
    <string name="reset">重 設</string>
    <string name="reset_base_data">重置基礎數據</string>
    <string name="reset_job">重啟</string>
    <string name="return_home">返回主頁</string>
    <string name="rf_status">回覆狀態</string>
    <string name="saturday">星期六</string>
    <string name="save">儲存</string>
    <string name="save_draft">儲存草稿</string>
    <string name="save_draft_success">儲存草稿成功</string>
    <string name="scan_for_equipment">掃碼導入設施</string>
    <string name="scan_for_object">掃碼導入對象</string>
    <string name="search">查 詢</string>
    <string name="search_clock_in">查看打卡記錄</string>
    <string name="search_inspection">查看巡查表</string>
    <string name="search_job">查看工作</string>
    <string name="search_job_photo">查看工作照</string>
    <string name="search_qu">搜尋</string>
    <string name="seat">座數</string>
    <string name="second">%1$d 秒</string>
    <string name="see">查看</string>
    <string name="see_all">恢復查看所有</string>
    <string name="select_businessobject">選擇巡查對象</string>
    <string name="select_location">選擇地點</string>
    <string name="seq">流水號</string>
    <string name="set_to_nfc_location">查看%1$d筆定位/NFC記錄</string>
    <string name="setting">設置</string>
    <string name="setting_phone_id">設備ID\n</string>
    <string name="setting_phone_name">設備名稱</string>
    <string name="solevtion">解決方式</string>
    <string name="solevtion_time">解決時間</string>
    <string name="solve">解決方式為 %1$s</string>
    <string name="spection_finsh">確認已巡查完成</string>
    <string name="start_inspection">開始巡查</string>
    <string name="start_job">執行工作</string>
    <string name="start_must_be_end">開始時間必須小於結束時間</string>
    <string name="start_time">開始時間</string>
    <string name="status">狀態</string>
    <string name="status_assigned">已判給</string>
    <string name="status_detected">已檢出</string>
    <string name="status_disposed">已棄置</string>
    <string name="status_duplicate_case">重複個案</string>
    <string name="status_in_progress">進行中</string>
    <string name="status_incomplete_data">資料不完整</string>
    <string name="status_inspection_ongoing">巡查中</string>
    <string name="status_no_data">暫無數據</string>
    <string name="status_no_linked_work">暫無關聯工作</string>
    <string name="status_no_work">暫無工作</string>
    <string name="status_not_applicable">不適用</string>
    <string name="status_not_detected">未檢出</string>
    <string name="status_not_found_on_site">現場未能發現</string>
    <string name="status_not_resolved">不予解決</string>
    <string name="status_pending_bid">待開標</string>
    <string name="status_resolved">已解決</string>
    <string name="status_timeout">超時</string>
    <string name="status_uploaded">已上傳</string>
    <string name="status_working">執行工作</string>
    <string name="stop_in_time">停留時間</string>
    <string name="street">街道</string>
    <string name="submit_failure">提交失敗</string>
    <string name="submit_success">提交成功</string>
    <string name="sunday">星期日</string>
    <string name="sync_failure">同步失敗</string>
    <string name="sync_success">同步成功</string>
    <string name="synching">同步中</string>
    <string name="system_name">通用巡查及派工系統</string>
    <string name="taipa">氹仔</string>
    <string name="take_audio">錄音</string>
    <string name="take_photo">拍照</string>
    <string name="take_video">錄影</string>
    <string name="task_local_inspection">本機巡查中的任務</string>
    <string name="task_local_uploading">本機上傳中的任務</string>
    <string name="task_today_inspection">今日待巡查的任務</string>
    <string name="TEMPLATE_BUSINESSOBJECT_SEARCH">模板 - 對象</string>
    <string name="TEMPLATE_TYPE_ITEM_SEARCH">模板 - 項目</string>
    <string name="TEMPLATE_TYPE_SEARCH">模板-項目類型</string>
    <string name="templated">模板</string>
    <string name="the_end">無更多數據</string>
    <string name="thursday">星期四</string>
    <string name="time_estimated_completion">預計完成時間</string>
    <string name="time_to">至</string>
    <string name="tips">提示</string>
    <string name="title1">未能進入項目類型</string>
    <string name="title2">請先按步驟完成之前的項目類型巡查後在嘗試進入</string>
    <string name="title3">當前巡查上傳失敗，目前為離線數據</string>
    <string name="title4">執行巡查失敗：%1$s</string>
    <string name="today_task_map">今天的巡查及工作地圖</string>
    <string name="token_expired">帳戶已失效，請重新登錄</string>
    <string name="tuesday">星期二</string>
    <string name="type">類型</string>
    <string name="type_inspection">代表巡查類型</string>
    <string name="undo">取消</string>
    <string name="unfinished">未填寫</string>
    <string name="UNFINISHED">未完成</string>
    <string name="unit">單位</string>
    <string name="unlink_case">取消個案關聯</string>
    <string name="update_time">更新時間</string>
    <string name="upload">上傳</string>
    <string name="upload_failure">上傳失敗</string>
    <string name="upload_status">上傳狀態</string>
    <string name="upload_success">上傳成功</string>
    <string name="upload_time">上傳時間</string>
    <string name="username">用戶名稱</string>
    <string name="valid_date">有效日期</string>
    <string name="very_hard">非常緊急</string>
    <string name="video">視頻</string>
    <string name="view_attachments">查看附件</string>
    <string name="voided">已作廢</string>
    <string name="waiting">等待同步中</string>
    <string name="wednesday">星期三</string>
    <string name="weekly_setting">每週設定</string>
    <string name="with_add_job">因後台未設置工作資料而未能新增/關聯工作</string>
    <string name="work_attachment">工作照</string>
    <string name="work_equipment">設施資訊</string>
    <string name="work_orgin">工作來源</string>
    <string name="xy">座標</string>
    <string name="yes">是</string>
    <string name="action3">狀態：</string>
    <string name="chang_lang">修改語言</string>
    <string name="change_lang_tips">確認更改APP語言嗎</string>
    <string name="language_setting">語言設置</string>
    <string name="job_rating">評分</string>
    <string name="update_job">編輯基本資料</string>
    <string name="job_relate_project">%1$s的關聯工作*</string>
    <string name="job_relation_alreay">工作已關聯</string>
    <string name="del_attachment">刪除附件</string>
    <string name="theme_tags">主題標籤</string>
    <string name="have_same_code">已經有相同的設施編號</string>
    <string name="update_user_device">更新用戶設備號</string>
    <string name="inspction_closed">巡查已完成</string>
    <string name="HUA_WANG_TANG_QU">花王堂區</string>
    <string name="WANG_DE_TANG_QU">望德堂區</string>
    <string name="FENG_SHUN_TANG_QU">風順堂區</string>
    <string name="DA_TANG_QU">大堂區</string>
    <string name="HUA_DI_MA_TANG_QU">花地瑪堂區</string>
    <string name="JIA_MO_TANG_QU">嘉模堂區</string>
    <string name="SHENG_FANG_JI_GE_TANG_QU">聖方濟各堂區</string>
    <string name="address_pre">地址預覽</string>
    <string name="TIANHAOQU">路氹填海區</string>
    <string name="no_solve">未解決</string>
    <string name="first_reply_time">初覆時間</string>
    <string name="relation">關聯</string>
    <string name="inspection_event_edit">編輯巡查事件</string>
    <string name="submit">提交</string>
    <string name="inspection_plant_type">執行模式</string>
    <string name="get_data_error">獲取數據，是否重試</string>
    <string name="copy_result">複製最新巡查結果</string>
    <string name="inspection_start_type">執行方式</string>
    <string name="confirm_copy_results">確認複製最新的巡查結果？</string>
    <string name="abandonment">棄置</string>
    <string name="confirm_abandonment">確認棄置該巡查嗎</string>
    <string name="confirm_record">確認將此巡查恢復至巡查中？</string>
    <string name="to_location_record">查看本機記錄</string>
    <string name="last_number">上一條</string>
    <string name="next_number">下一條</string>
    <string name="error_check_close">檢查狀態異常:%1$s</string>
    <string name="time">時間</string>
    <string name="user_info">用戶資訊</string>
    <string name="file_strategy">附件上傳策略</string>
    <string name="about">關於</string>
    <string name="logout_system">登出系統</string>
    <string name="install_number">安裝編號</string>
    <string name="inspection_sup_number">巡查流水號</string>
    <string name="job_sup_number">工作流水號</string>
    <string name="check_update">檢測更新</string>
    <string name="phone">手機電話</string>
    <string name="email">電郵地址</string>
    <string name="check_workgroup">查看單位</string>
    <string name="inspection_workgroup">巡查單位</string>
    <string name="phone_contact">聯絡電話</string>
    <string name="username_login">登入帳號</string>
    <string name="current_app">當前為最新版本</string>
    <string name="find_version">發現新版本： %1$s</string>
    <string name="get_location_failure">獲取定位失敗</string>
    <string name="not_gps">無GPS信號，無法獲取到座標信息。</string>
    <string name="reminder_tips">建議跟進</string>
    <string name="inspection_results">巡查結果</string>
    <string name="confirm_submit">確認提交</string>
    <string name="suggest_inspection_results">建議填寫:%1$s</string>
    <string name="reset_base_data_tips">確認重置所有基礎數據？該操作會刪除所有基礎數據並重新下載</string>
    <string name="basic_data_not_loaded">當前未完成基礎數據加載，將無法使用APP。確認退出？</string>
    <string name="please_message">請填寫留言</string>
    <string name="required">必填</string>
    <string name="suggest">建議填寫</string>
    <string name="open_gps">請先打開GPS</string>
    <string name="get_job_error">獲取不到最新工作</string>
    <string name="status_no_data_info">沒有資料</string>
    <string name="no_sync_info">未同步資料</string>
    <string name="update_attachment_config">更新附件配置</string>
    <string name="JOB_TASK_AREA_SEARCH">區域 - 非對象工作區域</string>
    <string name="not_find">不適用</string>
    <string name="plan_finish_time">提供預計完成時間</string>
    <string name="confirm_continue_inspection">本機存在此巡查的已棄置數據，若繼續執行，將刪除該已棄置巡查</string>
    <string name="plant_inspection">計劃內執行</string>
    <string name="plan_time">計劃執行時間</string>
    <string name="not_permission">（權限不足）</string>
    <string name="limit_online">不允許離線建立</string>
    <string name="copy_success">複製巡查結果完成</string>
    <string name="user_name1">用戶名稱</string>
    <string name="user_login_name">登入賬戶</string>
    <string name="app_update">更新APP版本</string>
    <string name="error_update">更新巡查異常：%1$s</string>
    <string name="please_input_inspection_workgroup">請選擇巡查單位</string>
    <string name="UPLOAD_TIME_OUT">上傳已超時或被中斷</string>
    <string name="unlink_case1">取消關聯</string>
    <string name="confirm_leave">要離開此頁面嗎</string>
    <string name="system_not_save">系統不會儲存你填寫的內容。</string>
    <string name="leave">離開</string>
    <string name="delete_job_associated_failure">取消關聯失敗</string>
    <string name="nfc_error">NFC 打卡失敗</string>
    <string name="setup_failure">建立失敗</string>
    <string name="inspection_business_object_attachment">巡查對象附件</string>
    <string name="file_error1">無第三方應用打開當前文件：%1$s</string>
    <string name="file_error2">打開文件失敗：%1$s</string>
    <string name="file_error3">下載文件失敗：%1$s</string>
    <string name="attachment_config_limit">只能上傳%1$s格式的附件</string>
    <string name="attachment_config_limit2">%1$s只能上傳%2$s個附件，當前為%3$s個</string>
    <string name="currentLimitSize">只能上傳單個%1$sMB大小附件，當前附件為%2$sMB</string>
    <string name="inspection_attachment_limit">巡查相片數量少於%1$s，當前為%2$s個</string>
    <string name="pleae_wait_basic_load">請先等待基礎數據加載完畢</string>
    <string name="not_inspection_type">找不到巡查類型</string>
    <string name="BUSINESSOBJECT_JOBABSTRACT_SEARCH">巡查對象-工作摘要-工作組</string>
    <string name="pleae_input_start_and_end">請輸入計劃開始和結束時間</string>
    <string name="limit_lower2">至少%1$s個相片</string>
    <string name="choose_leave">選擇範本</string>
    <string name="follow_date">預計跟進日期</string>
    <string name="follow_content">跟進備註</string>
    <string name="error_13">完成時間不可早於建立時間</string>
    <string name="plan_time_dur">計劃時段</string>
    <string name="planDateBefore">計劃日期前</string>
    <string name="planTimeIn">計劃日期内</string>
    <string name="planTimeAfter">計劃日期後</string>
    <string name="start_date">開始日期</string>
    <string name="end_date">結束日期</string>
    <string name="plan_start">計劃開始</string>
    <string name="plan_end">計劃結束</string>
    <string name="revice_time">接收時間</string>
    <string name="inspection_repeat">重複週期</string>
    <string name="date">日期</string>
    <string name="repeat_time">重複週期</string>
    <string name="JOB_AREA_SEARCH">區域 - 對象工作區域</string>
    <string name="job_map">工作地圖</string>
    <string name="inspection_map">巡查地圖</string>
    <string name="map_tips">請調整查詢結果至500條以下再試</string>
    <string name="map_text1">新建、重啓、重新指派</string>
    <string name="go_details">前往詳情</string>
    <string name="no_leave">暫無範本</string>
    <string name="map_tips_no">無查詢結果</string>
    <string name="menu_job_setup">新增工作</string>
    <string name="DEVICE_INTERVAL">設備打卡間隔</string>
    <string name="location1">檢測到該地址有座標數據，是否同步更新至工作座標？</string>
    <string name="location2">檢測到該座標有地址數據，是否同步更新至工作地址？</string>
    <string name="DELETELOG">刪除模板對象</string>
    <string name="tips3">該操作只能在線工作中進行，當前為離線工作。</string>
    <string name="please_attachment">請選擇附件</string>
    <string name="status_working2">工作中</string>
    <string name="open_gps2">GPS未打開，對象無法進行遠近排序。</string>
    <string name="open_gps3">開啟GPS</string>
    <string name="open_gps4">該對象巡查記錄建立需當前gps信息。</string>
    <string name="inspection_event_number">巡查事件流水號</string>
    <string name="must_required2">%1$s:其他選項必須填寫內容</string>
    <string name="add_failure">新增失敗</string>
    <string name="edit_failure">編輯失敗</string>
    <string name="reload">點擊刷新</string>
    <string name="wifi1">無需等待Wi-Fi連接,直接使用數據流量上傳</string>
    <string name="wifi2">每個巡查/工作的總附件超過10MB時,連接Wi-Fi后再上傳</string>
    <string name="wifi3">每個巡查/工作的總附件超過20MB時,連接Wi-Fi后再上傳</string>
    <string name="wifi4">每個巡查/工作的總附件超過30MB時,連接Wi-Fi后再上傳</string>
    <string name="wifi5">總是連接Wi-Fi后,再上傳</string>
    <string name="job_required">回覆狀態必填</string>
    <string name="code_required">個案編號必填</string>
    <string name="wait_wifi">等待上傳附件</string>
    <string name="maddress">自定義區域</string>
    <string name="address_area">地址區域</string>
    <string name="need_online">此工作需要在線新增</string>
    <string name="confirm_delete">確認刪除嗎</string>
    <string name="insption_notice">巡查通知</string>
    <string name="job_notice">工作通知</string>
    <string name="file_download">附件下載失敗</string>
    <string name="not_map_data"><![CDATA[<html><body><h1>無地圖資料</h1></body></html>]]></string>
    <string name="refresh">更新失敗：%1$s</string>
    <string name="Gps">GPS定位</string>
    <string name="netword_location">網絡定位</string>
    <string name="gps_not">GPS信號弱，請檢查是否已開啟GPS或至空曠地方進行定位</string>
    <string name="app_doing_location">APP持續定位中</string>
    <string name="current_loaction">當前座標</string>
    <string name="not_location_in">無相關座標點</string>
</resources>`

// 调用函数
// sortStringValuesFromXml(xmlContent);



