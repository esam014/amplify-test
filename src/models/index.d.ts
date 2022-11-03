import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

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

type EagerReport = {
  readonly id: string;
  readonly start_date?: string | null;
  readonly end_date?: string | null;
  readonly clientID: string;
  readonly DailyNutritions?: (ReportDailyNutrition | null)[] | null;
  readonly Measurements?: (ReportMeasurement | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyReport = {
  readonly id: string;
  readonly start_date?: string | null;
  readonly end_date?: string | null;
  readonly clientID: string;
  readonly DailyNutritions: AsyncCollection<ReportDailyNutrition>;
  readonly Measurements: AsyncCollection<ReportMeasurement>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Report = LazyLoading extends LazyLoadingDisabled ? EagerReport : LazyReport

export declare const Report: (new (init: ModelInit<Report, ReportMetaData>) => Report) & {
  copyOf(source: Report, mutator: (draft: MutableModel<Report, ReportMetaData>) => MutableModel<Report, ReportMetaData> | void): Report;
}

type EagerDailyNutrition = {
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
}

type LazyDailyNutrition = {
  readonly id: string;
  readonly date?: string | null;
  readonly calories?: number | null;
  readonly proteins?: number | null;
  readonly carbs?: number | null;
  readonly fats?: number | null;
  readonly clientID: string;
  readonly reports: AsyncCollection<ReportDailyNutrition>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type DailyNutrition = LazyLoading extends LazyLoadingDisabled ? EagerDailyNutrition : LazyDailyNutrition

export declare const DailyNutrition: (new (init: ModelInit<DailyNutrition, DailyNutritionMetaData>) => DailyNutrition) & {
  copyOf(source: DailyNutrition, mutator: (draft: MutableModel<DailyNutrition, DailyNutritionMetaData>) => MutableModel<DailyNutrition, DailyNutritionMetaData> | void): DailyNutrition;
}

type EagerMeasurement = {
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
}

type LazyMeasurement = {
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
  readonly reports: AsyncCollection<ReportMeasurement>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Measurement = LazyLoading extends LazyLoadingDisabled ? EagerMeasurement : LazyMeasurement

export declare const Measurement: (new (init: ModelInit<Measurement, MeasurementMetaData>) => Measurement) & {
  copyOf(source: Measurement, mutator: (draft: MutableModel<Measurement, MeasurementMetaData>) => MutableModel<Measurement, MeasurementMetaData> | void): Measurement;
}

type EagerExercises = {
  readonly id: string;
  readonly name?: string | null;
  readonly video?: string | null;
  readonly WodExercises?: (WodExercises | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyExercises = {
  readonly id: string;
  readonly name?: string | null;
  readonly video?: string | null;
  readonly WodExercises: AsyncCollection<WodExercises>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Exercises = LazyLoading extends LazyLoadingDisabled ? EagerExercises : LazyExercises

export declare const Exercises: (new (init: ModelInit<Exercises, ExercisesMetaData>) => Exercises) & {
  copyOf(source: Exercises, mutator: (draft: MutableModel<Exercises, ExercisesMetaData>) => MutableModel<Exercises, ExercisesMetaData> | void): Exercises;
}

type EagerWodExercises = {
  readonly id: string;
  readonly resistance?: number | null;
  readonly reps?: number | null;
  readonly sets?: number | null;
  readonly rest?: number | null;
  readonly workoutID: string;
  readonly exercisesID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyWodExercises = {
  readonly id: string;
  readonly resistance?: number | null;
  readonly reps?: number | null;
  readonly sets?: number | null;
  readonly rest?: number | null;
  readonly workoutID: string;
  readonly exercisesID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type WodExercises = LazyLoading extends LazyLoadingDisabled ? EagerWodExercises : LazyWodExercises

export declare const WodExercises: (new (init: ModelInit<WodExercises, WodExercisesMetaData>) => WodExercises) & {
  copyOf(source: WodExercises, mutator: (draft: MutableModel<WodExercises, WodExercisesMetaData>) => MutableModel<WodExercises, WodExercisesMetaData> | void): WodExercises;
}

type EagerWorkout = {
  readonly id: string;
  readonly warm_up?: string | null;
  readonly cool_down?: string | null;
  readonly muscle_group?: string | null;
  readonly Schedules?: (Schedule | null)[] | null;
  readonly WodExercises?: (WodExercises | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyWorkout = {
  readonly id: string;
  readonly warm_up?: string | null;
  readonly cool_down?: string | null;
  readonly muscle_group?: string | null;
  readonly Schedules: AsyncCollection<Schedule>;
  readonly WodExercises: AsyncCollection<WodExercises>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Workout = LazyLoading extends LazyLoadingDisabled ? EagerWorkout : LazyWorkout

export declare const Workout: (new (init: ModelInit<Workout, WorkoutMetaData>) => Workout) & {
  copyOf(source: Workout, mutator: (draft: MutableModel<Workout, WorkoutMetaData>) => MutableModel<Workout, WorkoutMetaData> | void): Workout;
}

type EagerSchedule = {
  readonly id: string;
  readonly date?: string | null;
  readonly completed?: boolean | null;
  readonly clientID: string;
  readonly workoutID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySchedule = {
  readonly id: string;
  readonly date?: string | null;
  readonly completed?: boolean | null;
  readonly clientID: string;
  readonly workoutID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Schedule = LazyLoading extends LazyLoadingDisabled ? EagerSchedule : LazySchedule

export declare const Schedule: (new (init: ModelInit<Schedule, ScheduleMetaData>) => Schedule) & {
  copyOf(source: Schedule, mutator: (draft: MutableModel<Schedule, ScheduleMetaData>) => MutableModel<Schedule, ScheduleMetaData> | void): Schedule;
}

type EagerGoal = {
  readonly id: string;
  readonly short_term_goal?: string | null;
  readonly long_term_goal?: string | null;
  readonly Clients?: (Client | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGoal = {
  readonly id: string;
  readonly short_term_goal?: string | null;
  readonly long_term_goal?: string | null;
  readonly Clients: AsyncCollection<Client>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Goal = LazyLoading extends LazyLoadingDisabled ? EagerGoal : LazyGoal

export declare const Goal: (new (init: ModelInit<Goal, GoalMetaData>) => Goal) & {
  copyOf(source: Goal, mutator: (draft: MutableModel<Goal, GoalMetaData>) => MutableModel<Goal, GoalMetaData> | void): Goal;
}

type EagerClient = {
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
}

type LazyClient = {
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
  readonly Schedules: AsyncCollection<Schedule>;
  readonly DailyNutritions: AsyncCollection<DailyNutrition>;
  readonly Measurements: AsyncCollection<Measurement>;
  readonly Reports: AsyncCollection<Report>;
  readonly NutritionPlan: AsyncItem<NutritionPlan | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly clientNutritionPlanId?: string | null;
}

export declare type Client = LazyLoading extends LazyLoadingDisabled ? EagerClient : LazyClient

export declare const Client: (new (init: ModelInit<Client, ClientMetaData>) => Client) & {
  copyOf(source: Client, mutator: (draft: MutableModel<Client, ClientMetaData>) => MutableModel<Client, ClientMetaData> | void): Client;
}

type EagerNutritionPlan = {
  readonly id: string;
  readonly calorie_target?: number | null;
  readonly protein_target?: number | null;
  readonly carb_target?: number | null;
  readonly fat_target?: number | null;
  readonly end_date?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyNutritionPlan = {
  readonly id: string;
  readonly calorie_target?: number | null;
  readonly protein_target?: number | null;
  readonly carb_target?: number | null;
  readonly fat_target?: number | null;
  readonly end_date?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type NutritionPlan = LazyLoading extends LazyLoadingDisabled ? EagerNutritionPlan : LazyNutritionPlan

export declare const NutritionPlan: (new (init: ModelInit<NutritionPlan, NutritionPlanMetaData>) => NutritionPlan) & {
  copyOf(source: NutritionPlan, mutator: (draft: MutableModel<NutritionPlan, NutritionPlanMetaData>) => MutableModel<NutritionPlan, NutritionPlanMetaData> | void): NutritionPlan;
}

type EagerTrainer = {
  readonly id: string;
  readonly Clients?: (Client | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTrainer = {
  readonly id: string;
  readonly Clients: AsyncCollection<Client>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Trainer = LazyLoading extends LazyLoadingDisabled ? EagerTrainer : LazyTrainer

export declare const Trainer: (new (init: ModelInit<Trainer, TrainerMetaData>) => Trainer) & {
  copyOf(source: Trainer, mutator: (draft: MutableModel<Trainer, TrainerMetaData>) => MutableModel<Trainer, TrainerMetaData> | void): Trainer;
}

type EagerUser = {
  readonly id: string;
  readonly username?: string | null;
  readonly first_name?: string | null;
  readonly last_name?: string | null;
  readonly role?: Role | keyof typeof Role | null;
  readonly email?: string | null;
  readonly Trainer?: Trainer | null;
  readonly Client?: Client | null;
  readonly sub?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userTrainerId?: string | null;
  readonly userClientId?: string | null;
}

type LazyUser = {
  readonly id: string;
  readonly username?: string | null;
  readonly first_name?: string | null;
  readonly last_name?: string | null;
  readonly role?: Role | keyof typeof Role | null;
  readonly email?: string | null;
  readonly Trainer: AsyncItem<Trainer | undefined>;
  readonly Client: AsyncItem<Client | undefined>;
  readonly sub?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userTrainerId?: string | null;
  readonly userClientId?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User, UserMetaData>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

type EagerTodo = {
  readonly id: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTodo = {
  readonly id: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Todo = LazyLoading extends LazyLoadingDisabled ? EagerTodo : LazyTodo

export declare const Todo: (new (init: ModelInit<Todo, TodoMetaData>) => Todo) & {
  copyOf(source: Todo, mutator: (draft: MutableModel<Todo, TodoMetaData>) => MutableModel<Todo, TodoMetaData> | void): Todo;
}

type EagerReportDailyNutrition = {
  readonly id: string;
  readonly report: Report;
  readonly dailyNutrition: DailyNutrition;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyReportDailyNutrition = {
  readonly id: string;
  readonly report: AsyncItem<Report>;
  readonly dailyNutrition: AsyncItem<DailyNutrition>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ReportDailyNutrition = LazyLoading extends LazyLoadingDisabled ? EagerReportDailyNutrition : LazyReportDailyNutrition

export declare const ReportDailyNutrition: (new (init: ModelInit<ReportDailyNutrition, ReportDailyNutritionMetaData>) => ReportDailyNutrition) & {
  copyOf(source: ReportDailyNutrition, mutator: (draft: MutableModel<ReportDailyNutrition, ReportDailyNutritionMetaData>) => MutableModel<ReportDailyNutrition, ReportDailyNutritionMetaData> | void): ReportDailyNutrition;
}

type EagerReportMeasurement = {
  readonly id: string;
  readonly report: Report;
  readonly measurement: Measurement;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyReportMeasurement = {
  readonly id: string;
  readonly report: AsyncItem<Report>;
  readonly measurement: AsyncItem<Measurement>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ReportMeasurement = LazyLoading extends LazyLoadingDisabled ? EagerReportMeasurement : LazyReportMeasurement

export declare const ReportMeasurement: (new (init: ModelInit<ReportMeasurement, ReportMeasurementMetaData>) => ReportMeasurement) & {
  copyOf(source: ReportMeasurement, mutator: (draft: MutableModel<ReportMeasurement, ReportMeasurementMetaData>) => MutableModel<ReportMeasurement, ReportMeasurementMetaData> | void): ReportMeasurement;
}