export default {
    ApprovalProcess: {
        title: "審批流程",
        processName: "流程名稱：",
        approver: '實際審批人：',
        candidate: '審批人：',
        operator: '操作人：',
        status: "審批狀態：",
        opinions: "審批意見：",
        CCList: "抄送列表：",
        time: "審批時間：",
        reason: "備註：",
        noData: "該數據暫無審批流程",
        skipped: "已跳過",
        submitter: "{0} 提交的申請",
        outcome: {
            Y: '已通過',
            N: '已拒絕'
        },
        approvalStatus: {
            STARTED: '審批中',
            COMPLETED: '已審批',
            CANCELLED: '已撤銷'
        }
    },

    RevisionComments: {
        title: "修訂意見"
    },

    // 考勤申請
    AttendanceApplyPage: {
        holiday: "休假申請",
        overtime: "加班申請",
        cancelledLeave: "銷假申請"
    },

    CompensationMode: {
        TIMEOFF: "補假",
        PAYROLL: "補薪",
        ALL: "補假和補薪"
    },

    FormulaMode: {
        DAYS: "按日",
        HOURS: "按時"
    },

    onlyBasicSalary: {
        true: '月薪',
        false: '月報酬'
    },

    OvertimeFormListPage: {
        title: "加班申請",
        submitApplication: "提交",
        approveApplication: "審批",
        editing: "編輯中",
        submitted: "已提交",
        completed: "已完成",
        carbonCopy: "抄送",
        processing: "待處理",
        processed: "已處理",

        billCode: "編號：",
        department: "部門：",
        employee: "員工：",
        totalHours: "合計時長：",
        businessType: "業務類型：",
        attdPeriod: '考勤更期：',
        originAttdPeriod: "原有更期：",
        lastttdPeriod: "最新更期：",
        reason: "加班原因：",
        status: "狀態：",

        revoke: "撤回",
        rescind: "撤銷",
        edit: "編輯",
        delete: "刪除",
        confirmRevoke: "確定撤回?",
        confirmRescind: "確定撤銷?",
        confirmDelete: "確定刪除?",
        revokeSuccess: "撤回成功",
        rescindSuccess: "撤銷成功",
        deleteSuccess: "刪除成功",

        followUp: "審批",
        resolve: "批准",
        reject: "不批准",
        confirmResolve: "確定批准?",
        confirmReject: "確定不批准?",
        temporarily: "暫不處理",
        approveNote: "備註",
    },

    OvertimeFormPage: {
        title: "加班申請單",
        overtimeFormDetail: "加班申請單明細",
        department: "部門",
        overtimeType: "加班類型",
        businessType: "業務類型",
        totalHours: "合計時長",
        reason: "加班原因",
        workOrderNumber: "工作指令編號/名稱",
        accessRecordDate: "考勤日期",

        fromTime: "開始時間",
        toTime: "結束時間",
        hours: "加班時長",
        compensation: "補償金額",
        overtimeTypeRule: "加班規則：",
        compensationMode: "補償方式",
        externalCode: "外部編碼",
        leaveGroup: "休假組別",
        organization: "公司",
        project: "項目",
        timeoffMultiple: "補假倍數",
        limitDay: "補假時限",
        FormulaMode: "計算方式",
        payrollMultiple: "補薪倍數",
        note: "備註",
        minute: "分鐘",
        employee: "員工",
        overtimeRulesTitle: '加班規則',
        overtimeHolidayTitle: '補假規則',
        overtimeSalaryTitle: '補薪規則',
        overtimeOtherTitle: '其他設置',
        onlyBasicSalary: '計算基數',
        calcAsFullOT: '是否按照完整更期時間進行計算',
        extraSubsidy: '是否額外補償',
        extraSubsidyCompensation: '額外補償方式',
        extraSubsidyFormula: '額外計算方式',
        extraSubsidyMultiple: '額外補償倍數',
        onlyBasicSalaryEnums: {
            true: '基本工資',
            false: '基本報酬'
        },
        extraSubsidyBasic: '額外日薪酬計算基數',
        officeType: '是否非工作日',
        attdPeriod: '考勤更期',
        originAttdPeriod: "原有更期",
        manHour: "小時",
        illegalApplyPeriod: '加班時段不能在考勤時段內',



        leastOne: "（至少一條）",
        add: "新增",
        edit: "編輯",
        delete: "刪除",
        action: "操作",
        hold: "暫存",
        hasSameValue: "已存在相同的記錄",
        needEditHour: "需要修改時數（跨天考勤更期請分開申請）",
        deduRestTime: "扣減休息時間",

    },

    OvertimeFormDetailPage: {
        title: "加班申請單詳情",
        basicData: "基礎資料",
        overtimeFormDetail: "加班申請單明細",
        followUp: "審批",
        billCode: "編號：",
        reason: "加班原因：",
        employee: "員工：",
        overtimeType: "加班類型：",
        totalHours: "合計時長：",
        status: "狀態：",
        approveNote: "審批備註：",
        approvalTime: "審批時間：",
        createdBy: "發起人：",
        submitter: "提交人：",
        approvalBy: "審批人：",
        submitTime: "提交日期：",
        createdTime: "創建日期：",
        workOrderNumber: "工作指令編號/名稱",
        accessRecordDate: "考勤日期",
        fromTime: "開始時間",
        toTime: "結束時間",
        hours: "加班時長",
        rules: "加班規則",
        compensation: "補償金額",
        remark: "備註",
        businessType: "業務類型：",
        OVERTIME_PERSON: "個人",
        OVERTIME_BATCH: "批量",
        edit: "編輯",
        department: "部門：",
        originAttdPeriod: "原有更期",
        attdPeriod: '考勤更期',
        lastestAttdPeriod: '最新更期',
    },

    HolidayFormListPage: {
        title: "休假申請",
        submitApplication: "提交",
        approveApplication: "審批",
        editing: "編輯中",
        submitted: "已提交",
        completed: "已完成",
        carbonCopy: "抄送",
        processing: "待處理",
        processed: "已處理",

        billCode: "編號：",
        department: "部門：",
        holidayType: "休假組別：",
        totalDays: "合計天數：",
        reason: "休假原因：",
        status: "狀態：",

        revoke: "撤回",
        edit: "編輯",
        delete: "刪除",
        reEdit: "重新編輯",
        rescind: "銷假",

        confirmRevoke: "確定撤回?",
        confirmDelete: "確定刪除?",
        revokeSuccess: "撤回成功",
        deleteSuccess: "刪除成功",

        followUp: "審批",
        resolve: "批准",
        reject: "不批准",
        confirmResolve: "確定批准?",
        confirmReject: "確定不批准?",
        temporarily: "暫不處理",
        approveNote: "備註",
        applyType: "申請類型：",
        REGULAR: "新建申請單",
        APPEND: "補交申請單",
        APPEND2: "補交",
    },

    HolidayFormDetailPage: {
        title: "休假申請單詳情",
        basicData: "基礎資料",
        holidayFormDetail: "休假申請單明細",
        followUp: "審批",
        rescind: "銷假",
        billCode: "編號：",
        reason: "休假原因：",
        holidayType: "休假組別：",
        totalDays: "合計天數：",
        status: "狀態：",
        approveNote: "審批備註：",
        approvalTime: "審批時間：",
        createdBy: "發起人：",
        submitter: "提交人：",
        approvalBy: "審批人：",
        submitTime: "提交日期：",
        createdTime: "創建日期：",
        startDate: "開始日期",
        startPeriod: "開始時段",
        endDate: "結束日期",
        endPeriod: "開始時段",
        days: "天數",
        remark: "備註",
        attdPeriod: '考勤更期',
    },

    HolidayFormPage: {
        title: "休假申請單",
        holidayFormDetail: "休假申請單明細",
        holidayType: "休假組別",
        totalDays: "合計天數",
        reason: "休假原因",
        startDate: "開始日期",
        startPeriod: "開始時段",
        endDate: "結束日期",
        endPeriod: "結束時段",
        days: "天數",
        remark: "備註",
        department: "部門",
        employee: "員工",
        remainDate: "剩餘假期天數",

        leastOne: "（至少一條）",
        add: "新增",
        edit: "編輯",
        delete: "刪除",
        action: "操作",
        hold: "暫存",
        hasSameValue: "已存在相同的記錄",
        period: "日期範圍",
        applyTime: "申請時段",

        invalidStartPeriod: "開始時段不能晚於結束時段",
        invalidEndDate: "結束時段不能早於開始時段",
        notApplicable: "不適用",
        remainingDaysTip: '剩餘假期天數額度不足',
        holidayFormRange: '選擇休假申請單明細時間範圍',
        holidayFormDetailsTips: `點擊確認生成時，會清除列表現有的明細記錄`,
        accessRecordDate: "考勤日期",
        accessRecordDatePeriod: "考勤時段",
        rangeTypeSinge: `單一時段`,
        rangeTypeMultiple: `多時段`,
        rangeType: `時段類型`,
        rangeTime: `時段`,
        officeType: '是否非工作日',
        attdPeriod: '考勤更期',
        hoursOfLeave: '補假實際可用時數',
        converDays: '預計轉換天數（以8小時為單位的轉換數）',
        singleLimit: "單次限額天數",
    },

    CancelLeaveFormListPage: {
        title: "銷假申請",
        submitApplication: "提交",
        approveApplication: "審批",
        editing: "編輯中",
        submitted: "已提交",
        completed: "已完成",
        carbonCopy: "抄送",
        processing: "待處理",
        processed: "已處理",

        billCode: "編號：",
        department: "部門：",
        holidayType: "休假組別：",
        totalDays: "合計天數：",
        reason: "銷假原因：",
        status: "狀態：",

        revoke: "撤回",
        edit: "編輯",
        delete: "刪除",
        reEdit: "重新編輯",
        confirmRevoke: "確定撤回?",
        confirmDelete: "確定刪除?",
        revokeSuccess: "撤回成功",
        deleteSuccess: "刪除成功",

        followUp: "審批",
        resolve: "批准",
        reject: "不批准",
        confirmResolve: "確定批准?",
        confirmReject: "確定不批准?",
        temporarily: "暫不處理",
        approveNote: "備註",

    },

    CancelLeaveFormPage: {
        title: "銷假申請單",
        holidayApply: "休假申請",
        holidayFormDetail: "休假申請單明細",
        cancelLeaveDetail: "銷假申請單明細",
        holidayType: "休假組別",
        totalDays: "合計天數",
        reason: "銷假原因",
        startDate: "開始日期",
        startPeriod: "開始時段",
        endDate: "結束日期",
        endPeriod: "結束時段",
        days: "天數",
        remark: "備註",

        leastOne: "（至少一條）",
        add: "新增",
        edit: "編輯",
        delete: "刪除",
        action: "操作",
        hold: "暫存",
        hasSameValue: "已存在相同的記錄",
        outRange: "不在範圍內",

        invalidStartPeriod: "開始時段不能晚於結束時段",
        invalidEndDate: "結束時段不能早於開始時段",
        accessRecordDate: "考勤日期",
        rangeTime: `時段`,
        alreadyCancelStatus: `狀態`,
        alreadyCancelStatusnull: `還沒審批通過`,
        alreadyCancelStatusfalse: `通過並已更新到考勤`,
        alreadyCancelStatustrue: `已經通過銷假單據銷假`,
        addLeaveDetails: `新增銷假申請明細`,
        attdPeriod: '考勤更期',
    },

    CancelLeaveFormDetailPage: {
        title: "銷假申請單詳情",
        basicData: "基礎資料",
        cancelLeaveDetail: "銷假申請單明細",
        followUp: "審批",
        billCode: "編號：",
        reason: "銷假原因：",
        holidayType: "休假組別：",
        totalDays: "合計天數：",
        status: "狀態：",
        approveNote: "審批備註：",
        approvalTime: "審批時間：",
        createdBy: "發起人：",
        submitter: "提交人：",
        approvalBy: "審批人：",
        submitTime: "提交日期：",
        createdTime: "創建日期：",
        startDate: "開始日期",
        startPeriod: "開始時段",
        endDate: "結束日期",
        endPeriod: "開始時段",
        days: "天數",
        remark: "備註",
    },

    AttendancePeriod: {
        AM: "上半時段",
        PM: "下半時段",
    },

    AttendanceApplyStatus: {
        PENDING: "編輯中",
        APPROVING: "審批中",
        FINISHED: "已完成",
        REJECTED: '已拒絕',
        REVOKED: '已撤銷'
    },
    AttendanceStatus: {
        PENDING: "編輯中",
        APPROVING: "審批中",
        FINISHED: "已批准",
        REJECTED: '已拒絕',
        REVOKED: '已撤銷'
    },
    CertificateApplyStatus: {
        PENDING: "編輯中",
        APPROVING: "處理中",
        FINISHED: "已完成",
        REJECTED: '已拒絕',
        REVOKED: '已撤銷'
    },

    // 人員變動

    changeApplicationPage: {
        staffDeparture: "離職申請",
        performance: "表現評估申請",
        retirement: "退休申請",
        certificate: "工作證明申請",
        training: "培訓資助申請"
    },

    booleanType: {
        true: "是",
        false: "否",
    },

    departureFormListPage: {
        title: "離職申請",
        submitApplication: "提交",
        approveApplication: "審批",
        editing: "編輯中",
        submitted: "已提交",
        completed: "已完成",
        carbonCopy: "抄送",
        processing: "待處理",
        processed: "已處理",

        billCode: "編號：",
        position: "職位：",
        departureReason: "離職原因：",
        lastEmploymentDate: "離職日期：",
        billDate: "申請日期：",
        reason: "備註：",
        status: "狀態：",

        revoke: "撤回",
        rescind: "撤銷",
        edit: "編輯",
        delete: "刪除",
        reEdit: "重新編輯",
        confirmRevoke: "確定撤回?",
        confirmRescind: "確定撤銷?",
        confirmDelete: "確定刪除?",
        revokeSuccess: "撤回成功",
        deleteSuccess: "刪除成功",

        followUp: "審批",
        resolve: "批准",
        reject: "不批准",
        confirmResolve: "確定批准?",
        confirmReject: "確定不批准?",
        temporarily: "暫不處理",
        approveNote: "備註",
    },

    departureFormDetailPage: {
        title: "離職申請單詳情",
        basicData: "基礎資料",
        followUp: "審批",
        billCode: "編號：",
        department: "部門：",
        position: "職位：",
        departureReason: "離職原因：",
        lastEmploymentDate: "離職日期：",
        billDate: "申請日期：",
        status: "狀態：",
        approveNote: "審批備註：",
        approvalTime: "審批時間：",
        createdBy: "發起人：",
        submitter: "提交人：",
        approvalBy: "審批人：",
        createdTime: "創建日期：",
        submitTime: "提交日期：",
        reason: "備註：",
    },

    departureFormPage: {
        title: "離職申請單",
        position: "職位：",
        departureReason: "離職原因：",
        lastEmploymentDate: "離職日期：",
        reason: "備註：",

        hold: "暫存",
    },

    performanceFormListPage: {
        title: "表現評估申請",
        submitApplication: "提交",
        approveApplication: "審批",
        editing: "編輯中",
        submitted: "已提交",
        completed: "已完成",
        carbonCopy: "抄送",
        processing: "待處理",
        processed: "已處理",
        confirm: "待確認",

        billCode: "編號：",
        position: "職位：",
        billDate: "申請日期：",
        performanceEvaluationDate: "90日表現評估日：",
        reason: "原因：",
        status: "狀態：",

        revoke: "撤回",
        rescind: "撤銷",
        edit: "編輯",
        delete: "刪除",
        reEdit: "重新編輯",
        confirmRevoke: "確定撤回?",
        confirmRescind: "確定撤銷?",
        confirmDelete: "確定刪除?",
        revokeSuccess: "撤回成功",
        deleteSuccess: "刪除成功",

        followUp: "審批",
        resolve: "批准",
        reject: "不批准",
        confirmResolve: "確定批准?",
        confirmReject: "確定不批准?",
        temporarily: "暫不處理",
        approveNote: "備註",
    },

    performanceFormDetailPage: {
        title: "表現評估申請單詳情",
        basicData: "基礎資料",
        competenceData: "表現評核（勝任及個性）",
        supervisionData: "表現評核（督導管理）",
        followUp: "審批",
        billCode: "編號：",
        department: "部門：",
        position: "職位：",
        billDate: "申請日期：",
        joinDate: "入職日期：",
        period: '表現評核時段：',
        goal: '目標：',
        achievement: '成果：',

        jobknowledgeQqualityWwork: '工作知識及工作質量：',
        productivityStability: '生產力及穩定性：',
        communicationSkills: '溝通技巧：',
        relationsCustomers: '與同事及客戶關係：',
        ComplianceSystem: '遵照綜合管理體系：',
        attendance: '出勤紀錄：',
        initiative: '自發性：',
        maturity: '成熟：',
        integrity: '忠誠：',
        understandCompany: '認識公司的程策與程序：',

        organizing: '組織能力',
        controlling: '控制能力',
        subordinates: '管理下屬',
        decisionMaking: '決策能力',

        reason: "原因：",
        status: "狀態：",
        approveNote: "審批備註：",
        approvalTime: "審批時間：",
        createdBy: "發起人：",
        approvalBy: "審批人：",
        createdTime: "創建日期：",
    },

    ratingDefinitionsEnum: {
        1: '不滿意',
        2: '須改善',
        3: '滿意',
        4: '超標',
        5: '傑出'
    },

    performanceFormPage: {
        title: "表現評估申請單",
        department: "部門：",
        position: "職位：",
        billDate: "申請日期：",
        reason: "原因：",

        hold: "暫存",
    },

    gratiaPayment: {
        0: "無獎金",
        1: "一個月獎金",
        2: "兩個月獎金",
        3: "三個月獎金"
    },

    retirementFormListPage: {
        title: "退休申請",
        submitApplication: "提交",
        approveApplication: "審批",
        editing: "編輯中",
        submitted: "已提交",
        completed: "已完成",
        carbonCopy: "抄送",
        processing: "待處理",
        processed: "已處理",
        confirm: "待確認",

        billCode: "編號：",
        position: "職位：",
        billDate: "申請日期：",
        age65Date: "滿65歲日期：",
        reason: "原因：",
        status: "狀態：",

        revoke: "撤回",
        rescind: "撤銷",
        edit: "編輯",
        delete: "刪除",
        reEdit: "重新編輯",
        confirmRevoke: "確定撤回?",
        confirmRescind: "確定撤銷?",
        confirmDelete: "確定刪除?",
        revokeSuccess: "撤回成功",
        deleteSuccess: "刪除成功",

        followUp: "審批",
        resolve: "批准",
        reject: "不批准",
        confirmResolve: "確定批准?",
        confirmReject: "確定不批准?",
        temporarily: "暫不處理",
        approveNote: "備註",
    },

    retirementFormDetailPage: {
        title: "退休申請單詳情",
        basicData: "基礎資料",
        followUp: "審批",
        refereeLogNo: "檔案編號：",
        billCode: "編號：",
        department: "部門：",
        position: "職位：",
        billDate: "申請日期：",
        joinDate: '入職日期：',
        birthDate: "出生日期：",
        age65Date: "滿65歲日期：",
        serviceYear: "年資：",
        selfAverageScore: "員工平均分：",
        deptAverageScore: "部門平均分：",
        gratiaPayment: "嘉許奬金：",
        retirement: "批准退休：",
        retirementDate: "退休生效日期：",
        extensionRetirement: "建議延遲退休：",
        extensionRetirementDate: "建議延遲退休日期：",
        reason: "原因：",
        status: "狀態：",
        approveNote: "審批備註：",
        approvalTime: "審批時間：",
        createdBy: "發起人：",
        submitter: "提交人：",
        approvalBy: "審批人：",
        createdTime: "創建日期：",
        submitTime: "提交日期：",
    },

    retirementFormPage: {
        title: "退休申請單",
        department: "部門：",
        position: "職位：",
        billDate: "申請日期：",
        birthDate: "出生日期：",
        age65Date: "滿65歲日期：",
        serviceYear: "年資：",
        selfAverageScore: "員工平均分：",
        deptAverageScore: "部門平均分：",
        gratiaPayment: "嘉許奬金：",
        retirement: "批准退休：",
        retirementDate: "退休生效日期：",
        extensionRetirement: "建議延遲退休：",
        extensionRetirementDate: "建議延遲退休期間：",
        reason: "原因：",

        hold: "暫存",
    },

    certificateFormListPage: {
        title: "工作證明申請",
        submitted: "處理中",
        completed: "已完成",
        editing: "編輯中",

        logNo: "參考編號：",
        employmentVerificationType: "信件種類：",
        reasonOfApplication: "申請原因：",
        reason: "備註：",

        delete: "刪除",
        confirmDelete: "確定刪除?",
        deleteSuccess: "刪除成功",
    },

    certificateFormDetailPage: {
        title: "工作證明申請單詳情",
        basicData: "基礎資料",

        logNo: "參考編號：",
        employmentVerificationType: "信件種類：",
        reasonOfApplication: "申請原因：",
        department: "部門：",
        createdBy: "創建人：",
        createdTime: "創建日期：",
        reason: "備註：",
        createFile: `下載文件`
    },

    certificateFormPage: {
        title: "工作證明申請單",
        logNo: "參考編號：",
        employmentVerificationType: "信件種類：",
        reasonOfApplication: "申請原因：",
        reason: "備註：",
        hold: `暫存`,
    },

    employmentVerificationType: {
        EMPLOYMENT_VERIFICATION_WITH_INCOME: '工作證明連收入',
        EMPLOYMENT_VERIFICATION_WITHOUT_INCOME: "工作證明",
        OTHER: "其他"
    },

    trainingFormListPage: {
        title: "培訓資助申請",
        editing: "編輯中",
        submitted: "已提交",
        completed: "已完成",

        courseName: "課程名稱：",
        organizer: "培訓機構/講師：",
        courseType: "課程種類：",
        startDate: "開始日期：",
        endDate: "結束日期：",
        justificationOfAttending: "培訓理由：",
        status: "申請狀態：",

        edit: "編輯",
        delete: "刪除",
        confirmDelete: "確定刪除?",
        deleteSuccess: "刪除成功",
    },

    trainingFormDetailPage: {
        title: "培訓資助申請單詳情",
        basicData: "基礎資料",

        courseName: "課程名稱：",
        organizer: "培訓機構/講師：",
        courseType: "課程種類：",
        startDate: "開始日期：",
        endDate: "結束日期：",
        justificationOfAttending: "培訓理由",
        courseFeeCurrency: "幣種：",
        courseFeeMop: "課程費用 (澳門幣)：",
        courseFee: "課程費用 (外幣)：",
        trainingInMacao: "培訓地點：",
        trainingLocation: "其他培訓地點：",
        transportationAmountMop: "交通津貼 (澳門幣)",
        transportation: "交通工具類別：",
        sharedRoom: "住宿類型：",
        stayingNightsOfAccommodation: "住宿晚數：",
        accommodationAmountMop: "住宿津貼 (澳門幣)",
        dailyAllowanceAmount: '日津貼金額',
        withinInTrainingBudget: "有培訓預算",
        createdBy: "創建人：",
        submitter: "提交人：",
        createdTime: "申請日期：",
        submitTime: "提交日期："
    },

    trainingFormPage: {
        title: "培訓資助申請單",
        courseInfo: "課程資料",
        courseFeeInfo: "課程費用",
        organizer: "培訓機構/講師：",
        courseName: "課程名稱：",
        startDate: "開始日期：",
        endDate: "結束日期：",
        justificationOfAttending: "培訓理由",
        courseFeeCurrency: "幣種：",
        courseFeeMop: "課程費用 (澳門幣)：",
        courseFee: "課程費用 (外幣)：",
        trainingInMacao: "培訓地點：",
        trainingLocation: "其他培訓地點：",
        transportationAmountMop: "交通津貼 (澳門幣)",
        transportation: "交通工具類別：",
        sharedRoom: "住宿類型：",
        stayingNightsOfAccommodation: "住宿晚數：",
        accommodationAmountMop: "住宿津貼 (澳門幣)",
        courseType: "課程種類：",
        withinInTrainingBudget: "有培訓預算",
        sponsorship: "是否公司資助",

        hold: "暫存"
    },

    justificationOfAttendingEnums: {
        0: "公司要求",
        1: "員工要求"
    },

    withinInTrainingBudgetEnums: {
        0: "是",
        1: "否",
        2: "不適用"
    },

    sharedRoomEnums: {
        true: "雙人房",
        false: "單人房"
    },

    trainingLocationEnums: {
        true: "澳門",
        false: "其他"
    },

    // 以上二期新增模塊

    MENUS: {
        "workOrderList": "工單",
        "workOrderAdd": "新增工單",
        "assetInfo": "資產信息",
        "delivery": "到貨",
        "noticeList": "公告欄",
        "employee": "個人資料",
        "suggestionList": "意見箱",
        "punch": "打卡",
        "craftcostList": "員工成本",
        "worklog": "工作日誌",
        "management": "考勤管理",
        "materialList": "物料申請單",
        "approval": "審批調班申請",
        // 二期新增模塊
        "annual": "年假計劃",
        "stockOutList": "出庫管理",
        "stockInList": "入庫管理",
        "attendanceApply": "考勤申請",
        "changeApplication": "人事申請",
        "materialReturnList": "物料退還申請單"
    },

    QList: {
        empty: "暫無數據",
        end: "沒有更多了",
        error: "請求失敗，點擊重新加載",
    },

    "DataTable": {
        yesFlag: "是",
        noFlag: "否",
    },

    PRIORITIES: {
        1: '特急',
        2: '緊急',
        3: '一般',
        4: '偏低',
        5: '低',
    },

    ERROR_MESSAGES: {
        "SKILLRANK_NON_EXISTENT": "技能等級不能爲空",
        "ASSETACCESSORY_NON_EXISTENT": "設備配件不能爲空",
        "ASSET_NON_EXISTENT": "設備不能爲空",
        "ASSETAVATAR_NON_EXISTENT": "設備頭像不能爲空",
        "ASSETSPARES_NON_EXISTENT": "設備備件不能爲空",
        "JOBPLANCRAFTCOST_NON_EXISTENT": "工作計劃員工成本不能爲空",
        "JOBPLANHAZARD_NON_EXISTENT": "工作計劃危害/預防措施不能爲空",
        "JOBPLANMATERIALCOST_NON_EXISTENT": "工作計劃物料成本不能爲空",
        "CODE_NON_EXISTENT": "編號不能爲空",
        "JOBPLAN_NON_EXISTENT": "工作計劃不能爲空",
        "JOBPLANTASK_NON_EXISTENT": "工作計劃任務不能爲空",
        "JOBPLANTOOLCOST_NON_EXISTENT": "工作計劃工具成本不能爲空",
        "LOCATION_NON_EXISTENT": "位置不能爲空",
        "PLANMAINTAIN_NON_EXISTENT": "計劃維護不能爲空",
        "CRAFT_NON_EXISTENT": "工種不能爲空",
        "MEASUREPOINT_NON_EXISTENT": "測量點不能爲空",
        "MEASUREUNIT_NON_EXISTENT": "計量單位不能爲空",
        "SUPPLIER_NON_EXISTENT": "客商不能爲空",
        "EMPLOYEEATTACHMENT_NON_EXISTENT": "員工附件不能爲空",
        "EMPLOYEEAVATAR_NON_EXISTENT": "員工頭像不能爲空",
        "EMPLOYEE_NON_EXISTENT": "員工資料不能爲空",
        "POSITIONRANK_NON_EXISTENT": "職級不能爲空",
        "POSITION_NON_EXISTENT": "職務不能爲空",
        "SKILL_NON_EXISTENT": "技能資料不能爲空",
        "MATERIAL_NON_EXISTENT": "物料不能爲空",
        "MATERIALAVATAR_NON_EXISTENT": "物料圖片不能爲空",
        "NOTICE_NON_EXISTENT": "公告不能爲空",
        "ATTDORG_NON_EXISTENT": "考勤群組不能爲空",
        "DEPARTMENT_NON_EXISTENT": "部門不能爲空",
        "MAILLOG_NON_EXISTENT": "郵件提示LOG 不能爲空",
        "PROJECT_MISMATCH": "項目不一致",
        "EITHER_DEVICE_OR_LOCATION_MUST_BE_SELECTED": "必須選擇設備或位置",
        "ID_MUST_NOT_BE_NULL": "ID不能爲空",
        "UNDESIRED_STATUS": "非期望狀態",
        "ASSET_AND_PARENT_MISMATCH": "設備和父設備不一致",
        "LOCATION_AND_PARENT_MISMATCH": "位置和父位置不一致",
        "ID_MUST_BE_NULL": "ID必須爲空",
        "UPLOAD_EXCEPTION": "上傳過程發生異常",
        "DOWNLOAD_EXCEPTION": "下載過程發生異常",
        "AVATAR_LENGTH_OUT_OF_RANGE": "圖片數量不在範圍內",
        "PLAN_MAINTAIN_JOB_PLAN_BE_USED": "計劃性工作維護計劃已被引用",
        "UNSUPPORTED_TYPE": "不支持類型",
        "WORK_ORDER_TYPE_MISMATCH": "工單類型不一致",
        "WORK_ORDER_STATUS_MISMATCH": "工單狀態不一致",
        "WORK_ORDER_STATUS_NOT_CHOICE": "未選擇工單狀態",
        "CREATE_ENTITY_EXCEPTION": "創建實體數據異常",
        "CRITERIA_PARSE_ERROR": "查詢數據解析異常",
        "WORK_ORDER_IN_USED": "工單已經被引用",
        "INTEGRITY_CONSTRAINT": "完整性異常",
        "JOP_PLAN_DUPLICATE": "工作計劃重複",
        "NEXT_JOB_PLAN_NOT_FOUND": "下一個工作計劃不存在",
        "FAULT_REMEDY_DUPLICATE": "故障補救措施已經存在",
        "FAULT_TYPE_DUPLICATE": "故障類型已經存在",
        "SCHEDULE_ADJUST_APPLY_DUPLICATE": "修改更期表已經存在",
        "STATUS_INCORRECT": "非期望狀態",
        "SCHEDULE_ADJUST_APPLY_LENGTH_OUT_OF_RANGE": "修改更期表個數不在範圍內",
        "DATA_CONVERTER_EXCEPTION": "數據轉換異常",
        "SYSTEM_MISMATCH": "系統不一致",
        "GROUPORG_SHEET_NOT_FOUND": "集團SHEET未找到",
        "ORGANIZATION_SHEET_NOT_FOUND": "業務單元組織SHEET未找到",
        "POSITION_RANK_SHEET_NOT_FOUND": "職級SHEET未找到",
        "POSITION_SHEET_NOT_FOUND": "職位SHEET未找到",
        "SKILL_SHEET_NOT_FOUND": "技能SHEET未找到",
        "SKILL_RANK_SHEET_NOT_FOUND": "技能等級SHEET未找到",
        "SYSTEM_ARCHIVES_SHEET_NOT_FOUND": "系統檔案SHEET未找到",
        "SUPPLIER_TYPE_SHEET_NOT_FOUND": "客商類型SHEET未找到",
        "DEPARTMENT_SHEET_NOT_FOUND": "部門SHEET未找到",
        "EMPLOYEE_SHEET_NOT_FOUND": "員工SHEET未找到",
        "SUPPLIER_ARCHIVES_SHEET_NOT_FOUND": "客商檔案SHEET未找到",
        "LOCATION_SHEET_NOT_FOUND": "設備SHEET未找到",
        "MATERIAL_TYPE_SHEET_NOT_FOUND": "物料類型SHEET未找到",
        "MATERIAL_SHEET_NOT_FOUND": "物料SHEET未找到",
        "PROJECT_SHEET_NOT_FOUND": "項目SHEET未找到",
        "FAULT_TYPE_SHEET_NOT_FOUND": "故障類型SHEET未找到",
        "FAULT_ISSUE_SHEET_NOT_FOUND": "故障問題SHEET未找到",
        "FAULT_CAUSE_SHEET_NOT_FOUND": "故障原因SHEET未找到",
        "FAULT_REMEDY_SHEET_NOT_FOUND": "故障解決方法SHEET未找到",
        "MEASURE_TYPE_SHEET_NOT_FOUND": "測量類型SHEET未找到",
        "HAZARD_TYPE_SHEET_NOT_FOUND": "危害類型SHEET未找到",
        "HAZARD_REMEDY_SHEET_NOT_FOUND": "預防措施SHEET未找到",
        "CRAFT_SHEET_NOT_FOUND": "工種SHEET未找到",
        "WAREHOUSE_SHEET_NOT_FOUND": "倉庫SHEET未找到",
        "FILE_STUFFIX_PERMIT": "無法讀取的文件後綴名",
        "QUOTE_REPEAT": "引用重複",
        "DATA_DUPLICATION": "數據重複",
        "OFFICEHOUR_SHORTNAME_DUPLICATE": "辦公時間數據重複",
        "OFFICEHOUR_IN_USE": "辦公時間數存在引用",
        "HOLIDAY_TYPE_SHEET_NOT_FOUND": "假期類型SHEET未找到",
        "PUBLIC_HOLIDAY_TYPE_SHEET_NOT_FOUND": "公眾假期類型SHEET未找到",
        "OFFICE_HOUR_SHEET_NOT_FOUND": "辦公時間SHEET未找到",
        "ASSET_IN_USE": "設備存在引用",
        "PARAMETER_NOT_VALID": "參數驗證不通過",
        "PERMISSION_DENIED": "無權訪問",
        "WORK_ORDER_IN_CYCLE": "工單陷入循環",
        "LOCATION_IN_CYCLE": "位置陷入循環",
        BANK_INFO_CAN_ONLY_ONE: '員工只能有一個生效銀行卡', // 二期翻譯，待提供
        OVERTIME_GREATER_THAN_INTERVAL: '加班時長超出加班時間間隔', // 二期翻譯，待提供
        TIME_REPEAT: '時間數據重複', // 二期翻譯，待提供
        GROUPPOSITION_REPEAT: '集團職務重複', // 二期翻譯，待提供
        LEAVETYPERULE_NON_EXISTENT: '數據已被刪除/數據不存在', // 二期翻譯，待提供
        OVERTIME_PERSON_CAN_ONLY_APPLY_TO_A_SINGLE_EMPLOYEE: '個人類型的加班申請只能是單個員工', // 二期翻譯，待提供
        DATA_EMPLOYEE_DUPLICATION: '該員工已有員工資料，請勿重複增加！', // 二期翻譯，待提供
        UPDATE_CONSTRAINT: '無法修改他人員工資料！', // 二期翻譯，待提供
        NO_AVAILABLE_INSURANCE_PLAN_PREMIUM: '沒有合適的保險計劃費用方案', // 二期翻譯，待提供
        BLUECARD_APPLY_EMPLOYEE_EXIST: '該員工已綁定過批示管理', // 二期翻譯，待提供
        ONHAND_NOT_FOUND: '庫存信息不存在', // 二期翻譯，待提供
        CANCEL_DAYS_GREATER_LEAVE_DAYS: '當前申請天數超出申請範圍', // 二期翻譯，待提供
        REVOKED_COUNT_ERROR: '已生成入庫/出庫單，不可撤銷', // 二期翻譯，待提供
        BUSINESS_TYPE_ERROR: '審批流業務類型不匹配', // 二期翻譯，待提供
        LOCATION_IN_COUNT: '貨位盤點中，不可操作', // 二期翻譯，待提供
        NOT_AN_EMPLOYEE_EXCEPTION: '申請人不是一個員工', // 二期翻譯，待提供
        APPLY_ENTITY_CONVERT_EXCEPTION: '消息模板申請實體轉換異常', // 二期翻譯，待提供
        PROCESS_MESSAGE_EXCEPTION: '消息模板數量為空或模板數量過多', // 二期翻譯，待提供
        PROCESS_MESSAGE_EMPTY_EXCEPTION: '消息模板內容爲空 或 消息模板標題爲空', // 二期翻譯，待提供
        MESSAGE_SEND_FAILED: '無法獲取指派人或審批人', // 二期翻譯，待提供
        ROLE_TYPE_ERROR_DEPARTMENT: '角色映射失敗: 選擇了職位而沒有綁定部門', // 二期翻譯，待提供
        ROLE_TYPE_ERROR_PROJECT: '角色映射失敗: 選擇了職務而沒有綁定項目', // 二期翻譯，待提供
        USER_TASK_ROLE_IS_EMPTY: '用戶任務需要綁定角色', // 二期翻譯，待提供
        SERVICE_TASK_EXPRESSION_IS_EMPTY: '後臺任務需要綁定表達式', // 二期翻譯，待提供
        PROCESS_EXIST_EXCEPTION: '流程定義已經存在', // 二期翻譯，待提供
        ROLE_MAPPER_EXCEPTION: '無合適的用戶角色', // 二期翻譯，待提供
        UNSUPPORTED_RETURN_TYPE: '不支持的返回類型', // 二期翻譯，待提供
        INVOKE_METHOD_ERROR: '方法執行失敗', // 二期翻譯，待提供
        NO_PROCESS_TYPE_FOUND: '沒有可以使用的配置', // 二期翻譯，待提供
        MULTIPLE_PROCESS_ERROR: '多審批流程: 多審批流程配置失敗', // 二期翻譯，待提供
        MULTIPLE_PROCESS_UPDATE_EXCEPTION: '多審批流: 無法或者多審批流處理流', // 二期翻譯，待提供
        PROCESS_TYPE_LIST_IS_EMPTY: '多審批流程: 配置清單空置', // 二期翻譯，待提供
        CONVERT_EXCEPTION: '多審批流程:轉換異常', // 二期翻譯，待提供
        BLUE_CARD_QUOTA_ERROR: '使用配額數量大於批給配額', // 二期翻譯，待提供
        MAP_USER_FAILED: '角色映射失敗: 用戶爲空', // 二期翻譯，待提供
        NOT_AN_APPROVER_EXCEPTION: '當前登錄人員不是審批人', // 二期翻譯，待提供
        EMPLOYEE_ALREADY_HAS_LEAVE_TYPE_RULE_BOUND: '員工已經綁定了休假規則', // 二期翻譯，待提供
        TOO_MANY_PROCESS_TYPE_EXCEPTION: '請檢查是否有多個相同條件的配置', // 二期翻譯，待提供
        TARGET_HOLIDAY_TYPE_IS_MISSING: '不享有此福利', // 二期翻譯，待提供
        ONE_EMPLOYEE_CAN_ONLY_HAVE_ONE_SPOUSE: '一個員工只能有一個配偶', // 二期翻譯，待提供
        DEPENDENT_NO_FORMAT_ERROR: '家屬編號模式不正確', // 二期翻譯，待提供
        OFFICE_HOUR_CAN_NOT_BE_NULL: '員工排班不可為空', // 二期翻譯，待提供
        COMPENSATION_MODE_IS_NULL: '補償模式不能為空', // 二期翻譯，待提供
        PROCESS_SERVICE_TASK_HANDLER_NOT_FOUND: '無法找到可處理此業務類型的處理器', // 二期翻譯，待提供
        NOT_A_VALID_APPLY_USER: '登錄人不是申請人，無法確認', // 二期翻譯，待提供
        CAN_REHIRE_NOT_SELECTED: '請在編輯頁面選擇可否再聘用', // 二期翻譯，待提供
        USER_NOT_FOUND_FROM_EMPLOYEE: '雇員沒有對應的用戶賬號', // 二期翻譯，待提供
        OVERTIME_APPLY_DETAIL_IS_EMPTY: '明細不能爲空', // 二期翻譯，待提供
        COMPLETE_TASK_BATCH_VALUE_ERROR: '批量審批參數有誤', // 二期翻譯，待提供
        PROCESS_SERVICE_HANDLER_NOT_FOUND: '無法找到可處理此業務類型的處理器', // 二期翻譯，待提供
        EMPLOYEE_BASIC_BEAN_IS_MISSING: '項目中不存在需要的實體', // 二期翻譯，待提供
        CUSTOM_METHOD_NOT_FOUND: '未找到自定義類型的判斷方法', // 二期翻譯，待提供
        CUSTOM_METHOD_TOO_MANY: '無法獲取唯一自定義判斷方法', // 二期翻譯，待提供
        APPLY_REVOKE_STATUS_ERROR: '撤回申請狀態錯誤', // 二期翻譯，待提供
        APPLY_SUBMIT_STATUS_ERROR: '申請提交狀態錯誤', // 二期翻譯，待提供
        APPLY_APPROVING_STATUS_ERROR: '申請通過狀態錯誤', // 二期翻譯，待提供
        PROCESS_TYPE_DUPLICATE: '流程配置重複', // 二期翻譯，待提供
        CRITERIA_ERROR_DEPT_IS_NULL: '部門不能爲空', // 二期翻譯，待提供
        CRITERIA_ERROR_PROJECT_IS_NULL: '項目不能爲空', // 二期翻譯，待提供
        CRITERIA_ERROR: '部門條件有誤', // 二期翻譯，待提供
        CRITERIA_ERROR_ORG_IS_NULL: '組織不能爲空', // 二期翻譯，待提供
        STATUS_IS_NOT_PENDING: '狀態非 PENDING', // 二期翻譯，待提供
        STATUS_IS_NOT_FINISHED: '狀態非 FINISHED', // 二期翻譯，待提供
        UNKNOWN_STATUS: '未知狀態', // 二期翻譯，待提供
        WEB_REQUEST_FAILED: '網絡請求出錯', // 二期翻譯，待提供
        APPLY_ID_IS_NULL: '至少需要一個需要續期的批示管理', // 二期翻譯，待提供
        GENERATE_DOCUMENT_ERROR: '文件生成出錯', // 二期翻譯，待提供
        BANK_INFO_ERROR: '員工只能有一個生效的銀行戶口', // 二期翻譯，待提供
        SPOUSE_CODE_TABLE_IS_NULL: '配偶類型家庭關係不能爲空', // 二期翻譯，待提供
        TYPE_NOT_ACCEPT: '不接受此類型的附件查詢', // 二期翻譯，待提供
        PARAMETER_IS_NULL: '生成的文件内有空参数', // 二期翻譯，待提供
        TOO_MANY_ATTACHMENT_EXCEPTION: '附件數量不唯一', // 二期翻譯，待提供
        DATE_ERROR: '參數錯誤', // 二期翻譯，待提供
        EMPLOYEE_CAN_ONLY_HAVE_ONE_SA: '員工只可以擁有一個服務合約', // 二期翻譯，待提供
        EMPLOYEE_ID_NOT_NULL: '員工id不能爲空', // 二期翻譯，待提供
        MATERIAL_SHOULD_BE_UNIQUE_IN_ONE_APPLY: '一張申請單内只應包含一種物料一次', // 二期翻譯，待提供
        ACTUAL_STOCK_NUM_IS_LESS_THAN_APPLY: '實際物料數量比申請數量少', // 二期翻譯，待提供
        WAREHOUSE_LOCATION_IN_CYCLE: '貨位陷入循環', // 二期翻譯，待提供
        ACTUAL_STOCK_NUM_IS_LESS_THAN_REQUIRE: '實際物料數量比申請數量少', // 二期翻譯，待提供
        MATERIAL_CATEGORY_IN_CYCLE: '類目陷入循環', // 二期翻譯，待提供
        EMPLOYEE_LIST_IS_NULL: '員工數據列表爲空', // 二期翻譯，待提供
        SCHEDULE_ADJUST_IS_EMPTY: '上一次排班爲空', // 二期翻譯，待提供
        APPLY_REVOKE_FAILED_STATUS_ERROR: '申請撤回狀態錯誤', // 二期翻譯，待提供
        APPLY_SUBMIT_FAILED_STATUS_ERROR: '申請提交狀態錯誤', // 二期翻譯，待提供
        EMPLOYEE_IS_DEPARTURE: '員工已離職無法提交申請', // 二期翻譯，待提供
        NOT_IN_A_VALID_LIMIT_TYPE: '未享有此福利', // 二期翻譯，待提供
        APPLY_APPROVING_FAILED_STATUS_ERROR: '申請同意狀態錯誤', // 二期翻譯，待提供
        EMPLOYEE_NOT_FOUND: '雇員不存在', // 二期翻譯，待提供
        HOLIDAY_TYPE_NOT_FOUND: '假期類型不存在', // 二期翻譯，待提供
        LEAVE_APPLY_DETAIL_NOT_FOUND: '請假申請詳細未找到', // 二期翻譯，待提供
        SCHEDULE_ADJUST_MISSING: '排班記錄缺失', // 二期翻譯，待提供
        SCHEDULE_ADJUST_DATE_MISMATCH: '排班記錄日期不匹配', // 二期翻譯，待提供
        LEAVE_TYPE_NOT_ACCEPT: '不支持的記錄類型', // 二期翻譯，待提供
        HOLIDAY_TYPE_SELECTED_MIX: '重複的休假類型', // 二期翻譯，待提供
        QUOTA_SAME_ERROR: '額度計算相同', // 二期翻譯，待提供
        QUOTA_GENERATE_ERROR: '額度生成錯誤', // 二期翻譯，待提供
        AUTO_GENERATE_RECORD_NOT_ONLY: '自动生成额度不唯一', // 二期翻譯，待提供
        STATUS_ERROR: '狀態非 PENDING 或 APPROVING', // 二期翻譯，待提供
        OFFICE_HOUR_IS_NOT_A_WORKING_DAY: '辦公時間不是一個有效的工作排班', // 二期翻譯，待提供
        IMPORT_DATA_IS_EMPTY: '匯入數據爲空', // 二期翻譯，待提供
        EMPLOYEE_ORG_IS_NOT_THE_SAME: `員工 {0} 所屬公司不是限定公司内`, // 二期翻譯，待提供
        EMPLOYEE_DO_NOT_HAVE_THIS_OFFICE_HOUR: `員工 {0} 考勤群組内沒有對應的排班`, // 二期翻譯，待提供
        IMPORT_OFFICE_HOUR_IS_NULL: `員工 {0} 辦公時間爲空`, // 二期翻譯，待提供
        IMPORT_OFFICE_HOUR_IS_NOT_A_WORKING_DAY: `員工 {0} 不是一個有效的工作日`, // 二期翻譯，待提供
        APPLY_REVOKE_FAILED: '撤回申請失敗', // 二期翻譯，待提供
        THE_CALCULATION_METHOD_IS_NOT_SELECTED: '沒有選擇對應的補償模式和計算方式', // 二期翻譯，待提供
        DETAILS_DUPLICATE_ERROR: '新增的組織已在數據庫有記錄', // 二期翻譯，待提供
        NUM_ERROR: '揀貨數量必須大於0', // 二期翻譯，待提供
        STOCK_COUNT_ID_REQUIRED: '庫存盤點ID不能為空', // 二期翻譯，待提供
        STOCK_COUNT_BODY_ID_REQUIRED: '庫存盤點明細ID不能為空', // 二期翻譯，待提供
        SOURCE_INFO_REQUIRED: '來源信息不能為空', // 二期翻譯，待提供
        STOCK_IN_ID_REQUIRED: '入庫單ID不能為空', // 二期翻譯，待提供
        STOCK_IN_BODY_ID_REQUIRED: '入庫單明細ID不能為空', // 二期翻譯，待提供
        DEPARTURE_REQUIRE_PART_IS_NOT_COMPLETE: '離職申請部門主管填寫欄位未填寫', // 二期翻譯，待提供
        WAREHOUSE_LOCATION_ID_IS_MISSING: '{0} 物料倉庫貨位爲空', // 二期翻譯，待提供
        GENERATE_PARAMETER_IS_MISSING: '所需文件的{0}參數爲空', // 二期翻譯，待提供
        EMPLOYEE_SCHEDULE_ADJUST_IS_EMPTY: '員工考勤更期為空', // 二期翻譯，待提供
        EMPLOYEE_HAS_ALREADY_APPLIED: '員工已經有一條申請', // 二期翻譯，待提供
        LEAVE_APPLY_DETAIL_DUPLICATE: '請假詳情單數據已存在', // 二期翻譯，待提供
        LEAVE_CANCEL_APPLY_DETAILS_IS_EMPTY: '銷假單據子單據爲空', // 二期翻譯，待提供
        CAN_NOT_FOUND_FIT_LEAVE_TYPE_IN_EMPLOYEE: '員工無綁定休假組別', // 二期翻譯，待提供
        exceptionCodes: {
            // 二期翻譯，異常多語言處理
            entryDate: '員工入職日期爲空',
            identification: '員工身份信息爲空',
            identificationParams: '員工身份信息身份證類型，身份證編號爲空'
        },
        REACH_MAX_SINGLE_LIMIT_DAYS: `請假天數超出最大許可天數`,
        BASIC_SALARY_NOT_SPEC: `沒有指定月薪或月報酬`,
        LEAVE_APPLY_SCHEDULE_ADJUST_CAN_NOT_BE_NULL: `請假單不能請無考勤的單據`,

        401: "登入已失效",
        404: "網絡異常",
        409: "數據重複",
        413: "文件大小已超出20MB的限制",
        500: "服務器異常",

        "FILE_SIZE_TOO_LARGE": "文件大小已超出20MB的限制",
    },
    common: {
        function: "功能捷徑",
        noData: "暫無數據",
        dataError: "數據異常",
        confirm: "確認",
        cancel: "取消",
        noMore: "沒有更多了",
        loadError: "請求失敗，點擊重新加載",
        pleaseChoose: "請選擇",
        choose: "選擇",
        cannotChoose: "該項不可選",
        delete: "刪除",
        maxLength16: "長度不能超過16",
        entityTooLarge: "文件大小已超出20MB的限制",
        viewNotification: "前往查看？",
        update: "頁面有更新，將為您更新"
    },

    RecorderComponent: {
        end: "點擊結束",
        start: "點擊開始"
    },

    PickerComponent: {
        pleaseInputCode: "請輸入編號",
        codeMustNotNull: "編號不能為空",
        assetNotFound: "找不到該設備",
        locationNotFound: "找不到該位置"
    },

    form: {
        choose: "請選擇",
        submit: "提交",
        reset: "重置",
        itemRequire: "此項必填",
        mustBeNumber: "必須為數字",
        notZero: "必須大於0",
        submitSuccess: "提交成功",
        operationSuccess: "操作成功",
        save: `儲存`,
        add: "新增",
        edit: "編輯",
        delete: "刪除",
        action: "操作",
        hold: "暫存",
    },

    STATUS: {
        A: "生效",
        C: "失效"
    },

    ABSENCE_TYPE: {
        "LATE": "遲到",
        "DOCTOR": "求診",
        "FOLLOW": "隨診",
        "OUT": "外出工作",
        "FORGOT": "忘記打卡",
        "TRAINING": "參加培訓或講座",
        "OTHER": "其他"
    },

    DAILY_ACCESS_RECORD_TYPE: {
        "TODAY": "待定",
        "NORMAL": "準時出勤",
        "LATE": "遲到",
        "LEAVE_EARLY": "早退",
        "ABSENT": "員工缺勤",
        "ON_LEAVE": "其他假期",
        "NON_WORKING_DAY": "非工作日",
        "PUBLIC_HOLIDAY": "公眾假期",
        "MISSING_CARD_PUNCH": "缺卡"
    },

    LanguagePage: {
        title: "語言"
    },

    HomePage: {
        home: "首頁",
        person: "我的",
        workOrder: "工單",
        assetInfo: "資產信息",
        materialRequestForm: "物料申請單",
        materialRequestFormArrival: "到貨明細",
        jobDiary: "工作日誌",
        punch: "打卡",
        attendance: "考勤管理",
        employeeInfo: "員工專區",
        employeeMustrequired: "帳號未關聯員工，未能使用此功能",
        suggestion: "意見箱",
        notice: "公告欄",
        approval: "審批調班申請",
        craftCost: "員工成本",
        dev: "敬請期待",
        search: "功能搜索...",
        taskManagementGroup: "任務管理",
        staffCornerGroup: "員工專區"
    },

    ErrorPage: {
        title: "錯誤頁",
        pageNotFount: "您訪問的路徑不存在",
        noPremission: "沒有權限訪問該頁面"
    },

    LoginPage: {
        title: "歡迎登入盛世平台",
        welcomeBack: "歡迎回來，",
        continue: "登入繼續使用",
        username: "用戶名",
        password: "密碼",
        loginError: "用戶名或密碼錯誤",
        forgotPassword: "忘記密碼？",
        login: "登入"
    },

    ChangePasswordPage: {
        title: "更改密碼",
        oldPassword: "舊密碼",
        newPassword: "新密碼",
        confirmPassword: "確認密碼",
        passwordNotMatch: "密碼不匹配",
    },

    ForgotPasswordPage: {
        title: "找回密碼",
        username: "用戶名",
        mobile: "手機號",
        verificationCode: "驗證碼",
        send: "發送",
        resend: "重新發送",
        countDown: "{0}秒後重新發送",
        sendSuccess: "發送成功",
        invalidVerificationCode: "驗證碼無效",
        usernameOrMobileInvalid: "用戶名或手機號不正確"
    },

    ResetPasswordPage: {
        title: "重設密碼",
        newPassword: "新密碼",
        confirmPassword: "確認密碼",
        passwordNotMatch: "密碼不匹配",
    },

    EmployeeInfoPage: {
        title: "個人資料",
        entryDate: "入職：",
        skill: "技能",
        document: "文件",
        // 二期新增內容
        baseInfo: "基本資料",
        idNo: "證件號碼",
        issueDate: "簽發日期",
        expiryDate: "有效日期",
        maritalStatus: "婚姻狀況",
        macauAddress: "澳門住宅地址",
        homePhone: "澳門住宅電話",
        mobile: "澳門手提電話",
        hometownAddressOrPhone: "原居地地址及電話(非澳門居民適用)",
        urgencyContact: "緊急聯絡人資料",
        urgencyContactName: "緊急聯絡人姓名",
        contactNo: "聯絡電話",
        educational: "學歷",
        institution: "學校名稱",
        field: "範疇",
        major: "主修科目/ 課程名稱",
        qualification: "領取資格",
        family: "家庭背景 (配偶及子女資料)",
        familyName: "姓名",
        relationship: "關係",
        gender: "性別",
        birthDate: "出生日期",
        fileOrigin: '文件來源',
        fileOriginEnums: {
            EMPLOYEE: '員工',
            EMPLOYEE_LICENSES: '牌照',
            EMPLOYEE_TRAINING: '培訓記錄',
            EMPLOYEE_WARNING: '警告',
            EMPLOYEE_EDUCATIONAL: '教育背景',
            EMPLOYEE_WORKING_HISTORY: '工作經驗',
            EMPLOYEE_FAMILY: '家庭成員',
            EMPLOYEE_CONTRACT_HISTORY: '合同紀錄'
        },
        description: "描述",
        fileName: "名稱",
        licenses: '牌照',
        licensesName: '牌照',
        licensesType: '牌照類型',
        remark: '備註',
        issueOrganization: '發證機構',
        issueLicensesDate: '生效日期',
        expiryLicensesDate: '失效日期',
        sponsoredByCompany: '是否公司贊助',
        sponsoredAmount: '公司贊助金額',
    },

    relationshipEnums: {
        SPOUSE: '配偶',
        SON: '兒子',
        DAUGHTER: '女兒',
    },

    genderEnums: {
        0: "男",
        1: "女"
    },

    maritalStatusEnums: {
        // 婚姻狀態枚舉值
        UNMARRIED: "未婚",
        MARRIED: "已婚",
        DIVORCED: "離婚",
        WIDOWED: "喪偶"
    },

    AdjustmentPage: {
        title: "調班申請",
        employee: "申請人",
        startDate: "開始日期",
        endDate: "結束日期",
        originalOfficeHour: "原更期",
        attdOrg: "考勤小組",
        newOfficeHour1: "上半班",
        newOfficeHour2: "下半班",
        reason: "調更原因",
        tip: "所選時段必須在同一考勤群組且每日更期相同。",
        repeat: "存在重複的調班申請",
    },

    AdjustmentDetailPage: {
        title: "調班申請詳情",
        applicant: "申請人：",
        startDate: "開始日期：",
        endDate: "結束日期：",
        originalOfficeHour: "原更期：",
        attdOrg: "考勤群組：",
        newOfficeHour: "更期：",
        status: "狀態：",
        reason: "調更原因：",
        createdTime: "創建日期：",
    },

    AdjustmentRecordsPage: {
        applicant: "申請人：",
        startDate: "開始日期：",
        endDate: "結束日期：",
        status: "狀態：",
        reason: "調更原因：",
        recall: "撤回",
        edit: "編輯提交",
        recallSuccess: "撤回成功",
    },

    ADJUSTMENT_RECORDS_STATUS: {
        S: "已提交",
        C: "已撤回",
        N: "不通過",
        P: "已通過"
    },

    AbsencePage: {
        title: "增加異常解釋",
        applyDate: "缺勤日期",
        fromTime: "從",
        toTime: "至",
        reasonType: "缺勤類型",
        reason: "原因"
    },

    AbsenceDetailPage: {
        title: "異常解釋記錄詳情",
        applicant: "申請人：",
        applyDate: "缺勤日期：",
        fromTime: "從：",
        toTime: "至：",
        status: "狀態：",
        reasonType: "缺勤類型：",
        reason: "原因："
    },

    PunchPage: {
        title: "考勤打卡",
        myPosition: "我的位置",
        positioningFailed: "定位失敗",
        rePositioning: "重新定位",
        punchWait: "打卡過於頻繁，請稍後再試",
        punch: "打卡",
        punchSuccess: "打卡成功",
        weakGPSSignl: "GPS信號弱"
    },

    PunchRecordsPage: {
        title: "打卡記錄",
        date: "日期：",
    },

    DutyRosterPage: {
        myDutyRoster: "我的排班",
        groupDutyRoster: "群組排班",
    },

    JobDiaryPage: {
        title: "工作日誌",
        dutyRoster: "排班表",
        adjustment: "調班申請",
    },

    AttendancePage: {
        title: "考勤管理",
        reports: "考勤記錄",
        absence: "考勤異常解釋記錄",
    },

    AttendanceReportsPage: {
        week: "周",
        month: "月",
        followUp: "去處理",
        dailyAccessRecordType: "考勤類型：",
        attdOrgName: "考勤小組：",
        officeHours: "更期：",
        durations: "辦公時間：",
        lateMins: "遲到（分鐘）：",
        leaveMins: "早退（分鐘）："
    },

    AttendanceDetailPage: {
        title: "考勤記錄",
        followUp: "去處理",
        dailyAccessRecordType: "考勤類型：",
        attdOrgName: "考勤小組：",
        officeHours: "更期：",
        durations: "辦公時間：",
        lateMins: "遲到（分鐘）：",
        leaveMins: "早退（分鐘）：",
        processed: "已處理"
    },


    AttendanceAbsencePage: {
        applicant: "申請人：",
        applyDate: "缺勤日期：",
        status: "狀態：",
        reasonType: "缺勤類型："
    },

    MATERIAL_REQUEST_STATUS: {
        A: "編輯中",
        S: "已提交",
        N: "不批准",
        P: "已批准",
        R: "已完成",
    },

    SUGGESTION_STATUS: {
        C: "已撤回",
        R: "已回覆",
        S: "已提交"
    },

    AssetInfoPage: {
        title: "資產信息",
        project: "項目",
        asset: "設備",
        location: "位置"
    },

    AssetPage: {
        title: "設備信息",
        code: "編號：",
        codePlaceholder: "請輸入設備編號",
        name: "名稱：",
        specification: "規格型號：",
        sn: "序號：",
        tagNo: "標籤編號：",
        maintenanceCost: "維護成本：",
        maintenanceMinutes: "停機時間：",
        system: "系統：",
        parent: "父設備：",
        faultType: "故障類型：",
        supplier: "供應商：",
        location: "所在位置：",
        installedDate: "安裝日期：",
        useStartTime: "使用時段：",
        warrantyDate: "保修日期：",
        priority: "優先級：",
        accessory: "備件",
        material: "物料",
        num: "數量",
        spares: "零件",
        warehouse: "倉庫",
        canNotEmpty: "編號不能為空"
    },
    LocationPage: {
        title: "位置信息",
        code: "編號：",
        tagNo: "標籤編號：",
        codePlaceholder: "請輸入位置編號",
        name: "名稱：",
        parent: "父位置：",
        faultType: "故障類型：",
        priority: "優先級：",
        canNotEmpty: "編號不能為空"
    },

    CalendarPage: {
        title: "考勤月曆",
        dailyAccessRecordType: "考勤類型：",
        attdOrgName: "考勤小組：",
        officeHours: "更期：",
        durations: "辦公時間：",
        followUp: "去處理",
        attTime: "打卡：",
        fromTime: "上班時間：",
        toTime: "下班時間：",
        break: "休息",
        reports: "考勤管理",
        lateMins: "遲到（分鐘）：",
        leaveMins: "早退（分鐘）：",
        processed: "已處理",
        attdInfo: `考勤信息`,
        leaveStatistics: `休假統計`,
        leaveType: `假期類型`,

        lastYearBalance: `上年餘額`,
        currentYearBalance: `本年額度`,
        approvedThisYear: `已批核日數（本年）`,
        approvedNextYear: `已批核日數（下一年度）`,
        waitingForApproved: `待批核日數`,
        adjustDays: `調整日數`,
        yearlyEndEstBalance: `截至本年年尾的餘額`,
        consumeOnMarch: `本年3月底需清放日數`,
        consumeOnDecember: `本年12月底需清放日數`,
        entitlementAsAtCME: `截至本月尾之額度`,
        balanceAsAtCME: `截至本月尾之餘額`,
        toDepartment: `部門休假摘要`,
    },

    // 年假計劃
    AnnualPage: {
        title: "年假計劃",
        lastYearCF: '上年餘額',
        currentYearEntitlement: '本年額度',
        approvedThisYear: '已批核日數（本年）',
        approvedNextYear: '已批核日數（下一年度）',
        pendingApproval: '待批核日數',
        adjusted: '調整日數',
        yearlyEndBalance: '截至本年年尾的餘額',
        marchShouldConsumpe: '本年3月底需清放日數',
        decemberShouldConsumpe: '本年12月底需清放日數',

        PENDING: "編輯中",
        APPROVING: "審批中",
        FINISHED: "已批准",
        REJECTED: '已拒絕',
        REVOKED: '已撤銷',
        PLAN: '已計劃'
    },

    //部門休假統計頁面
    DepartmentPage: {
        title: `部門休假摘要`,
        employee: "員工",
        department: "部門",
        codeMark: "對應休假編號注釋內容",
    },

    // 二期物料申請變動
    MaterialRequestFormPage: {
        title: "物料申請單",
        meterialRequestFormDetail: "物料明細",
        leastOne: "（至少一條）",
        add: "新增",
        edit: "編輯",
        delete: "刪除",
        material: "物料",
        warehouse: "倉庫",
        num: "申請數量",
        waitReceiveNum: "待領用數量",
        receiveNum: "已領用數量",
        onhandNum: "可用庫存量",
        workOrder: "工單",
        supplier: "供應商",
        action: "操作",
        employee: '員工',
        project: "項目",
        department: "部門",
        category: "用戶類別",
        expectedDate: "預計使用日期",
        expectedReturnDate: "預計歸還日期",
        applyNote: "單據描述",
        hold: "暫存",
        applyType: "申請類型",
        hasSameValue: "已存在相同的記錄",
        reason: "備註",
        materialDetails: "物料明細",
        purchaseRequisition: "採購申請",
        materialUnit: "庫存單位",
        materialType: "物料類型",
        materialCategory: "物料類目",
        mainSpecification: "庫存規格",
        defaultApplyNote: '{0} 的物料申請單',
        convertPurchase: "轉為採買"
    },

    MaterialRequestFormBusinessType: {
        MRA: '物料領用',
        MI: '物料入庫',
        GI: '贈品入庫',
        CI: '客戶物料入庫',
        NI: '一般入庫',
        NO: '一般出庫',
        SR: '入庫退回出庫',
        INVENTORY_COUNT: '盤點單',
        TO: '工具借出',
        RM: '物料申領',
        BD: '文件借閲',
        CO: '客戶物料取出',
        RO: '維護出庫',
        DO: '報廢出庫',
        AO: '人員/部門領用',
        TR: '工具退還',
        MR: '物料退還',
        DR: '文件退還',
        CR: '客戶物料退還',
        RR: '維護入庫',
        AR: '人員/部門退還'
    },

    MaterialRequestFormStatus: {
        PENDING: "編輯中",
        APPROVING: "審批中",
        FINISHED: "已完成",
        REJECTED: '已拒絕',
        REVOKED: '已撤銷',
        // NOT_AVAILABLE: "物料申請審批中",
        WAITING_FOR_OUT_OF_STOCK: '待出庫',
        WAITING_FOR_STOCK_IN: '待入庫',
        ALL_RECEIVE_WAITING_FOR_CONFIRM: '全部到貨，待確認',
        PART_RECEIVE_WAITING_FOR_CONFIRM: '部份到貨，待確認',
        ALL_RECEIVE: '全部到貨',
        PART_RECEIVE: '部分到貨',
        WAITING_FOR_RECEIVE: '待領用',
        ALREADY_RECEIVED: '已領用',
    },

    MaterialRequestFormCategory: {
        0: "內部",
        1: "客戶"
    },

    MaterialRequestFormListPage: {
        title: "物料申請單",
        department: "部門：",
        project: '項目：',
        category: "用戶類別：",
        submitApplication: "提交",
        approveApplication: "審批",
        carbonCopy: "抄送",
        editing: "編輯中",
        submitted: "已提交",
        delivers: "待出庫",
        completed: "已完成",
        processing: "待處理",
        billCode: "編號：",
        num: '申請數量：',
        receiveTotal: '已領用數量：',
        expectedDate: "預計使用日期：",
        status: "狀態：",
        recall: "撤回",
        edit: "編輯",
        confirm: "確定",
        cancel: "取消",
        confirmRecall: "確定撤回?",
        recallSuccess: "撤回成功",
        confirmDelete: "刪除?",
        deleteSuccess: "刪除成功",
        followUp: "審批",
        resolve: "批准",
        reject: "不批准",
        quickCollection: "快速領用",
        confirmResolve: "確定批准?",
        confirmReject: "確定不批准?",
        temporarily: "暫不處理",
        approveNote: "備註",
        approveNote1: "備註：",
        applyNote: "單據描述：",
        applyType: "申請類型：",
        reason: "備註：",
        delete: "刪除"
    },

    MaterialRequestFormDetailPage: {
        title: "物料申請單詳情",
        organization: '公司：',
        department: "部門：",
        project: '項目：',
        category: "用戶類別：",
        basicData: "基礎資料",
        followUp: "審批",
        billCode: "編號：",
        status: "狀態：",
        expectedDate: "預計使用日期：",
        expectedReturnDate: "預計歸還日期：",
        applyNote: "單據描述：",
        approveNote: "備註：",
        receiveDate: "接收日期：",
        meterialRequestFormDetail: "物料明細",
        purchaseRequisition: "採購申請",
        material: "物料",
        warehouse: "倉庫",
        createdBy: "提交人：",
        promoter: "發起人：",
        num: "申請數量",
        waitReceiveNum: "待領用數量",
        receiveNum: "已領用數量",
        workOrder: "工單編號",
        billDate: "提交日期：",
        createdTime: "創建日期：",
        applyType: "申請類型：",
        materialUnit: "庫存單位",
        materialType: "物料類型",
        materialCategory: "物料類目",
        mainSpecification: "庫存規格",
        supplier: "供應商",
        detailsReason: '備註',
        reason: "備註："
    },

    MaterialReturnFormPage: {
        title: "物料退還申請單",
        meterialRequestFormDetail: "物料退還明細",
        leastOne: "（至少一條）",
        add: "新增",
        edit: "編輯",
        delete: "刪除",
        material: "物料",
        num: "申請數量",
        receivedQuantity: "領用數量",
        workOrder: "工單",
        action: "操作",
        employee: '員工',
        project: "項目",
        department: "部門",
        returnDate: "退還日期",
        expectedReturnDate: "預計歸還日期",
        returnNum: "退還數量",
        materialCurrentReturnNums: "本次退還數量",
        returnNumHistory: "已退還數量",
        applyNote: "單據描述",
        hold: "暫存",
        applyType: "退還類型",
        hasSameValue: "已存在相同的記錄",
        invalidReturnNum: "退還數量不能超過申請數量",
        positiveInteger: "此項為正整數",
        reason: "備註",
        materialDetails: "物料退還明細",
        materialUnit: "庫存單位",
        materialType: "物料類型",
        materialCategory: "物料類目",
        mainSpecification: "庫存規格",
        defaultApplyNote: '{0} 的物料退還申請單',
        batchNo: "批次號",
        sourceDocument: "來源單據：",
        warehouse: "倉庫",
        receiveWareHouse: "貨位"
    },

    MaterialReturnFormListPage: {
        title: "物料退還申請單",
        department: "部門：",
        project: '項目：',
        submitApplication: "提交",
        approveApplication: "審批",
        carbonCopy: "抄送",
        editing: "編輯中",
        submitted: "已提交",
        delivers: "待入庫",
        completed: "已完成",
        processing: "待處理",
        billCode: "編號：",
        num: '退還數量：',
        returnDate: "退還日期：",
        status: "狀態：",
        recall: "撤回",
        edit: "編輯",
        confirm: "確定",
        cancel: "取消",
        confirmRecall: "確定撤回?",
        recallSuccess: "撤回成功",
        confirmDelete: "刪除?",
        deleteSuccess: "刪除成功",
        followUp: "審批",
        resolve: "批准",
        reject: "不批准",
        confirmResolve: "確定批准?",
        confirmReject: "確定不批准?",
        temporarily: "暫不處理",
        approveNote: "備註",
        approveNote1: "備註：",
        applyNote: "單據描述：",
        applyType: "退還類型：",
        quickReturn: "快速退還",
        reason: "備註：",
        delete: "刪除"
    },

    MaterialReturnFormDetailPage: {
        title: "物料退還申請單詳情",
        organization: '公司：',
        department: "部門：",
        project: '項目：',
        basicData: "基礎資料",
        followUp: "審批",
        billCode: "編號：",
        status: "狀態：",
        returnDate: "退還日期：",
        expectedReturnDate: "預計歸還日期：",
        applyNote: "單據描述：",
        approveNote: "備註：",
        meterialReturnFormDetail: "物料退還明細",
        material: "物料",
        createdBy: "提交人：",
        promoter: "發起人：",
        num: "申請數量",
        returnNum: "退還數量",
        receivedQuantity: "領用數量",
        materialCurrentReturnNums: "本次退還數量",
        workOrder: "工單編號",
        billDate: "提交日期：",
        createdTime: "創建日期：",
        applyType: "退還類型：",
        materialUnit: "庫存單位",
        materialType: "物料類型",
        materialCategory: "物料類目",
        mainSpecification: "庫存規格",
        detailsReason: '備註',
        reason: "備註：",
        sourceDocument: "來源單據：",
        batchNo: "批次號"
    },

    // 庫存管理
    StockInFormListPage: {
        title: "入庫單",
        department: "部門：",
        project: '項目：',
        category: "用戶類別：",
        waitingList: '待入庫列表',
        receiptConfirmationList: '入庫確認列表',
        delivers: "待入庫",
        confirmed: "部分入庫，待確認",
        partialDelivery: "部分入庫",
        processing: "待入庫",
        requisitioned: "待領用",
        completed: "已完成",
        billCode: "編號：",
        num: '申請入庫數量：',
        status: "狀態：",
        edit: "編輯",
        confirm: "確定",
        cancel: "取消",
        approveNote: "備註",
        applyNote: "單據描述：",
        applyType: "入庫類型：",
        materialNumDetail: "物料數量詳細",
        reason: "備註：",
        materialNo: "物料編號/名稱",
        waitReceiveNum: "待入庫數量",
        receiveNum: "已入庫數量",
        actualArrivalNum: "實際領用數量：",
        billDate: "入庫日期：",
        business: "業務人員：",
        warehouse: "入庫倉庫：",
        poNo: "採購單號：",
        invoiceNo: "發票單號：",
        supplier: "供應商：",
    },

    StockInApprovalStatus: {
        PENDING: '待入庫',
        FINISHED: '已完成'
    },

    StockInFormDetailPage: {
        title: "入庫單詳情",
        organization: '公司：',
        department: "部門：",
        project: '項目：',
        basicData: "基礎資料",
        billCode: "編號：",
        category: "用戶類別：",
        deliveryDate: "入庫日期：",
        warehouse: "倉庫：",
        status: "狀態：",
        applyNote: "單據描述：",
        approveNote: "備註：",
        stockOutDetail: "入庫明細",
        materialNo: "物料編號/名稱",
        material: "物料",
        createdBy: "提交人：",
        promoter: "發起人：",
        business: "業務人員：",
        createdTime: "創建日期：",
        applyType: "業務類型：",
        materialUnit: "庫存單位",
        materialType: "物料類型",
        materialCategory: "物料類目",
        mainSpecification: "庫存規格",
        num: '申請入庫數量',
        availableNum: "可用庫存量",
        quantityToBeIssued: "待入庫數量",
        receiveNum: "已入庫數量",
        waitReceiveNum: "待領用數量",
        reason: "備註：",
        batchNo: "批次號",
        operation: "操作",
        cargoSpace: "貨位",
        availableStock: "現存量",
        currentQuantity: "本次入庫數量",
        outboundLocation: "入庫庫位",
        checkWarehouseInventory: "查看倉庫現存量",
        delete: "刪除"
    },

    StockOutFormListPage: {
        title: "出庫單",
        department: "部門：",
        project: '項目：',
        category: "用戶類別：",
        waitingList: '待出庫列表',
        receiptConfirmationList: '出庫確認列表',
        delivers: "待出庫",
        confirmed: "部分出庫，待確認",
        partialDelivery: "部分出庫",
        processing: "待出庫",
        requisitioned: "待領用",
        completed: "已完成",
        billCode: "編號：",
        num: '申請出庫數量：',
        status: "狀態：",
        edit: "編輯",
        confirm: "確定",
        cancel: "取消",
        approveNote: "備註",
        applyNote: "單據描述：",
        applyType: "出庫類型：",
        materialNumDetail: "物料數量詳細",
        reason: "備註：",
        materialNo: "物料編號/名稱",
        waitReceiveNum: "待出庫數量",
        receiveNum: "已出庫數量",
        actualArrivalNum: "實際領用數量：",
        billDate: "出庫日期：",
        warehouse: "倉庫："
    },

    StockOutApprovalStatus: {
        PENDING: '待出庫',
        APPROVING: '待領用',
        FINISHED: '已完成'
    },

    StockOutFormDetailPage: {
        title: "出庫單詳情",
        organization: '公司：',
        department: "部門：",
        project: '項目：',
        basicData: "基礎資料",
        billCode: "編號：",
        category: "用戶類別：",
        deliveryDate: "出庫日期：",
        warehouse: "倉庫：",
        status: "狀態：",
        applyNote: "單據描述：",
        approveNote: "備註：",
        stockOutDetail: "出庫明細",
        materialNo: "物料編號/名稱",
        material: "物料",
        createdBy: "提交人：",
        promoter: "發起人：",
        business: "業務人員：",
        createdTime: "創建日期：",
        applyType: "業務類型：",
        materialUnit: "庫存單位",
        materialType: "物料類型",
        materialCategory: "物料類目",
        mainSpecification: "庫存規格",
        num: '申請出庫數量',
        availableNum: "可用庫存量",
        quantityToBeIssued: "待出庫數量",
        receiveNum: "已出庫數量",
        waitReceiveNum: "待領用數量",
        reason: "備註：",
        reason1: "備註",
        batchNo: "批次號",
        operation: "操作",
        cargoSpace: "貨位",
        availableStock: "現存量",
        currentQuantity: "本次出庫數量",
        outboundLocation: "出庫庫位",
        checkWarehouseInventory: "查看倉庫現存量",
        delete: "刪除"
    },

    StockOutFormPage: {
        title: "出庫申請單",
        stockOutFormDetail: "出庫明細",
        leastOne: "（至少一條）",
        add: "新增",
        edit: "編輯",
        delete: "刪除",
        material: "物料",
        materialNo: "物料編號/名稱",
        num: "申請數量",
        receivedQuantity: "領用數量",
        workOrder: "工單編號",
        action: "操作",
        employee: '員工',
        project: "項目",
        department: "部門",
        applyNote: "單據描述",
        hold: "暫存",
        applyType: "出庫類型",
        hasSameValue: "已存在相同的記錄",
        positiveInteger: "此項為正整數",
        reason: "備註",
        materialUnit: "庫存單位",
        materialType: "物料類型",
        materialCategory: "物料類目",
        mainSpecification: "庫存規格",
        availableNum: "可用庫存量",
        receiveNum: "已領用數量",
        quantityToBeIssued: "待出庫數量",
        waitReceiveNum: "待領用數量",
        currentIssueQuantity: "本次出庫數量",
        defaultApplyNote: '{0} 的出庫申請單',
        businessType: "業務類型",
        batchNo: "批次號",
        sourceDocument: "來源單據",
        category: "用戶類別",
        warehouse: "出庫倉庫",
        warehouseLocation: "出庫庫位",
        operation: "操作",
        availableStock: "現存量",
        currentQuantity: "本次出庫數量",
        outboundLocation: "出庫庫位",
        receiveWareHouse: "貨位",
        checkWarehouseInventory: "查看倉庫現存量",
        invalidQuantityNum: "出庫數量不能大於最大值{0}"
    },

    Attachment: {
        attachment: "附件",
        upload: "上傳",
        filename: "文件名",
        action: "操作",
        download: "下載",
        delete: "刪除",
        uploadSuccess: "上傳成功",
        confirmDelete: "刪除?",
        deleteSuccess: "刪除成功",
        nonPDFFiles: "只可上傳PDF檔案" // 二期新增
    },

    WorkOrderPage: {
        title: "新增工單",
        project: "項目",
        workOrderType: "工單類型",
        nextStep: "下一步",
        assetType: "設備類型",
        locationType: "位置類型",
        otherType: "其他",
        asset: "設備",
        location: "位置",
        faultType: "故障類型",
        faultIssue: "故障問題",
        referCode: "參考編號",
        submitter: "報告人",
        priority: "優先級",
        description: "描述",
        submitWithError: "工單保存成功，不過保存文件出現了一些問題！",
        dataNotFount: "找不到數據",
        billDate: "提出時間",

    },

    WorkOrderListPage: {
        title: "工單列表",
        allWorkOrder: "所有工單",
        ownerWorkOrder: "我的工單",
        project: "項目：",
        waiting: "未展開",
        underway: "跟進中",
        completed: "已完成",
        asset: "設備：",
        location: "位置：",
        billCode: "編號：",
        "referCode": "參考編號：",
        status: "狀態：",
        description: "描述：",
        search: "搜索",
        keyword: "關鍵字",
        keywordLabel: "編號/設備/位置/描述",
        workOrderType: "工單類型",
        workOrderStatus: "工單狀態",
        createdTime: "創建日期",
        actualStartTime: "實際開始時間",
        actualEndTime: "實際結束時間",

    },

    PlanCraftCostPage: {
        title: "計劃員工成本",
        craft: "工種",
        skill: "技能",
        skillRank: "技能等級",
        manHour: "工時",
        num: "人數"
    },

    CraftCostPage: {
        title: "員工成本",
        craft: "工種",
        employee: "員工",
        startTime: "開始時間",
        endTime: "結束時間",
        manHour: "實際工時",
        manHourMustRequired: "實際工時(至少一項）",
        overtimeFlag: "是否超時工作",
        workOrder: '工單',
        skill: "技能",
        skillRank: "技能等級",
    },
    PlanAssignPage: {
        title: "分派",
        craft: "工種",
        employee: "員工",
        employeeTime: "時間"
    },
    MaterialCostPage: {
        title: "物料成本",
        material: "物料",
        planNum: "計劃數量",
        num: "實際數量",
        warehouse: "倉庫",
    },
    ToolCostPage: {
        title: "工具成本",
        material: "工具",
        planNum: "計劃數量",
        num: "實際數量",
        warehouse: "倉庫",
        planManHour: "計劃工時",
        manHour: "實際工時",
    },
    TaskMeasurePage: {
        title: "測量數據",
        measurePoint: "測量點",
        asset: "設備",
        location: "位置",
        measureValue: "測量值",
        requireAssetOrLocation: "設備/位置",
        measureTime: "測量時間",
        measureUnit: "測量單位",
        measureType: "測量類型",
        upperThanMeasuredValue: "測量值超出測量點上限",
        lowerThanMeasuredValue: "測量值低於測量點下限"
    },
    FollowUpPage: {
        title: "跟進情況",
        jobPlan: "工作計劃",
        targetStartTime: "目標開始時間",
        targetEndTime: "目標結束時間",
        predictStartTime: "預計開始時間",
        predictEndTime: "預計結束時間",
        actualStartTime: "實際開始時間",
        actualEndTime: "實際結束時間",
        haltMinute: "停機時長",
        remark: "報告",
    },

    CraftCostListPage: {
        title: "員工成本",
        employee: "員工",
        craft: "工種",
        skill: "技能",
        skillRank: "技能等級",
        startTime: "開始時間",
        endTime: "結束時間",
        manHour: "實際工時",
        manHour2: "工時",
        manHourType: "工時類型",
        overtimeFlag: "是否超時工作",
        action: "操作",
        yesFlag: "是",
        noFlag: "否",
        confirmDelete: "確定刪除?",
        deleteSuccess: "刪除成功",

        workOrder: '工單',
        workOrderDescription: '工單描述',
        manHourCount: '正常工時：',
        overtimeManHourCount: '超時工時：',
    },

    WorkOrderDetailPage: {
        title: "工單詳情",
        confirmDelete: "確定刪除?",
        deleteSuccess: "刪除成功",
        changeStatus: "變更狀態",
        changeStatusSuccess: "變更狀態成功",
        basicData: "基礎資料",
        billCode: "編號：",
        referCode: "參考編號：",
        submitter: "報告人：",
        priority: "優先級：",
        asset: "設備：",
        assetLocation: "設備位置：",
        location: "位置：",
        workOrderStatus: "工單狀態：",
        workOrderstatus2: "工單狀態",
        workOrderType: "工單類型：",
        description: "描述：",
        followUp: "跟進情況",
        jobPlan: "工作計劃：",
        targetStartTime: "目標開始：",
        targetEndTime: "目標結束：",
        predictStartTime: "預計開始：",
        predictEndTime: "預計結束：",
        actualStartTime: "實際開始：",
        actualEndTime: "實際結束：",
        haltMinute: "停機時長：",
        remark: "報告：",
        remark2: "備註",
        task: "任務",
        taskCode: "編號",
        taskName: "描述",
        taskFinishFlag: "是否完成",
        planAssign: "分派",
        craftCost: "員工成本",
        planCraftCost: "計劃員工成本",
        employee: "員工",
        craft: "工種",
        employeeTime: "時間",
        skill: "技能",
        skillRank: "技能等級",
        manHour: "實際工時",
        manHour2: "工時",

        materialCost: "物料成本",
        toolCost: "工具成本",
        material: "物料",
        material2: "工具",
        planNum: "計劃數量",
        num: "實際數量",
        numOfPeople: "人數",
        planManHour: "計劃工時",
        warehouse: "倉庫",
        taskMeasure: "測量數據",
        asset1: "設備",
        location1: "位置",
        measureValue: "測量值",
        measurePoint: "測量點",
        measureTime: "測量時間",
        measureUnit: "測量單位",
        measureType: "測量類型",

        hazard: "危害及預防措施",
        hazardType: "危害類型",
        hazardRemedy: "預防措施",
        action: "操作",

        faultRelation: "故障關係",
        faultType: "故障類型：",
        faultIssue: "故障問題：",
        faultCause: "故障原因：",
        faultRemedy: "故障補救措施：",

        billDate: "提出時間：",
        createdTime: "創建時間：",

        statusLog: "狀態變更記錄",
        beforeStatus: "變更前狀態",
        afterStatus: "變更後狀態",
        statusLogRemark: "備註",
        statusLogCreatedBy: "變更人",
        statusLogCreatedTime: "變更時間",

    },

    MaterialRequestFormArrivalListPage: {
        title: "到貨",
        confirmArrival: "確定已到貨了?",
        arrivalSuccess: "到貨操作成功",
        project: "項目",
        material: "物料",
        workOrder: "工單",
        num: "申請數量",
        waitNum: "待發貨數量",
        arrivalNum: "到貨數量",
        inputPlaceholder: "請填寫",
        confirmArrival2: "確認到貨",
        search: "搜索",
        applyBillCode: "申請單",
        materialCode: "物料",
        workOrderBillCode: "工單"

    },

    MaterialRequestFormArrivalPage: {
        title: "到貨明細",
        project: "項目",
        confirmRecive: "確認接收?",
        confirmRecive2: "確認接收",
        receiveSuccess: "接收操作成功",

        search: "搜索",
        applyBillCode: "申請單",
        materialCode: "物料",
        workOrderBillCode: "工單",

        inputPlaceholder: "請填寫",
        back: "返回",

        material: "物料",
        materialApply: "申請單",
        createdBy: "提交人",
        arrivalNum: "到貨數量",
        receiveNum: "接收數量",
        receiveDate: "接收日期",
        receiverBy: "接收人",
        note: "備註",
        temporarily: "暫不處理",

        waiting: "待收貨",
        waiting2: "到貨待領",
        completed: "已收貨",
        completed2: "已領貨"
    },

    NoticeListPage: {
        title: "公告欄",
        billCode: "編號：",
        noticeTitle: "標題：",
        content: "內容：",
        noticeType: "類型：",
        sendTime: "發送時間：",
        noticeType2: "類型",
        search: "搜索"
    },

    NoticeDetailPage: {
        title: "公告詳情",
        basicData: "基礎資料",
        billCode: "編號：",
        noticeTitle: "標題：",
        status: "狀態：",
        noticeType: "類型：",
        sendTime: "發送：",
        billDate: "創建：",
    },

    NOTICE_STATUS: {
        E: "編輯中",
        P: "已發出",
        C: "已撤回",
    },

    SuggestionPage: {
        title: "意見",
        organization: "公司",
        project: "項目",
        suggestionType: "類型",
        content: "內容",
        submitWithError: "意見保存成功，不過保存文件出現了一些問題！",
    },

    SuggestionListPage: {
        title: "意見箱",
        organization: "公司：",
        project: "項目：",
        submited: "已提交",
        replied: "已回覆",
        recalled: "已撤回",

        billCode: "編號：",
        suggestionType: "類型：",
        content: "內容：",
        recall: "撤回",
        edit: "編輯",
        confirmRecall: "確定撤回?",
        recallSuccess: "撤回成功",
    },

    SuggestionDetailPage: {
        title: "意見詳情",
        basicData: "基礎資料",
        billCode: "編號：",
        status: "狀態：",
        content: "內容：",
        organization: "公司：",
        project: "項目：",
        suggestionType: "意見類型：",
        billDate: "提出日期：",
        createdTime: "創建日期：",
        reply: "回覆",
        repliedBy: "回覆人：",
        repliedcontent: "內容：",
        repliedTime: "時間：",
    },

    FaultRelationPage: {
        title: "故障關係",
        faultType: "故障類型",
        faultIssue: "故障問題",
        faultCause: "故障原因",
        faultRemedy: "故障補救措施",
    },

    AccountPage: {
        title: "我的",
        username: "用戶名：",
        employeeNo: "員工編號：",
        clientNo: "客戶編號：",
        preferredLanguage: "喜好語言：",
        language: "切換語言",
        version: "版本：",
        logout: "登出"
    },

    ApprovalPage: {
        title: "審批調班申請",
        attdOrg: "考勤群組：",
        employeeName: "員工名稱：",
        reason: "調更原因：",
        startDate: "開始日期：",
        endDate: "結束日期：",
        originalOfficeHour: "原更期：",
        newOfficeHour: "更期：",
        status: "狀態：",
        confirmPass: "確認通過？",
        confirmNoPass: "確認不通過？",
        confirmRevoke: "確認撤銷？",
        agree: "通過",
        disagree: "不通過",
        revoke: "撤銷"
    },

    InboxPage: {
        title: "訊息中心",
        readAllMsg: "將所有消息標為已讀？",
        readNumberMsg: "{0} 條消息標為已讀",
    },
    InboxDetailPage: {
        title: "訊息詳情",
        followUp: "查看詳情",
    },
    SearchPage: {
        title: "搜索"
    },
    AnnualLeave: {
        title: `年假延期使用申請`,
        applicationNo: `申請編號`,
        company: `公司`,
        department: `部門`,
        employee: `員工`,
        holidayType: `休假組別`,
        daysClears: `需清放日數類別`,
        daysNumbers: `需申請延期的日數`,
        holidayPlan: `暫定放假計劃`,
        approvalStatus: `批核狀態`,
        END_OF_MARCH: `3月`,
        END_OF_DECEMBER: `12月`,
        startDate: `開始日期`,
        startPeriod: `開始時段`,
        endDate: `結束日期`,
        endPeriod: `結束時段`,
        days: "天數",
        remark: "備註",
        leaveDays: "請假天數",
        clearDays: "可清天數",
        maxDays: "不能大於可清天數最大值{0}",
        followUp: "審批",
        createdBy: "發起人",
        approvalTime: "審批時間",
        status: "審批狀態",
    },
    Exter: {
        colon: `：`
    }
}

