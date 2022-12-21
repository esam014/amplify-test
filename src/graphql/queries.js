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
      }
      Measurements {
        nextToken
      }
      createdAt
      updatedAt
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
      }
      nextToken
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
      }
      createdAt
      updatedAt
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
      }
      nextToken
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
      }
      createdAt
      updatedAt
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
      }
      nextToken
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
      }
      createdAt
      updatedAt
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
      }
      nextToken
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
      }
      nextToken
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
      }
      WodExercises {
        nextToken
      }
      createdAt
      updatedAt
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
      }
      nextToken
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
      }
      nextToken
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
      }
      createdAt
      updatedAt
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
      }
      nextToken
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
      }
      nextToken
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
      }
      DailyNutritions {
        nextToken
      }
      Measurements {
        nextToken
      }
      Reports {
        nextToken
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
      }
      birthday
      createdAt
      updatedAt
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
        birthday
        createdAt
        updatedAt
        clientNutritionPlanId
      }
      nextToken
    }
  }
`;
export const getTrainer = /* GraphQL */ `
  query GetTrainer($id: ID!) {
    getTrainer(id: $id) {
      id
      Clients {
        nextToken
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
      }
      createdAt
      updatedAt
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
        trainerPlatformConfigId
      }
      nextToken
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
        birthday
        createdAt
        updatedAt
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
        userTrainerId
        userClientId
      }
      nextToken
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
        owner
      }
      nextToken
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
      }
      createdAt
      updatedAt
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
      }
      nextToken
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
      }
      createdAt
      updatedAt
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
      }
      nextToken
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
      }
      createdAt
      updatedAt
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
      }
      nextToken
    }
  }
`;
