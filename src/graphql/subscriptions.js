/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateReport = /* GraphQL */ `
  subscription OnCreateReport {
    onCreateReport {
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
export const onUpdateReport = /* GraphQL */ `
  subscription OnUpdateReport {
    onUpdateReport {
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
export const onDeleteReport = /* GraphQL */ `
  subscription OnDeleteReport {
    onDeleteReport {
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
export const onCreateMeasurement = /* GraphQL */ `
  subscription OnCreateMeasurement {
    onCreateMeasurement {
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
export const onUpdateMeasurement = /* GraphQL */ `
  subscription OnUpdateMeasurement {
    onUpdateMeasurement {
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
export const onDeleteMeasurement = /* GraphQL */ `
  subscription OnDeleteMeasurement {
    onDeleteMeasurement {
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
export const onCreateDailyNutrition = /* GraphQL */ `
  subscription OnCreateDailyNutrition {
    onCreateDailyNutrition {
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
export const onUpdateDailyNutrition = /* GraphQL */ `
  subscription OnUpdateDailyNutrition {
    onUpdateDailyNutrition {
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
export const onDeleteDailyNutrition = /* GraphQL */ `
  subscription OnDeleteDailyNutrition {
    onDeleteDailyNutrition {
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
export const onCreateExercises = /* GraphQL */ `
  subscription OnCreateExercises {
    onCreateExercises {
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
export const onUpdateExercises = /* GraphQL */ `
  subscription OnUpdateExercises {
    onUpdateExercises {
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
export const onDeleteExercises = /* GraphQL */ `
  subscription OnDeleteExercises {
    onDeleteExercises {
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
export const onCreateWodExercises = /* GraphQL */ `
  subscription OnCreateWodExercises {
    onCreateWodExercises {
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
export const onUpdateWodExercises = /* GraphQL */ `
  subscription OnUpdateWodExercises {
    onUpdateWodExercises {
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
export const onDeleteWodExercises = /* GraphQL */ `
  subscription OnDeleteWodExercises {
    onDeleteWodExercises {
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
export const onCreateWorkout = /* GraphQL */ `
  subscription OnCreateWorkout {
    onCreateWorkout {
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
export const onUpdateWorkout = /* GraphQL */ `
  subscription OnUpdateWorkout {
    onUpdateWorkout {
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
export const onDeleteWorkout = /* GraphQL */ `
  subscription OnDeleteWorkout {
    onDeleteWorkout {
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
export const onCreateSchedule = /* GraphQL */ `
  subscription OnCreateSchedule {
    onCreateSchedule {
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
export const onUpdateSchedule = /* GraphQL */ `
  subscription OnUpdateSchedule {
    onUpdateSchedule {
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
export const onDeleteSchedule = /* GraphQL */ `
  subscription OnDeleteSchedule {
    onDeleteSchedule {
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
export const onCreateGoal = /* GraphQL */ `
  subscription OnCreateGoal {
    onCreateGoal {
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
export const onUpdateGoal = /* GraphQL */ `
  subscription OnUpdateGoal {
    onUpdateGoal {
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
export const onDeleteGoal = /* GraphQL */ `
  subscription OnDeleteGoal {
    onDeleteGoal {
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
export const onCreateNutritionPlan = /* GraphQL */ `
  subscription OnCreateNutritionPlan {
    onCreateNutritionPlan {
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
export const onUpdateNutritionPlan = /* GraphQL */ `
  subscription OnUpdateNutritionPlan {
    onUpdateNutritionPlan {
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
export const onDeleteNutritionPlan = /* GraphQL */ `
  subscription OnDeleteNutritionPlan {
    onDeleteNutritionPlan {
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
export const onCreateClient = /* GraphQL */ `
  subscription OnCreateClient {
    onCreateClient {
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
export const onUpdateClient = /* GraphQL */ `
  subscription OnUpdateClient {
    onUpdateClient {
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
export const onDeleteClient = /* GraphQL */ `
  subscription OnDeleteClient {
    onDeleteClient {
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
export const onCreateTrainer = /* GraphQL */ `
  subscription OnCreateTrainer {
    onCreateTrainer {
      id
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
export const onUpdateTrainer = /* GraphQL */ `
  subscription OnUpdateTrainer {
    onUpdateTrainer {
      id
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
export const onDeleteTrainer = /* GraphQL */ `
  subscription OnDeleteTrainer {
    onDeleteTrainer {
      id
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        clientNutritionPlanId
      }
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        clientNutritionPlanId
      }
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        clientNutritionPlanId
      }
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
export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo($owner: String) {
    onCreateTodo(owner: $owner) {
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
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo($owner: String) {
    onUpdateTodo(owner: $owner) {
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
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo($owner: String) {
    onDeleteTodo(owner: $owner) {
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
export const onCreateReportDailyNutrition = /* GraphQL */ `
  subscription OnCreateReportDailyNutrition {
    onCreateReportDailyNutrition {
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
export const onUpdateReportDailyNutrition = /* GraphQL */ `
  subscription OnUpdateReportDailyNutrition {
    onUpdateReportDailyNutrition {
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
export const onDeleteReportDailyNutrition = /* GraphQL */ `
  subscription OnDeleteReportDailyNutrition {
    onDeleteReportDailyNutrition {
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
export const onCreateReportMeasurement = /* GraphQL */ `
  subscription OnCreateReportMeasurement {
    onCreateReportMeasurement {
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
export const onUpdateReportMeasurement = /* GraphQL */ `
  subscription OnUpdateReportMeasurement {
    onUpdateReportMeasurement {
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
export const onDeleteReportMeasurement = /* GraphQL */ `
  subscription OnDeleteReportMeasurement {
    onDeleteReportMeasurement {
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
