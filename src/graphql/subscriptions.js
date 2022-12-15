/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateReport = /* GraphQL */ `
  subscription OnCreateReport($filter: ModelSubscriptionReportFilterInput) {
    onCreateReport(filter: $filter) {
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
export const onUpdateReport = /* GraphQL */ `
  subscription OnUpdateReport($filter: ModelSubscriptionReportFilterInput) {
    onUpdateReport(filter: $filter) {
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
export const onDeleteReport = /* GraphQL */ `
  subscription OnDeleteReport($filter: ModelSubscriptionReportFilterInput) {
    onDeleteReport(filter: $filter) {
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
export const onCreateMeasurement = /* GraphQL */ `
  subscription OnCreateMeasurement(
    $filter: ModelSubscriptionMeasurementFilterInput
  ) {
    onCreateMeasurement(filter: $filter) {
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
export const onUpdateMeasurement = /* GraphQL */ `
  subscription OnUpdateMeasurement(
    $filter: ModelSubscriptionMeasurementFilterInput
  ) {
    onUpdateMeasurement(filter: $filter) {
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
export const onDeleteMeasurement = /* GraphQL */ `
  subscription OnDeleteMeasurement(
    $filter: ModelSubscriptionMeasurementFilterInput
  ) {
    onDeleteMeasurement(filter: $filter) {
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
export const onCreateDailyNutrition = /* GraphQL */ `
  subscription OnCreateDailyNutrition(
    $filter: ModelSubscriptionDailyNutritionFilterInput
  ) {
    onCreateDailyNutrition(filter: $filter) {
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
export const onUpdateDailyNutrition = /* GraphQL */ `
  subscription OnUpdateDailyNutrition(
    $filter: ModelSubscriptionDailyNutritionFilterInput
  ) {
    onUpdateDailyNutrition(filter: $filter) {
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
export const onDeleteDailyNutrition = /* GraphQL */ `
  subscription OnDeleteDailyNutrition(
    $filter: ModelSubscriptionDailyNutritionFilterInput
  ) {
    onDeleteDailyNutrition(filter: $filter) {
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
export const onCreateExercises = /* GraphQL */ `
  subscription OnCreateExercises(
    $filter: ModelSubscriptionExercisesFilterInput
  ) {
    onCreateExercises(filter: $filter) {
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
export const onUpdateExercises = /* GraphQL */ `
  subscription OnUpdateExercises(
    $filter: ModelSubscriptionExercisesFilterInput
  ) {
    onUpdateExercises(filter: $filter) {
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
export const onDeleteExercises = /* GraphQL */ `
  subscription OnDeleteExercises(
    $filter: ModelSubscriptionExercisesFilterInput
  ) {
    onDeleteExercises(filter: $filter) {
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
export const onCreateWodExercises = /* GraphQL */ `
  subscription OnCreateWodExercises(
    $filter: ModelSubscriptionWodExercisesFilterInput
  ) {
    onCreateWodExercises(filter: $filter) {
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
export const onUpdateWodExercises = /* GraphQL */ `
  subscription OnUpdateWodExercises(
    $filter: ModelSubscriptionWodExercisesFilterInput
  ) {
    onUpdateWodExercises(filter: $filter) {
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
export const onDeleteWodExercises = /* GraphQL */ `
  subscription OnDeleteWodExercises(
    $filter: ModelSubscriptionWodExercisesFilterInput
  ) {
    onDeleteWodExercises(filter: $filter) {
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
export const onCreateWorkout = /* GraphQL */ `
  subscription OnCreateWorkout($filter: ModelSubscriptionWorkoutFilterInput) {
    onCreateWorkout(filter: $filter) {
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
export const onUpdateWorkout = /* GraphQL */ `
  subscription OnUpdateWorkout($filter: ModelSubscriptionWorkoutFilterInput) {
    onUpdateWorkout(filter: $filter) {
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
export const onDeleteWorkout = /* GraphQL */ `
  subscription OnDeleteWorkout($filter: ModelSubscriptionWorkoutFilterInput) {
    onDeleteWorkout(filter: $filter) {
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
export const onCreateSchedule = /* GraphQL */ `
  subscription OnCreateSchedule($filter: ModelSubscriptionScheduleFilterInput) {
    onCreateSchedule(filter: $filter) {
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
export const onUpdateSchedule = /* GraphQL */ `
  subscription OnUpdateSchedule($filter: ModelSubscriptionScheduleFilterInput) {
    onUpdateSchedule(filter: $filter) {
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
export const onDeleteSchedule = /* GraphQL */ `
  subscription OnDeleteSchedule($filter: ModelSubscriptionScheduleFilterInput) {
    onDeleteSchedule(filter: $filter) {
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
export const onCreateGoal = /* GraphQL */ `
  subscription OnCreateGoal($filter: ModelSubscriptionGoalFilterInput) {
    onCreateGoal(filter: $filter) {
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
export const onUpdateGoal = /* GraphQL */ `
  subscription OnUpdateGoal($filter: ModelSubscriptionGoalFilterInput) {
    onUpdateGoal(filter: $filter) {
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
export const onDeleteGoal = /* GraphQL */ `
  subscription OnDeleteGoal($filter: ModelSubscriptionGoalFilterInput) {
    onDeleteGoal(filter: $filter) {
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
export const onCreateNutritionPlan = /* GraphQL */ `
  subscription OnCreateNutritionPlan(
    $filter: ModelSubscriptionNutritionPlanFilterInput
  ) {
    onCreateNutritionPlan(filter: $filter) {
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
export const onUpdateNutritionPlan = /* GraphQL */ `
  subscription OnUpdateNutritionPlan(
    $filter: ModelSubscriptionNutritionPlanFilterInput
  ) {
    onUpdateNutritionPlan(filter: $filter) {
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
export const onDeleteNutritionPlan = /* GraphQL */ `
  subscription OnDeleteNutritionPlan(
    $filter: ModelSubscriptionNutritionPlanFilterInput
  ) {
    onDeleteNutritionPlan(filter: $filter) {
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
export const onCreateClient = /* GraphQL */ `
  subscription OnCreateClient($filter: ModelSubscriptionClientFilterInput) {
    onCreateClient(filter: $filter) {
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
      createdAt
      updatedAt
      clientNutritionPlanId
    }
  }
`;
export const onUpdateClient = /* GraphQL */ `
  subscription OnUpdateClient($filter: ModelSubscriptionClientFilterInput) {
    onUpdateClient(filter: $filter) {
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
      createdAt
      updatedAt
      clientNutritionPlanId
    }
  }
`;
export const onDeleteClient = /* GraphQL */ `
  subscription OnDeleteClient($filter: ModelSubscriptionClientFilterInput) {
    onDeleteClient(filter: $filter) {
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
      createdAt
      updatedAt
      clientNutritionPlanId
    }
  }
`;
export const onCreateTrainer = /* GraphQL */ `
  subscription OnCreateTrainer($filter: ModelSubscriptionTrainerFilterInput) {
    onCreateTrainer(filter: $filter) {
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
export const onUpdateTrainer = /* GraphQL */ `
  subscription OnUpdateTrainer($filter: ModelSubscriptionTrainerFilterInput) {
    onUpdateTrainer(filter: $filter) {
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
export const onDeleteTrainer = /* GraphQL */ `
  subscription OnDeleteTrainer($filter: ModelSubscriptionTrainerFilterInput) {
    onDeleteTrainer(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo(
    $filter: ModelSubscriptionTodoFilterInput
    $owner: String
  ) {
    onCreateTodo(filter: $filter, owner: $owner) {
      id
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo(
    $filter: ModelSubscriptionTodoFilterInput
    $owner: String
  ) {
    onUpdateTodo(filter: $filter, owner: $owner) {
      id
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo(
    $filter: ModelSubscriptionTodoFilterInput
    $owner: String
  ) {
    onDeleteTodo(filter: $filter, owner: $owner) {
      id
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreatePlatformConfig = /* GraphQL */ `
  subscription OnCreatePlatformConfig(
    $filter: ModelSubscriptionPlatformConfigFilterInput
  ) {
    onCreatePlatformConfig(filter: $filter) {
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
export const onUpdatePlatformConfig = /* GraphQL */ `
  subscription OnUpdatePlatformConfig(
    $filter: ModelSubscriptionPlatformConfigFilterInput
  ) {
    onUpdatePlatformConfig(filter: $filter) {
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
export const onDeletePlatformConfig = /* GraphQL */ `
  subscription OnDeletePlatformConfig(
    $filter: ModelSubscriptionPlatformConfigFilterInput
  ) {
    onDeletePlatformConfig(filter: $filter) {
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
export const onCreateReportDailyNutrition = /* GraphQL */ `
  subscription OnCreateReportDailyNutrition(
    $filter: ModelSubscriptionReportDailyNutritionFilterInput
  ) {
    onCreateReportDailyNutrition(filter: $filter) {
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
export const onUpdateReportDailyNutrition = /* GraphQL */ `
  subscription OnUpdateReportDailyNutrition(
    $filter: ModelSubscriptionReportDailyNutritionFilterInput
  ) {
    onUpdateReportDailyNutrition(filter: $filter) {
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
export const onDeleteReportDailyNutrition = /* GraphQL */ `
  subscription OnDeleteReportDailyNutrition(
    $filter: ModelSubscriptionReportDailyNutritionFilterInput
  ) {
    onDeleteReportDailyNutrition(filter: $filter) {
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
export const onCreateReportMeasurement = /* GraphQL */ `
  subscription OnCreateReportMeasurement(
    $filter: ModelSubscriptionReportMeasurementFilterInput
  ) {
    onCreateReportMeasurement(filter: $filter) {
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
export const onUpdateReportMeasurement = /* GraphQL */ `
  subscription OnUpdateReportMeasurement(
    $filter: ModelSubscriptionReportMeasurementFilterInput
  ) {
    onUpdateReportMeasurement(filter: $filter) {
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
export const onDeleteReportMeasurement = /* GraphQL */ `
  subscription OnDeleteReportMeasurement(
    $filter: ModelSubscriptionReportMeasurementFilterInput
  ) {
    onDeleteReportMeasurement(filter: $filter) {
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
