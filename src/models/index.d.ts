import { ModelInit, MutableModel } from "@aws-amplify/datastore";

export enum ServiceTier {
  NUTRITION = "NUTRITION",
  FITNESS = "FITNESS",
  ALL = "ALL"
}

export enum Role {
  TRAINER = "TRAINER",
  CLIENT = "CLIENT"
}

type ReportMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DailyNutritionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MeasurementMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ExercisesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type WodExercisesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type WorkoutMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ScheduleMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type GoalMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ClientMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type NutritionPlanMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TrainerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TodoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ReportDailyNutritionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ReportMeasurementMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Report {
  readonly id: string;
  readonly start_date?: string | null;
  readonly end_date?: string | null;
  readonly clientID: string;
  readonly DailyNutritions?: (ReportDailyNutrition | null)[] | null;
  readonly Measurements?: (ReportMeasurement | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Report, ReportMetaData>);
  static copyOf(source: Report, mutator: (draft: MutableModel<Report, ReportMetaData>) => MutableModel<Report, ReportMetaData> | void): Report;
}

export declare class DailyNutrition {
  readonly id: string;
  readonly date?: string | null;
  readonly calories?: number | null;
  readonly proteins?: number | null;
  readonly carbs?: number | null;
  readonly fats?: number | null;
  readonly clientID: string;
  readonly reports?: (ReportDailyNutrition | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<DailyNutrition, DailyNutritionMetaData>);
  static copyOf(source: DailyNutrition, mutator: (draft: MutableModel<DailyNutrition, DailyNutritionMetaData>) => MutableModel<DailyNutrition, DailyNutritionMetaData> | void): DailyNutrition;
}

export declare class Measurement {
  readonly id: string;
  readonly date?: string | null;
  readonly right_arm?: number | null;
  readonly waist?: number | null;
  readonly hips?: number | null;
  readonly right_thigh?: number | null;
  readonly chest?: number | null;
  readonly weight?: number | null;
  readonly picture?: string | null;
  readonly clientID: string;
  readonly reports?: (ReportMeasurement | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Measurement, MeasurementMetaData>);
  static copyOf(source: Measurement, mutator: (draft: MutableModel<Measurement, MeasurementMetaData>) => MutableModel<Measurement, MeasurementMetaData> | void): Measurement;
}

export declare class Exercises {
  readonly id: string;
  readonly name?: string | null;
  readonly video?: string | null;
  readonly WodExercises?: (WodExercises | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Exercises, ExercisesMetaData>);
  static copyOf(source: Exercises, mutator: (draft: MutableModel<Exercises, ExercisesMetaData>) => MutableModel<Exercises, ExercisesMetaData> | void): Exercises;
}

export declare class WodExercises {
  readonly id: string;
  readonly resistance?: number | null;
  readonly reps?: number | null;
  readonly sets?: number | null;
  readonly rest?: number | null;
  readonly workoutID: string;
  readonly exercisesID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<WodExercises, WodExercisesMetaData>);
  static copyOf(source: WodExercises, mutator: (draft: MutableModel<WodExercises, WodExercisesMetaData>) => MutableModel<WodExercises, WodExercisesMetaData> | void): WodExercises;
}

export declare class Workout {
  readonly id: string;
  readonly warm_up?: string | null;
  readonly cool_down?: string | null;
  readonly muscle_group?: string | null;
  readonly Schedules?: (Schedule | null)[] | null;
  readonly WodExercises?: (WodExercises | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Workout, WorkoutMetaData>);
  static copyOf(source: Workout, mutator: (draft: MutableModel<Workout, WorkoutMetaData>) => MutableModel<Workout, WorkoutMetaData> | void): Workout;
}

export declare class Schedule {
  readonly id: string;
  readonly date?: string | null;
  readonly completed?: boolean | null;
  readonly clientID: string;
  readonly workoutID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Schedule, ScheduleMetaData>);
  static copyOf(source: Schedule, mutator: (draft: MutableModel<Schedule, ScheduleMetaData>) => MutableModel<Schedule, ScheduleMetaData> | void): Schedule;
}

