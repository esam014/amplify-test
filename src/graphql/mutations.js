/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createReport = /* GraphQL */ `
  mutation CreateReport(
    $input: CreateReportInput!
    $condition: ModelReportConditionInput
  ) {
    createReport(input: $input, condition: $condition) {
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
export const updateReport = /* GraphQL */ `
  mutation UpdateReport(
    $input: UpdateReportInput!
    $condition: ModelReportConditionInput
  ) {
    updateReport(input: $input, condition: $condition) {
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
export const deleteReport = /* GraphQL */ `
  mutation DeleteReport(
    $input: DeleteReportInput!
    $condition: ModelReportConditionInput
  ) {
    deleteReport(input: $input, condition: $condition) {
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
export const createMeasurement = /* GraphQL */ `
  mutation CreateMeasurement(
    $input: CreateMeasurementInput!
    $condition: ModelMeasurementConditionInput
  ) {
    createMeasurement(input: $input, condition: $condition) {
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
export const updateMeasurement = /* GraphQL */ `
  mutation UpdateMeasurement(
    $input: UpdateMeasurementInput!
    $condition: ModelMeasurementConditionInput
  ) {
    updateMeasurement(input: $input, condition: $condition) {
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
export const deleteMeasurement = /* GraphQL */ `
  mutation DeleteMeasurement(
    $input: DeleteMeasurementInput!
    $condition: ModelMeasurementConditionInput
  ) {
    deleteMeasurement(input: $input, condition: $condition) {
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
export const createDailyNutrition = /* GraphQL */ `
  mutation CreateDailyNutrition(
    $input: CreateDailyNutritionInput!
    $condition: ModelDailyNutritionConditionInput
  ) {
    createDailyNutrition(input: $input, condition: $condition) {
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
export const updateDailyNutrition = /* GraphQL */ `
  mutation UpdateDailyNutrition(
    $input: UpdateDailyNutritionInput!
    $condition: ModelDailyNutritionConditionInput
  ) {
    updateDailyNutrition(input: $input, condition: $condition) {
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
export const deleteDailyNutrition = /* GraphQL */ `
  mutation DeleteDailyNutrition(
    $input: DeleteDailyNutritionInput!
    $condition: ModelDailyNutritionConditionInput
  ) {
    deleteDailyNutrition(input: $input, condition: $condition) {
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
export const createExercises = /* GraphQL */ `
  mutation CreateExercises(
    $input: CreateExercisesInput!
    $condition: ModelExercisesConditionInput
  ) {
    createExercises(input: $input, condition: $condition) {
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
export const updateExercises = /* GraphQL */ `
  mutation UpdateExercises(
    $input: UpdateExercisesInput!
    $condition: ModelExercisesConditionInput
  ) {
    updateExercises(input: $input, condition: $condition) {
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
export const deleteExercises = /* GraphQL */ `
  mutation DeleteExercises(
    $input: DeleteExercisesInput!
    $condition: ModelExercisesConditionInput
  ) {
    deleteExercises(input: $input, condition: $condition) {
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
export const createWodExercises = /* GraphQL */ `
  mutation CreateWodExercises(
    $input: CreateWodExercisesInput!
    $condition: ModelWodExercisesConditionInput
  ) {
    createWodExercises(input: $input, condition: $condition) {
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
export const updateWodExercises = /* GraphQL */ `
  mutation UpdateWodExercises(
    $input: UpdateWodExercisesInput!
    $condition: ModelWodExercisesConditionInput
  ) {
    updateWodExercises(input: $input, condition: $condition) {
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
export const deleteWodExercises = /* GraphQL */ `
  mutation DeleteWodExercises(
    $input: DeleteWodExercisesInput!
    $condition: ModelWodExercisesConditionInput
  ) {
    deleteWodExercises(input: $input, condition: $condition) {
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
export const createWorkout = /* GraphQL */ `
  mutation CreateWorkout(
    $input: CreateWorkoutInput!
    $condition: ModelWorkoutConditionInput
  ) {
    createWorkout(input: $input, condition: $condition) {
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
export const updateWorkout = /* GraphQL */ `
  mutation UpdateWorkout(
    $input: UpdateWorkoutInput!
    $condition: ModelWorkoutConditionInput
  ) {
    updateWorkout(input: $input, condition: $condition) {
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
export const deleteWorkout = /* GraphQL */ `
  mutation DeleteWorkout(
    $input: DeleteWorkoutInput!
    $condition: ModelWorkoutConditionInput
  ) {
    deleteWorkout(input: $input, condition: $condition) {
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
export const createSchedule = /* GraphQL */ `
  mutation CreateSchedule(
    $input: CreateScheduleInput!
    $condition: ModelScheduleConditionInput
  ) {
    createSchedule(input: $input, condition: $condition) {
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
export const updateSchedule = /* GraphQL */ `
  mutation UpdateSchedule(
    $input: UpdateScheduleInput!
    $condition: ModelScheduleConditionInput
  ) {
    updateSchedule(input: $input, condition: $condition) {
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
export const deleteSchedule = /* GraphQL */ `
  mutation DeleteSchedule(
    $input: DeleteScheduleInput!
    $condition: ModelScheduleConditionInput
  ) {
    deleteSchedule(input: $input, condition: $condition) {
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
export const createGoal = /* GraphQL */ `
  mutation CreateGoal(
    $input: CreateGoalInput!
    $condition: ModelGoalConditionInput
  ) {
    createGoal(input: $input, condition: $condition) {
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
export const updateGoal = /* GraphQL */ `
  mutation UpdateGoal(
    $input: UpdateGoalInput!
    $condition: ModelGoalConditionInput
  ) {
    updateGoal(input: $input, condition: $condition) {
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
export const deleteGoal = /* GraphQL */ `
  mutation DeleteGoal(
    $input: DeleteGoalInput!
    $condition: ModelGoalConditionInput
  ) {
    deleteGoal(input: $input, condition: $condition) {
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
export const createNutritionPlan = /* GraphQL */ `
  mutation CreateNutritionPlan(
    $input: CreateNutritionPlanInput!
    $condition: ModelNutritionPlanConditionInput
  ) {
    createNutritionPlan(input: $input, condition: $condition) {
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
export const updateNutritionPlan = /* GraphQL */ `
  mutation UpdateNutritionPlan(
    $input: UpdateNutritionPlanInput!
    $condition: ModelNutritionPlanConditionInput
  ) {
    updateNutritionPlan(input: $input, condition: $condition) {
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
export const deleteNutritionPlan = /* GraphQL */ `
  mutation DeleteNutritionPlan(
    $input: DeleteNutritionPlanInput!
    $condition: ModelNutritionPlanConditionInput
  ) {
    deleteNutritionPlan(input: $input, condition: $condition) {
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
export const createClient = /* GraphQL */ `
  mutation CreateClient(
    $input: CreateClientInput!
    $condition: ModelClientConditionInput
  ) {
    createClient(input: $input, condition: $condition) {
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
export const updateClient = /* GraphQL */ `
  mutation UpdateClient(
    $input: UpdateClientInput!
    $condition: ModelClientConditionInput
  ) {
    updateClient(input: $input, condition: $condition) {
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
export const deleteClient = /* GraphQL */ `
  mutation DeleteClient(
    $input: DeleteClientInput!
    $condition: ModelClientConditionInput
  ) {
    deleteClient(input: $input, condition: $condition) {
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
export const createTrainer = /* GraphQL */ `
  mutation CreateTrainer(
    $input: CreateTrainerInput!
    $condition: ModelTrainerConditionInput
  ) {
    createTrainer(input: $input, condition: $condition) {
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
export const updateTrainer = /* GraphQL */ `
  mutation UpdateTrainer(
    $input: UpdateTrainerInput!
    $condition: ModelTrainerConditionInput
  ) {
    updateTrainer(input: $input, condition: $condition) {
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
export const deleteTrainer = /* GraphQL */ `
  mutation DeleteTrainer(
    $input: DeleteTrainerInput!
    $condition: ModelTrainerConditionInput
  ) {
    deleteTrainer(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createPlatformConfig = /* GraphQL */ `
  mutation CreatePlatformConfig(
    $input: CreatePlatformConfigInput!
    $condition: ModelPlatformConfigConditionInput
  ) {
    createPlatformConfig(input: $input, condition: $condition) {
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
export const updatePlatformConfig = /* GraphQL */ `
  mutation UpdatePlatformConfig(
    $input: UpdatePlatformConfigInput!
    $condition: ModelPlatformConfigConditionInput
  ) {
    updatePlatformConfig(input: $input, condition: $condition) {
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
export const deletePlatformConfig = /* GraphQL */ `
  mutation DeletePlatformConfig(
    $input: DeletePlatformConfigInput!
    $condition: ModelPlatformConfigConditionInput
  ) {
    deletePlatformConfig(input: $input, condition: $condition) {
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
export const createReportDailyNutrition = /* GraphQL */ `
  mutation CreateReportDailyNutrition(
    $input: CreateReportDailyNutritionInput!
    $condition: ModelReportDailyNutritionConditionInput
  ) {
    createReportDailyNutrition(input: $input, condition: $condition) {
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
export const updateReportDailyNutrition = /* GraphQL */ `
  mutation UpdateReportDailyNutrition(
    $input: UpdateReportDailyNutritionInput!
    $condition: ModelReportDailyNutritionConditionInput
  ) {
    updateReportDailyNutrition(input: $input, condition: $condition) {
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
export const deleteReportDailyNutrition = /* GraphQL */ `
  mutation DeleteReportDailyNutrition(
    $input: DeleteReportDailyNutritionInput!
    $condition: ModelReportDailyNutritionConditionInput
  ) {
    deleteReportDailyNutrition(input: $input, condition: $condition) {
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
export const createReportMeasurement = /* GraphQL */ `
  mutation CreateReportMeasurement(
    $input: CreateReportMeasurementInput!
    $condition: ModelReportMeasurementConditionInput
  ) {
    createReportMeasurement(input: $input, condition: $condition) {
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
export const updateReportMeasurement = /* GraphQL */ `
  mutation UpdateReportMeasurement(
    $input: UpdateReportMeasurementInput!
    $condition: ModelReportMeasurementConditionInput
  ) {
    updateReportMeasurement(input: $input, condition: $condition) {
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
export const deleteReportMeasurement = /* GraphQL */ `
  mutation DeleteReportMeasurement(
    $input: DeleteReportMeasurementInput!
    $condition: ModelReportMeasurementConditionInput
  ) {
    deleteReportMeasurement(input: $input, condition: $condition) {
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
