/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getReport = /* GraphQL */ `
  query GetReport($id: ID!) {
    getReport(id: $id) {
      id
      start_date
      end_date
      clientID
      DailyNutritions {
        nextToken
        startedAt
      }
      Measurements {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listReports = /* GraphQL */ `
  query ListReports(
    $filter: ModelReportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReports(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        start_date
        end_date
        clientID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncReports = /* GraphQL */ `
  query SyncReports(
    $filter: ModelReportFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncReports(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        start_date
        end_date
        clientID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getMeasurement = /* GraphQL */ `
  query GetMeasurement($id: ID!) {
    getMeasurement(id: $id) {
      id
      date
      right_arm
      waist
      hips
      right_thigh
      chest
      weight
      picture
      clientID
      reports {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listMeasurements = /* GraphQL */ `
  query ListMeasurements(
    $filter: ModelMeasurementFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMeasurements(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        date
        right_arm
        waist
        hips
        right_thigh
        chest
        weight
        picture
        clientID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncMeasurements = /* GraphQL */ `
  query SyncMeasurements(
    $filter: ModelMeasurementFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMeasurements(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        date
        right_arm
        waist
        hips
        right_thigh
        chest
        weight
        picture
        clientID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getDailyNutrition = /* GraphQL */ `
  query GetDailyNutrition($id: ID!) {
    getDailyNutrition(id: $id) {
      id
      date
      calories
      proteins
      carbs
      fats
      clientID
      reports {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listDailyNutritions = /* GraphQL */ `
  query ListDailyNutritions(
    $filter: ModelDailyNutritionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDailyNutritions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        date
        calories
        proteins
        carbs
        fats
        clientID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncDailyNutritions = /* GraphQL */ `
  query SyncDailyNutritions(
    $filter: ModelDailyNutritionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDailyNutritions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        date
        calories
        proteins
        carbs
        fats
        clientID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getExercises = /* GraphQL */ `
  query GetExercises($id: ID!) {
    getExercises(id: $id) {
      id
      name
      video
      WodExercises {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listExercises = /* GraphQL */ `
  query ListExercises(
    $filter: ModelExercisesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExercises(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        video
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncExercises = /* GraphQL */ `
  query SyncExercises(
    $filter: ModelExercisesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncExercises(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        video
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getWodExercises = /* GraphQL */ `
  query GetWodExercises($id: ID!) {
    getWodExercises(id: $id) {
      id
      resistance
      reps
      sets
      rest
      workoutID
      exercisesID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listWodExercises = /* GraphQL */ `
  query ListWodExercises(
    $filter: ModelWodExercisesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWodExercises(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        resistance
        reps
        sets
        rest
        workoutID
        exercisesID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncWodExercises = /* GraphQL */ `
  query SyncWodExercises(
    $filter: ModelWodExercisesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncWodExercises(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        resistance
        reps
        sets
        rest
        workoutID
        exercisesID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getWorkout = /* GraphQL */ `
  query GetWorkout($id: ID!) {
    getWorkout(id: $id) {
      id
      warm_up
      cool_down
      muscle_group
      Schedules {
        nextToken
        startedAt
      }
      WodExercises {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listWorkouts = /* GraphQL */ `
  query ListWorkouts(
    $filter: ModelWorkoutFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWorkouts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        warm_up
        cool_down
        muscle_group
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncWorkouts = /* GraphQL */ `
  query SyncWorkouts(
    $filter: ModelWorkoutFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncWorkouts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        warm_up
        cool_down
        muscle_group
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getSchedule = /* GraphQL */ `
  query GetSchedule($id: ID!) {
    getSchedule(id: $id) {
      id
      date
      completed
      clientID
      workoutID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listSchedules = /* GraphQL */ `
  query ListSchedules(
    $filter: ModelScheduleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSchedules(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        date
        completed
        clientID
        workoutID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSchedules = /* GraphQL */ `
  query SyncSchedules(
    $filter: ModelScheduleFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSchedules(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        date
        completed
        clientID
        workoutID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getGoal = /* GraphQL */ `
  query GetGoal($id: ID!) {
    getGoal(id: $id) {
      id
      short_term_goal
      long_term_goal
      Clients {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listGoals = /* GraphQL */ `
  query ListGoals(
    $filter: ModelGoalFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGoals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        short_term_goal
        long_term_goal
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncGoals = /* GraphQL */ `
  query SyncGoals(
    $filter: ModelGoalFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncGoals(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        short_term_goal
        long_term_goal
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getNutritionPlan = /* GraphQL */ `
  query GetNutritionPlan($id: ID!) {
    getNutritionPlan(id: $id) {
      id
      calorie_target
      protein_target
      carb_target
      fat_target
      end_date
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listNutritionPlans = /* GraphQL */ `
  query ListNutritionPlans(
    $filter: ModelNutritionPlanFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNutritionPlans(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        calorie_target
        protein_target
        carb_target
        fat_target
        end_date
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncNutritionPlans = /* GraphQL */ `
  query SyncNutritionPlans(
    $filter: ModelNutritionPlanFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncNutritionPlans(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        calorie_target
        protein_target
        carb_target
        fat_target
        end_date
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getClient = /* GraphQL */ `
  query GetClient($id: ID!) {
    getClient(id: $id) {
      id
      start_date
      account_expiry_date
      onboarded
      assessed
      age
      gender
      height
      training_frequency
      dietary_restrictions
      equipment_list
      other_physical_activities
      service_tier
      trainerID
      goalID
      platformconfigID
      Schedules {
        nextToken
        startedAt
      }
      DailyNutritions {
        nextToken
        startedAt
      }
      Measurements {
        nextToken
        startedAt
      }
      Reports {
        nextToken
        startedAt
      }
      NutritionPlan {
        id
        calorie_target
        protein_target
        carb_target
        fat_target
        end_date
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      clientNutritionPlanId
    }
  }
`;
export const listClients = /* GraphQL */ `
  query ListClients(
    $filter: ModelClientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        start_date
        account_expiry_date
        onboarded
        assessed
        age
        gender
        height
        training_frequency
        dietary_restrictions
        equipment_list
        other_physical_activities
        service_tier
        trainerID
        goalID
        platformconfigID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        clientNutritionPlanId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncClients = /* GraphQL */ `
  query SyncClients(
    $filter: ModelClientFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncClients(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        start_date
        account_expiry_date
        onboarded
        assessed
        age
        gender
        height
        training_frequency
        dietary_restrictions
        equipment_list
        other_physical_activities
        service_tier
        trainerID
        goalID
        platformconfigID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        clientNutritionPlanId
      }
      nextToken
      startedAt
    }
  }
`;
export const getTrainer = /* GraphQL */ `
  query GetTrainer($id: ID!) {
    getTrainer(id: $id) {
      id
      Clients {
        nextToken
        startedAt
      }
      PlatformConfig {
        id
        logo_file
        favicon_file
        primary_color
        secondary_color
        custom_url
        personal_web_enabled
        platform_nutrition_enabled
        platform_trainer_enabled
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      trainerPlatformConfigId
    }
  }
`;
export const listTrainers = /* GraphQL */ `
  query ListTrainers(
    $filter: ModelTrainerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTrainers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        trainerPlatformConfigId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTrainers = /* GraphQL */ `
  query SyncTrainers(
    $filter: ModelTrainerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTrainers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        trainerPlatformConfigId
      }
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      first_name
      last_name
      role
      email
      Trainer {
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        trainerPlatformConfigId
      }
      Client {
        id
        start_date
        account_expiry_date
        onboarded
        assessed
        age
        gender
        height
        training_frequency
        dietary_restrictions
        equipment_list
        other_physical_activities
        service_tier
        trainerID
        goalID
        platformconfigID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        clientNutritionPlanId
      }
      sub
      lifecycle
      phone
      address
      city
      usstate
      zip
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userTrainerId
      userClientId
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        first_name
        last_name
        role
        email
        sub
        lifecycle
        phone
        address
        city
        usstate
        zip
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userTrainerId
        userClientId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        username
        first_name
        last_name
        role
        email
        sub
        lifecycle
        phone
        address
        city
        usstate
        zip
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userTrainerId
        userClientId
      }
      nextToken
      startedAt
    }
  }
`;
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTodos = /* GraphQL */ `
  query SyncTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTodos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getPlatformConfig = /* GraphQL */ `
  query GetPlatformConfig($id: ID!) {
    getPlatformConfig(id: $id) {
      id
      logo_file
      favicon_file
      primary_color
      secondary_color
      custom_url
      personal_web_enabled
      platform_nutrition_enabled
      platform_trainer_enabled
      Clients {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listPlatformConfigs = /* GraphQL */ `
  query ListPlatformConfigs(
    $filter: ModelPlatformConfigFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlatformConfigs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        logo_file
        favicon_file
        primary_color
        secondary_color
        custom_url
        personal_web_enabled
        platform_nutrition_enabled
        platform_trainer_enabled
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPlatformConfigs = /* GraphQL */ `
  query SyncPlatformConfigs(
    $filter: ModelPlatformConfigFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPlatformConfigs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        logo_file
        favicon_file
        primary_color
        secondary_color
        custom_url
        personal_web_enabled
        platform_nutrition_enabled
        platform_trainer_enabled
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getReportDailyNutrition = /* GraphQL */ `
  query GetReportDailyNutrition($id: ID!) {
    getReportDailyNutrition(id: $id) {
      id
      reportID
      dailyNutritionID
      report {
        id
        start_date
        end_date
        clientID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      dailyNutrition {
        id
        date
        calories
        proteins
        carbs
        fats
        clientID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listReportDailyNutritions = /* GraphQL */ `
  query ListReportDailyNutritions(
    $filter: ModelReportDailyNutritionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReportDailyNutritions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        reportID
        dailyNutritionID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncReportDailyNutritions = /* GraphQL */ `
  query SyncReportDailyNutritions(
    $filter: ModelReportDailyNutritionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncReportDailyNutritions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        reportID
        dailyNutritionID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getReportMeasurement = /* GraphQL */ `
  query GetReportMeasurement($id: ID!) {
    getReportMeasurement(id: $id) {
      id
      reportID
      measurementID
      report {
        id
        start_date
        end_date
        clientID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      measurement {
        id
        date
        right_arm
        waist
        hips
        right_thigh
        chest
        weight
        picture
        clientID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listReportMeasurements = /* GraphQL */ `
  query ListReportMeasurements(
    $filter: ModelReportMeasurementFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReportMeasurements(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        reportID
        measurementID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncReportMeasurements = /* GraphQL */ `
  query SyncReportMeasurements(
    $filter: ModelReportMeasurementFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncReportMeasurements(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        reportID
        measurementID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