export declare class Goal {
  readonly id: string;
  readonly short_term_goal?: string | null;
  readonly long_term_goal?: string | null;
  readonly Clients?: (Client | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Goal, GoalMetaData>);
  static copyOf(source: Goal, mutator: (draft: MutableModel<Goal, GoalMetaData>) => MutableModel<Goal, GoalMetaData> | void): Goal;
}

export declare class Client {
  readonly id: string;
  readonly start_date?: string | null;
  readonly account_expiry_date?: string | null;
  readonly onboarded?: boolean | null;
  readonly assessed?: boolean | null;
  readonly age?: number | null;
  readonly gender?: number | null;
  readonly height?: number | null;
  readonly training_frequency?: number | null;
  readonly dietary_restrictions?: string | null;
  readonly equipment_list?: string | null;
  readonly other_physical_activities?: string | null;
  readonly service_tier?: ServiceTier | keyof typeof ServiceTier | null;
  readonly trainerID: string;
  readonly goalID: string;
  readonly Schedules?: (Schedule | null)[] | null;
  readonly DailyNutritions?: (DailyNutrition | null)[] | null;
  readonly Measurements?: (Measurement | null)[] | null;
  readonly Reports?: (Report | null)[] | null;
  readonly NutritionPlan?: NutritionPlan | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly clientNutritionPlanId?: string | null;
  constructor(init: ModelInit<Client, ClientMetaData>);
  static copyOf(source: Client, mutator: (draft: MutableModel<Client, ClientMetaData>) => MutableModel<Client, ClientMetaData> | void): Client;
}

export declare class NutritionPlan {
  readonly id: string;
  readonly calorie_target?: number | null;
  readonly protein_target?: number | null;
  readonly carb_target?: number | null;
  readonly fat_target?: number | null;
  readonly end_date?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<NutritionPlan, NutritionPlanMetaData>);
  static copyOf(source: NutritionPlan, mutator: (draft: MutableModel<NutritionPlan, NutritionPlanMetaData>) => MutableModel<NutritionPlan, NutritionPlanMetaData> | void): NutritionPlan;
}

export declare class Trainer {
  readonly id: string;
  readonly Clients?: (Client | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Trainer, TrainerMetaData>);
  static copyOf(source: Trainer, mutator: (draft: MutableModel<Trainer, TrainerMetaData>) => MutableModel<Trainer, TrainerMetaData> | void): Trainer;
}

export declare class User {
  readonly id: string;
  readonly username?: string | null;
  readonly first_name?: string | null;
  readonly last_name?: string | null;
  readonly role?: Role | keyof typeof Role | null;
  readonly email?: string | null;
  readonly Trainer?: Trainer | null;
  readonly Client?: Client | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userTrainerId?: string | null;
  readonly userClientId?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Todo {
  readonly id: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Todo, TodoMetaData>);
  static copyOf(source: Todo, mutator: (draft: MutableModel<Todo, TodoMetaData>) => MutableModel<Todo, TodoMetaData> | void): Todo;
}

export declare class ReportDailyNutrition {
  readonly id: string;
  readonly report: Report;
  readonly dailyNutrition: DailyNutrition;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ReportDailyNutrition, ReportDailyNutritionMetaData>);
  static copyOf(source: ReportDailyNutrition, mutator: (draft: MutableModel<ReportDailyNutrition, ReportDailyNutritionMetaData>) => MutableModel<ReportDailyNutrition, ReportDailyNutritionMetaData> | void): ReportDailyNutrition;
}

export declare class ReportMeasurement {
  readonly id: string;
  readonly report: Report;
  readonly measurement: Measurement;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ReportMeasurement, ReportMeasurementMetaData>);
  static copyOf(source: ReportMeasurement, mutator: (draft: MutableModel<ReportMeasurement, ReportMeasurementMetaData>) => MutableModel<ReportMeasurement, ReportMeasurementMetaData> | void): ReportMeasurement;
}