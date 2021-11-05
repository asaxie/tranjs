export default {
    yes: `是`,
    no: `否`,

    enums: {
        FILLING: "填寫中",
        APPROVING: "內部審核中",
        SUBMITTED: "已提交",
        EXPIRED: "已過期",
        RECEIVED_PASSED: "已收件（形式審查通過）",
        RECEIVED_NOT_PASSED: "已收件（形式審查不通過）",
        CANCELLED: "已取消",
        application: "我要申請科研項目",
        manage_my_project: "我要管理我的項目",
        manage_organization_project: "我要管理所屬機構的項目",
        project_progress_query: "項目進度查詢",
    },
    // 用户权限
    ROLES: {
        ROLE_USER_ACCOUNT: "使用者帳戶",//使用者帳戶
        ROLE_UNIT_APPLICANT: "項目申請人",//項目申請人 1 2
        ROLE_UNIT_MANAGER: "項目管理工作人員",//項目管理工作人員 2 3
        ROLE_UNIT_SUPERVISOR: "項目管理主管",//項目管理主管2 3
        ROLE_UNIT_LEGAL: "申請實體法人代表",//申請實體法人代表2 3
        ROLE_FDCT_MANAGER: "基金工作人員",//基金工作人員
        ROLE_FDCT_COMMITTEE: "委員",//委員
        ROLE_FDCT_DIRECTOR: "高級經理",//高級經理
        ROLE_FDCT_CHAIRMAN: "主席",//主席
        ROLE_FDCT_SECRETARY: "秘書",//秘書
        ROLE_FDCT_ACCOUNTING: "會計人員",//會計人員
        ROLE_SYSTEM_ADMIN: "系統管理員"//系統管理員
    },

    // 首頁菜單
    menu: {
        wantToResearchApplication: '我要申請科研項目',
        manageMyApplication: '我要管理我的項目',
        manageUnitApplication: '我要管理所屬機構的項目',
        applicationProgressSearch: '項目進度查詢'
    },

    // 側邊欄
    Aside: {
        title: {
            projectManagement: '項目管理',
        },
        IManageResearch: '科研項目管理',
    },

    // 页面头
    Header: {
        fdct: '澳門科學技術發展基金',
        title: '項目資助網上申請系統'
    },

    // 麵包屑導航
    breadcrumb: {
        mainPage: '主頁',
        IManageResearch: '科研項目管理',
        pendingProject: '申請中的項目',
        receivedProject: '已申請的項目',
        canceledProject: '已取消的項目',
        detailsProject: '項目詳情',
        applicationNo: '臨時申請編號：',
    },

    // 項目查詢條件
    projectManagementQuery: {
        applicationNo: '臨時申請編號',
        projectNameCn: '項目中文名稱',
        authorizedPerson: '項目負責人',
        affiliatedUnit: '所屬單位',
        applicationStatus: '項目狀態',
        applicaitonType: '申請類型',
        language: '語言',
        search: '查詢',
        searchCriteria: '查詢條件',
        reset: '重置'
    },

    // 項目查詢table
    projectManagementTable: {
        applicationNo: '臨時申請編號',
        fileNo: '檔案編號',
        projectName: '項目名稱',
        projectNameCn: '項目中文名稱',
        authorizedPerson: '項目負責人',
        affiliatedUnit: '所屬單位',
        applicationStatus: '項目狀態',
        applicaitonType: '申請類型',
        approvalStatus: '審核狀態',
        applicantTime: '申請人上呈時間',
        managerTime: '工作人員審批時間',
        supervisorTime: '主管審批時間',
        legalTime: '法人提交時間',
        operation: '操作',
        progressDetail: "進度詳情",
        submitToReview: '上呈',
        rejectApplication: '退回申請',
        cancelApplication: '取消申請',
        cancelSign: '取消簽注',
        failureSign: '簽注失敗',
        successSign: '簽注成功',
    },
    // 项目查询条件 - 项目状态
    projectQuery_projectStatus: {
        FILLING: "填寫中",
        APPROVING: "內部審核中",
        SUBMITTED: "已提交",
        EXPIRED: "已過期",
        RECEIVED_PASSED: "已收件（形式審查通過）",
        RECEIVED_NOT_PASSED: "已收件（形式審查不通過）",
        CANCELLED: "已取消",
    },

    //申請實體資料
    EntityInfo: {
        title: `申請實體資料`,
        cnname: `中文名稱`,
        enname: `外文名稱`,
        connectPhone: `聯絡人聯絡電話`,
        contactPersonNameCn: `聯絡人中文姓名`,
        contactPersonNameEn: `聯絡人外文姓名`,
        contactPhone2: `聯絡人電話`,
        contactEmail: `聯絡人電郵`,
        address: `地址`,
        applicationContact: `申請實體聯絡人`,
        bankInfo: `銀行賬戶資料`,
        bankName: `銀行名稱`,
        bankAccountName: `銀行帳戶名稱`,
        bankAccountNo: `銀行帳戶號碼`,
        uploadFileInfo: `申請實體須上載之資料`,
        filetag1: `（各識別資料之有效期請見科技基金網上資助服務說明）`,
        filetag2: `（須為三個月內發出的證明文件）`,
        choseFile: `選擇文件`,
        deleteFile: `刪除`,
        fileReasontag: `若未能提交有關文件，請填寫原因`,
        downloadClick: `点击下载：`,
        downloadPDF: `下載表格PDF`,
    },
    //操作
    Action: {
        save: `儲存`,
        refresh: `刷新`,
        undo: `取消`,
        makeSureSubmit: `確認提交`,
        add: `新增`,
        sure: `确定`,
        del: `刪除`,
        edit: `編輯`,
        modify: `修改`,
        upload: `上傳`,
        upload2: `上呈`,
        check: `查看`,
    },
    //提示語
    Tips: {
        saveSuccess: `儲存成功`,
        saveFailure: `儲存失敗`,
        submitSuccess: `提交成功`,
        submitFailure: `提交失敗`,
        codeError: `驗證碼錯誤`,
        deletedFileFailure: `刪除文件失敗`,
        submitFileFailure: `上傳文件失敗`,
        makeSureDel: ` 確定要刪除嗎`,
        tips: `提示信息`,
        delSuccess: `删除成功`,
        delFailure: `删除失敗`,
        selectedNULL: `選項爲空`,
        uploadFailure: `上傳失敗`,
    },
    //詳情首頁
    ApplicationProjectMain: {
        finalSubmitTime: `電子及紙本最後提交日期：`,
        submitApplication: `提交申請`,
        downloadPDF: `下載表格PDF`,


    },

    //經費預算
    Budget: {
        totalSum: `總計：`,
        budget: `經費預算`,
        totalApplicationSum: `向科技基金申請總金額:`,
        ownAmountTotal: `自行配套總金額:`,
        ownAmount: `自行配套金額`,
        expenseName: `費用名稱`,
        option: `類別`,
        quantity: `數量`,
        unitPrice: `單價`,
        applyAmount: `申請金額`,
        getAmount: `小計`,
        remark: `計算根據及說明`,
        edit: `編輯`,
        errorTag: `自行配套金額不能超過總金額！`,
    },
    //通用輸入框
    CommonInput: {
        charactersLeft: "剩下{number}字符"
    },

    //項目基本資料
    Projectbase: {
        aboutTRL: `關於技術成熟度(Technology Readiness Level,TRL)的說明`,
        maturity: `目前之技術成熟度`,
        editBasic: `填寫依據`,
        endMaturity: `結題時擬達到之技術成熟度`,
        projectNameCn: `項目中文名稱`,
        projectNameEn: `項目外文名稱`,
        subjectMain: `主要所屬學科`,
        subSubjectCode1: `次要所屬學科1`,
        subSubjectCode2: `次要所屬學科2`,
        area: `專利國家／地區`,
        patentType: `專利類型`,
        durationApplication: `申請專利所需時間（月）`,
        durationCreate: `研究期限（月）`,
        mounth: `月`,
        labName: `所屬重點實驗室名稱`,
        paidAmountUpperLimit: `願意接受有償最高金額`,
        enterpriseIndustry: `所屬行業`,
        productIndustry: `產品主要應用行業`,
        cooperating: `是否產學研合作`,
        cooperationOrganization: `產學研合作機構名稱`,
        researchForm: `項目研發形式`,
        pairing: `配對平台檔案編號`,
        pairingOrgName: `配對企業名稱`,
        pairingNeedNameCn: `配對需求名稱(中文)`,
        pairingNeedNamePt: `配對需求名稱(英文)`,
        pairingAchievementCn: `配對成果名稱(中文)`,
        pairingAchievementPt: `配對成果名稱(英文)`,
        fdctTotal: `申請金額`,
        selfTotal: `申請實體配套金額`,
    },
    //選擇項目角色
    ProjectType: {
        title: `請選擇相關訊息`,
        userUnit: `項目角色`,
        pleaseSelectedUnit: `請選擇項目角色`,
        applicationCategory: `資助申請類型`,
        applicationError: `申請出錯`,
        metatime: `無限期`,
        applicationTime: `申請期：`,
        personalapplication: `個人名義申請`,
        nametips: `我是{name}機構項目申請人申請`
    },
    //企業基本信息
    EnterpriseBasic: {
        basic: `企业基本信息`,
        establishedDate: `成立時間`,
        choseEstablishedDate: `选择日期`,
        registrationNo: `商業登記編號`,
        registeredCapital: `注冊資本`,
        employeeCount: `全職員工人數`,
        fromPairing: `碩士或以上學歷全職研發人員數`,
        bachelorCount: `本科以上學歷全職研發人員數`,
        qualityCertification: `企業已獲得質量體系認證情況`,
        legalInfo: `企業法人資料`,
        legalPerson: `法定代表人`,
        legalIdentityType: `身份證明文件類別`,
        legalIdentityNo: `身份證明文件編號`,
        corporateAddress: `法人住所`,
        assetInfo: `上年度財務狀況`,
        assetTotal: `資產總額`,
        netProfit: `淨利潤`,
        operatingIncome: `營業收入`,
        researchFund: `研發資金`,
        incubating: `風投/孵化`,
        isIncubating: `是否在孵科創企業`,
        incubatorName: `所在孵化器名稱`,
        ventureCapitalInvested: `是否獲得風險投資`,
        ventureCapitalCompany: `風險投資公司名稱`,
        ventureCapitalAmount: `風險投資金額`,
        holder: `主要股東及股權比例`,
        holderName: `股東名稱`,
        holderPercentage: `股權比例`,
        capitalType: `出資形式`,
        registerLocation: `企業註冊地`,

    },

    //合作方人員資料
    PartnerPerson: {
        partnerPerson: `合作單位`,
        partnerPersonInfo: `合作方人員資料`,
        name: `單位名稱`,
        authorizerName: `項目負責人姓名`,
        authorizerPosition: `項目負責人職稱`,
        authorizerUnit: `項目負責人所屬機構`,
        partnerName: `合作單位（{name}）人員資料`,
        role: `項目角色`,
        pname: `姓名`,
        degree: `最高學歷`,
        organization: `職稱`,
        identityType: `身份證明文件類別`,
        workDivision: `執行項目研究的分工`,
        idFileName: `上載身份證明文件副本`,
    },

    //項目中文摘要
    ProjectInChinese: {
        objective: `研究目標`,
        scene: `具體應用場景`,
        useAndFunction: `主要用途及功能`,
        problem: `擬解決問題`,
        technologyAndInnovation: `關鍵技術及創新點`,
        results: `預期成果`,
        expectedPatent: `項目完成時擬新申請發明專利數`,
        specifications: `項目完成時主要技術指標`,
        sname: `指標名稱`,
        value: `指標值`,
        operation: '操作',
        fyear: '第一年',
        syear: '第二年',
        tyear: '第三年',
        name: '名稱',
        type: '類型',
        registrationNo: '登記號',
        belonging: '歸屬情況說明',
        alreayGet: '項目技術已獲得知識產權情況',
        budget: '預算摘要',
        content: '研究內容',
        methodology: '研究方法',
        achievement: '預期研究成果',
        objective2: '項目摘要',
        objective2: '具體應用場景',
        objective2: '具體應用場景',
        inputname: '名稱: 該值必須填寫.',
        inputtype: '類型: 該值必須填寫.',
        inputregistrationNo: '登記號: 該值必須填寫.',
        inputbelonging: '歸屬情況說明: 該值必須填寫.',

        tag1: `（技術指標是指技術成果在性能、效率、速度、精度、能耗、穩定性、可靠性等可量化指標。）`,
        tag2: `（預期經濟效益額指銷售額、利潤額、技術轉讓合同額、銷售合同額、新增融資金額等可量化指標。）`,
        tag3: ` 項目關鍵字（最少填三個)`,
    },

    //項目人員資料
    ProjectLeader: {
        projectLeader: `項目人員資料`,
        role: `項目角色`,
        name: `姓名`,
        degree: `最高學歷`,
        organization: `職稱`,
        identityType: `身份證明文件類別`,
        workDivision: `執行項目研究的分工`,
        idFileName: `上載身份證明文件副本`,
        alreadyInfo: `曾申報過FDCT項目資料`,
        index: `序號`,
        fileNo: `項目編號`,
        projectName: `項目名稱`,
        situation: `批准與否，批准金額及執行情況`,
    },
    //項目計畫書
    ProjectPlan: {
        tip: `(請下載計劃書模板，填寫好內容之後必須按原檔案名上載!填好的檔案文件最大為5MB）`,
        downloadPlan: `下載計劃書模板`,
        upload: `上載`,
        uploadFile: `已上載文件`,
        filename: `文件名`,
        type: `類型`,
        filedes: `文件描述`,
    },
    //補充文件
    Supdoc: {
        upload: `上載`,
        uploadFile: `已上載文件`,
        filename: `文件名`,
        type: `類型`,
        filedes: `文件描述`,

    }


};

