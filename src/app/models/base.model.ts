/**
 * Base interface for all models in the application
 */
export interface BaseModel {
  /** Unique identifier for the model */
  readonly id: string;
  /** Creation timestamp */
  readonly createdAt: Date;
  /** Last update timestamp */
  readonly updatedAt: Date;
} 