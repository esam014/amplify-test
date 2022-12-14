// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ServiceTier = {
  "NUTRITION": "NUTRITION",
  "FITNESS": "FITNESS",
  "ALL": "ALL"
};

const Gender = {
  "MALE": "MALE",
  "FEMALE": "FEMALE"
};

const Role = {
  "TRAINER": "TRAINER",
  "CLIENT": "CLIENT"
};

const Lifecycle = {
  "FIRSTLOGIN": "FIRSTLOGIN",
  "REGISTERING": "REGISTERING",
  "REGISTERED": "REGISTERED",
  "ACTIVE": "ACTIVE",
  "SUSPENDED": "SUSPENDED"
};

const { Report, DailyNutrition, Measurement, Exercises, WodExercises, Workout, Schedule, Goal, Client, NutritionPlan, Trainer, PlatformConfig, User, Todo, ReportDailyNutrition, ReportMeasurement } = initSchema(schema);

export {
  Report,
  DailyNutrition,
  Measurement,
  Exercises,
  WodExercises,
  Workout,
  Schedule,
  Goal,
  Client,
  NutritionPlan,
  Trainer,
  PlatformConfig,
  User,
  Todo,
  ReportDailyNutrition,
  ReportMeasurement,
  ServiceTier,
  Gender,
  Role,
  Lifecycle
};