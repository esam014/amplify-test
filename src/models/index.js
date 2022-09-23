// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ServiceTier = {
  "NUTRITION": "NUTRITION",
  "FITNESS": "FITNESS",
  "ALL": "ALL"
};

const Role = {
  "TRAINER": "TRAINER",
  "CLIENT": "CLIENT"
};

const { Report, DailyNutrition, Measurement, Exercises, WodExercises, Workout, Schedule, Goal, Client, NutritionPlan, Trainer, User, Todo, ReportDailyNutrition, ReportMeasurement } = initSchema(schema);

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
  User,
  Todo,
  ReportDailyNutrition,
  ReportMeasurement,
  ServiceTier,
  Role
};