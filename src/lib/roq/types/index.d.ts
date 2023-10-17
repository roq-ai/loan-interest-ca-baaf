/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model company
 *
 */
export type company = $Result.DefaultSelection<Prisma.$companyPayload>;
/**
 * Model financial_advisor
 *
 */
export type financial_advisor = $Result.DefaultSelection<Prisma.$financial_advisorPayload>;
/**
 * Model loan
 *
 */
export type loan = $Result.DefaultSelection<Prisma.$loanPayload>;
/**
 * Model loan_officer
 *
 */
export type loan_officer = $Result.DefaultSelection<Prisma.$loan_officerPayload>;
/**
 * Model payment_schedule
 *
 */
export type payment_schedule = $Result.DefaultSelection<Prisma.$payment_schedulePayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Companies
 * const companies = await prisma.company.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **company** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   */
  get company(): Prisma.companyDelegate<ExtArgs>;

  /**
   * `prisma.financial_advisor`: Exposes CRUD operations for the **financial_advisor** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Financial_advisors
   * const financial_advisors = await prisma.financial_advisor.findMany()
   * ```
   */
  get financial_advisor(): Prisma.financial_advisorDelegate<ExtArgs>;

  /**
   * `prisma.loan`: Exposes CRUD operations for the **loan** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Loans
   * const loans = await prisma.loan.findMany()
   * ```
   */
  get loan(): Prisma.loanDelegate<ExtArgs>;

  /**
   * `prisma.loan_officer`: Exposes CRUD operations for the **loan_officer** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Loan_officers
   * const loan_officers = await prisma.loan_officer.findMany()
   * ```
   */
  get loan_officer(): Prisma.loan_officerDelegate<ExtArgs>;

  /**
   * `prisma.payment_schedule`: Exposes CRUD operations for the **payment_schedule** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Payment_schedules
   * const payment_schedules = await prisma.payment_schedule.findMany()
   * ```
   */
  get payment_schedule(): Prisma.payment_scheduleDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.4.2
   * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    company: 'company';
    financial_advisor: 'financial_advisor';
    loan: 'loan';
    loan_officer: 'loan_officer';
    payment_schedule: 'payment_schedule';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'company' | 'financial_advisor' | 'loan' | 'loan_officer' | 'payment_schedule' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      company: {
        payload: Prisma.$companyPayload<ExtArgs>;
        fields: Prisma.companyFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.companyFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.companyFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findFirst: {
            args: Prisma.companyFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.companyFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findMany: {
            args: Prisma.companyFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[];
          };
          create: {
            args: Prisma.companyCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          createMany: {
            args: Prisma.companyCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.companyDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          update: {
            args: Prisma.companyUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          deleteMany: {
            args: Prisma.companyDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.companyUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.companyUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCompany>;
          };
          groupBy: {
            args: Prisma.companyGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CompanyGroupByOutputType>[];
          };
          count: {
            args: Prisma.companyCountArgs<ExtArgs>;
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number;
          };
        };
      };
      financial_advisor: {
        payload: Prisma.$financial_advisorPayload<ExtArgs>;
        fields: Prisma.financial_advisorFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.financial_advisorFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$financial_advisorPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.financial_advisorFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$financial_advisorPayload>;
          };
          findFirst: {
            args: Prisma.financial_advisorFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$financial_advisorPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.financial_advisorFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$financial_advisorPayload>;
          };
          findMany: {
            args: Prisma.financial_advisorFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$financial_advisorPayload>[];
          };
          create: {
            args: Prisma.financial_advisorCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$financial_advisorPayload>;
          };
          createMany: {
            args: Prisma.financial_advisorCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.financial_advisorDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$financial_advisorPayload>;
          };
          update: {
            args: Prisma.financial_advisorUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$financial_advisorPayload>;
          };
          deleteMany: {
            args: Prisma.financial_advisorDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.financial_advisorUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.financial_advisorUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$financial_advisorPayload>;
          };
          aggregate: {
            args: Prisma.Financial_advisorAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateFinancial_advisor>;
          };
          groupBy: {
            args: Prisma.financial_advisorGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Financial_advisorGroupByOutputType>[];
          };
          count: {
            args: Prisma.financial_advisorCountArgs<ExtArgs>;
            result: $Utils.Optional<Financial_advisorCountAggregateOutputType> | number;
          };
        };
      };
      loan: {
        payload: Prisma.$loanPayload<ExtArgs>;
        fields: Prisma.loanFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.loanFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$loanPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.loanFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$loanPayload>;
          };
          findFirst: {
            args: Prisma.loanFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$loanPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.loanFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$loanPayload>;
          };
          findMany: {
            args: Prisma.loanFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$loanPayload>[];
          };
          create: {
            args: Prisma.loanCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$loanPayload>;
          };
          createMany: {
            args: Prisma.loanCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.loanDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$loanPayload>;
          };
          update: {
            args: Prisma.loanUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$loanPayload>;
          };
          deleteMany: {
            args: Prisma.loanDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.loanUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.loanUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$loanPayload>;
          };
          aggregate: {
            args: Prisma.LoanAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateLoan>;
          };
          groupBy: {
            args: Prisma.loanGroupByArgs<ExtArgs>;
            result: $Utils.Optional<LoanGroupByOutputType>[];
          };
          count: {
            args: Prisma.loanCountArgs<ExtArgs>;
            result: $Utils.Optional<LoanCountAggregateOutputType> | number;
          };
        };
      };
      loan_officer: {
        payload: Prisma.$loan_officerPayload<ExtArgs>;
        fields: Prisma.loan_officerFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.loan_officerFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$loan_officerPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.loan_officerFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$loan_officerPayload>;
          };
          findFirst: {
            args: Prisma.loan_officerFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$loan_officerPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.loan_officerFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$loan_officerPayload>;
          };
          findMany: {
            args: Prisma.loan_officerFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$loan_officerPayload>[];
          };
          create: {
            args: Prisma.loan_officerCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$loan_officerPayload>;
          };
          createMany: {
            args: Prisma.loan_officerCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.loan_officerDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$loan_officerPayload>;
          };
          update: {
            args: Prisma.loan_officerUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$loan_officerPayload>;
          };
          deleteMany: {
            args: Prisma.loan_officerDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.loan_officerUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.loan_officerUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$loan_officerPayload>;
          };
          aggregate: {
            args: Prisma.Loan_officerAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateLoan_officer>;
          };
          groupBy: {
            args: Prisma.loan_officerGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Loan_officerGroupByOutputType>[];
          };
          count: {
            args: Prisma.loan_officerCountArgs<ExtArgs>;
            result: $Utils.Optional<Loan_officerCountAggregateOutputType> | number;
          };
        };
      };
      payment_schedule: {
        payload: Prisma.$payment_schedulePayload<ExtArgs>;
        fields: Prisma.payment_scheduleFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.payment_scheduleFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$payment_schedulePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.payment_scheduleFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$payment_schedulePayload>;
          };
          findFirst: {
            args: Prisma.payment_scheduleFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$payment_schedulePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.payment_scheduleFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$payment_schedulePayload>;
          };
          findMany: {
            args: Prisma.payment_scheduleFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$payment_schedulePayload>[];
          };
          create: {
            args: Prisma.payment_scheduleCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$payment_schedulePayload>;
          };
          createMany: {
            args: Prisma.payment_scheduleCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.payment_scheduleDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$payment_schedulePayload>;
          };
          update: {
            args: Prisma.payment_scheduleUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$payment_schedulePayload>;
          };
          deleteMany: {
            args: Prisma.payment_scheduleDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.payment_scheduleUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.payment_scheduleUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$payment_schedulePayload>;
          };
          aggregate: {
            args: Prisma.Payment_scheduleAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregatePayment_schedule>;
          };
          groupBy: {
            args: Prisma.payment_scheduleGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Payment_scheduleGroupByOutputType>[];
          };
          count: {
            args: Prisma.payment_scheduleCountArgs<ExtArgs>;
            result: $Utils.Optional<Payment_scheduleCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    financial_advisor: number;
    loan: number;
    loan_officer: number;
  };

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    financial_advisor?: boolean | CompanyCountOutputTypeCountFinancial_advisorArgs;
    loan?: boolean | CompanyCountOutputTypeCountLoanArgs;
    loan_officer?: boolean | CompanyCountOutputTypeCountLoan_officerArgs;
  };

  // Custom InputTypes

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountFinancial_advisorArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: financial_advisorWhereInput;
  };

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountLoanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: loanWhereInput;
    };

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountLoan_officerArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: loan_officerWhereInput;
  };

  /**
   * Count Type LoanCountOutputType
   */

  export type LoanCountOutputType = {
    payment_schedule: number;
  };

  export type LoanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment_schedule?: boolean | LoanCountOutputTypeCountPayment_scheduleArgs;
  };

  // Custom InputTypes

  /**
   * LoanCountOutputType without action
   */
  export type LoanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanCountOutputType
     */
    select?: LoanCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * LoanCountOutputType without action
   */
  export type LoanCountOutputTypeCountPayment_scheduleArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: payment_scheduleWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    company: number;
    financial_advisor: number;
    loan: number;
    loan_officer: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | UserCountOutputTypeCountCompanyArgs;
    financial_advisor?: boolean | UserCountOutputTypeCountFinancial_advisorArgs;
    loan?: boolean | UserCountOutputTypeCountLoanArgs;
    loan_officer?: boolean | UserCountOutputTypeCountLoan_officerArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCompanyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: companyWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFinancial_advisorArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: financial_advisorWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLoanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: loanWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLoan_officerArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: loan_officerWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  export type CompanyMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    established_date: Date | null;
    location: string | null;
    sector: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type CompanyMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    established_date: Date | null;
    location: string | null;
    sector: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type CompanyCountAggregateOutputType = {
    id: number;
    description: number;
    established_date: number;
    location: number;
    sector: number;
    name: number;
    created_at: number;
    updated_at: number;
    user_id: number;
    tenant_id: number;
    _all: number;
  };

  export type CompanyMinAggregateInputType = {
    id?: true;
    description?: true;
    established_date?: true;
    location?: true;
    sector?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type CompanyMaxAggregateInputType = {
    id?: true;
    description?: true;
    established_date?: true;
    location?: true;
    sector?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type CompanyCountAggregateInputType = {
    id?: true;
    description?: true;
    established_date?: true;
    location?: true;
    sector?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which company to aggregate.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned companies
     **/
    _count?: true | CompanyCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CompanyMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CompanyMaxAggregateInputType;
  };

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
    [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>;
  };

  export type companyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companyWhereInput;
    orderBy?: companyOrderByWithAggregationInput | companyOrderByWithAggregationInput[];
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum;
    having?: companyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CompanyCountAggregateInputType | true;
    _min?: CompanyMinAggregateInputType;
    _max?: CompanyMaxAggregateInputType;
  };

  export type CompanyGroupByOutputType = {
    id: string;
    description: string | null;
    established_date: Date | null;
    location: string | null;
    sector: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    user_id: string;
    tenant_id: string;
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  type GetCompanyGroupByPayload<T extends companyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CompanyGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
          : GetScalarType<T[P], CompanyGroupByOutputType[P]>;
      }
    >
  >;

  export type companySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      description?: boolean;
      established_date?: boolean;
      location?: boolean;
      sector?: boolean;
      name?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user_id?: boolean;
      tenant_id?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
      financial_advisor?: boolean | company$financial_advisorArgs<ExtArgs>;
      loan?: boolean | company$loanArgs<ExtArgs>;
      loan_officer?: boolean | company$loan_officerArgs<ExtArgs>;
      _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['company']
  >;

  export type companySelectScalar = {
    id?: boolean;
    description?: boolean;
    established_date?: boolean;
    location?: boolean;
    sector?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user_id?: boolean;
    tenant_id?: boolean;
  };

  export type companyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
    financial_advisor?: boolean | company$financial_advisorArgs<ExtArgs>;
    loan?: boolean | company$loanArgs<ExtArgs>;
    loan_officer?: boolean | company$loan_officerArgs<ExtArgs>;
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $companyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'company';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
      financial_advisor: Prisma.$financial_advisorPayload<ExtArgs>[];
      loan: Prisma.$loanPayload<ExtArgs>[];
      loan_officer: Prisma.$loan_officerPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        established_date: Date | null;
        location: string | null;
        sector: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        user_id: string;
        tenant_id: string;
      },
      ExtArgs['result']['company']
    >;
    composites: {};
  };

  type companyGetPayload<S extends boolean | null | undefined | companyDefaultArgs> = $Result.GetResult<
    Prisma.$companyPayload,
    S
  >;

  type companyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    companyFindManyArgs,
    'select' | 'include'
  > & {
    select?: CompanyCountAggregateInputType | true;
  };

  export interface companyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['company']; meta: { name: 'company' } };
    /**
     * Find zero or one Company that matches the filter.
     * @param {companyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends companyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, companyFindUniqueArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Company that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {companyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends companyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends companyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends companyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     *
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends companyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Company.
     * @param {companyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     *
     **/
    create<T extends companyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, companyCreateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Companies.
     *     @param {companyCreateManyArgs} args - Arguments to create many Companies.
     *     @example
     *     // Create many Companies
     *     const company = await prisma.company.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends companyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Company.
     * @param {companyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     *
     **/
    delete<T extends companyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, companyDeleteArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Company.
     * @param {companyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends companyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Companies.
     * @param {companyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends companyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends companyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Company.
     * @param {companyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     **/
    upsert<T extends companyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpsertArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
     **/
    count<T extends companyCountArgs>(
      args?: Subset<T, companyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CompanyAggregateArgs>(
      args: Subset<T, CompanyAggregateArgs>,
    ): Prisma.PrismaPromise<GetCompanyAggregateType<T>>;

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends companyGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: companyGroupByArgs['orderBy'] }
        : { orderBy?: companyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, companyGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the company model
     */
    readonly fields: companyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__companyClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    financial_advisor<T extends company$financial_advisorArgs<ExtArgs> = {}>(
      args?: Subset<T, company$financial_advisorArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$financial_advisorPayload<ExtArgs>, T, 'findMany'> | Null>;

    loan<T extends company$loanArgs<ExtArgs> = {}>(
      args?: Subset<T, company$loanArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, 'findMany'> | Null>;

    loan_officer<T extends company$loan_officerArgs<ExtArgs> = {}>(
      args?: Subset<T, company$loan_officerArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loan_officerPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the company model
   */
  interface companyFieldRefs {
    readonly id: FieldRef<'company', 'String'>;
    readonly description: FieldRef<'company', 'String'>;
    readonly established_date: FieldRef<'company', 'DateTime'>;
    readonly location: FieldRef<'company', 'String'>;
    readonly sector: FieldRef<'company', 'String'>;
    readonly name: FieldRef<'company', 'String'>;
    readonly created_at: FieldRef<'company', 'DateTime'>;
    readonly updated_at: FieldRef<'company', 'DateTime'>;
    readonly user_id: FieldRef<'company', 'String'>;
    readonly tenant_id: FieldRef<'company', 'String'>;
  }

  // Custom InputTypes

  /**
   * company findUnique
   */
  export type companyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findUniqueOrThrow
   */
  export type companyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findFirst
   */
  export type companyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findFirstOrThrow
   */
  export type companyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findMany
   */
  export type companyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which companies to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company create
   */
  export type companyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to create a company.
     */
    data: XOR<companyCreateInput, companyUncheckedCreateInput>;
  };

  /**
   * company createMany
   */
  export type companyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many companies.
     */
    data: companyCreateManyInput | companyCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * company update
   */
  export type companyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to update a company.
     */
    data: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
    /**
     * Choose, which company to update.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company updateMany
   */
  export type companyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update companies.
     */
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyInput>;
    /**
     * Filter which companies to update
     */
    where?: companyWhereInput;
  };

  /**
   * company upsert
   */
  export type companyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The filter to search for the company to update in case it exists.
     */
    where: companyWhereUniqueInput;
    /**
     * In case the company found by the `where` argument doesn't exist, create a new company with this data.
     */
    create: XOR<companyCreateInput, companyUncheckedCreateInput>;
    /**
     * In case the company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
  };

  /**
   * company delete
   */
  export type companyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter which company to delete.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company deleteMany
   */
  export type companyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to delete
     */
    where?: companyWhereInput;
  };

  /**
   * company.financial_advisor
   */
  export type company$financial_advisorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the financial_advisor
     */
    select?: financial_advisorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: financial_advisorInclude<ExtArgs> | null;
    where?: financial_advisorWhereInput;
    orderBy?: financial_advisorOrderByWithRelationInput | financial_advisorOrderByWithRelationInput[];
    cursor?: financial_advisorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Financial_advisorScalarFieldEnum | Financial_advisorScalarFieldEnum[];
  };

  /**
   * company.loan
   */
  export type company$loanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loanInclude<ExtArgs> | null;
    where?: loanWhereInput;
    orderBy?: loanOrderByWithRelationInput | loanOrderByWithRelationInput[];
    cursor?: loanWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: LoanScalarFieldEnum | LoanScalarFieldEnum[];
  };

  /**
   * company.loan_officer
   */
  export type company$loan_officerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_officer
     */
    select?: loan_officerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loan_officerInclude<ExtArgs> | null;
    where?: loan_officerWhereInput;
    orderBy?: loan_officerOrderByWithRelationInput | loan_officerOrderByWithRelationInput[];
    cursor?: loan_officerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Loan_officerScalarFieldEnum | Loan_officerScalarFieldEnum[];
  };

  /**
   * company without action
   */
  export type companyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
  };

  /**
   * Model financial_advisor
   */

  export type AggregateFinancial_advisor = {
    _count: Financial_advisorCountAggregateOutputType | null;
    _avg: Financial_advisorAvgAggregateOutputType | null;
    _sum: Financial_advisorSumAggregateOutputType | null;
    _min: Financial_advisorMinAggregateOutputType | null;
    _max: Financial_advisorMaxAggregateOutputType | null;
  };

  export type Financial_advisorAvgAggregateOutputType = {
    experience: number | null;
    rating: number | null;
  };

  export type Financial_advisorSumAggregateOutputType = {
    experience: number | null;
    rating: number | null;
  };

  export type Financial_advisorMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    experience: number | null;
    specialization: string | null;
    company_id: string | null;
    availability: string | null;
    rating: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Financial_advisorMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    experience: number | null;
    specialization: string | null;
    company_id: string | null;
    availability: string | null;
    rating: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Financial_advisorCountAggregateOutputType = {
    id: number;
    user_id: number;
    experience: number;
    specialization: number;
    company_id: number;
    availability: number;
    rating: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Financial_advisorAvgAggregateInputType = {
    experience?: true;
    rating?: true;
  };

  export type Financial_advisorSumAggregateInputType = {
    experience?: true;
    rating?: true;
  };

  export type Financial_advisorMinAggregateInputType = {
    id?: true;
    user_id?: true;
    experience?: true;
    specialization?: true;
    company_id?: true;
    availability?: true;
    rating?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Financial_advisorMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    experience?: true;
    specialization?: true;
    company_id?: true;
    availability?: true;
    rating?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Financial_advisorCountAggregateInputType = {
    id?: true;
    user_id?: true;
    experience?: true;
    specialization?: true;
    company_id?: true;
    availability?: true;
    rating?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Financial_advisorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which financial_advisor to aggregate.
     */
    where?: financial_advisorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of financial_advisors to fetch.
     */
    orderBy?: financial_advisorOrderByWithRelationInput | financial_advisorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: financial_advisorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` financial_advisors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` financial_advisors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned financial_advisors
     **/
    _count?: true | Financial_advisorCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: Financial_advisorAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: Financial_advisorSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Financial_advisorMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Financial_advisorMaxAggregateInputType;
  };

  export type GetFinancial_advisorAggregateType<T extends Financial_advisorAggregateArgs> = {
    [P in keyof T & keyof AggregateFinancial_advisor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFinancial_advisor[P]>
      : GetScalarType<T[P], AggregateFinancial_advisor[P]>;
  };

  export type financial_advisorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: financial_advisorWhereInput;
    orderBy?: financial_advisorOrderByWithAggregationInput | financial_advisorOrderByWithAggregationInput[];
    by: Financial_advisorScalarFieldEnum[] | Financial_advisorScalarFieldEnum;
    having?: financial_advisorScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Financial_advisorCountAggregateInputType | true;
    _avg?: Financial_advisorAvgAggregateInputType;
    _sum?: Financial_advisorSumAggregateInputType;
    _min?: Financial_advisorMinAggregateInputType;
    _max?: Financial_advisorMaxAggregateInputType;
  };

  export type Financial_advisorGroupByOutputType = {
    id: string;
    user_id: string;
    experience: number | null;
    specialization: string | null;
    company_id: string;
    availability: string | null;
    rating: number | null;
    created_at: Date;
    updated_at: Date;
    _count: Financial_advisorCountAggregateOutputType | null;
    _avg: Financial_advisorAvgAggregateOutputType | null;
    _sum: Financial_advisorSumAggregateOutputType | null;
    _min: Financial_advisorMinAggregateOutputType | null;
    _max: Financial_advisorMaxAggregateOutputType | null;
  };

  type GetFinancial_advisorGroupByPayload<T extends financial_advisorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Financial_advisorGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Financial_advisorGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Financial_advisorGroupByOutputType[P]>
          : GetScalarType<T[P], Financial_advisorGroupByOutputType[P]>;
      }
    >
  >;

  export type financial_advisorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        user_id?: boolean;
        experience?: boolean;
        specialization?: boolean;
        company_id?: boolean;
        availability?: boolean;
        rating?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        company?: boolean | companyDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['financial_advisor']
    >;

  export type financial_advisorSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    experience?: boolean;
    specialization?: boolean;
    company_id?: boolean;
    availability?: boolean;
    rating?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type financial_advisorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | companyDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $financial_advisorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'financial_advisor';
    objects: {
      company: Prisma.$companyPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        experience: number | null;
        specialization: string | null;
        company_id: string;
        availability: string | null;
        rating: number | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['financial_advisor']
    >;
    composites: {};
  };

  type financial_advisorGetPayload<S extends boolean | null | undefined | financial_advisorDefaultArgs> =
    $Result.GetResult<Prisma.$financial_advisorPayload, S>;

  type financial_advisorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    financial_advisorFindManyArgs,
    'select' | 'include'
  > & {
    select?: Financial_advisorCountAggregateInputType | true;
  };

  export interface financial_advisorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['financial_advisor']; meta: { name: 'financial_advisor' } };
    /**
     * Find zero or one Financial_advisor that matches the filter.
     * @param {financial_advisorFindUniqueArgs} args - Arguments to find a Financial_advisor
     * @example
     * // Get one Financial_advisor
     * const financial_advisor = await prisma.financial_advisor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends financial_advisorFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, financial_advisorFindUniqueArgs<ExtArgs>>,
    ): Prisma__financial_advisorClient<
      $Result.GetResult<Prisma.$financial_advisorPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Financial_advisor that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {financial_advisorFindUniqueOrThrowArgs} args - Arguments to find a Financial_advisor
     * @example
     * // Get one Financial_advisor
     * const financial_advisor = await prisma.financial_advisor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends financial_advisorFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, financial_advisorFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__financial_advisorClient<
      $Result.GetResult<Prisma.$financial_advisorPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Financial_advisor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {financial_advisorFindFirstArgs} args - Arguments to find a Financial_advisor
     * @example
     * // Get one Financial_advisor
     * const financial_advisor = await prisma.financial_advisor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends financial_advisorFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, financial_advisorFindFirstArgs<ExtArgs>>,
    ): Prisma__financial_advisorClient<
      $Result.GetResult<Prisma.$financial_advisorPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Financial_advisor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {financial_advisorFindFirstOrThrowArgs} args - Arguments to find a Financial_advisor
     * @example
     * // Get one Financial_advisor
     * const financial_advisor = await prisma.financial_advisor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends financial_advisorFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, financial_advisorFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__financial_advisorClient<
      $Result.GetResult<Prisma.$financial_advisorPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Financial_advisors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {financial_advisorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Financial_advisors
     * const financial_advisors = await prisma.financial_advisor.findMany()
     *
     * // Get first 10 Financial_advisors
     * const financial_advisors = await prisma.financial_advisor.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const financial_advisorWithIdOnly = await prisma.financial_advisor.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends financial_advisorFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, financial_advisorFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$financial_advisorPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Financial_advisor.
     * @param {financial_advisorCreateArgs} args - Arguments to create a Financial_advisor.
     * @example
     * // Create one Financial_advisor
     * const Financial_advisor = await prisma.financial_advisor.create({
     *   data: {
     *     // ... data to create a Financial_advisor
     *   }
     * })
     *
     **/
    create<T extends financial_advisorCreateArgs<ExtArgs>>(
      args: SelectSubset<T, financial_advisorCreateArgs<ExtArgs>>,
    ): Prisma__financial_advisorClient<
      $Result.GetResult<Prisma.$financial_advisorPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Financial_advisors.
     *     @param {financial_advisorCreateManyArgs} args - Arguments to create many Financial_advisors.
     *     @example
     *     // Create many Financial_advisors
     *     const financial_advisor = await prisma.financial_advisor.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends financial_advisorCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, financial_advisorCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Financial_advisor.
     * @param {financial_advisorDeleteArgs} args - Arguments to delete one Financial_advisor.
     * @example
     * // Delete one Financial_advisor
     * const Financial_advisor = await prisma.financial_advisor.delete({
     *   where: {
     *     // ... filter to delete one Financial_advisor
     *   }
     * })
     *
     **/
    delete<T extends financial_advisorDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, financial_advisorDeleteArgs<ExtArgs>>,
    ): Prisma__financial_advisorClient<
      $Result.GetResult<Prisma.$financial_advisorPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Financial_advisor.
     * @param {financial_advisorUpdateArgs} args - Arguments to update one Financial_advisor.
     * @example
     * // Update one Financial_advisor
     * const financial_advisor = await prisma.financial_advisor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends financial_advisorUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, financial_advisorUpdateArgs<ExtArgs>>,
    ): Prisma__financial_advisorClient<
      $Result.GetResult<Prisma.$financial_advisorPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Financial_advisors.
     * @param {financial_advisorDeleteManyArgs} args - Arguments to filter Financial_advisors to delete.
     * @example
     * // Delete a few Financial_advisors
     * const { count } = await prisma.financial_advisor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends financial_advisorDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, financial_advisorDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Financial_advisors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {financial_advisorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Financial_advisors
     * const financial_advisor = await prisma.financial_advisor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends financial_advisorUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, financial_advisorUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Financial_advisor.
     * @param {financial_advisorUpsertArgs} args - Arguments to update or create a Financial_advisor.
     * @example
     * // Update or create a Financial_advisor
     * const financial_advisor = await prisma.financial_advisor.upsert({
     *   create: {
     *     // ... data to create a Financial_advisor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Financial_advisor we want to update
     *   }
     * })
     **/
    upsert<T extends financial_advisorUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, financial_advisorUpsertArgs<ExtArgs>>,
    ): Prisma__financial_advisorClient<
      $Result.GetResult<Prisma.$financial_advisorPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Financial_advisors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {financial_advisorCountArgs} args - Arguments to filter Financial_advisors to count.
     * @example
     * // Count the number of Financial_advisors
     * const count = await prisma.financial_advisor.count({
     *   where: {
     *     // ... the filter for the Financial_advisors we want to count
     *   }
     * })
     **/
    count<T extends financial_advisorCountArgs>(
      args?: Subset<T, financial_advisorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Financial_advisorCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Financial_advisor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Financial_advisorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Financial_advisorAggregateArgs>(
      args: Subset<T, Financial_advisorAggregateArgs>,
    ): Prisma.PrismaPromise<GetFinancial_advisorAggregateType<T>>;

    /**
     * Group by Financial_advisor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {financial_advisorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends financial_advisorGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: financial_advisorGroupByArgs['orderBy'] }
        : { orderBy?: financial_advisorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, financial_advisorGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetFinancial_advisorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the financial_advisor model
     */
    readonly fields: financial_advisorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for financial_advisor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__financial_advisorClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    company<T extends companyDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, companyDefaultArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the financial_advisor model
   */
  interface financial_advisorFieldRefs {
    readonly id: FieldRef<'financial_advisor', 'String'>;
    readonly user_id: FieldRef<'financial_advisor', 'String'>;
    readonly experience: FieldRef<'financial_advisor', 'Int'>;
    readonly specialization: FieldRef<'financial_advisor', 'String'>;
    readonly company_id: FieldRef<'financial_advisor', 'String'>;
    readonly availability: FieldRef<'financial_advisor', 'String'>;
    readonly rating: FieldRef<'financial_advisor', 'Int'>;
    readonly created_at: FieldRef<'financial_advisor', 'DateTime'>;
    readonly updated_at: FieldRef<'financial_advisor', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * financial_advisor findUnique
   */
  export type financial_advisorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the financial_advisor
     */
    select?: financial_advisorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: financial_advisorInclude<ExtArgs> | null;
    /**
     * Filter, which financial_advisor to fetch.
     */
    where: financial_advisorWhereUniqueInput;
  };

  /**
   * financial_advisor findUniqueOrThrow
   */
  export type financial_advisorFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the financial_advisor
     */
    select?: financial_advisorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: financial_advisorInclude<ExtArgs> | null;
    /**
     * Filter, which financial_advisor to fetch.
     */
    where: financial_advisorWhereUniqueInput;
  };

  /**
   * financial_advisor findFirst
   */
  export type financial_advisorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the financial_advisor
     */
    select?: financial_advisorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: financial_advisorInclude<ExtArgs> | null;
    /**
     * Filter, which financial_advisor to fetch.
     */
    where?: financial_advisorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of financial_advisors to fetch.
     */
    orderBy?: financial_advisorOrderByWithRelationInput | financial_advisorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for financial_advisors.
     */
    cursor?: financial_advisorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` financial_advisors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` financial_advisors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of financial_advisors.
     */
    distinct?: Financial_advisorScalarFieldEnum | Financial_advisorScalarFieldEnum[];
  };

  /**
   * financial_advisor findFirstOrThrow
   */
  export type financial_advisorFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the financial_advisor
     */
    select?: financial_advisorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: financial_advisorInclude<ExtArgs> | null;
    /**
     * Filter, which financial_advisor to fetch.
     */
    where?: financial_advisorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of financial_advisors to fetch.
     */
    orderBy?: financial_advisorOrderByWithRelationInput | financial_advisorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for financial_advisors.
     */
    cursor?: financial_advisorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` financial_advisors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` financial_advisors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of financial_advisors.
     */
    distinct?: Financial_advisorScalarFieldEnum | Financial_advisorScalarFieldEnum[];
  };

  /**
   * financial_advisor findMany
   */
  export type financial_advisorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the financial_advisor
     */
    select?: financial_advisorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: financial_advisorInclude<ExtArgs> | null;
    /**
     * Filter, which financial_advisors to fetch.
     */
    where?: financial_advisorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of financial_advisors to fetch.
     */
    orderBy?: financial_advisorOrderByWithRelationInput | financial_advisorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing financial_advisors.
     */
    cursor?: financial_advisorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` financial_advisors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` financial_advisors.
     */
    skip?: number;
    distinct?: Financial_advisorScalarFieldEnum | Financial_advisorScalarFieldEnum[];
  };

  /**
   * financial_advisor create
   */
  export type financial_advisorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the financial_advisor
     */
    select?: financial_advisorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: financial_advisorInclude<ExtArgs> | null;
    /**
     * The data needed to create a financial_advisor.
     */
    data: XOR<financial_advisorCreateInput, financial_advisorUncheckedCreateInput>;
  };

  /**
   * financial_advisor createMany
   */
  export type financial_advisorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many financial_advisors.
     */
    data: financial_advisorCreateManyInput | financial_advisorCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * financial_advisor update
   */
  export type financial_advisorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the financial_advisor
     */
    select?: financial_advisorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: financial_advisorInclude<ExtArgs> | null;
    /**
     * The data needed to update a financial_advisor.
     */
    data: XOR<financial_advisorUpdateInput, financial_advisorUncheckedUpdateInput>;
    /**
     * Choose, which financial_advisor to update.
     */
    where: financial_advisorWhereUniqueInput;
  };

  /**
   * financial_advisor updateMany
   */
  export type financial_advisorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update financial_advisors.
     */
    data: XOR<financial_advisorUpdateManyMutationInput, financial_advisorUncheckedUpdateManyInput>;
    /**
     * Filter which financial_advisors to update
     */
    where?: financial_advisorWhereInput;
  };

  /**
   * financial_advisor upsert
   */
  export type financial_advisorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the financial_advisor
     */
    select?: financial_advisorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: financial_advisorInclude<ExtArgs> | null;
    /**
     * The filter to search for the financial_advisor to update in case it exists.
     */
    where: financial_advisorWhereUniqueInput;
    /**
     * In case the financial_advisor found by the `where` argument doesn't exist, create a new financial_advisor with this data.
     */
    create: XOR<financial_advisorCreateInput, financial_advisorUncheckedCreateInput>;
    /**
     * In case the financial_advisor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<financial_advisorUpdateInput, financial_advisorUncheckedUpdateInput>;
  };

  /**
   * financial_advisor delete
   */
  export type financial_advisorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the financial_advisor
     */
    select?: financial_advisorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: financial_advisorInclude<ExtArgs> | null;
    /**
     * Filter which financial_advisor to delete.
     */
    where: financial_advisorWhereUniqueInput;
  };

  /**
   * financial_advisor deleteMany
   */
  export type financial_advisorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which financial_advisors to delete
     */
    where?: financial_advisorWhereInput;
  };

  /**
   * financial_advisor without action
   */
  export type financial_advisorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the financial_advisor
     */
    select?: financial_advisorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: financial_advisorInclude<ExtArgs> | null;
  };

  /**
   * Model loan
   */

  export type AggregateLoan = {
    _count: LoanCountAggregateOutputType | null;
    _avg: LoanAvgAggregateOutputType | null;
    _sum: LoanSumAggregateOutputType | null;
    _min: LoanMinAggregateOutputType | null;
    _max: LoanMaxAggregateOutputType | null;
  };

  export type LoanAvgAggregateOutputType = {
    loan_amount: number | null;
    interest_rate: number | null;
    loan_duration: number | null;
  };

  export type LoanSumAggregateOutputType = {
    loan_amount: number | null;
    interest_rate: number | null;
    loan_duration: number | null;
  };

  export type LoanMinAggregateOutputType = {
    id: string | null;
    loan_type: string | null;
    loan_amount: number | null;
    interest_rate: number | null;
    loan_duration: number | null;
    user_id: string | null;
    company_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type LoanMaxAggregateOutputType = {
    id: string | null;
    loan_type: string | null;
    loan_amount: number | null;
    interest_rate: number | null;
    loan_duration: number | null;
    user_id: string | null;
    company_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type LoanCountAggregateOutputType = {
    id: number;
    loan_type: number;
    loan_amount: number;
    interest_rate: number;
    loan_duration: number;
    user_id: number;
    company_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type LoanAvgAggregateInputType = {
    loan_amount?: true;
    interest_rate?: true;
    loan_duration?: true;
  };

  export type LoanSumAggregateInputType = {
    loan_amount?: true;
    interest_rate?: true;
    loan_duration?: true;
  };

  export type LoanMinAggregateInputType = {
    id?: true;
    loan_type?: true;
    loan_amount?: true;
    interest_rate?: true;
    loan_duration?: true;
    user_id?: true;
    company_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type LoanMaxAggregateInputType = {
    id?: true;
    loan_type?: true;
    loan_amount?: true;
    interest_rate?: true;
    loan_duration?: true;
    user_id?: true;
    company_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type LoanCountAggregateInputType = {
    id?: true;
    loan_type?: true;
    loan_amount?: true;
    interest_rate?: true;
    loan_duration?: true;
    user_id?: true;
    company_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type LoanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which loan to aggregate.
     */
    where?: loanWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of loans to fetch.
     */
    orderBy?: loanOrderByWithRelationInput | loanOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: loanWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` loans from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` loans.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned loans
     **/
    _count?: true | LoanCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: LoanAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: LoanSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: LoanMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: LoanMaxAggregateInputType;
  };

  export type GetLoanAggregateType<T extends LoanAggregateArgs> = {
    [P in keyof T & keyof AggregateLoan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLoan[P]>
      : GetScalarType<T[P], AggregateLoan[P]>;
  };

  export type loanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: loanWhereInput;
    orderBy?: loanOrderByWithAggregationInput | loanOrderByWithAggregationInput[];
    by: LoanScalarFieldEnum[] | LoanScalarFieldEnum;
    having?: loanScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LoanCountAggregateInputType | true;
    _avg?: LoanAvgAggregateInputType;
    _sum?: LoanSumAggregateInputType;
    _min?: LoanMinAggregateInputType;
    _max?: LoanMaxAggregateInputType;
  };

  export type LoanGroupByOutputType = {
    id: string;
    loan_type: string;
    loan_amount: number;
    interest_rate: number;
    loan_duration: number;
    user_id: string;
    company_id: string;
    created_at: Date;
    updated_at: Date;
    _count: LoanCountAggregateOutputType | null;
    _avg: LoanAvgAggregateOutputType | null;
    _sum: LoanSumAggregateOutputType | null;
    _min: LoanMinAggregateOutputType | null;
    _max: LoanMaxAggregateOutputType | null;
  };

  type GetLoanGroupByPayload<T extends loanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LoanGroupByOutputType, T['by']> & {
        [P in keyof T & keyof LoanGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], LoanGroupByOutputType[P]>
          : GetScalarType<T[P], LoanGroupByOutputType[P]>;
      }
    >
  >;

  export type loanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      loan_type?: boolean;
      loan_amount?: boolean;
      interest_rate?: boolean;
      loan_duration?: boolean;
      user_id?: boolean;
      company_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      company?: boolean | companyDefaultArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
      payment_schedule?: boolean | loan$payment_scheduleArgs<ExtArgs>;
      _count?: boolean | LoanCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['loan']
  >;

  export type loanSelectScalar = {
    id?: boolean;
    loan_type?: boolean;
    loan_amount?: boolean;
    interest_rate?: boolean;
    loan_duration?: boolean;
    user_id?: boolean;
    company_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type loanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | companyDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    payment_schedule?: boolean | loan$payment_scheduleArgs<ExtArgs>;
    _count?: boolean | LoanCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $loanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'loan';
    objects: {
      company: Prisma.$companyPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
      payment_schedule: Prisma.$payment_schedulePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        loan_type: string;
        loan_amount: number;
        interest_rate: number;
        loan_duration: number;
        user_id: string;
        company_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['loan']
    >;
    composites: {};
  };

  type loanGetPayload<S extends boolean | null | undefined | loanDefaultArgs> = $Result.GetResult<
    Prisma.$loanPayload,
    S
  >;

  type loanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    loanFindManyArgs,
    'select' | 'include'
  > & {
    select?: LoanCountAggregateInputType | true;
  };

  export interface loanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['loan']; meta: { name: 'loan' } };
    /**
     * Find zero or one Loan that matches the filter.
     * @param {loanFindUniqueArgs} args - Arguments to find a Loan
     * @example
     * // Get one Loan
     * const loan = await prisma.loan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends loanFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, loanFindUniqueArgs<ExtArgs>>,
    ): Prisma__loanClient<$Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Loan that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {loanFindUniqueOrThrowArgs} args - Arguments to find a Loan
     * @example
     * // Get one Loan
     * const loan = await prisma.loan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends loanFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, loanFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__loanClient<$Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Loan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loanFindFirstArgs} args - Arguments to find a Loan
     * @example
     * // Get one Loan
     * const loan = await prisma.loan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends loanFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, loanFindFirstArgs<ExtArgs>>,
    ): Prisma__loanClient<$Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Loan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loanFindFirstOrThrowArgs} args - Arguments to find a Loan
     * @example
     * // Get one Loan
     * const loan = await prisma.loan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends loanFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, loanFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__loanClient<$Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Loans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loanFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Loans
     * const loans = await prisma.loan.findMany()
     *
     * // Get first 10 Loans
     * const loans = await prisma.loan.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const loanWithIdOnly = await prisma.loan.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends loanFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, loanFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Loan.
     * @param {loanCreateArgs} args - Arguments to create a Loan.
     * @example
     * // Create one Loan
     * const Loan = await prisma.loan.create({
     *   data: {
     *     // ... data to create a Loan
     *   }
     * })
     *
     **/
    create<T extends loanCreateArgs<ExtArgs>>(
      args: SelectSubset<T, loanCreateArgs<ExtArgs>>,
    ): Prisma__loanClient<$Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Loans.
     *     @param {loanCreateManyArgs} args - Arguments to create many Loans.
     *     @example
     *     // Create many Loans
     *     const loan = await prisma.loan.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends loanCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, loanCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Loan.
     * @param {loanDeleteArgs} args - Arguments to delete one Loan.
     * @example
     * // Delete one Loan
     * const Loan = await prisma.loan.delete({
     *   where: {
     *     // ... filter to delete one Loan
     *   }
     * })
     *
     **/
    delete<T extends loanDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, loanDeleteArgs<ExtArgs>>,
    ): Prisma__loanClient<$Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Loan.
     * @param {loanUpdateArgs} args - Arguments to update one Loan.
     * @example
     * // Update one Loan
     * const loan = await prisma.loan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends loanUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, loanUpdateArgs<ExtArgs>>,
    ): Prisma__loanClient<$Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Loans.
     * @param {loanDeleteManyArgs} args - Arguments to filter Loans to delete.
     * @example
     * // Delete a few Loans
     * const { count } = await prisma.loan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends loanDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, loanDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Loans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Loans
     * const loan = await prisma.loan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends loanUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, loanUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Loan.
     * @param {loanUpsertArgs} args - Arguments to update or create a Loan.
     * @example
     * // Update or create a Loan
     * const loan = await prisma.loan.upsert({
     *   create: {
     *     // ... data to create a Loan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Loan we want to update
     *   }
     * })
     **/
    upsert<T extends loanUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, loanUpsertArgs<ExtArgs>>,
    ): Prisma__loanClient<$Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Loans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loanCountArgs} args - Arguments to filter Loans to count.
     * @example
     * // Count the number of Loans
     * const count = await prisma.loan.count({
     *   where: {
     *     // ... the filter for the Loans we want to count
     *   }
     * })
     **/
    count<T extends loanCountArgs>(
      args?: Subset<T, loanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LoanCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Loan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends LoanAggregateArgs>(
      args: Subset<T, LoanAggregateArgs>,
    ): Prisma.PrismaPromise<GetLoanAggregateType<T>>;

    /**
     * Group by Loan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends loanGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: loanGroupByArgs['orderBy'] }
        : { orderBy?: loanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, loanGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetLoanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the loan model
     */
    readonly fields: loanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for loan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__loanClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    company<T extends companyDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, companyDefaultArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    payment_schedule<T extends loan$payment_scheduleArgs<ExtArgs> = {}>(
      args?: Subset<T, loan$payment_scheduleArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$payment_schedulePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the loan model
   */
  interface loanFieldRefs {
    readonly id: FieldRef<'loan', 'String'>;
    readonly loan_type: FieldRef<'loan', 'String'>;
    readonly loan_amount: FieldRef<'loan', 'Int'>;
    readonly interest_rate: FieldRef<'loan', 'Int'>;
    readonly loan_duration: FieldRef<'loan', 'Int'>;
    readonly user_id: FieldRef<'loan', 'String'>;
    readonly company_id: FieldRef<'loan', 'String'>;
    readonly created_at: FieldRef<'loan', 'DateTime'>;
    readonly updated_at: FieldRef<'loan', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * loan findUnique
   */
  export type loanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loanInclude<ExtArgs> | null;
    /**
     * Filter, which loan to fetch.
     */
    where: loanWhereUniqueInput;
  };

  /**
   * loan findUniqueOrThrow
   */
  export type loanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loanInclude<ExtArgs> | null;
    /**
     * Filter, which loan to fetch.
     */
    where: loanWhereUniqueInput;
  };

  /**
   * loan findFirst
   */
  export type loanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loanInclude<ExtArgs> | null;
    /**
     * Filter, which loan to fetch.
     */
    where?: loanWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of loans to fetch.
     */
    orderBy?: loanOrderByWithRelationInput | loanOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for loans.
     */
    cursor?: loanWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` loans from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` loans.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of loans.
     */
    distinct?: LoanScalarFieldEnum | LoanScalarFieldEnum[];
  };

  /**
   * loan findFirstOrThrow
   */
  export type loanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loanInclude<ExtArgs> | null;
    /**
     * Filter, which loan to fetch.
     */
    where?: loanWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of loans to fetch.
     */
    orderBy?: loanOrderByWithRelationInput | loanOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for loans.
     */
    cursor?: loanWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` loans from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` loans.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of loans.
     */
    distinct?: LoanScalarFieldEnum | LoanScalarFieldEnum[];
  };

  /**
   * loan findMany
   */
  export type loanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loanInclude<ExtArgs> | null;
    /**
     * Filter, which loans to fetch.
     */
    where?: loanWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of loans to fetch.
     */
    orderBy?: loanOrderByWithRelationInput | loanOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing loans.
     */
    cursor?: loanWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` loans from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` loans.
     */
    skip?: number;
    distinct?: LoanScalarFieldEnum | LoanScalarFieldEnum[];
  };

  /**
   * loan create
   */
  export type loanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loanInclude<ExtArgs> | null;
    /**
     * The data needed to create a loan.
     */
    data: XOR<loanCreateInput, loanUncheckedCreateInput>;
  };

  /**
   * loan createMany
   */
  export type loanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many loans.
     */
    data: loanCreateManyInput | loanCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * loan update
   */
  export type loanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loanInclude<ExtArgs> | null;
    /**
     * The data needed to update a loan.
     */
    data: XOR<loanUpdateInput, loanUncheckedUpdateInput>;
    /**
     * Choose, which loan to update.
     */
    where: loanWhereUniqueInput;
  };

  /**
   * loan updateMany
   */
  export type loanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update loans.
     */
    data: XOR<loanUpdateManyMutationInput, loanUncheckedUpdateManyInput>;
    /**
     * Filter which loans to update
     */
    where?: loanWhereInput;
  };

  /**
   * loan upsert
   */
  export type loanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loanInclude<ExtArgs> | null;
    /**
     * The filter to search for the loan to update in case it exists.
     */
    where: loanWhereUniqueInput;
    /**
     * In case the loan found by the `where` argument doesn't exist, create a new loan with this data.
     */
    create: XOR<loanCreateInput, loanUncheckedCreateInput>;
    /**
     * In case the loan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<loanUpdateInput, loanUncheckedUpdateInput>;
  };

  /**
   * loan delete
   */
  export type loanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loanInclude<ExtArgs> | null;
    /**
     * Filter which loan to delete.
     */
    where: loanWhereUniqueInput;
  };

  /**
   * loan deleteMany
   */
  export type loanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which loans to delete
     */
    where?: loanWhereInput;
  };

  /**
   * loan.payment_schedule
   */
  export type loan$payment_scheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_schedule
     */
    select?: payment_scheduleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: payment_scheduleInclude<ExtArgs> | null;
    where?: payment_scheduleWhereInput;
    orderBy?: payment_scheduleOrderByWithRelationInput | payment_scheduleOrderByWithRelationInput[];
    cursor?: payment_scheduleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Payment_scheduleScalarFieldEnum | Payment_scheduleScalarFieldEnum[];
  };

  /**
   * loan without action
   */
  export type loanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loanInclude<ExtArgs> | null;
  };

  /**
   * Model loan_officer
   */

  export type AggregateLoan_officer = {
    _count: Loan_officerCountAggregateOutputType | null;
    _avg: Loan_officerAvgAggregateOutputType | null;
    _sum: Loan_officerSumAggregateOutputType | null;
    _min: Loan_officerMinAggregateOutputType | null;
    _max: Loan_officerMaxAggregateOutputType | null;
  };

  export type Loan_officerAvgAggregateOutputType = {
    experience: number | null;
    rating: number | null;
  };

  export type Loan_officerSumAggregateOutputType = {
    experience: number | null;
    rating: number | null;
  };

  export type Loan_officerMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    experience: number | null;
    company_id: string | null;
    availability: string | null;
    rating: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Loan_officerMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    experience: number | null;
    company_id: string | null;
    availability: string | null;
    rating: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Loan_officerCountAggregateOutputType = {
    id: number;
    user_id: number;
    experience: number;
    company_id: number;
    availability: number;
    rating: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Loan_officerAvgAggregateInputType = {
    experience?: true;
    rating?: true;
  };

  export type Loan_officerSumAggregateInputType = {
    experience?: true;
    rating?: true;
  };

  export type Loan_officerMinAggregateInputType = {
    id?: true;
    user_id?: true;
    experience?: true;
    company_id?: true;
    availability?: true;
    rating?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Loan_officerMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    experience?: true;
    company_id?: true;
    availability?: true;
    rating?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Loan_officerCountAggregateInputType = {
    id?: true;
    user_id?: true;
    experience?: true;
    company_id?: true;
    availability?: true;
    rating?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Loan_officerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which loan_officer to aggregate.
     */
    where?: loan_officerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of loan_officers to fetch.
     */
    orderBy?: loan_officerOrderByWithRelationInput | loan_officerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: loan_officerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` loan_officers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` loan_officers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned loan_officers
     **/
    _count?: true | Loan_officerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: Loan_officerAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: Loan_officerSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Loan_officerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Loan_officerMaxAggregateInputType;
  };

  export type GetLoan_officerAggregateType<T extends Loan_officerAggregateArgs> = {
    [P in keyof T & keyof AggregateLoan_officer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLoan_officer[P]>
      : GetScalarType<T[P], AggregateLoan_officer[P]>;
  };

  export type loan_officerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: loan_officerWhereInput;
    orderBy?: loan_officerOrderByWithAggregationInput | loan_officerOrderByWithAggregationInput[];
    by: Loan_officerScalarFieldEnum[] | Loan_officerScalarFieldEnum;
    having?: loan_officerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Loan_officerCountAggregateInputType | true;
    _avg?: Loan_officerAvgAggregateInputType;
    _sum?: Loan_officerSumAggregateInputType;
    _min?: Loan_officerMinAggregateInputType;
    _max?: Loan_officerMaxAggregateInputType;
  };

  export type Loan_officerGroupByOutputType = {
    id: string;
    user_id: string;
    experience: number | null;
    company_id: string;
    availability: string | null;
    rating: number | null;
    created_at: Date;
    updated_at: Date;
    _count: Loan_officerCountAggregateOutputType | null;
    _avg: Loan_officerAvgAggregateOutputType | null;
    _sum: Loan_officerSumAggregateOutputType | null;
    _min: Loan_officerMinAggregateOutputType | null;
    _max: Loan_officerMaxAggregateOutputType | null;
  };

  type GetLoan_officerGroupByPayload<T extends loan_officerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Loan_officerGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Loan_officerGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Loan_officerGroupByOutputType[P]>
          : GetScalarType<T[P], Loan_officerGroupByOutputType[P]>;
      }
    >
  >;

  export type loan_officerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        user_id?: boolean;
        experience?: boolean;
        company_id?: boolean;
        availability?: boolean;
        rating?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        company?: boolean | companyDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['loan_officer']
    >;

  export type loan_officerSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    experience?: boolean;
    company_id?: boolean;
    availability?: boolean;
    rating?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type loan_officerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | companyDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $loan_officerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'loan_officer';
    objects: {
      company: Prisma.$companyPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        experience: number | null;
        company_id: string;
        availability: string | null;
        rating: number | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['loan_officer']
    >;
    composites: {};
  };

  type loan_officerGetPayload<S extends boolean | null | undefined | loan_officerDefaultArgs> = $Result.GetResult<
    Prisma.$loan_officerPayload,
    S
  >;

  type loan_officerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    loan_officerFindManyArgs,
    'select' | 'include'
  > & {
    select?: Loan_officerCountAggregateInputType | true;
  };

  export interface loan_officerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['loan_officer']; meta: { name: 'loan_officer' } };
    /**
     * Find zero or one Loan_officer that matches the filter.
     * @param {loan_officerFindUniqueArgs} args - Arguments to find a Loan_officer
     * @example
     * // Get one Loan_officer
     * const loan_officer = await prisma.loan_officer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends loan_officerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, loan_officerFindUniqueArgs<ExtArgs>>,
    ): Prisma__loan_officerClient<
      $Result.GetResult<Prisma.$loan_officerPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Loan_officer that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {loan_officerFindUniqueOrThrowArgs} args - Arguments to find a Loan_officer
     * @example
     * // Get one Loan_officer
     * const loan_officer = await prisma.loan_officer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends loan_officerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, loan_officerFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__loan_officerClient<
      $Result.GetResult<Prisma.$loan_officerPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Loan_officer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loan_officerFindFirstArgs} args - Arguments to find a Loan_officer
     * @example
     * // Get one Loan_officer
     * const loan_officer = await prisma.loan_officer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends loan_officerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, loan_officerFindFirstArgs<ExtArgs>>,
    ): Prisma__loan_officerClient<
      $Result.GetResult<Prisma.$loan_officerPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Loan_officer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loan_officerFindFirstOrThrowArgs} args - Arguments to find a Loan_officer
     * @example
     * // Get one Loan_officer
     * const loan_officer = await prisma.loan_officer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends loan_officerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, loan_officerFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__loan_officerClient<
      $Result.GetResult<Prisma.$loan_officerPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Loan_officers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loan_officerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Loan_officers
     * const loan_officers = await prisma.loan_officer.findMany()
     *
     * // Get first 10 Loan_officers
     * const loan_officers = await prisma.loan_officer.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const loan_officerWithIdOnly = await prisma.loan_officer.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends loan_officerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, loan_officerFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loan_officerPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Loan_officer.
     * @param {loan_officerCreateArgs} args - Arguments to create a Loan_officer.
     * @example
     * // Create one Loan_officer
     * const Loan_officer = await prisma.loan_officer.create({
     *   data: {
     *     // ... data to create a Loan_officer
     *   }
     * })
     *
     **/
    create<T extends loan_officerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, loan_officerCreateArgs<ExtArgs>>,
    ): Prisma__loan_officerClient<$Result.GetResult<Prisma.$loan_officerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Loan_officers.
     *     @param {loan_officerCreateManyArgs} args - Arguments to create many Loan_officers.
     *     @example
     *     // Create many Loan_officers
     *     const loan_officer = await prisma.loan_officer.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends loan_officerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, loan_officerCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Loan_officer.
     * @param {loan_officerDeleteArgs} args - Arguments to delete one Loan_officer.
     * @example
     * // Delete one Loan_officer
     * const Loan_officer = await prisma.loan_officer.delete({
     *   where: {
     *     // ... filter to delete one Loan_officer
     *   }
     * })
     *
     **/
    delete<T extends loan_officerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, loan_officerDeleteArgs<ExtArgs>>,
    ): Prisma__loan_officerClient<$Result.GetResult<Prisma.$loan_officerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Loan_officer.
     * @param {loan_officerUpdateArgs} args - Arguments to update one Loan_officer.
     * @example
     * // Update one Loan_officer
     * const loan_officer = await prisma.loan_officer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends loan_officerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, loan_officerUpdateArgs<ExtArgs>>,
    ): Prisma__loan_officerClient<$Result.GetResult<Prisma.$loan_officerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Loan_officers.
     * @param {loan_officerDeleteManyArgs} args - Arguments to filter Loan_officers to delete.
     * @example
     * // Delete a few Loan_officers
     * const { count } = await prisma.loan_officer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends loan_officerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, loan_officerDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Loan_officers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loan_officerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Loan_officers
     * const loan_officer = await prisma.loan_officer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends loan_officerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, loan_officerUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Loan_officer.
     * @param {loan_officerUpsertArgs} args - Arguments to update or create a Loan_officer.
     * @example
     * // Update or create a Loan_officer
     * const loan_officer = await prisma.loan_officer.upsert({
     *   create: {
     *     // ... data to create a Loan_officer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Loan_officer we want to update
     *   }
     * })
     **/
    upsert<T extends loan_officerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, loan_officerUpsertArgs<ExtArgs>>,
    ): Prisma__loan_officerClient<$Result.GetResult<Prisma.$loan_officerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Loan_officers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loan_officerCountArgs} args - Arguments to filter Loan_officers to count.
     * @example
     * // Count the number of Loan_officers
     * const count = await prisma.loan_officer.count({
     *   where: {
     *     // ... the filter for the Loan_officers we want to count
     *   }
     * })
     **/
    count<T extends loan_officerCountArgs>(
      args?: Subset<T, loan_officerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Loan_officerCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Loan_officer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Loan_officerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Loan_officerAggregateArgs>(
      args: Subset<T, Loan_officerAggregateArgs>,
    ): Prisma.PrismaPromise<GetLoan_officerAggregateType<T>>;

    /**
     * Group by Loan_officer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {loan_officerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends loan_officerGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: loan_officerGroupByArgs['orderBy'] }
        : { orderBy?: loan_officerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, loan_officerGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetLoan_officerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the loan_officer model
     */
    readonly fields: loan_officerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for loan_officer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__loan_officerClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    company<T extends companyDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, companyDefaultArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the loan_officer model
   */
  interface loan_officerFieldRefs {
    readonly id: FieldRef<'loan_officer', 'String'>;
    readonly user_id: FieldRef<'loan_officer', 'String'>;
    readonly experience: FieldRef<'loan_officer', 'Int'>;
    readonly company_id: FieldRef<'loan_officer', 'String'>;
    readonly availability: FieldRef<'loan_officer', 'String'>;
    readonly rating: FieldRef<'loan_officer', 'Int'>;
    readonly created_at: FieldRef<'loan_officer', 'DateTime'>;
    readonly updated_at: FieldRef<'loan_officer', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * loan_officer findUnique
   */
  export type loan_officerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_officer
     */
    select?: loan_officerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loan_officerInclude<ExtArgs> | null;
    /**
     * Filter, which loan_officer to fetch.
     */
    where: loan_officerWhereUniqueInput;
  };

  /**
   * loan_officer findUniqueOrThrow
   */
  export type loan_officerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_officer
     */
    select?: loan_officerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loan_officerInclude<ExtArgs> | null;
    /**
     * Filter, which loan_officer to fetch.
     */
    where: loan_officerWhereUniqueInput;
  };

  /**
   * loan_officer findFirst
   */
  export type loan_officerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_officer
     */
    select?: loan_officerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loan_officerInclude<ExtArgs> | null;
    /**
     * Filter, which loan_officer to fetch.
     */
    where?: loan_officerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of loan_officers to fetch.
     */
    orderBy?: loan_officerOrderByWithRelationInput | loan_officerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for loan_officers.
     */
    cursor?: loan_officerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` loan_officers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` loan_officers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of loan_officers.
     */
    distinct?: Loan_officerScalarFieldEnum | Loan_officerScalarFieldEnum[];
  };

  /**
   * loan_officer findFirstOrThrow
   */
  export type loan_officerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_officer
     */
    select?: loan_officerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loan_officerInclude<ExtArgs> | null;
    /**
     * Filter, which loan_officer to fetch.
     */
    where?: loan_officerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of loan_officers to fetch.
     */
    orderBy?: loan_officerOrderByWithRelationInput | loan_officerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for loan_officers.
     */
    cursor?: loan_officerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` loan_officers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` loan_officers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of loan_officers.
     */
    distinct?: Loan_officerScalarFieldEnum | Loan_officerScalarFieldEnum[];
  };

  /**
   * loan_officer findMany
   */
  export type loan_officerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_officer
     */
    select?: loan_officerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loan_officerInclude<ExtArgs> | null;
    /**
     * Filter, which loan_officers to fetch.
     */
    where?: loan_officerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of loan_officers to fetch.
     */
    orderBy?: loan_officerOrderByWithRelationInput | loan_officerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing loan_officers.
     */
    cursor?: loan_officerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` loan_officers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` loan_officers.
     */
    skip?: number;
    distinct?: Loan_officerScalarFieldEnum | Loan_officerScalarFieldEnum[];
  };

  /**
   * loan_officer create
   */
  export type loan_officerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_officer
     */
    select?: loan_officerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loan_officerInclude<ExtArgs> | null;
    /**
     * The data needed to create a loan_officer.
     */
    data: XOR<loan_officerCreateInput, loan_officerUncheckedCreateInput>;
  };

  /**
   * loan_officer createMany
   */
  export type loan_officerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many loan_officers.
     */
    data: loan_officerCreateManyInput | loan_officerCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * loan_officer update
   */
  export type loan_officerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_officer
     */
    select?: loan_officerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loan_officerInclude<ExtArgs> | null;
    /**
     * The data needed to update a loan_officer.
     */
    data: XOR<loan_officerUpdateInput, loan_officerUncheckedUpdateInput>;
    /**
     * Choose, which loan_officer to update.
     */
    where: loan_officerWhereUniqueInput;
  };

  /**
   * loan_officer updateMany
   */
  export type loan_officerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update loan_officers.
     */
    data: XOR<loan_officerUpdateManyMutationInput, loan_officerUncheckedUpdateManyInput>;
    /**
     * Filter which loan_officers to update
     */
    where?: loan_officerWhereInput;
  };

  /**
   * loan_officer upsert
   */
  export type loan_officerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_officer
     */
    select?: loan_officerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loan_officerInclude<ExtArgs> | null;
    /**
     * The filter to search for the loan_officer to update in case it exists.
     */
    where: loan_officerWhereUniqueInput;
    /**
     * In case the loan_officer found by the `where` argument doesn't exist, create a new loan_officer with this data.
     */
    create: XOR<loan_officerCreateInput, loan_officerUncheckedCreateInput>;
    /**
     * In case the loan_officer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<loan_officerUpdateInput, loan_officerUncheckedUpdateInput>;
  };

  /**
   * loan_officer delete
   */
  export type loan_officerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_officer
     */
    select?: loan_officerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loan_officerInclude<ExtArgs> | null;
    /**
     * Filter which loan_officer to delete.
     */
    where: loan_officerWhereUniqueInput;
  };

  /**
   * loan_officer deleteMany
   */
  export type loan_officerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which loan_officers to delete
     */
    where?: loan_officerWhereInput;
  };

  /**
   * loan_officer without action
   */
  export type loan_officerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_officer
     */
    select?: loan_officerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loan_officerInclude<ExtArgs> | null;
  };

  /**
   * Model payment_schedule
   */

  export type AggregatePayment_schedule = {
    _count: Payment_scheduleCountAggregateOutputType | null;
    _avg: Payment_scheduleAvgAggregateOutputType | null;
    _sum: Payment_scheduleSumAggregateOutputType | null;
    _min: Payment_scheduleMinAggregateOutputType | null;
    _max: Payment_scheduleMaxAggregateOutputType | null;
  };

  export type Payment_scheduleAvgAggregateOutputType = {
    due_amount: number | null;
    payment_amount: number | null;
    balance: number | null;
  };

  export type Payment_scheduleSumAggregateOutputType = {
    due_amount: number | null;
    payment_amount: number | null;
    balance: number | null;
  };

  export type Payment_scheduleMinAggregateOutputType = {
    id: string | null;
    loan_id: string | null;
    due_date: Date | null;
    due_amount: number | null;
    payment_date: Date | null;
    payment_amount: number | null;
    balance: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Payment_scheduleMaxAggregateOutputType = {
    id: string | null;
    loan_id: string | null;
    due_date: Date | null;
    due_amount: number | null;
    payment_date: Date | null;
    payment_amount: number | null;
    balance: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Payment_scheduleCountAggregateOutputType = {
    id: number;
    loan_id: number;
    due_date: number;
    due_amount: number;
    payment_date: number;
    payment_amount: number;
    balance: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Payment_scheduleAvgAggregateInputType = {
    due_amount?: true;
    payment_amount?: true;
    balance?: true;
  };

  export type Payment_scheduleSumAggregateInputType = {
    due_amount?: true;
    payment_amount?: true;
    balance?: true;
  };

  export type Payment_scheduleMinAggregateInputType = {
    id?: true;
    loan_id?: true;
    due_date?: true;
    due_amount?: true;
    payment_date?: true;
    payment_amount?: true;
    balance?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Payment_scheduleMaxAggregateInputType = {
    id?: true;
    loan_id?: true;
    due_date?: true;
    due_amount?: true;
    payment_date?: true;
    payment_amount?: true;
    balance?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Payment_scheduleCountAggregateInputType = {
    id?: true;
    loan_id?: true;
    due_date?: true;
    due_amount?: true;
    payment_date?: true;
    payment_amount?: true;
    balance?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Payment_scheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payment_schedule to aggregate.
     */
    where?: payment_scheduleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of payment_schedules to fetch.
     */
    orderBy?: payment_scheduleOrderByWithRelationInput | payment_scheduleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: payment_scheduleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` payment_schedules from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` payment_schedules.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned payment_schedules
     **/
    _count?: true | Payment_scheduleCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: Payment_scheduleAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: Payment_scheduleSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Payment_scheduleMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Payment_scheduleMaxAggregateInputType;
  };

  export type GetPayment_scheduleAggregateType<T extends Payment_scheduleAggregateArgs> = {
    [P in keyof T & keyof AggregatePayment_schedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment_schedule[P]>
      : GetScalarType<T[P], AggregatePayment_schedule[P]>;
  };

  export type payment_scheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: payment_scheduleWhereInput;
    orderBy?: payment_scheduleOrderByWithAggregationInput | payment_scheduleOrderByWithAggregationInput[];
    by: Payment_scheduleScalarFieldEnum[] | Payment_scheduleScalarFieldEnum;
    having?: payment_scheduleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Payment_scheduleCountAggregateInputType | true;
    _avg?: Payment_scheduleAvgAggregateInputType;
    _sum?: Payment_scheduleSumAggregateInputType;
    _min?: Payment_scheduleMinAggregateInputType;
    _max?: Payment_scheduleMaxAggregateInputType;
  };

  export type Payment_scheduleGroupByOutputType = {
    id: string;
    loan_id: string;
    due_date: Date;
    due_amount: number;
    payment_date: Date | null;
    payment_amount: number | null;
    balance: number | null;
    created_at: Date;
    updated_at: Date;
    _count: Payment_scheduleCountAggregateOutputType | null;
    _avg: Payment_scheduleAvgAggregateOutputType | null;
    _sum: Payment_scheduleSumAggregateOutputType | null;
    _min: Payment_scheduleMinAggregateOutputType | null;
    _max: Payment_scheduleMaxAggregateOutputType | null;
  };

  type GetPayment_scheduleGroupByPayload<T extends payment_scheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Payment_scheduleGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Payment_scheduleGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Payment_scheduleGroupByOutputType[P]>
          : GetScalarType<T[P], Payment_scheduleGroupByOutputType[P]>;
      }
    >
  >;

  export type payment_scheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        loan_id?: boolean;
        due_date?: boolean;
        due_amount?: boolean;
        payment_date?: boolean;
        payment_amount?: boolean;
        balance?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        loan?: boolean | loanDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['payment_schedule']
    >;

  export type payment_scheduleSelectScalar = {
    id?: boolean;
    loan_id?: boolean;
    due_date?: boolean;
    due_amount?: boolean;
    payment_date?: boolean;
    payment_amount?: boolean;
    balance?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type payment_scheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loan?: boolean | loanDefaultArgs<ExtArgs>;
  };

  export type $payment_schedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'payment_schedule';
    objects: {
      loan: Prisma.$loanPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        loan_id: string;
        due_date: Date;
        due_amount: number;
        payment_date: Date | null;
        payment_amount: number | null;
        balance: number | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['payment_schedule']
    >;
    composites: {};
  };

  type payment_scheduleGetPayload<S extends boolean | null | undefined | payment_scheduleDefaultArgs> =
    $Result.GetResult<Prisma.$payment_schedulePayload, S>;

  type payment_scheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    payment_scheduleFindManyArgs,
    'select' | 'include'
  > & {
    select?: Payment_scheduleCountAggregateInputType | true;
  };

  export interface payment_scheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['payment_schedule']; meta: { name: 'payment_schedule' } };
    /**
     * Find zero or one Payment_schedule that matches the filter.
     * @param {payment_scheduleFindUniqueArgs} args - Arguments to find a Payment_schedule
     * @example
     * // Get one Payment_schedule
     * const payment_schedule = await prisma.payment_schedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends payment_scheduleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, payment_scheduleFindUniqueArgs<ExtArgs>>,
    ): Prisma__payment_scheduleClient<
      $Result.GetResult<Prisma.$payment_schedulePayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Payment_schedule that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {payment_scheduleFindUniqueOrThrowArgs} args - Arguments to find a Payment_schedule
     * @example
     * // Get one Payment_schedule
     * const payment_schedule = await prisma.payment_schedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends payment_scheduleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, payment_scheduleFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__payment_scheduleClient<
      $Result.GetResult<Prisma.$payment_schedulePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Payment_schedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_scheduleFindFirstArgs} args - Arguments to find a Payment_schedule
     * @example
     * // Get one Payment_schedule
     * const payment_schedule = await prisma.payment_schedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends payment_scheduleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, payment_scheduleFindFirstArgs<ExtArgs>>,
    ): Prisma__payment_scheduleClient<
      $Result.GetResult<Prisma.$payment_schedulePayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Payment_schedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_scheduleFindFirstOrThrowArgs} args - Arguments to find a Payment_schedule
     * @example
     * // Get one Payment_schedule
     * const payment_schedule = await prisma.payment_schedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends payment_scheduleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, payment_scheduleFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__payment_scheduleClient<
      $Result.GetResult<Prisma.$payment_schedulePayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Payment_schedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_scheduleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payment_schedules
     * const payment_schedules = await prisma.payment_schedule.findMany()
     *
     * // Get first 10 Payment_schedules
     * const payment_schedules = await prisma.payment_schedule.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const payment_scheduleWithIdOnly = await prisma.payment_schedule.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends payment_scheduleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, payment_scheduleFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$payment_schedulePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Payment_schedule.
     * @param {payment_scheduleCreateArgs} args - Arguments to create a Payment_schedule.
     * @example
     * // Create one Payment_schedule
     * const Payment_schedule = await prisma.payment_schedule.create({
     *   data: {
     *     // ... data to create a Payment_schedule
     *   }
     * })
     *
     **/
    create<T extends payment_scheduleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, payment_scheduleCreateArgs<ExtArgs>>,
    ): Prisma__payment_scheduleClient<
      $Result.GetResult<Prisma.$payment_schedulePayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Payment_schedules.
     *     @param {payment_scheduleCreateManyArgs} args - Arguments to create many Payment_schedules.
     *     @example
     *     // Create many Payment_schedules
     *     const payment_schedule = await prisma.payment_schedule.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends payment_scheduleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, payment_scheduleCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Payment_schedule.
     * @param {payment_scheduleDeleteArgs} args - Arguments to delete one Payment_schedule.
     * @example
     * // Delete one Payment_schedule
     * const Payment_schedule = await prisma.payment_schedule.delete({
     *   where: {
     *     // ... filter to delete one Payment_schedule
     *   }
     * })
     *
     **/
    delete<T extends payment_scheduleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, payment_scheduleDeleteArgs<ExtArgs>>,
    ): Prisma__payment_scheduleClient<
      $Result.GetResult<Prisma.$payment_schedulePayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Payment_schedule.
     * @param {payment_scheduleUpdateArgs} args - Arguments to update one Payment_schedule.
     * @example
     * // Update one Payment_schedule
     * const payment_schedule = await prisma.payment_schedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends payment_scheduleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, payment_scheduleUpdateArgs<ExtArgs>>,
    ): Prisma__payment_scheduleClient<
      $Result.GetResult<Prisma.$payment_schedulePayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Payment_schedules.
     * @param {payment_scheduleDeleteManyArgs} args - Arguments to filter Payment_schedules to delete.
     * @example
     * // Delete a few Payment_schedules
     * const { count } = await prisma.payment_schedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends payment_scheduleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, payment_scheduleDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Payment_schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_scheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payment_schedules
     * const payment_schedule = await prisma.payment_schedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends payment_scheduleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, payment_scheduleUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Payment_schedule.
     * @param {payment_scheduleUpsertArgs} args - Arguments to update or create a Payment_schedule.
     * @example
     * // Update or create a Payment_schedule
     * const payment_schedule = await prisma.payment_schedule.upsert({
     *   create: {
     *     // ... data to create a Payment_schedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment_schedule we want to update
     *   }
     * })
     **/
    upsert<T extends payment_scheduleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, payment_scheduleUpsertArgs<ExtArgs>>,
    ): Prisma__payment_scheduleClient<
      $Result.GetResult<Prisma.$payment_schedulePayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Payment_schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_scheduleCountArgs} args - Arguments to filter Payment_schedules to count.
     * @example
     * // Count the number of Payment_schedules
     * const count = await prisma.payment_schedule.count({
     *   where: {
     *     // ... the filter for the Payment_schedules we want to count
     *   }
     * })
     **/
    count<T extends payment_scheduleCountArgs>(
      args?: Subset<T, payment_scheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Payment_scheduleCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Payment_schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Payment_scheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Payment_scheduleAggregateArgs>(
      args: Subset<T, Payment_scheduleAggregateArgs>,
    ): Prisma.PrismaPromise<GetPayment_scheduleAggregateType<T>>;

    /**
     * Group by Payment_schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_scheduleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends payment_scheduleGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: payment_scheduleGroupByArgs['orderBy'] }
        : { orderBy?: payment_scheduleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, payment_scheduleGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetPayment_scheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the payment_schedule model
     */
    readonly fields: payment_scheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for payment_schedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__payment_scheduleClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    loan<T extends loanDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, loanDefaultArgs<ExtArgs>>,
    ): Prisma__loanClient<
      $Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the payment_schedule model
   */
  interface payment_scheduleFieldRefs {
    readonly id: FieldRef<'payment_schedule', 'String'>;
    readonly loan_id: FieldRef<'payment_schedule', 'String'>;
    readonly due_date: FieldRef<'payment_schedule', 'DateTime'>;
    readonly due_amount: FieldRef<'payment_schedule', 'Int'>;
    readonly payment_date: FieldRef<'payment_schedule', 'DateTime'>;
    readonly payment_amount: FieldRef<'payment_schedule', 'Int'>;
    readonly balance: FieldRef<'payment_schedule', 'Int'>;
    readonly created_at: FieldRef<'payment_schedule', 'DateTime'>;
    readonly updated_at: FieldRef<'payment_schedule', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * payment_schedule findUnique
   */
  export type payment_scheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_schedule
     */
    select?: payment_scheduleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: payment_scheduleInclude<ExtArgs> | null;
    /**
     * Filter, which payment_schedule to fetch.
     */
    where: payment_scheduleWhereUniqueInput;
  };

  /**
   * payment_schedule findUniqueOrThrow
   */
  export type payment_scheduleFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the payment_schedule
     */
    select?: payment_scheduleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: payment_scheduleInclude<ExtArgs> | null;
    /**
     * Filter, which payment_schedule to fetch.
     */
    where: payment_scheduleWhereUniqueInput;
  };

  /**
   * payment_schedule findFirst
   */
  export type payment_scheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_schedule
     */
    select?: payment_scheduleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: payment_scheduleInclude<ExtArgs> | null;
    /**
     * Filter, which payment_schedule to fetch.
     */
    where?: payment_scheduleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of payment_schedules to fetch.
     */
    orderBy?: payment_scheduleOrderByWithRelationInput | payment_scheduleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for payment_schedules.
     */
    cursor?: payment_scheduleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` payment_schedules from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` payment_schedules.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of payment_schedules.
     */
    distinct?: Payment_scheduleScalarFieldEnum | Payment_scheduleScalarFieldEnum[];
  };

  /**
   * payment_schedule findFirstOrThrow
   */
  export type payment_scheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the payment_schedule
       */
      select?: payment_scheduleSelect<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well.
       */
      include?: payment_scheduleInclude<ExtArgs> | null;
      /**
       * Filter, which payment_schedule to fetch.
       */
      where?: payment_scheduleWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of payment_schedules to fetch.
       */
      orderBy?: payment_scheduleOrderByWithRelationInput | payment_scheduleOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for searching for payment_schedules.
       */
      cursor?: payment_scheduleWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` payment_schedules from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` payment_schedules.
       */
      skip?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
       *
       * Filter by unique combinations of payment_schedules.
       */
      distinct?: Payment_scheduleScalarFieldEnum | Payment_scheduleScalarFieldEnum[];
    };

  /**
   * payment_schedule findMany
   */
  export type payment_scheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_schedule
     */
    select?: payment_scheduleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: payment_scheduleInclude<ExtArgs> | null;
    /**
     * Filter, which payment_schedules to fetch.
     */
    where?: payment_scheduleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of payment_schedules to fetch.
     */
    orderBy?: payment_scheduleOrderByWithRelationInput | payment_scheduleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing payment_schedules.
     */
    cursor?: payment_scheduleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` payment_schedules from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` payment_schedules.
     */
    skip?: number;
    distinct?: Payment_scheduleScalarFieldEnum | Payment_scheduleScalarFieldEnum[];
  };

  /**
   * payment_schedule create
   */
  export type payment_scheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_schedule
     */
    select?: payment_scheduleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: payment_scheduleInclude<ExtArgs> | null;
    /**
     * The data needed to create a payment_schedule.
     */
    data: XOR<payment_scheduleCreateInput, payment_scheduleUncheckedCreateInput>;
  };

  /**
   * payment_schedule createMany
   */
  export type payment_scheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many payment_schedules.
     */
    data: payment_scheduleCreateManyInput | payment_scheduleCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * payment_schedule update
   */
  export type payment_scheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_schedule
     */
    select?: payment_scheduleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: payment_scheduleInclude<ExtArgs> | null;
    /**
     * The data needed to update a payment_schedule.
     */
    data: XOR<payment_scheduleUpdateInput, payment_scheduleUncheckedUpdateInput>;
    /**
     * Choose, which payment_schedule to update.
     */
    where: payment_scheduleWhereUniqueInput;
  };

  /**
   * payment_schedule updateMany
   */
  export type payment_scheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update payment_schedules.
     */
    data: XOR<payment_scheduleUpdateManyMutationInput, payment_scheduleUncheckedUpdateManyInput>;
    /**
     * Filter which payment_schedules to update
     */
    where?: payment_scheduleWhereInput;
  };

  /**
   * payment_schedule upsert
   */
  export type payment_scheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_schedule
     */
    select?: payment_scheduleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: payment_scheduleInclude<ExtArgs> | null;
    /**
     * The filter to search for the payment_schedule to update in case it exists.
     */
    where: payment_scheduleWhereUniqueInput;
    /**
     * In case the payment_schedule found by the `where` argument doesn't exist, create a new payment_schedule with this data.
     */
    create: XOR<payment_scheduleCreateInput, payment_scheduleUncheckedCreateInput>;
    /**
     * In case the payment_schedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<payment_scheduleUpdateInput, payment_scheduleUncheckedUpdateInput>;
  };

  /**
   * payment_schedule delete
   */
  export type payment_scheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_schedule
     */
    select?: payment_scheduleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: payment_scheduleInclude<ExtArgs> | null;
    /**
     * Filter which payment_schedule to delete.
     */
    where: payment_scheduleWhereUniqueInput;
  };

  /**
   * payment_schedule deleteMany
   */
  export type payment_scheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payment_schedules to delete
     */
    where?: payment_scheduleWhereInput;
  };

  /**
   * payment_schedule without action
   */
  export type payment_scheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_schedule
     */
    select?: payment_scheduleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: payment_scheduleInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    firstName: number;
    lastName: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      company?: boolean | user$companyArgs<ExtArgs>;
      financial_advisor?: boolean | user$financial_advisorArgs<ExtArgs>;
      loan?: boolean | user$loanArgs<ExtArgs>;
      loan_officer?: boolean | user$loan_officerArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | user$companyArgs<ExtArgs>;
    financial_advisor?: boolean | user$financial_advisorArgs<ExtArgs>;
    loan?: boolean | user$loanArgs<ExtArgs>;
    loan_officer?: boolean | user$loan_officerArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      company: Prisma.$companyPayload<ExtArgs>[];
      financial_advisor: Prisma.$financial_advisorPayload<ExtArgs>[];
      loan: Prisma.$loanPayload<ExtArgs>[];
      loan_officer: Prisma.$loan_officerPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        firstName: string | null;
        lastName: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    company<T extends user$companyArgs<ExtArgs> = {}>(
      args?: Subset<T, user$companyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findMany'> | Null>;

    financial_advisor<T extends user$financial_advisorArgs<ExtArgs> = {}>(
      args?: Subset<T, user$financial_advisorArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$financial_advisorPayload<ExtArgs>, T, 'findMany'> | Null>;

    loan<T extends user$loanArgs<ExtArgs> = {}>(
      args?: Subset<T, user$loanArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loanPayload<ExtArgs>, T, 'findMany'> | Null>;

    loan_officer<T extends user$loan_officerArgs<ExtArgs> = {}>(
      args?: Subset<T, user$loan_officerArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$loan_officerPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly firstName: FieldRef<'user', 'String'>;
    readonly lastName: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.company
   */
  export type user$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    where?: companyWhereInput;
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    cursor?: companyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * user.financial_advisor
   */
  export type user$financial_advisorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the financial_advisor
     */
    select?: financial_advisorSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: financial_advisorInclude<ExtArgs> | null;
    where?: financial_advisorWhereInput;
    orderBy?: financial_advisorOrderByWithRelationInput | financial_advisorOrderByWithRelationInput[];
    cursor?: financial_advisorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Financial_advisorScalarFieldEnum | Financial_advisorScalarFieldEnum[];
  };

  /**
   * user.loan
   */
  export type user$loanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan
     */
    select?: loanSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loanInclude<ExtArgs> | null;
    where?: loanWhereInput;
    orderBy?: loanOrderByWithRelationInput | loanOrderByWithRelationInput[];
    cursor?: loanWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: LoanScalarFieldEnum | LoanScalarFieldEnum[];
  };

  /**
   * user.loan_officer
   */
  export type user$loan_officerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the loan_officer
     */
    select?: loan_officerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: loan_officerInclude<ExtArgs> | null;
    where?: loan_officerWhereInput;
    orderBy?: loan_officerOrderByWithRelationInput | loan_officerOrderByWithRelationInput[];
    cursor?: loan_officerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Loan_officerScalarFieldEnum | Loan_officerScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const CompanyScalarFieldEnum: {
    id: 'id';
    description: 'description';
    established_date: 'established_date';
    location: 'location';
    sector: 'sector';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    user_id: 'user_id';
    tenant_id: 'tenant_id';
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum];

  export const Financial_advisorScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    experience: 'experience';
    specialization: 'specialization';
    company_id: 'company_id';
    availability: 'availability';
    rating: 'rating';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Financial_advisorScalarFieldEnum =
    (typeof Financial_advisorScalarFieldEnum)[keyof typeof Financial_advisorScalarFieldEnum];

  export const LoanScalarFieldEnum: {
    id: 'id';
    loan_type: 'loan_type';
    loan_amount: 'loan_amount';
    interest_rate: 'interest_rate';
    loan_duration: 'loan_duration';
    user_id: 'user_id';
    company_id: 'company_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type LoanScalarFieldEnum = (typeof LoanScalarFieldEnum)[keyof typeof LoanScalarFieldEnum];

  export const Loan_officerScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    experience: 'experience';
    company_id: 'company_id';
    availability: 'availability';
    rating: 'rating';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Loan_officerScalarFieldEnum =
    (typeof Loan_officerScalarFieldEnum)[keyof typeof Loan_officerScalarFieldEnum];

  export const Payment_scheduleScalarFieldEnum: {
    id: 'id';
    loan_id: 'loan_id';
    due_date: 'due_date';
    due_amount: 'due_amount';
    payment_date: 'payment_date';
    payment_amount: 'payment_amount';
    balance: 'balance';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Payment_scheduleScalarFieldEnum =
    (typeof Payment_scheduleScalarFieldEnum)[keyof typeof Payment_scheduleScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    firstName: 'firstName';
    lastName: 'lastName';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type companyWhereInput = {
    AND?: companyWhereInput | companyWhereInput[];
    OR?: companyWhereInput[];
    NOT?: companyWhereInput | companyWhereInput[];
    id?: UuidFilter<'company'> | string;
    description?: StringNullableFilter<'company'> | string | null;
    established_date?: DateTimeNullableFilter<'company'> | Date | string | null;
    location?: StringNullableFilter<'company'> | string | null;
    sector?: StringNullableFilter<'company'> | string | null;
    name?: StringFilter<'company'> | string;
    created_at?: DateTimeFilter<'company'> | Date | string;
    updated_at?: DateTimeFilter<'company'> | Date | string;
    user_id?: UuidFilter<'company'> | string;
    tenant_id?: StringFilter<'company'> | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
    financial_advisor?: Financial_advisorListRelationFilter;
    loan?: LoanListRelationFilter;
    loan_officer?: Loan_officerListRelationFilter;
  };

  export type companyOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    established_date?: SortOrderInput | SortOrder;
    location?: SortOrderInput | SortOrder;
    sector?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    user?: userOrderByWithRelationInput;
    financial_advisor?: financial_advisorOrderByRelationAggregateInput;
    loan?: loanOrderByRelationAggregateInput;
    loan_officer?: loan_officerOrderByRelationAggregateInput;
  };

  export type companyWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: companyWhereInput | companyWhereInput[];
      OR?: companyWhereInput[];
      NOT?: companyWhereInput | companyWhereInput[];
      description?: StringNullableFilter<'company'> | string | null;
      established_date?: DateTimeNullableFilter<'company'> | Date | string | null;
      location?: StringNullableFilter<'company'> | string | null;
      sector?: StringNullableFilter<'company'> | string | null;
      name?: StringFilter<'company'> | string;
      created_at?: DateTimeFilter<'company'> | Date | string;
      updated_at?: DateTimeFilter<'company'> | Date | string;
      user_id?: UuidFilter<'company'> | string;
      tenant_id?: StringFilter<'company'> | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
      financial_advisor?: Financial_advisorListRelationFilter;
      loan?: LoanListRelationFilter;
      loan_officer?: Loan_officerListRelationFilter;
    },
    'id'
  >;

  export type companyOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    established_date?: SortOrderInput | SortOrder;
    location?: SortOrderInput | SortOrder;
    sector?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    _count?: companyCountOrderByAggregateInput;
    _max?: companyMaxOrderByAggregateInput;
    _min?: companyMinOrderByAggregateInput;
  };

  export type companyScalarWhereWithAggregatesInput = {
    AND?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    OR?: companyScalarWhereWithAggregatesInput[];
    NOT?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'company'> | string;
    description?: StringNullableWithAggregatesFilter<'company'> | string | null;
    established_date?: DateTimeNullableWithAggregatesFilter<'company'> | Date | string | null;
    location?: StringNullableWithAggregatesFilter<'company'> | string | null;
    sector?: StringNullableWithAggregatesFilter<'company'> | string | null;
    name?: StringWithAggregatesFilter<'company'> | string;
    created_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    user_id?: UuidWithAggregatesFilter<'company'> | string;
    tenant_id?: StringWithAggregatesFilter<'company'> | string;
  };

  export type financial_advisorWhereInput = {
    AND?: financial_advisorWhereInput | financial_advisorWhereInput[];
    OR?: financial_advisorWhereInput[];
    NOT?: financial_advisorWhereInput | financial_advisorWhereInput[];
    id?: UuidFilter<'financial_advisor'> | string;
    user_id?: UuidFilter<'financial_advisor'> | string;
    experience?: IntNullableFilter<'financial_advisor'> | number | null;
    specialization?: StringNullableFilter<'financial_advisor'> | string | null;
    company_id?: UuidFilter<'financial_advisor'> | string;
    availability?: StringNullableFilter<'financial_advisor'> | string | null;
    rating?: IntNullableFilter<'financial_advisor'> | number | null;
    created_at?: DateTimeFilter<'financial_advisor'> | Date | string;
    updated_at?: DateTimeFilter<'financial_advisor'> | Date | string;
    company?: XOR<CompanyRelationFilter, companyWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type financial_advisorOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    experience?: SortOrderInput | SortOrder;
    specialization?: SortOrderInput | SortOrder;
    company_id?: SortOrder;
    availability?: SortOrderInput | SortOrder;
    rating?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    company?: companyOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type financial_advisorWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: financial_advisorWhereInput | financial_advisorWhereInput[];
      OR?: financial_advisorWhereInput[];
      NOT?: financial_advisorWhereInput | financial_advisorWhereInput[];
      user_id?: UuidFilter<'financial_advisor'> | string;
      experience?: IntNullableFilter<'financial_advisor'> | number | null;
      specialization?: StringNullableFilter<'financial_advisor'> | string | null;
      company_id?: UuidFilter<'financial_advisor'> | string;
      availability?: StringNullableFilter<'financial_advisor'> | string | null;
      rating?: IntNullableFilter<'financial_advisor'> | number | null;
      created_at?: DateTimeFilter<'financial_advisor'> | Date | string;
      updated_at?: DateTimeFilter<'financial_advisor'> | Date | string;
      company?: XOR<CompanyRelationFilter, companyWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type financial_advisorOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    experience?: SortOrderInput | SortOrder;
    specialization?: SortOrderInput | SortOrder;
    company_id?: SortOrder;
    availability?: SortOrderInput | SortOrder;
    rating?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: financial_advisorCountOrderByAggregateInput;
    _avg?: financial_advisorAvgOrderByAggregateInput;
    _max?: financial_advisorMaxOrderByAggregateInput;
    _min?: financial_advisorMinOrderByAggregateInput;
    _sum?: financial_advisorSumOrderByAggregateInput;
  };

  export type financial_advisorScalarWhereWithAggregatesInput = {
    AND?: financial_advisorScalarWhereWithAggregatesInput | financial_advisorScalarWhereWithAggregatesInput[];
    OR?: financial_advisorScalarWhereWithAggregatesInput[];
    NOT?: financial_advisorScalarWhereWithAggregatesInput | financial_advisorScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'financial_advisor'> | string;
    user_id?: UuidWithAggregatesFilter<'financial_advisor'> | string;
    experience?: IntNullableWithAggregatesFilter<'financial_advisor'> | number | null;
    specialization?: StringNullableWithAggregatesFilter<'financial_advisor'> | string | null;
    company_id?: UuidWithAggregatesFilter<'financial_advisor'> | string;
    availability?: StringNullableWithAggregatesFilter<'financial_advisor'> | string | null;
    rating?: IntNullableWithAggregatesFilter<'financial_advisor'> | number | null;
    created_at?: DateTimeWithAggregatesFilter<'financial_advisor'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'financial_advisor'> | Date | string;
  };

  export type loanWhereInput = {
    AND?: loanWhereInput | loanWhereInput[];
    OR?: loanWhereInput[];
    NOT?: loanWhereInput | loanWhereInput[];
    id?: UuidFilter<'loan'> | string;
    loan_type?: StringFilter<'loan'> | string;
    loan_amount?: IntFilter<'loan'> | number;
    interest_rate?: IntFilter<'loan'> | number;
    loan_duration?: IntFilter<'loan'> | number;
    user_id?: UuidFilter<'loan'> | string;
    company_id?: UuidFilter<'loan'> | string;
    created_at?: DateTimeFilter<'loan'> | Date | string;
    updated_at?: DateTimeFilter<'loan'> | Date | string;
    company?: XOR<CompanyRelationFilter, companyWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
    payment_schedule?: Payment_scheduleListRelationFilter;
  };

  export type loanOrderByWithRelationInput = {
    id?: SortOrder;
    loan_type?: SortOrder;
    loan_amount?: SortOrder;
    interest_rate?: SortOrder;
    loan_duration?: SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    company?: companyOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
    payment_schedule?: payment_scheduleOrderByRelationAggregateInput;
  };

  export type loanWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: loanWhereInput | loanWhereInput[];
      OR?: loanWhereInput[];
      NOT?: loanWhereInput | loanWhereInput[];
      loan_type?: StringFilter<'loan'> | string;
      loan_amount?: IntFilter<'loan'> | number;
      interest_rate?: IntFilter<'loan'> | number;
      loan_duration?: IntFilter<'loan'> | number;
      user_id?: UuidFilter<'loan'> | string;
      company_id?: UuidFilter<'loan'> | string;
      created_at?: DateTimeFilter<'loan'> | Date | string;
      updated_at?: DateTimeFilter<'loan'> | Date | string;
      company?: XOR<CompanyRelationFilter, companyWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
      payment_schedule?: Payment_scheduleListRelationFilter;
    },
    'id'
  >;

  export type loanOrderByWithAggregationInput = {
    id?: SortOrder;
    loan_type?: SortOrder;
    loan_amount?: SortOrder;
    interest_rate?: SortOrder;
    loan_duration?: SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: loanCountOrderByAggregateInput;
    _avg?: loanAvgOrderByAggregateInput;
    _max?: loanMaxOrderByAggregateInput;
    _min?: loanMinOrderByAggregateInput;
    _sum?: loanSumOrderByAggregateInput;
  };

  export type loanScalarWhereWithAggregatesInput = {
    AND?: loanScalarWhereWithAggregatesInput | loanScalarWhereWithAggregatesInput[];
    OR?: loanScalarWhereWithAggregatesInput[];
    NOT?: loanScalarWhereWithAggregatesInput | loanScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'loan'> | string;
    loan_type?: StringWithAggregatesFilter<'loan'> | string;
    loan_amount?: IntWithAggregatesFilter<'loan'> | number;
    interest_rate?: IntWithAggregatesFilter<'loan'> | number;
    loan_duration?: IntWithAggregatesFilter<'loan'> | number;
    user_id?: UuidWithAggregatesFilter<'loan'> | string;
    company_id?: UuidWithAggregatesFilter<'loan'> | string;
    created_at?: DateTimeWithAggregatesFilter<'loan'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'loan'> | Date | string;
  };

  export type loan_officerWhereInput = {
    AND?: loan_officerWhereInput | loan_officerWhereInput[];
    OR?: loan_officerWhereInput[];
    NOT?: loan_officerWhereInput | loan_officerWhereInput[];
    id?: UuidFilter<'loan_officer'> | string;
    user_id?: UuidFilter<'loan_officer'> | string;
    experience?: IntNullableFilter<'loan_officer'> | number | null;
    company_id?: UuidFilter<'loan_officer'> | string;
    availability?: StringNullableFilter<'loan_officer'> | string | null;
    rating?: IntNullableFilter<'loan_officer'> | number | null;
    created_at?: DateTimeFilter<'loan_officer'> | Date | string;
    updated_at?: DateTimeFilter<'loan_officer'> | Date | string;
    company?: XOR<CompanyRelationFilter, companyWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type loan_officerOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    experience?: SortOrderInput | SortOrder;
    company_id?: SortOrder;
    availability?: SortOrderInput | SortOrder;
    rating?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    company?: companyOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type loan_officerWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: loan_officerWhereInput | loan_officerWhereInput[];
      OR?: loan_officerWhereInput[];
      NOT?: loan_officerWhereInput | loan_officerWhereInput[];
      user_id?: UuidFilter<'loan_officer'> | string;
      experience?: IntNullableFilter<'loan_officer'> | number | null;
      company_id?: UuidFilter<'loan_officer'> | string;
      availability?: StringNullableFilter<'loan_officer'> | string | null;
      rating?: IntNullableFilter<'loan_officer'> | number | null;
      created_at?: DateTimeFilter<'loan_officer'> | Date | string;
      updated_at?: DateTimeFilter<'loan_officer'> | Date | string;
      company?: XOR<CompanyRelationFilter, companyWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type loan_officerOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    experience?: SortOrderInput | SortOrder;
    company_id?: SortOrder;
    availability?: SortOrderInput | SortOrder;
    rating?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: loan_officerCountOrderByAggregateInput;
    _avg?: loan_officerAvgOrderByAggregateInput;
    _max?: loan_officerMaxOrderByAggregateInput;
    _min?: loan_officerMinOrderByAggregateInput;
    _sum?: loan_officerSumOrderByAggregateInput;
  };

  export type loan_officerScalarWhereWithAggregatesInput = {
    AND?: loan_officerScalarWhereWithAggregatesInput | loan_officerScalarWhereWithAggregatesInput[];
    OR?: loan_officerScalarWhereWithAggregatesInput[];
    NOT?: loan_officerScalarWhereWithAggregatesInput | loan_officerScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'loan_officer'> | string;
    user_id?: UuidWithAggregatesFilter<'loan_officer'> | string;
    experience?: IntNullableWithAggregatesFilter<'loan_officer'> | number | null;
    company_id?: UuidWithAggregatesFilter<'loan_officer'> | string;
    availability?: StringNullableWithAggregatesFilter<'loan_officer'> | string | null;
    rating?: IntNullableWithAggregatesFilter<'loan_officer'> | number | null;
    created_at?: DateTimeWithAggregatesFilter<'loan_officer'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'loan_officer'> | Date | string;
  };

  export type payment_scheduleWhereInput = {
    AND?: payment_scheduleWhereInput | payment_scheduleWhereInput[];
    OR?: payment_scheduleWhereInput[];
    NOT?: payment_scheduleWhereInput | payment_scheduleWhereInput[];
    id?: UuidFilter<'payment_schedule'> | string;
    loan_id?: UuidFilter<'payment_schedule'> | string;
    due_date?: DateTimeFilter<'payment_schedule'> | Date | string;
    due_amount?: IntFilter<'payment_schedule'> | number;
    payment_date?: DateTimeNullableFilter<'payment_schedule'> | Date | string | null;
    payment_amount?: IntNullableFilter<'payment_schedule'> | number | null;
    balance?: IntNullableFilter<'payment_schedule'> | number | null;
    created_at?: DateTimeFilter<'payment_schedule'> | Date | string;
    updated_at?: DateTimeFilter<'payment_schedule'> | Date | string;
    loan?: XOR<LoanRelationFilter, loanWhereInput>;
  };

  export type payment_scheduleOrderByWithRelationInput = {
    id?: SortOrder;
    loan_id?: SortOrder;
    due_date?: SortOrder;
    due_amount?: SortOrder;
    payment_date?: SortOrderInput | SortOrder;
    payment_amount?: SortOrderInput | SortOrder;
    balance?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    loan?: loanOrderByWithRelationInput;
  };

  export type payment_scheduleWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: payment_scheduleWhereInput | payment_scheduleWhereInput[];
      OR?: payment_scheduleWhereInput[];
      NOT?: payment_scheduleWhereInput | payment_scheduleWhereInput[];
      loan_id?: UuidFilter<'payment_schedule'> | string;
      due_date?: DateTimeFilter<'payment_schedule'> | Date | string;
      due_amount?: IntFilter<'payment_schedule'> | number;
      payment_date?: DateTimeNullableFilter<'payment_schedule'> | Date | string | null;
      payment_amount?: IntNullableFilter<'payment_schedule'> | number | null;
      balance?: IntNullableFilter<'payment_schedule'> | number | null;
      created_at?: DateTimeFilter<'payment_schedule'> | Date | string;
      updated_at?: DateTimeFilter<'payment_schedule'> | Date | string;
      loan?: XOR<LoanRelationFilter, loanWhereInput>;
    },
    'id'
  >;

  export type payment_scheduleOrderByWithAggregationInput = {
    id?: SortOrder;
    loan_id?: SortOrder;
    due_date?: SortOrder;
    due_amount?: SortOrder;
    payment_date?: SortOrderInput | SortOrder;
    payment_amount?: SortOrderInput | SortOrder;
    balance?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: payment_scheduleCountOrderByAggregateInput;
    _avg?: payment_scheduleAvgOrderByAggregateInput;
    _max?: payment_scheduleMaxOrderByAggregateInput;
    _min?: payment_scheduleMinOrderByAggregateInput;
    _sum?: payment_scheduleSumOrderByAggregateInput;
  };

  export type payment_scheduleScalarWhereWithAggregatesInput = {
    AND?: payment_scheduleScalarWhereWithAggregatesInput | payment_scheduleScalarWhereWithAggregatesInput[];
    OR?: payment_scheduleScalarWhereWithAggregatesInput[];
    NOT?: payment_scheduleScalarWhereWithAggregatesInput | payment_scheduleScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'payment_schedule'> | string;
    loan_id?: UuidWithAggregatesFilter<'payment_schedule'> | string;
    due_date?: DateTimeWithAggregatesFilter<'payment_schedule'> | Date | string;
    due_amount?: IntWithAggregatesFilter<'payment_schedule'> | number;
    payment_date?: DateTimeNullableWithAggregatesFilter<'payment_schedule'> | Date | string | null;
    payment_amount?: IntNullableWithAggregatesFilter<'payment_schedule'> | number | null;
    balance?: IntNullableWithAggregatesFilter<'payment_schedule'> | number | null;
    created_at?: DateTimeWithAggregatesFilter<'payment_schedule'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'payment_schedule'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    firstName?: StringNullableFilter<'user'> | string | null;
    lastName?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    company?: CompanyListRelationFilter;
    financial_advisor?: Financial_advisorListRelationFilter;
    loan?: LoanListRelationFilter;
    loan_officer?: Loan_officerListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    company?: companyOrderByRelationAggregateInput;
    financial_advisor?: financial_advisorOrderByRelationAggregateInput;
    loan?: loanOrderByRelationAggregateInput;
    loan_officer?: loan_officerOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      firstName?: StringNullableFilter<'user'> | string | null;
      lastName?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      company?: CompanyListRelationFilter;
      financial_advisor?: Financial_advisorListRelationFilter;
      loan?: LoanListRelationFilter;
      loan_officer?: Loan_officerListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    firstName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    lastName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type companyCreateInput = {
    id?: string;
    description?: string | null;
    established_date?: Date | string | null;
    location?: string | null;
    sector?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutCompanyInput;
    financial_advisor?: financial_advisorCreateNestedManyWithoutCompanyInput;
    loan?: loanCreateNestedManyWithoutCompanyInput;
    loan_officer?: loan_officerCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    established_date?: Date | string | null;
    location?: string | null;
    sector?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    financial_advisor?: financial_advisorUncheckedCreateNestedManyWithoutCompanyInput;
    loan?: loanUncheckedCreateNestedManyWithoutCompanyInput;
    loan_officer?: loan_officerUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    established_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    sector?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutCompanyNestedInput;
    financial_advisor?: financial_advisorUpdateManyWithoutCompanyNestedInput;
    loan?: loanUpdateManyWithoutCompanyNestedInput;
    loan_officer?: loan_officerUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    established_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    sector?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    financial_advisor?: financial_advisorUncheckedUpdateManyWithoutCompanyNestedInput;
    loan?: loanUncheckedUpdateManyWithoutCompanyNestedInput;
    loan_officer?: loan_officerUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type companyCreateManyInput = {
    id?: string;
    description?: string | null;
    established_date?: Date | string | null;
    location?: string | null;
    sector?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type companyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    established_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    sector?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    established_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    sector?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type financial_advisorCreateInput = {
    id?: string;
    experience?: number | null;
    specialization?: string | null;
    availability?: string | null;
    rating?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutFinancial_advisorInput;
    user: userCreateNestedOneWithoutFinancial_advisorInput;
  };

  export type financial_advisorUncheckedCreateInput = {
    id?: string;
    user_id: string;
    experience?: number | null;
    specialization?: string | null;
    company_id: string;
    availability?: string | null;
    rating?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type financial_advisorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    experience?: NullableIntFieldUpdateOperationsInput | number | null;
    specialization?: NullableStringFieldUpdateOperationsInput | string | null;
    availability?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutFinancial_advisorNestedInput;
    user?: userUpdateOneRequiredWithoutFinancial_advisorNestedInput;
  };

  export type financial_advisorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    experience?: NullableIntFieldUpdateOperationsInput | number | null;
    specialization?: NullableStringFieldUpdateOperationsInput | string | null;
    company_id?: StringFieldUpdateOperationsInput | string;
    availability?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type financial_advisorCreateManyInput = {
    id?: string;
    user_id: string;
    experience?: number | null;
    specialization?: string | null;
    company_id: string;
    availability?: string | null;
    rating?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type financial_advisorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    experience?: NullableIntFieldUpdateOperationsInput | number | null;
    specialization?: NullableStringFieldUpdateOperationsInput | string | null;
    availability?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type financial_advisorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    experience?: NullableIntFieldUpdateOperationsInput | number | null;
    specialization?: NullableStringFieldUpdateOperationsInput | string | null;
    company_id?: StringFieldUpdateOperationsInput | string;
    availability?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type loanCreateInput = {
    id?: string;
    loan_type: string;
    loan_amount: number;
    interest_rate: number;
    loan_duration: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutLoanInput;
    user: userCreateNestedOneWithoutLoanInput;
    payment_schedule?: payment_scheduleCreateNestedManyWithoutLoanInput;
  };

  export type loanUncheckedCreateInput = {
    id?: string;
    loan_type: string;
    loan_amount: number;
    interest_rate: number;
    loan_duration: number;
    user_id: string;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    payment_schedule?: payment_scheduleUncheckedCreateNestedManyWithoutLoanInput;
  };

  export type loanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    loan_type?: StringFieldUpdateOperationsInput | string;
    loan_amount?: IntFieldUpdateOperationsInput | number;
    interest_rate?: IntFieldUpdateOperationsInput | number;
    loan_duration?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutLoanNestedInput;
    user?: userUpdateOneRequiredWithoutLoanNestedInput;
    payment_schedule?: payment_scheduleUpdateManyWithoutLoanNestedInput;
  };

  export type loanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    loan_type?: StringFieldUpdateOperationsInput | string;
    loan_amount?: IntFieldUpdateOperationsInput | number;
    interest_rate?: IntFieldUpdateOperationsInput | number;
    loan_duration?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    payment_schedule?: payment_scheduleUncheckedUpdateManyWithoutLoanNestedInput;
  };

  export type loanCreateManyInput = {
    id?: string;
    loan_type: string;
    loan_amount: number;
    interest_rate: number;
    loan_duration: number;
    user_id: string;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type loanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    loan_type?: StringFieldUpdateOperationsInput | string;
    loan_amount?: IntFieldUpdateOperationsInput | number;
    interest_rate?: IntFieldUpdateOperationsInput | number;
    loan_duration?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type loanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    loan_type?: StringFieldUpdateOperationsInput | string;
    loan_amount?: IntFieldUpdateOperationsInput | number;
    interest_rate?: IntFieldUpdateOperationsInput | number;
    loan_duration?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type loan_officerCreateInput = {
    id?: string;
    experience?: number | null;
    availability?: string | null;
    rating?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutLoan_officerInput;
    user: userCreateNestedOneWithoutLoan_officerInput;
  };

  export type loan_officerUncheckedCreateInput = {
    id?: string;
    user_id: string;
    experience?: number | null;
    company_id: string;
    availability?: string | null;
    rating?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type loan_officerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    experience?: NullableIntFieldUpdateOperationsInput | number | null;
    availability?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutLoan_officerNestedInput;
    user?: userUpdateOneRequiredWithoutLoan_officerNestedInput;
  };

  export type loan_officerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    experience?: NullableIntFieldUpdateOperationsInput | number | null;
    company_id?: StringFieldUpdateOperationsInput | string;
    availability?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type loan_officerCreateManyInput = {
    id?: string;
    user_id: string;
    experience?: number | null;
    company_id: string;
    availability?: string | null;
    rating?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type loan_officerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    experience?: NullableIntFieldUpdateOperationsInput | number | null;
    availability?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type loan_officerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    experience?: NullableIntFieldUpdateOperationsInput | number | null;
    company_id?: StringFieldUpdateOperationsInput | string;
    availability?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type payment_scheduleCreateInput = {
    id?: string;
    due_date: Date | string;
    due_amount: number;
    payment_date?: Date | string | null;
    payment_amount?: number | null;
    balance?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    loan: loanCreateNestedOneWithoutPayment_scheduleInput;
  };

  export type payment_scheduleUncheckedCreateInput = {
    id?: string;
    loan_id: string;
    due_date: Date | string;
    due_amount: number;
    payment_date?: Date | string | null;
    payment_amount?: number | null;
    balance?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type payment_scheduleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    due_amount?: IntFieldUpdateOperationsInput | number;
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    payment_amount?: NullableIntFieldUpdateOperationsInput | number | null;
    balance?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    loan?: loanUpdateOneRequiredWithoutPayment_scheduleNestedInput;
  };

  export type payment_scheduleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    loan_id?: StringFieldUpdateOperationsInput | string;
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    due_amount?: IntFieldUpdateOperationsInput | number;
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    payment_amount?: NullableIntFieldUpdateOperationsInput | number | null;
    balance?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type payment_scheduleCreateManyInput = {
    id?: string;
    loan_id: string;
    due_date: Date | string;
    due_amount: number;
    payment_date?: Date | string | null;
    payment_amount?: number | null;
    balance?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type payment_scheduleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    due_amount?: IntFieldUpdateOperationsInput | number;
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    payment_amount?: NullableIntFieldUpdateOperationsInput | number | null;
    balance?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type payment_scheduleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    loan_id?: StringFieldUpdateOperationsInput | string;
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    due_amount?: IntFieldUpdateOperationsInput | number;
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    payment_amount?: NullableIntFieldUpdateOperationsInput | number | null;
    balance?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyCreateNestedManyWithoutUserInput;
    financial_advisor?: financial_advisorCreateNestedManyWithoutUserInput;
    loan?: loanCreateNestedManyWithoutUserInput;
    loan_officer?: loan_officerCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    financial_advisor?: financial_advisorUncheckedCreateNestedManyWithoutUserInput;
    loan?: loanUncheckedCreateNestedManyWithoutUserInput;
    loan_officer?: loan_officerUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateManyWithoutUserNestedInput;
    financial_advisor?: financial_advisorUpdateManyWithoutUserNestedInput;
    loan?: loanUpdateManyWithoutUserNestedInput;
    loan_officer?: loan_officerUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    financial_advisor?: financial_advisorUncheckedUpdateManyWithoutUserNestedInput;
    loan?: loanUncheckedUpdateManyWithoutUserNestedInput;
    loan_officer?: loan_officerUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type Financial_advisorListRelationFilter = {
    every?: financial_advisorWhereInput;
    some?: financial_advisorWhereInput;
    none?: financial_advisorWhereInput;
  };

  export type LoanListRelationFilter = {
    every?: loanWhereInput;
    some?: loanWhereInput;
    none?: loanWhereInput;
  };

  export type Loan_officerListRelationFilter = {
    every?: loan_officerWhereInput;
    some?: loan_officerWhereInput;
    none?: loan_officerWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type financial_advisorOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type loanOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type loan_officerOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type companyCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    established_date?: SortOrder;
    location?: SortOrder;
    sector?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    established_date?: SortOrder;
    location?: SortOrder;
    sector?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    established_date?: SortOrder;
    location?: SortOrder;
    sector?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type CompanyRelationFilter = {
    is?: companyWhereInput;
    isNot?: companyWhereInput;
  };

  export type financial_advisorCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    experience?: SortOrder;
    specialization?: SortOrder;
    company_id?: SortOrder;
    availability?: SortOrder;
    rating?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type financial_advisorAvgOrderByAggregateInput = {
    experience?: SortOrder;
    rating?: SortOrder;
  };

  export type financial_advisorMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    experience?: SortOrder;
    specialization?: SortOrder;
    company_id?: SortOrder;
    availability?: SortOrder;
    rating?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type financial_advisorMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    experience?: SortOrder;
    specialization?: SortOrder;
    company_id?: SortOrder;
    availability?: SortOrder;
    rating?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type financial_advisorSumOrderByAggregateInput = {
    experience?: SortOrder;
    rating?: SortOrder;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type Payment_scheduleListRelationFilter = {
    every?: payment_scheduleWhereInput;
    some?: payment_scheduleWhereInput;
    none?: payment_scheduleWhereInput;
  };

  export type payment_scheduleOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type loanCountOrderByAggregateInput = {
    id?: SortOrder;
    loan_type?: SortOrder;
    loan_amount?: SortOrder;
    interest_rate?: SortOrder;
    loan_duration?: SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type loanAvgOrderByAggregateInput = {
    loan_amount?: SortOrder;
    interest_rate?: SortOrder;
    loan_duration?: SortOrder;
  };

  export type loanMaxOrderByAggregateInput = {
    id?: SortOrder;
    loan_type?: SortOrder;
    loan_amount?: SortOrder;
    interest_rate?: SortOrder;
    loan_duration?: SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type loanMinOrderByAggregateInput = {
    id?: SortOrder;
    loan_type?: SortOrder;
    loan_amount?: SortOrder;
    interest_rate?: SortOrder;
    loan_duration?: SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type loanSumOrderByAggregateInput = {
    loan_amount?: SortOrder;
    interest_rate?: SortOrder;
    loan_duration?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type loan_officerCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    experience?: SortOrder;
    company_id?: SortOrder;
    availability?: SortOrder;
    rating?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type loan_officerAvgOrderByAggregateInput = {
    experience?: SortOrder;
    rating?: SortOrder;
  };

  export type loan_officerMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    experience?: SortOrder;
    company_id?: SortOrder;
    availability?: SortOrder;
    rating?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type loan_officerMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    experience?: SortOrder;
    company_id?: SortOrder;
    availability?: SortOrder;
    rating?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type loan_officerSumOrderByAggregateInput = {
    experience?: SortOrder;
    rating?: SortOrder;
  };

  export type LoanRelationFilter = {
    is?: loanWhereInput;
    isNot?: loanWhereInput;
  };

  export type payment_scheduleCountOrderByAggregateInput = {
    id?: SortOrder;
    loan_id?: SortOrder;
    due_date?: SortOrder;
    due_amount?: SortOrder;
    payment_date?: SortOrder;
    payment_amount?: SortOrder;
    balance?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type payment_scheduleAvgOrderByAggregateInput = {
    due_amount?: SortOrder;
    payment_amount?: SortOrder;
    balance?: SortOrder;
  };

  export type payment_scheduleMaxOrderByAggregateInput = {
    id?: SortOrder;
    loan_id?: SortOrder;
    due_date?: SortOrder;
    due_amount?: SortOrder;
    payment_date?: SortOrder;
    payment_amount?: SortOrder;
    balance?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type payment_scheduleMinOrderByAggregateInput = {
    id?: SortOrder;
    loan_id?: SortOrder;
    due_date?: SortOrder;
    due_amount?: SortOrder;
    payment_date?: SortOrder;
    payment_amount?: SortOrder;
    balance?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type payment_scheduleSumOrderByAggregateInput = {
    due_amount?: SortOrder;
    payment_amount?: SortOrder;
    balance?: SortOrder;
  };

  export type CompanyListRelationFilter = {
    every?: companyWhereInput;
    some?: companyWhereInput;
    none?: companyWhereInput;
  };

  export type companyOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userCreateNestedOneWithoutCompanyInput = {
    create?: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput;
    connect?: userWhereUniqueInput;
  };

  export type financial_advisorCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<financial_advisorCreateWithoutCompanyInput, financial_advisorUncheckedCreateWithoutCompanyInput>
      | financial_advisorCreateWithoutCompanyInput[]
      | financial_advisorUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?:
      | financial_advisorCreateOrConnectWithoutCompanyInput
      | financial_advisorCreateOrConnectWithoutCompanyInput[];
    createMany?: financial_advisorCreateManyCompanyInputEnvelope;
    connect?: financial_advisorWhereUniqueInput | financial_advisorWhereUniqueInput[];
  };

  export type loanCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<loanCreateWithoutCompanyInput, loanUncheckedCreateWithoutCompanyInput>
      | loanCreateWithoutCompanyInput[]
      | loanUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: loanCreateOrConnectWithoutCompanyInput | loanCreateOrConnectWithoutCompanyInput[];
    createMany?: loanCreateManyCompanyInputEnvelope;
    connect?: loanWhereUniqueInput | loanWhereUniqueInput[];
  };

  export type loan_officerCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<loan_officerCreateWithoutCompanyInput, loan_officerUncheckedCreateWithoutCompanyInput>
      | loan_officerCreateWithoutCompanyInput[]
      | loan_officerUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: loan_officerCreateOrConnectWithoutCompanyInput | loan_officerCreateOrConnectWithoutCompanyInput[];
    createMany?: loan_officerCreateManyCompanyInputEnvelope;
    connect?: loan_officerWhereUniqueInput | loan_officerWhereUniqueInput[];
  };

  export type financial_advisorUncheckedCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<financial_advisorCreateWithoutCompanyInput, financial_advisorUncheckedCreateWithoutCompanyInput>
      | financial_advisorCreateWithoutCompanyInput[]
      | financial_advisorUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?:
      | financial_advisorCreateOrConnectWithoutCompanyInput
      | financial_advisorCreateOrConnectWithoutCompanyInput[];
    createMany?: financial_advisorCreateManyCompanyInputEnvelope;
    connect?: financial_advisorWhereUniqueInput | financial_advisorWhereUniqueInput[];
  };

  export type loanUncheckedCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<loanCreateWithoutCompanyInput, loanUncheckedCreateWithoutCompanyInput>
      | loanCreateWithoutCompanyInput[]
      | loanUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: loanCreateOrConnectWithoutCompanyInput | loanCreateOrConnectWithoutCompanyInput[];
    createMany?: loanCreateManyCompanyInputEnvelope;
    connect?: loanWhereUniqueInput | loanWhereUniqueInput[];
  };

  export type loan_officerUncheckedCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<loan_officerCreateWithoutCompanyInput, loan_officerUncheckedCreateWithoutCompanyInput>
      | loan_officerCreateWithoutCompanyInput[]
      | loan_officerUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: loan_officerCreateOrConnectWithoutCompanyInput | loan_officerCreateOrConnectWithoutCompanyInput[];
    createMany?: loan_officerCreateManyCompanyInputEnvelope;
    connect?: loan_officerWhereUniqueInput | loan_officerWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type userUpdateOneRequiredWithoutCompanyNestedInput = {
    create?: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput;
    upsert?: userUpsertWithoutCompanyInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutCompanyInput, userUpdateWithoutCompanyInput>,
      userUncheckedUpdateWithoutCompanyInput
    >;
  };

  export type financial_advisorUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<financial_advisorCreateWithoutCompanyInput, financial_advisorUncheckedCreateWithoutCompanyInput>
      | financial_advisorCreateWithoutCompanyInput[]
      | financial_advisorUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?:
      | financial_advisorCreateOrConnectWithoutCompanyInput
      | financial_advisorCreateOrConnectWithoutCompanyInput[];
    upsert?:
      | financial_advisorUpsertWithWhereUniqueWithoutCompanyInput
      | financial_advisorUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: financial_advisorCreateManyCompanyInputEnvelope;
    set?: financial_advisorWhereUniqueInput | financial_advisorWhereUniqueInput[];
    disconnect?: financial_advisorWhereUniqueInput | financial_advisorWhereUniqueInput[];
    delete?: financial_advisorWhereUniqueInput | financial_advisorWhereUniqueInput[];
    connect?: financial_advisorWhereUniqueInput | financial_advisorWhereUniqueInput[];
    update?:
      | financial_advisorUpdateWithWhereUniqueWithoutCompanyInput
      | financial_advisorUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?:
      | financial_advisorUpdateManyWithWhereWithoutCompanyInput
      | financial_advisorUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: financial_advisorScalarWhereInput | financial_advisorScalarWhereInput[];
  };

  export type loanUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<loanCreateWithoutCompanyInput, loanUncheckedCreateWithoutCompanyInput>
      | loanCreateWithoutCompanyInput[]
      | loanUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: loanCreateOrConnectWithoutCompanyInput | loanCreateOrConnectWithoutCompanyInput[];
    upsert?: loanUpsertWithWhereUniqueWithoutCompanyInput | loanUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: loanCreateManyCompanyInputEnvelope;
    set?: loanWhereUniqueInput | loanWhereUniqueInput[];
    disconnect?: loanWhereUniqueInput | loanWhereUniqueInput[];
    delete?: loanWhereUniqueInput | loanWhereUniqueInput[];
    connect?: loanWhereUniqueInput | loanWhereUniqueInput[];
    update?: loanUpdateWithWhereUniqueWithoutCompanyInput | loanUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: loanUpdateManyWithWhereWithoutCompanyInput | loanUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: loanScalarWhereInput | loanScalarWhereInput[];
  };

  export type loan_officerUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<loan_officerCreateWithoutCompanyInput, loan_officerUncheckedCreateWithoutCompanyInput>
      | loan_officerCreateWithoutCompanyInput[]
      | loan_officerUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: loan_officerCreateOrConnectWithoutCompanyInput | loan_officerCreateOrConnectWithoutCompanyInput[];
    upsert?:
      | loan_officerUpsertWithWhereUniqueWithoutCompanyInput
      | loan_officerUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: loan_officerCreateManyCompanyInputEnvelope;
    set?: loan_officerWhereUniqueInput | loan_officerWhereUniqueInput[];
    disconnect?: loan_officerWhereUniqueInput | loan_officerWhereUniqueInput[];
    delete?: loan_officerWhereUniqueInput | loan_officerWhereUniqueInput[];
    connect?: loan_officerWhereUniqueInput | loan_officerWhereUniqueInput[];
    update?:
      | loan_officerUpdateWithWhereUniqueWithoutCompanyInput
      | loan_officerUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?:
      | loan_officerUpdateManyWithWhereWithoutCompanyInput
      | loan_officerUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: loan_officerScalarWhereInput | loan_officerScalarWhereInput[];
  };

  export type financial_advisorUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<financial_advisorCreateWithoutCompanyInput, financial_advisorUncheckedCreateWithoutCompanyInput>
      | financial_advisorCreateWithoutCompanyInput[]
      | financial_advisorUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?:
      | financial_advisorCreateOrConnectWithoutCompanyInput
      | financial_advisorCreateOrConnectWithoutCompanyInput[];
    upsert?:
      | financial_advisorUpsertWithWhereUniqueWithoutCompanyInput
      | financial_advisorUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: financial_advisorCreateManyCompanyInputEnvelope;
    set?: financial_advisorWhereUniqueInput | financial_advisorWhereUniqueInput[];
    disconnect?: financial_advisorWhereUniqueInput | financial_advisorWhereUniqueInput[];
    delete?: financial_advisorWhereUniqueInput | financial_advisorWhereUniqueInput[];
    connect?: financial_advisorWhereUniqueInput | financial_advisorWhereUniqueInput[];
    update?:
      | financial_advisorUpdateWithWhereUniqueWithoutCompanyInput
      | financial_advisorUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?:
      | financial_advisorUpdateManyWithWhereWithoutCompanyInput
      | financial_advisorUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: financial_advisorScalarWhereInput | financial_advisorScalarWhereInput[];
  };

  export type loanUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<loanCreateWithoutCompanyInput, loanUncheckedCreateWithoutCompanyInput>
      | loanCreateWithoutCompanyInput[]
      | loanUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: loanCreateOrConnectWithoutCompanyInput | loanCreateOrConnectWithoutCompanyInput[];
    upsert?: loanUpsertWithWhereUniqueWithoutCompanyInput | loanUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: loanCreateManyCompanyInputEnvelope;
    set?: loanWhereUniqueInput | loanWhereUniqueInput[];
    disconnect?: loanWhereUniqueInput | loanWhereUniqueInput[];
    delete?: loanWhereUniqueInput | loanWhereUniqueInput[];
    connect?: loanWhereUniqueInput | loanWhereUniqueInput[];
    update?: loanUpdateWithWhereUniqueWithoutCompanyInput | loanUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: loanUpdateManyWithWhereWithoutCompanyInput | loanUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: loanScalarWhereInput | loanScalarWhereInput[];
  };

  export type loan_officerUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<loan_officerCreateWithoutCompanyInput, loan_officerUncheckedCreateWithoutCompanyInput>
      | loan_officerCreateWithoutCompanyInput[]
      | loan_officerUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: loan_officerCreateOrConnectWithoutCompanyInput | loan_officerCreateOrConnectWithoutCompanyInput[];
    upsert?:
      | loan_officerUpsertWithWhereUniqueWithoutCompanyInput
      | loan_officerUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: loan_officerCreateManyCompanyInputEnvelope;
    set?: loan_officerWhereUniqueInput | loan_officerWhereUniqueInput[];
    disconnect?: loan_officerWhereUniqueInput | loan_officerWhereUniqueInput[];
    delete?: loan_officerWhereUniqueInput | loan_officerWhereUniqueInput[];
    connect?: loan_officerWhereUniqueInput | loan_officerWhereUniqueInput[];
    update?:
      | loan_officerUpdateWithWhereUniqueWithoutCompanyInput
      | loan_officerUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?:
      | loan_officerUpdateManyWithWhereWithoutCompanyInput
      | loan_officerUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: loan_officerScalarWhereInput | loan_officerScalarWhereInput[];
  };

  export type companyCreateNestedOneWithoutFinancial_advisorInput = {
    create?: XOR<companyCreateWithoutFinancial_advisorInput, companyUncheckedCreateWithoutFinancial_advisorInput>;
    connectOrCreate?: companyCreateOrConnectWithoutFinancial_advisorInput;
    connect?: companyWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutFinancial_advisorInput = {
    create?: XOR<userCreateWithoutFinancial_advisorInput, userUncheckedCreateWithoutFinancial_advisorInput>;
    connectOrCreate?: userCreateOrConnectWithoutFinancial_advisorInput;
    connect?: userWhereUniqueInput;
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type companyUpdateOneRequiredWithoutFinancial_advisorNestedInput = {
    create?: XOR<companyCreateWithoutFinancial_advisorInput, companyUncheckedCreateWithoutFinancial_advisorInput>;
    connectOrCreate?: companyCreateOrConnectWithoutFinancial_advisorInput;
    upsert?: companyUpsertWithoutFinancial_advisorInput;
    connect?: companyWhereUniqueInput;
    update?: XOR<
      XOR<companyUpdateToOneWithWhereWithoutFinancial_advisorInput, companyUpdateWithoutFinancial_advisorInput>,
      companyUncheckedUpdateWithoutFinancial_advisorInput
    >;
  };

  export type userUpdateOneRequiredWithoutFinancial_advisorNestedInput = {
    create?: XOR<userCreateWithoutFinancial_advisorInput, userUncheckedCreateWithoutFinancial_advisorInput>;
    connectOrCreate?: userCreateOrConnectWithoutFinancial_advisorInput;
    upsert?: userUpsertWithoutFinancial_advisorInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutFinancial_advisorInput, userUpdateWithoutFinancial_advisorInput>,
      userUncheckedUpdateWithoutFinancial_advisorInput
    >;
  };

  export type companyCreateNestedOneWithoutLoanInput = {
    create?: XOR<companyCreateWithoutLoanInput, companyUncheckedCreateWithoutLoanInput>;
    connectOrCreate?: companyCreateOrConnectWithoutLoanInput;
    connect?: companyWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutLoanInput = {
    create?: XOR<userCreateWithoutLoanInput, userUncheckedCreateWithoutLoanInput>;
    connectOrCreate?: userCreateOrConnectWithoutLoanInput;
    connect?: userWhereUniqueInput;
  };

  export type payment_scheduleCreateNestedManyWithoutLoanInput = {
    create?:
      | XOR<payment_scheduleCreateWithoutLoanInput, payment_scheduleUncheckedCreateWithoutLoanInput>
      | payment_scheduleCreateWithoutLoanInput[]
      | payment_scheduleUncheckedCreateWithoutLoanInput[];
    connectOrCreate?:
      | payment_scheduleCreateOrConnectWithoutLoanInput
      | payment_scheduleCreateOrConnectWithoutLoanInput[];
    createMany?: payment_scheduleCreateManyLoanInputEnvelope;
    connect?: payment_scheduleWhereUniqueInput | payment_scheduleWhereUniqueInput[];
  };

  export type payment_scheduleUncheckedCreateNestedManyWithoutLoanInput = {
    create?:
      | XOR<payment_scheduleCreateWithoutLoanInput, payment_scheduleUncheckedCreateWithoutLoanInput>
      | payment_scheduleCreateWithoutLoanInput[]
      | payment_scheduleUncheckedCreateWithoutLoanInput[];
    connectOrCreate?:
      | payment_scheduleCreateOrConnectWithoutLoanInput
      | payment_scheduleCreateOrConnectWithoutLoanInput[];
    createMany?: payment_scheduleCreateManyLoanInputEnvelope;
    connect?: payment_scheduleWhereUniqueInput | payment_scheduleWhereUniqueInput[];
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type companyUpdateOneRequiredWithoutLoanNestedInput = {
    create?: XOR<companyCreateWithoutLoanInput, companyUncheckedCreateWithoutLoanInput>;
    connectOrCreate?: companyCreateOrConnectWithoutLoanInput;
    upsert?: companyUpsertWithoutLoanInput;
    connect?: companyWhereUniqueInput;
    update?: XOR<
      XOR<companyUpdateToOneWithWhereWithoutLoanInput, companyUpdateWithoutLoanInput>,
      companyUncheckedUpdateWithoutLoanInput
    >;
  };

  export type userUpdateOneRequiredWithoutLoanNestedInput = {
    create?: XOR<userCreateWithoutLoanInput, userUncheckedCreateWithoutLoanInput>;
    connectOrCreate?: userCreateOrConnectWithoutLoanInput;
    upsert?: userUpsertWithoutLoanInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutLoanInput, userUpdateWithoutLoanInput>,
      userUncheckedUpdateWithoutLoanInput
    >;
  };

  export type payment_scheduleUpdateManyWithoutLoanNestedInput = {
    create?:
      | XOR<payment_scheduleCreateWithoutLoanInput, payment_scheduleUncheckedCreateWithoutLoanInput>
      | payment_scheduleCreateWithoutLoanInput[]
      | payment_scheduleUncheckedCreateWithoutLoanInput[];
    connectOrCreate?:
      | payment_scheduleCreateOrConnectWithoutLoanInput
      | payment_scheduleCreateOrConnectWithoutLoanInput[];
    upsert?:
      | payment_scheduleUpsertWithWhereUniqueWithoutLoanInput
      | payment_scheduleUpsertWithWhereUniqueWithoutLoanInput[];
    createMany?: payment_scheduleCreateManyLoanInputEnvelope;
    set?: payment_scheduleWhereUniqueInput | payment_scheduleWhereUniqueInput[];
    disconnect?: payment_scheduleWhereUniqueInput | payment_scheduleWhereUniqueInput[];
    delete?: payment_scheduleWhereUniqueInput | payment_scheduleWhereUniqueInput[];
    connect?: payment_scheduleWhereUniqueInput | payment_scheduleWhereUniqueInput[];
    update?:
      | payment_scheduleUpdateWithWhereUniqueWithoutLoanInput
      | payment_scheduleUpdateWithWhereUniqueWithoutLoanInput[];
    updateMany?:
      | payment_scheduleUpdateManyWithWhereWithoutLoanInput
      | payment_scheduleUpdateManyWithWhereWithoutLoanInput[];
    deleteMany?: payment_scheduleScalarWhereInput | payment_scheduleScalarWhereInput[];
  };

  export type payment_scheduleUncheckedUpdateManyWithoutLoanNestedInput = {
    create?:
      | XOR<payment_scheduleCreateWithoutLoanInput, payment_scheduleUncheckedCreateWithoutLoanInput>
      | payment_scheduleCreateWithoutLoanInput[]
      | payment_scheduleUncheckedCreateWithoutLoanInput[];
    connectOrCreate?:
      | payment_scheduleCreateOrConnectWithoutLoanInput
      | payment_scheduleCreateOrConnectWithoutLoanInput[];
    upsert?:
      | payment_scheduleUpsertWithWhereUniqueWithoutLoanInput
      | payment_scheduleUpsertWithWhereUniqueWithoutLoanInput[];
    createMany?: payment_scheduleCreateManyLoanInputEnvelope;
    set?: payment_scheduleWhereUniqueInput | payment_scheduleWhereUniqueInput[];
    disconnect?: payment_scheduleWhereUniqueInput | payment_scheduleWhereUniqueInput[];
    delete?: payment_scheduleWhereUniqueInput | payment_scheduleWhereUniqueInput[];
    connect?: payment_scheduleWhereUniqueInput | payment_scheduleWhereUniqueInput[];
    update?:
      | payment_scheduleUpdateWithWhereUniqueWithoutLoanInput
      | payment_scheduleUpdateWithWhereUniqueWithoutLoanInput[];
    updateMany?:
      | payment_scheduleUpdateManyWithWhereWithoutLoanInput
      | payment_scheduleUpdateManyWithWhereWithoutLoanInput[];
    deleteMany?: payment_scheduleScalarWhereInput | payment_scheduleScalarWhereInput[];
  };

  export type companyCreateNestedOneWithoutLoan_officerInput = {
    create?: XOR<companyCreateWithoutLoan_officerInput, companyUncheckedCreateWithoutLoan_officerInput>;
    connectOrCreate?: companyCreateOrConnectWithoutLoan_officerInput;
    connect?: companyWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutLoan_officerInput = {
    create?: XOR<userCreateWithoutLoan_officerInput, userUncheckedCreateWithoutLoan_officerInput>;
    connectOrCreate?: userCreateOrConnectWithoutLoan_officerInput;
    connect?: userWhereUniqueInput;
  };

  export type companyUpdateOneRequiredWithoutLoan_officerNestedInput = {
    create?: XOR<companyCreateWithoutLoan_officerInput, companyUncheckedCreateWithoutLoan_officerInput>;
    connectOrCreate?: companyCreateOrConnectWithoutLoan_officerInput;
    upsert?: companyUpsertWithoutLoan_officerInput;
    connect?: companyWhereUniqueInput;
    update?: XOR<
      XOR<companyUpdateToOneWithWhereWithoutLoan_officerInput, companyUpdateWithoutLoan_officerInput>,
      companyUncheckedUpdateWithoutLoan_officerInput
    >;
  };

  export type userUpdateOneRequiredWithoutLoan_officerNestedInput = {
    create?: XOR<userCreateWithoutLoan_officerInput, userUncheckedCreateWithoutLoan_officerInput>;
    connectOrCreate?: userCreateOrConnectWithoutLoan_officerInput;
    upsert?: userUpsertWithoutLoan_officerInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutLoan_officerInput, userUpdateWithoutLoan_officerInput>,
      userUncheckedUpdateWithoutLoan_officerInput
    >;
  };

  export type loanCreateNestedOneWithoutPayment_scheduleInput = {
    create?: XOR<loanCreateWithoutPayment_scheduleInput, loanUncheckedCreateWithoutPayment_scheduleInput>;
    connectOrCreate?: loanCreateOrConnectWithoutPayment_scheduleInput;
    connect?: loanWhereUniqueInput;
  };

  export type loanUpdateOneRequiredWithoutPayment_scheduleNestedInput = {
    create?: XOR<loanCreateWithoutPayment_scheduleInput, loanUncheckedCreateWithoutPayment_scheduleInput>;
    connectOrCreate?: loanCreateOrConnectWithoutPayment_scheduleInput;
    upsert?: loanUpsertWithoutPayment_scheduleInput;
    connect?: loanWhereUniqueInput;
    update?: XOR<
      XOR<loanUpdateToOneWithWhereWithoutPayment_scheduleInput, loanUpdateWithoutPayment_scheduleInput>,
      loanUncheckedUpdateWithoutPayment_scheduleInput
    >;
  };

  export type companyCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
  };

  export type financial_advisorCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<financial_advisorCreateWithoutUserInput, financial_advisorUncheckedCreateWithoutUserInput>
      | financial_advisorCreateWithoutUserInput[]
      | financial_advisorUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | financial_advisorCreateOrConnectWithoutUserInput
      | financial_advisorCreateOrConnectWithoutUserInput[];
    createMany?: financial_advisorCreateManyUserInputEnvelope;
    connect?: financial_advisorWhereUniqueInput | financial_advisorWhereUniqueInput[];
  };

  export type loanCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<loanCreateWithoutUserInput, loanUncheckedCreateWithoutUserInput>
      | loanCreateWithoutUserInput[]
      | loanUncheckedCreateWithoutUserInput[];
    connectOrCreate?: loanCreateOrConnectWithoutUserInput | loanCreateOrConnectWithoutUserInput[];
    createMany?: loanCreateManyUserInputEnvelope;
    connect?: loanWhereUniqueInput | loanWhereUniqueInput[];
  };

  export type loan_officerCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<loan_officerCreateWithoutUserInput, loan_officerUncheckedCreateWithoutUserInput>
      | loan_officerCreateWithoutUserInput[]
      | loan_officerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: loan_officerCreateOrConnectWithoutUserInput | loan_officerCreateOrConnectWithoutUserInput[];
    createMany?: loan_officerCreateManyUserInputEnvelope;
    connect?: loan_officerWhereUniqueInput | loan_officerWhereUniqueInput[];
  };

  export type companyUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
  };

  export type financial_advisorUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<financial_advisorCreateWithoutUserInput, financial_advisorUncheckedCreateWithoutUserInput>
      | financial_advisorCreateWithoutUserInput[]
      | financial_advisorUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | financial_advisorCreateOrConnectWithoutUserInput
      | financial_advisorCreateOrConnectWithoutUserInput[];
    createMany?: financial_advisorCreateManyUserInputEnvelope;
    connect?: financial_advisorWhereUniqueInput | financial_advisorWhereUniqueInput[];
  };

  export type loanUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<loanCreateWithoutUserInput, loanUncheckedCreateWithoutUserInput>
      | loanCreateWithoutUserInput[]
      | loanUncheckedCreateWithoutUserInput[];
    connectOrCreate?: loanCreateOrConnectWithoutUserInput | loanCreateOrConnectWithoutUserInput[];
    createMany?: loanCreateManyUserInputEnvelope;
    connect?: loanWhereUniqueInput | loanWhereUniqueInput[];
  };

  export type loan_officerUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<loan_officerCreateWithoutUserInput, loan_officerUncheckedCreateWithoutUserInput>
      | loan_officerCreateWithoutUserInput[]
      | loan_officerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: loan_officerCreateOrConnectWithoutUserInput | loan_officerCreateOrConnectWithoutUserInput[];
    createMany?: loan_officerCreateManyUserInputEnvelope;
    connect?: loan_officerWhereUniqueInput | loan_officerWhereUniqueInput[];
  };

  export type companyUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    upsert?: companyUpsertWithWhereUniqueWithoutUserInput | companyUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    set?: companyWhereUniqueInput | companyWhereUniqueInput[];
    disconnect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    delete?: companyWhereUniqueInput | companyWhereUniqueInput[];
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    update?: companyUpdateWithWhereUniqueWithoutUserInput | companyUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: companyUpdateManyWithWhereWithoutUserInput | companyUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: companyScalarWhereInput | companyScalarWhereInput[];
  };

  export type financial_advisorUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<financial_advisorCreateWithoutUserInput, financial_advisorUncheckedCreateWithoutUserInput>
      | financial_advisorCreateWithoutUserInput[]
      | financial_advisorUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | financial_advisorCreateOrConnectWithoutUserInput
      | financial_advisorCreateOrConnectWithoutUserInput[];
    upsert?:
      | financial_advisorUpsertWithWhereUniqueWithoutUserInput
      | financial_advisorUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: financial_advisorCreateManyUserInputEnvelope;
    set?: financial_advisorWhereUniqueInput | financial_advisorWhereUniqueInput[];
    disconnect?: financial_advisorWhereUniqueInput | financial_advisorWhereUniqueInput[];
    delete?: financial_advisorWhereUniqueInput | financial_advisorWhereUniqueInput[];
    connect?: financial_advisorWhereUniqueInput | financial_advisorWhereUniqueInput[];
    update?:
      | financial_advisorUpdateWithWhereUniqueWithoutUserInput
      | financial_advisorUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | financial_advisorUpdateManyWithWhereWithoutUserInput
      | financial_advisorUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: financial_advisorScalarWhereInput | financial_advisorScalarWhereInput[];
  };

  export type loanUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<loanCreateWithoutUserInput, loanUncheckedCreateWithoutUserInput>
      | loanCreateWithoutUserInput[]
      | loanUncheckedCreateWithoutUserInput[];
    connectOrCreate?: loanCreateOrConnectWithoutUserInput | loanCreateOrConnectWithoutUserInput[];
    upsert?: loanUpsertWithWhereUniqueWithoutUserInput | loanUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: loanCreateManyUserInputEnvelope;
    set?: loanWhereUniqueInput | loanWhereUniqueInput[];
    disconnect?: loanWhereUniqueInput | loanWhereUniqueInput[];
    delete?: loanWhereUniqueInput | loanWhereUniqueInput[];
    connect?: loanWhereUniqueInput | loanWhereUniqueInput[];
    update?: loanUpdateWithWhereUniqueWithoutUserInput | loanUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: loanUpdateManyWithWhereWithoutUserInput | loanUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: loanScalarWhereInput | loanScalarWhereInput[];
  };

  export type loan_officerUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<loan_officerCreateWithoutUserInput, loan_officerUncheckedCreateWithoutUserInput>
      | loan_officerCreateWithoutUserInput[]
      | loan_officerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: loan_officerCreateOrConnectWithoutUserInput | loan_officerCreateOrConnectWithoutUserInput[];
    upsert?: loan_officerUpsertWithWhereUniqueWithoutUserInput | loan_officerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: loan_officerCreateManyUserInputEnvelope;
    set?: loan_officerWhereUniqueInput | loan_officerWhereUniqueInput[];
    disconnect?: loan_officerWhereUniqueInput | loan_officerWhereUniqueInput[];
    delete?: loan_officerWhereUniqueInput | loan_officerWhereUniqueInput[];
    connect?: loan_officerWhereUniqueInput | loan_officerWhereUniqueInput[];
    update?: loan_officerUpdateWithWhereUniqueWithoutUserInput | loan_officerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: loan_officerUpdateManyWithWhereWithoutUserInput | loan_officerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: loan_officerScalarWhereInput | loan_officerScalarWhereInput[];
  };

  export type companyUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    upsert?: companyUpsertWithWhereUniqueWithoutUserInput | companyUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    set?: companyWhereUniqueInput | companyWhereUniqueInput[];
    disconnect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    delete?: companyWhereUniqueInput | companyWhereUniqueInput[];
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    update?: companyUpdateWithWhereUniqueWithoutUserInput | companyUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: companyUpdateManyWithWhereWithoutUserInput | companyUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: companyScalarWhereInput | companyScalarWhereInput[];
  };

  export type financial_advisorUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<financial_advisorCreateWithoutUserInput, financial_advisorUncheckedCreateWithoutUserInput>
      | financial_advisorCreateWithoutUserInput[]
      | financial_advisorUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | financial_advisorCreateOrConnectWithoutUserInput
      | financial_advisorCreateOrConnectWithoutUserInput[];
    upsert?:
      | financial_advisorUpsertWithWhereUniqueWithoutUserInput
      | financial_advisorUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: financial_advisorCreateManyUserInputEnvelope;
    set?: financial_advisorWhereUniqueInput | financial_advisorWhereUniqueInput[];
    disconnect?: financial_advisorWhereUniqueInput | financial_advisorWhereUniqueInput[];
    delete?: financial_advisorWhereUniqueInput | financial_advisorWhereUniqueInput[];
    connect?: financial_advisorWhereUniqueInput | financial_advisorWhereUniqueInput[];
    update?:
      | financial_advisorUpdateWithWhereUniqueWithoutUserInput
      | financial_advisorUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | financial_advisorUpdateManyWithWhereWithoutUserInput
      | financial_advisorUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: financial_advisorScalarWhereInput | financial_advisorScalarWhereInput[];
  };

  export type loanUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<loanCreateWithoutUserInput, loanUncheckedCreateWithoutUserInput>
      | loanCreateWithoutUserInput[]
      | loanUncheckedCreateWithoutUserInput[];
    connectOrCreate?: loanCreateOrConnectWithoutUserInput | loanCreateOrConnectWithoutUserInput[];
    upsert?: loanUpsertWithWhereUniqueWithoutUserInput | loanUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: loanCreateManyUserInputEnvelope;
    set?: loanWhereUniqueInput | loanWhereUniqueInput[];
    disconnect?: loanWhereUniqueInput | loanWhereUniqueInput[];
    delete?: loanWhereUniqueInput | loanWhereUniqueInput[];
    connect?: loanWhereUniqueInput | loanWhereUniqueInput[];
    update?: loanUpdateWithWhereUniqueWithoutUserInput | loanUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: loanUpdateManyWithWhereWithoutUserInput | loanUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: loanScalarWhereInput | loanScalarWhereInput[];
  };

  export type loan_officerUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<loan_officerCreateWithoutUserInput, loan_officerUncheckedCreateWithoutUserInput>
      | loan_officerCreateWithoutUserInput[]
      | loan_officerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: loan_officerCreateOrConnectWithoutUserInput | loan_officerCreateOrConnectWithoutUserInput[];
    upsert?: loan_officerUpsertWithWhereUniqueWithoutUserInput | loan_officerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: loan_officerCreateManyUserInputEnvelope;
    set?: loan_officerWhereUniqueInput | loan_officerWhereUniqueInput[];
    disconnect?: loan_officerWhereUniqueInput | loan_officerWhereUniqueInput[];
    delete?: loan_officerWhereUniqueInput | loan_officerWhereUniqueInput[];
    connect?: loan_officerWhereUniqueInput | loan_officerWhereUniqueInput[];
    update?: loan_officerUpdateWithWhereUniqueWithoutUserInput | loan_officerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: loan_officerUpdateManyWithWhereWithoutUserInput | loan_officerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: loan_officerScalarWhereInput | loan_officerScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type userCreateWithoutCompanyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    financial_advisor?: financial_advisorCreateNestedManyWithoutUserInput;
    loan?: loanCreateNestedManyWithoutUserInput;
    loan_officer?: loan_officerCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutCompanyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    financial_advisor?: financial_advisorUncheckedCreateNestedManyWithoutUserInput;
    loan?: loanUncheckedCreateNestedManyWithoutUserInput;
    loan_officer?: loan_officerUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutCompanyInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
  };

  export type financial_advisorCreateWithoutCompanyInput = {
    id?: string;
    experience?: number | null;
    specialization?: string | null;
    availability?: string | null;
    rating?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutFinancial_advisorInput;
  };

  export type financial_advisorUncheckedCreateWithoutCompanyInput = {
    id?: string;
    user_id: string;
    experience?: number | null;
    specialization?: string | null;
    availability?: string | null;
    rating?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type financial_advisorCreateOrConnectWithoutCompanyInput = {
    where: financial_advisorWhereUniqueInput;
    create: XOR<financial_advisorCreateWithoutCompanyInput, financial_advisorUncheckedCreateWithoutCompanyInput>;
  };

  export type financial_advisorCreateManyCompanyInputEnvelope = {
    data: financial_advisorCreateManyCompanyInput | financial_advisorCreateManyCompanyInput[];
    skipDuplicates?: boolean;
  };

  export type loanCreateWithoutCompanyInput = {
    id?: string;
    loan_type: string;
    loan_amount: number;
    interest_rate: number;
    loan_duration: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutLoanInput;
    payment_schedule?: payment_scheduleCreateNestedManyWithoutLoanInput;
  };

  export type loanUncheckedCreateWithoutCompanyInput = {
    id?: string;
    loan_type: string;
    loan_amount: number;
    interest_rate: number;
    loan_duration: number;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    payment_schedule?: payment_scheduleUncheckedCreateNestedManyWithoutLoanInput;
  };

  export type loanCreateOrConnectWithoutCompanyInput = {
    where: loanWhereUniqueInput;
    create: XOR<loanCreateWithoutCompanyInput, loanUncheckedCreateWithoutCompanyInput>;
  };

  export type loanCreateManyCompanyInputEnvelope = {
    data: loanCreateManyCompanyInput | loanCreateManyCompanyInput[];
    skipDuplicates?: boolean;
  };

  export type loan_officerCreateWithoutCompanyInput = {
    id?: string;
    experience?: number | null;
    availability?: string | null;
    rating?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutLoan_officerInput;
  };

  export type loan_officerUncheckedCreateWithoutCompanyInput = {
    id?: string;
    user_id: string;
    experience?: number | null;
    availability?: string | null;
    rating?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type loan_officerCreateOrConnectWithoutCompanyInput = {
    where: loan_officerWhereUniqueInput;
    create: XOR<loan_officerCreateWithoutCompanyInput, loan_officerUncheckedCreateWithoutCompanyInput>;
  };

  export type loan_officerCreateManyCompanyInputEnvelope = {
    data: loan_officerCreateManyCompanyInput | loan_officerCreateManyCompanyInput[];
    skipDuplicates?: boolean;
  };

  export type userUpsertWithoutCompanyInput = {
    update: XOR<userUpdateWithoutCompanyInput, userUncheckedUpdateWithoutCompanyInput>;
    create: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutCompanyInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutCompanyInput, userUncheckedUpdateWithoutCompanyInput>;
  };

  export type userUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    financial_advisor?: financial_advisorUpdateManyWithoutUserNestedInput;
    loan?: loanUpdateManyWithoutUserNestedInput;
    loan_officer?: loan_officerUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    financial_advisor?: financial_advisorUncheckedUpdateManyWithoutUserNestedInput;
    loan?: loanUncheckedUpdateManyWithoutUserNestedInput;
    loan_officer?: loan_officerUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type financial_advisorUpsertWithWhereUniqueWithoutCompanyInput = {
    where: financial_advisorWhereUniqueInput;
    update: XOR<financial_advisorUpdateWithoutCompanyInput, financial_advisorUncheckedUpdateWithoutCompanyInput>;
    create: XOR<financial_advisorCreateWithoutCompanyInput, financial_advisorUncheckedCreateWithoutCompanyInput>;
  };

  export type financial_advisorUpdateWithWhereUniqueWithoutCompanyInput = {
    where: financial_advisorWhereUniqueInput;
    data: XOR<financial_advisorUpdateWithoutCompanyInput, financial_advisorUncheckedUpdateWithoutCompanyInput>;
  };

  export type financial_advisorUpdateManyWithWhereWithoutCompanyInput = {
    where: financial_advisorScalarWhereInput;
    data: XOR<financial_advisorUpdateManyMutationInput, financial_advisorUncheckedUpdateManyWithoutCompanyInput>;
  };

  export type financial_advisorScalarWhereInput = {
    AND?: financial_advisorScalarWhereInput | financial_advisorScalarWhereInput[];
    OR?: financial_advisorScalarWhereInput[];
    NOT?: financial_advisorScalarWhereInput | financial_advisorScalarWhereInput[];
    id?: UuidFilter<'financial_advisor'> | string;
    user_id?: UuidFilter<'financial_advisor'> | string;
    experience?: IntNullableFilter<'financial_advisor'> | number | null;
    specialization?: StringNullableFilter<'financial_advisor'> | string | null;
    company_id?: UuidFilter<'financial_advisor'> | string;
    availability?: StringNullableFilter<'financial_advisor'> | string | null;
    rating?: IntNullableFilter<'financial_advisor'> | number | null;
    created_at?: DateTimeFilter<'financial_advisor'> | Date | string;
    updated_at?: DateTimeFilter<'financial_advisor'> | Date | string;
  };

  export type loanUpsertWithWhereUniqueWithoutCompanyInput = {
    where: loanWhereUniqueInput;
    update: XOR<loanUpdateWithoutCompanyInput, loanUncheckedUpdateWithoutCompanyInput>;
    create: XOR<loanCreateWithoutCompanyInput, loanUncheckedCreateWithoutCompanyInput>;
  };

  export type loanUpdateWithWhereUniqueWithoutCompanyInput = {
    where: loanWhereUniqueInput;
    data: XOR<loanUpdateWithoutCompanyInput, loanUncheckedUpdateWithoutCompanyInput>;
  };

  export type loanUpdateManyWithWhereWithoutCompanyInput = {
    where: loanScalarWhereInput;
    data: XOR<loanUpdateManyMutationInput, loanUncheckedUpdateManyWithoutCompanyInput>;
  };

  export type loanScalarWhereInput = {
    AND?: loanScalarWhereInput | loanScalarWhereInput[];
    OR?: loanScalarWhereInput[];
    NOT?: loanScalarWhereInput | loanScalarWhereInput[];
    id?: UuidFilter<'loan'> | string;
    loan_type?: StringFilter<'loan'> | string;
    loan_amount?: IntFilter<'loan'> | number;
    interest_rate?: IntFilter<'loan'> | number;
    loan_duration?: IntFilter<'loan'> | number;
    user_id?: UuidFilter<'loan'> | string;
    company_id?: UuidFilter<'loan'> | string;
    created_at?: DateTimeFilter<'loan'> | Date | string;
    updated_at?: DateTimeFilter<'loan'> | Date | string;
  };

  export type loan_officerUpsertWithWhereUniqueWithoutCompanyInput = {
    where: loan_officerWhereUniqueInput;
    update: XOR<loan_officerUpdateWithoutCompanyInput, loan_officerUncheckedUpdateWithoutCompanyInput>;
    create: XOR<loan_officerCreateWithoutCompanyInput, loan_officerUncheckedCreateWithoutCompanyInput>;
  };

  export type loan_officerUpdateWithWhereUniqueWithoutCompanyInput = {
    where: loan_officerWhereUniqueInput;
    data: XOR<loan_officerUpdateWithoutCompanyInput, loan_officerUncheckedUpdateWithoutCompanyInput>;
  };

  export type loan_officerUpdateManyWithWhereWithoutCompanyInput = {
    where: loan_officerScalarWhereInput;
    data: XOR<loan_officerUpdateManyMutationInput, loan_officerUncheckedUpdateManyWithoutCompanyInput>;
  };

  export type loan_officerScalarWhereInput = {
    AND?: loan_officerScalarWhereInput | loan_officerScalarWhereInput[];
    OR?: loan_officerScalarWhereInput[];
    NOT?: loan_officerScalarWhereInput | loan_officerScalarWhereInput[];
    id?: UuidFilter<'loan_officer'> | string;
    user_id?: UuidFilter<'loan_officer'> | string;
    experience?: IntNullableFilter<'loan_officer'> | number | null;
    company_id?: UuidFilter<'loan_officer'> | string;
    availability?: StringNullableFilter<'loan_officer'> | string | null;
    rating?: IntNullableFilter<'loan_officer'> | number | null;
    created_at?: DateTimeFilter<'loan_officer'> | Date | string;
    updated_at?: DateTimeFilter<'loan_officer'> | Date | string;
  };

  export type companyCreateWithoutFinancial_advisorInput = {
    id?: string;
    description?: string | null;
    established_date?: Date | string | null;
    location?: string | null;
    sector?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutCompanyInput;
    loan?: loanCreateNestedManyWithoutCompanyInput;
    loan_officer?: loan_officerCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateWithoutFinancial_advisorInput = {
    id?: string;
    description?: string | null;
    established_date?: Date | string | null;
    location?: string | null;
    sector?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    loan?: loanUncheckedCreateNestedManyWithoutCompanyInput;
    loan_officer?: loan_officerUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyCreateOrConnectWithoutFinancial_advisorInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutFinancial_advisorInput, companyUncheckedCreateWithoutFinancial_advisorInput>;
  };

  export type userCreateWithoutFinancial_advisorInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyCreateNestedManyWithoutUserInput;
    loan?: loanCreateNestedManyWithoutUserInput;
    loan_officer?: loan_officerCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutFinancial_advisorInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    loan?: loanUncheckedCreateNestedManyWithoutUserInput;
    loan_officer?: loan_officerUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutFinancial_advisorInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutFinancial_advisorInput, userUncheckedCreateWithoutFinancial_advisorInput>;
  };

  export type companyUpsertWithoutFinancial_advisorInput = {
    update: XOR<companyUpdateWithoutFinancial_advisorInput, companyUncheckedUpdateWithoutFinancial_advisorInput>;
    create: XOR<companyCreateWithoutFinancial_advisorInput, companyUncheckedCreateWithoutFinancial_advisorInput>;
    where?: companyWhereInput;
  };

  export type companyUpdateToOneWithWhereWithoutFinancial_advisorInput = {
    where?: companyWhereInput;
    data: XOR<companyUpdateWithoutFinancial_advisorInput, companyUncheckedUpdateWithoutFinancial_advisorInput>;
  };

  export type companyUpdateWithoutFinancial_advisorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    established_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    sector?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutCompanyNestedInput;
    loan?: loanUpdateManyWithoutCompanyNestedInput;
    loan_officer?: loan_officerUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateWithoutFinancial_advisorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    established_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    sector?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    loan?: loanUncheckedUpdateManyWithoutCompanyNestedInput;
    loan_officer?: loan_officerUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type userUpsertWithoutFinancial_advisorInput = {
    update: XOR<userUpdateWithoutFinancial_advisorInput, userUncheckedUpdateWithoutFinancial_advisorInput>;
    create: XOR<userCreateWithoutFinancial_advisorInput, userUncheckedCreateWithoutFinancial_advisorInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutFinancial_advisorInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutFinancial_advisorInput, userUncheckedUpdateWithoutFinancial_advisorInput>;
  };

  export type userUpdateWithoutFinancial_advisorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateManyWithoutUserNestedInput;
    loan?: loanUpdateManyWithoutUserNestedInput;
    loan_officer?: loan_officerUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutFinancial_advisorInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    loan?: loanUncheckedUpdateManyWithoutUserNestedInput;
    loan_officer?: loan_officerUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type companyCreateWithoutLoanInput = {
    id?: string;
    description?: string | null;
    established_date?: Date | string | null;
    location?: string | null;
    sector?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutCompanyInput;
    financial_advisor?: financial_advisorCreateNestedManyWithoutCompanyInput;
    loan_officer?: loan_officerCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateWithoutLoanInput = {
    id?: string;
    description?: string | null;
    established_date?: Date | string | null;
    location?: string | null;
    sector?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    financial_advisor?: financial_advisorUncheckedCreateNestedManyWithoutCompanyInput;
    loan_officer?: loan_officerUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyCreateOrConnectWithoutLoanInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutLoanInput, companyUncheckedCreateWithoutLoanInput>;
  };

  export type userCreateWithoutLoanInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyCreateNestedManyWithoutUserInput;
    financial_advisor?: financial_advisorCreateNestedManyWithoutUserInput;
    loan_officer?: loan_officerCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutLoanInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    financial_advisor?: financial_advisorUncheckedCreateNestedManyWithoutUserInput;
    loan_officer?: loan_officerUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutLoanInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutLoanInput, userUncheckedCreateWithoutLoanInput>;
  };

  export type payment_scheduleCreateWithoutLoanInput = {
    id?: string;
    due_date: Date | string;
    due_amount: number;
    payment_date?: Date | string | null;
    payment_amount?: number | null;
    balance?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type payment_scheduleUncheckedCreateWithoutLoanInput = {
    id?: string;
    due_date: Date | string;
    due_amount: number;
    payment_date?: Date | string | null;
    payment_amount?: number | null;
    balance?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type payment_scheduleCreateOrConnectWithoutLoanInput = {
    where: payment_scheduleWhereUniqueInput;
    create: XOR<payment_scheduleCreateWithoutLoanInput, payment_scheduleUncheckedCreateWithoutLoanInput>;
  };

  export type payment_scheduleCreateManyLoanInputEnvelope = {
    data: payment_scheduleCreateManyLoanInput | payment_scheduleCreateManyLoanInput[];
    skipDuplicates?: boolean;
  };

  export type companyUpsertWithoutLoanInput = {
    update: XOR<companyUpdateWithoutLoanInput, companyUncheckedUpdateWithoutLoanInput>;
    create: XOR<companyCreateWithoutLoanInput, companyUncheckedCreateWithoutLoanInput>;
    where?: companyWhereInput;
  };

  export type companyUpdateToOneWithWhereWithoutLoanInput = {
    where?: companyWhereInput;
    data: XOR<companyUpdateWithoutLoanInput, companyUncheckedUpdateWithoutLoanInput>;
  };

  export type companyUpdateWithoutLoanInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    established_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    sector?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutCompanyNestedInput;
    financial_advisor?: financial_advisorUpdateManyWithoutCompanyNestedInput;
    loan_officer?: loan_officerUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateWithoutLoanInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    established_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    sector?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    financial_advisor?: financial_advisorUncheckedUpdateManyWithoutCompanyNestedInput;
    loan_officer?: loan_officerUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type userUpsertWithoutLoanInput = {
    update: XOR<userUpdateWithoutLoanInput, userUncheckedUpdateWithoutLoanInput>;
    create: XOR<userCreateWithoutLoanInput, userUncheckedCreateWithoutLoanInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutLoanInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutLoanInput, userUncheckedUpdateWithoutLoanInput>;
  };

  export type userUpdateWithoutLoanInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateManyWithoutUserNestedInput;
    financial_advisor?: financial_advisorUpdateManyWithoutUserNestedInput;
    loan_officer?: loan_officerUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutLoanInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    financial_advisor?: financial_advisorUncheckedUpdateManyWithoutUserNestedInput;
    loan_officer?: loan_officerUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type payment_scheduleUpsertWithWhereUniqueWithoutLoanInput = {
    where: payment_scheduleWhereUniqueInput;
    update: XOR<payment_scheduleUpdateWithoutLoanInput, payment_scheduleUncheckedUpdateWithoutLoanInput>;
    create: XOR<payment_scheduleCreateWithoutLoanInput, payment_scheduleUncheckedCreateWithoutLoanInput>;
  };

  export type payment_scheduleUpdateWithWhereUniqueWithoutLoanInput = {
    where: payment_scheduleWhereUniqueInput;
    data: XOR<payment_scheduleUpdateWithoutLoanInput, payment_scheduleUncheckedUpdateWithoutLoanInput>;
  };

  export type payment_scheduleUpdateManyWithWhereWithoutLoanInput = {
    where: payment_scheduleScalarWhereInput;
    data: XOR<payment_scheduleUpdateManyMutationInput, payment_scheduleUncheckedUpdateManyWithoutLoanInput>;
  };

  export type payment_scheduleScalarWhereInput = {
    AND?: payment_scheduleScalarWhereInput | payment_scheduleScalarWhereInput[];
    OR?: payment_scheduleScalarWhereInput[];
    NOT?: payment_scheduleScalarWhereInput | payment_scheduleScalarWhereInput[];
    id?: UuidFilter<'payment_schedule'> | string;
    loan_id?: UuidFilter<'payment_schedule'> | string;
    due_date?: DateTimeFilter<'payment_schedule'> | Date | string;
    due_amount?: IntFilter<'payment_schedule'> | number;
    payment_date?: DateTimeNullableFilter<'payment_schedule'> | Date | string | null;
    payment_amount?: IntNullableFilter<'payment_schedule'> | number | null;
    balance?: IntNullableFilter<'payment_schedule'> | number | null;
    created_at?: DateTimeFilter<'payment_schedule'> | Date | string;
    updated_at?: DateTimeFilter<'payment_schedule'> | Date | string;
  };

  export type companyCreateWithoutLoan_officerInput = {
    id?: string;
    description?: string | null;
    established_date?: Date | string | null;
    location?: string | null;
    sector?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutCompanyInput;
    financial_advisor?: financial_advisorCreateNestedManyWithoutCompanyInput;
    loan?: loanCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateWithoutLoan_officerInput = {
    id?: string;
    description?: string | null;
    established_date?: Date | string | null;
    location?: string | null;
    sector?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    financial_advisor?: financial_advisorUncheckedCreateNestedManyWithoutCompanyInput;
    loan?: loanUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyCreateOrConnectWithoutLoan_officerInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutLoan_officerInput, companyUncheckedCreateWithoutLoan_officerInput>;
  };

  export type userCreateWithoutLoan_officerInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyCreateNestedManyWithoutUserInput;
    financial_advisor?: financial_advisorCreateNestedManyWithoutUserInput;
    loan?: loanCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutLoan_officerInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    financial_advisor?: financial_advisorUncheckedCreateNestedManyWithoutUserInput;
    loan?: loanUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutLoan_officerInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutLoan_officerInput, userUncheckedCreateWithoutLoan_officerInput>;
  };

  export type companyUpsertWithoutLoan_officerInput = {
    update: XOR<companyUpdateWithoutLoan_officerInput, companyUncheckedUpdateWithoutLoan_officerInput>;
    create: XOR<companyCreateWithoutLoan_officerInput, companyUncheckedCreateWithoutLoan_officerInput>;
    where?: companyWhereInput;
  };

  export type companyUpdateToOneWithWhereWithoutLoan_officerInput = {
    where?: companyWhereInput;
    data: XOR<companyUpdateWithoutLoan_officerInput, companyUncheckedUpdateWithoutLoan_officerInput>;
  };

  export type companyUpdateWithoutLoan_officerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    established_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    sector?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutCompanyNestedInput;
    financial_advisor?: financial_advisorUpdateManyWithoutCompanyNestedInput;
    loan?: loanUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateWithoutLoan_officerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    established_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    sector?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    financial_advisor?: financial_advisorUncheckedUpdateManyWithoutCompanyNestedInput;
    loan?: loanUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type userUpsertWithoutLoan_officerInput = {
    update: XOR<userUpdateWithoutLoan_officerInput, userUncheckedUpdateWithoutLoan_officerInput>;
    create: XOR<userCreateWithoutLoan_officerInput, userUncheckedCreateWithoutLoan_officerInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutLoan_officerInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutLoan_officerInput, userUncheckedUpdateWithoutLoan_officerInput>;
  };

  export type userUpdateWithoutLoan_officerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateManyWithoutUserNestedInput;
    financial_advisor?: financial_advisorUpdateManyWithoutUserNestedInput;
    loan?: loanUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutLoan_officerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    financial_advisor?: financial_advisorUncheckedUpdateManyWithoutUserNestedInput;
    loan?: loanUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type loanCreateWithoutPayment_scheduleInput = {
    id?: string;
    loan_type: string;
    loan_amount: number;
    interest_rate: number;
    loan_duration: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutLoanInput;
    user: userCreateNestedOneWithoutLoanInput;
  };

  export type loanUncheckedCreateWithoutPayment_scheduleInput = {
    id?: string;
    loan_type: string;
    loan_amount: number;
    interest_rate: number;
    loan_duration: number;
    user_id: string;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type loanCreateOrConnectWithoutPayment_scheduleInput = {
    where: loanWhereUniqueInput;
    create: XOR<loanCreateWithoutPayment_scheduleInput, loanUncheckedCreateWithoutPayment_scheduleInput>;
  };

  export type loanUpsertWithoutPayment_scheduleInput = {
    update: XOR<loanUpdateWithoutPayment_scheduleInput, loanUncheckedUpdateWithoutPayment_scheduleInput>;
    create: XOR<loanCreateWithoutPayment_scheduleInput, loanUncheckedCreateWithoutPayment_scheduleInput>;
    where?: loanWhereInput;
  };

  export type loanUpdateToOneWithWhereWithoutPayment_scheduleInput = {
    where?: loanWhereInput;
    data: XOR<loanUpdateWithoutPayment_scheduleInput, loanUncheckedUpdateWithoutPayment_scheduleInput>;
  };

  export type loanUpdateWithoutPayment_scheduleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    loan_type?: StringFieldUpdateOperationsInput | string;
    loan_amount?: IntFieldUpdateOperationsInput | number;
    interest_rate?: IntFieldUpdateOperationsInput | number;
    loan_duration?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutLoanNestedInput;
    user?: userUpdateOneRequiredWithoutLoanNestedInput;
  };

  export type loanUncheckedUpdateWithoutPayment_scheduleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    loan_type?: StringFieldUpdateOperationsInput | string;
    loan_amount?: IntFieldUpdateOperationsInput | number;
    interest_rate?: IntFieldUpdateOperationsInput | number;
    loan_duration?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type companyCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    established_date?: Date | string | null;
    location?: string | null;
    sector?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    financial_advisor?: financial_advisorCreateNestedManyWithoutCompanyInput;
    loan?: loanCreateNestedManyWithoutCompanyInput;
    loan_officer?: loan_officerCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    established_date?: Date | string | null;
    location?: string | null;
    sector?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    financial_advisor?: financial_advisorUncheckedCreateNestedManyWithoutCompanyInput;
    loan?: loanUncheckedCreateNestedManyWithoutCompanyInput;
    loan_officer?: loan_officerUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyCreateOrConnectWithoutUserInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
  };

  export type companyCreateManyUserInputEnvelope = {
    data: companyCreateManyUserInput | companyCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type financial_advisorCreateWithoutUserInput = {
    id?: string;
    experience?: number | null;
    specialization?: string | null;
    availability?: string | null;
    rating?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutFinancial_advisorInput;
  };

  export type financial_advisorUncheckedCreateWithoutUserInput = {
    id?: string;
    experience?: number | null;
    specialization?: string | null;
    company_id: string;
    availability?: string | null;
    rating?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type financial_advisorCreateOrConnectWithoutUserInput = {
    where: financial_advisorWhereUniqueInput;
    create: XOR<financial_advisorCreateWithoutUserInput, financial_advisorUncheckedCreateWithoutUserInput>;
  };

  export type financial_advisorCreateManyUserInputEnvelope = {
    data: financial_advisorCreateManyUserInput | financial_advisorCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type loanCreateWithoutUserInput = {
    id?: string;
    loan_type: string;
    loan_amount: number;
    interest_rate: number;
    loan_duration: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutLoanInput;
    payment_schedule?: payment_scheduleCreateNestedManyWithoutLoanInput;
  };

  export type loanUncheckedCreateWithoutUserInput = {
    id?: string;
    loan_type: string;
    loan_amount: number;
    interest_rate: number;
    loan_duration: number;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    payment_schedule?: payment_scheduleUncheckedCreateNestedManyWithoutLoanInput;
  };

  export type loanCreateOrConnectWithoutUserInput = {
    where: loanWhereUniqueInput;
    create: XOR<loanCreateWithoutUserInput, loanUncheckedCreateWithoutUserInput>;
  };

  export type loanCreateManyUserInputEnvelope = {
    data: loanCreateManyUserInput | loanCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type loan_officerCreateWithoutUserInput = {
    id?: string;
    experience?: number | null;
    availability?: string | null;
    rating?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutLoan_officerInput;
  };

  export type loan_officerUncheckedCreateWithoutUserInput = {
    id?: string;
    experience?: number | null;
    company_id: string;
    availability?: string | null;
    rating?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type loan_officerCreateOrConnectWithoutUserInput = {
    where: loan_officerWhereUniqueInput;
    create: XOR<loan_officerCreateWithoutUserInput, loan_officerUncheckedCreateWithoutUserInput>;
  };

  export type loan_officerCreateManyUserInputEnvelope = {
    data: loan_officerCreateManyUserInput | loan_officerCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type companyUpsertWithWhereUniqueWithoutUserInput = {
    where: companyWhereUniqueInput;
    update: XOR<companyUpdateWithoutUserInput, companyUncheckedUpdateWithoutUserInput>;
    create: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
  };

  export type companyUpdateWithWhereUniqueWithoutUserInput = {
    where: companyWhereUniqueInput;
    data: XOR<companyUpdateWithoutUserInput, companyUncheckedUpdateWithoutUserInput>;
  };

  export type companyUpdateManyWithWhereWithoutUserInput = {
    where: companyScalarWhereInput;
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyWithoutUserInput>;
  };

  export type companyScalarWhereInput = {
    AND?: companyScalarWhereInput | companyScalarWhereInput[];
    OR?: companyScalarWhereInput[];
    NOT?: companyScalarWhereInput | companyScalarWhereInput[];
    id?: UuidFilter<'company'> | string;
    description?: StringNullableFilter<'company'> | string | null;
    established_date?: DateTimeNullableFilter<'company'> | Date | string | null;
    location?: StringNullableFilter<'company'> | string | null;
    sector?: StringNullableFilter<'company'> | string | null;
    name?: StringFilter<'company'> | string;
    created_at?: DateTimeFilter<'company'> | Date | string;
    updated_at?: DateTimeFilter<'company'> | Date | string;
    user_id?: UuidFilter<'company'> | string;
    tenant_id?: StringFilter<'company'> | string;
  };

  export type financial_advisorUpsertWithWhereUniqueWithoutUserInput = {
    where: financial_advisorWhereUniqueInput;
    update: XOR<financial_advisorUpdateWithoutUserInput, financial_advisorUncheckedUpdateWithoutUserInput>;
    create: XOR<financial_advisorCreateWithoutUserInput, financial_advisorUncheckedCreateWithoutUserInput>;
  };

  export type financial_advisorUpdateWithWhereUniqueWithoutUserInput = {
    where: financial_advisorWhereUniqueInput;
    data: XOR<financial_advisorUpdateWithoutUserInput, financial_advisorUncheckedUpdateWithoutUserInput>;
  };

  export type financial_advisorUpdateManyWithWhereWithoutUserInput = {
    where: financial_advisorScalarWhereInput;
    data: XOR<financial_advisorUpdateManyMutationInput, financial_advisorUncheckedUpdateManyWithoutUserInput>;
  };

  export type loanUpsertWithWhereUniqueWithoutUserInput = {
    where: loanWhereUniqueInput;
    update: XOR<loanUpdateWithoutUserInput, loanUncheckedUpdateWithoutUserInput>;
    create: XOR<loanCreateWithoutUserInput, loanUncheckedCreateWithoutUserInput>;
  };

  export type loanUpdateWithWhereUniqueWithoutUserInput = {
    where: loanWhereUniqueInput;
    data: XOR<loanUpdateWithoutUserInput, loanUncheckedUpdateWithoutUserInput>;
  };

  export type loanUpdateManyWithWhereWithoutUserInput = {
    where: loanScalarWhereInput;
    data: XOR<loanUpdateManyMutationInput, loanUncheckedUpdateManyWithoutUserInput>;
  };

  export type loan_officerUpsertWithWhereUniqueWithoutUserInput = {
    where: loan_officerWhereUniqueInput;
    update: XOR<loan_officerUpdateWithoutUserInput, loan_officerUncheckedUpdateWithoutUserInput>;
    create: XOR<loan_officerCreateWithoutUserInput, loan_officerUncheckedCreateWithoutUserInput>;
  };

  export type loan_officerUpdateWithWhereUniqueWithoutUserInput = {
    where: loan_officerWhereUniqueInput;
    data: XOR<loan_officerUpdateWithoutUserInput, loan_officerUncheckedUpdateWithoutUserInput>;
  };

  export type loan_officerUpdateManyWithWhereWithoutUserInput = {
    where: loan_officerScalarWhereInput;
    data: XOR<loan_officerUpdateManyMutationInput, loan_officerUncheckedUpdateManyWithoutUserInput>;
  };

  export type financial_advisorCreateManyCompanyInput = {
    id?: string;
    user_id: string;
    experience?: number | null;
    specialization?: string | null;
    availability?: string | null;
    rating?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type loanCreateManyCompanyInput = {
    id?: string;
    loan_type: string;
    loan_amount: number;
    interest_rate: number;
    loan_duration: number;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type loan_officerCreateManyCompanyInput = {
    id?: string;
    user_id: string;
    experience?: number | null;
    availability?: string | null;
    rating?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type financial_advisorUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    experience?: NullableIntFieldUpdateOperationsInput | number | null;
    specialization?: NullableStringFieldUpdateOperationsInput | string | null;
    availability?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutFinancial_advisorNestedInput;
  };

  export type financial_advisorUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    experience?: NullableIntFieldUpdateOperationsInput | number | null;
    specialization?: NullableStringFieldUpdateOperationsInput | string | null;
    availability?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type financial_advisorUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    experience?: NullableIntFieldUpdateOperationsInput | number | null;
    specialization?: NullableStringFieldUpdateOperationsInput | string | null;
    availability?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type loanUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    loan_type?: StringFieldUpdateOperationsInput | string;
    loan_amount?: IntFieldUpdateOperationsInput | number;
    interest_rate?: IntFieldUpdateOperationsInput | number;
    loan_duration?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutLoanNestedInput;
    payment_schedule?: payment_scheduleUpdateManyWithoutLoanNestedInput;
  };

  export type loanUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    loan_type?: StringFieldUpdateOperationsInput | string;
    loan_amount?: IntFieldUpdateOperationsInput | number;
    interest_rate?: IntFieldUpdateOperationsInput | number;
    loan_duration?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    payment_schedule?: payment_scheduleUncheckedUpdateManyWithoutLoanNestedInput;
  };

  export type loanUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    loan_type?: StringFieldUpdateOperationsInput | string;
    loan_amount?: IntFieldUpdateOperationsInput | number;
    interest_rate?: IntFieldUpdateOperationsInput | number;
    loan_duration?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type loan_officerUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    experience?: NullableIntFieldUpdateOperationsInput | number | null;
    availability?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutLoan_officerNestedInput;
  };

  export type loan_officerUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    experience?: NullableIntFieldUpdateOperationsInput | number | null;
    availability?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type loan_officerUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    experience?: NullableIntFieldUpdateOperationsInput | number | null;
    availability?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type payment_scheduleCreateManyLoanInput = {
    id?: string;
    due_date: Date | string;
    due_amount: number;
    payment_date?: Date | string | null;
    payment_amount?: number | null;
    balance?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type payment_scheduleUpdateWithoutLoanInput = {
    id?: StringFieldUpdateOperationsInput | string;
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    due_amount?: IntFieldUpdateOperationsInput | number;
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    payment_amount?: NullableIntFieldUpdateOperationsInput | number | null;
    balance?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type payment_scheduleUncheckedUpdateWithoutLoanInput = {
    id?: StringFieldUpdateOperationsInput | string;
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    due_amount?: IntFieldUpdateOperationsInput | number;
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    payment_amount?: NullableIntFieldUpdateOperationsInput | number | null;
    balance?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type payment_scheduleUncheckedUpdateManyWithoutLoanInput = {
    id?: StringFieldUpdateOperationsInput | string;
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    due_amount?: IntFieldUpdateOperationsInput | number;
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    payment_amount?: NullableIntFieldUpdateOperationsInput | number | null;
    balance?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type companyCreateManyUserInput = {
    id?: string;
    description?: string | null;
    established_date?: Date | string | null;
    location?: string | null;
    sector?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type financial_advisorCreateManyUserInput = {
    id?: string;
    experience?: number | null;
    specialization?: string | null;
    company_id: string;
    availability?: string | null;
    rating?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type loanCreateManyUserInput = {
    id?: string;
    loan_type: string;
    loan_amount: number;
    interest_rate: number;
    loan_duration: number;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type loan_officerCreateManyUserInput = {
    id?: string;
    experience?: number | null;
    company_id: string;
    availability?: string | null;
    rating?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type companyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    established_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    sector?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    financial_advisor?: financial_advisorUpdateManyWithoutCompanyNestedInput;
    loan?: loanUpdateManyWithoutCompanyNestedInput;
    loan_officer?: loan_officerUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    established_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    sector?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    financial_advisor?: financial_advisorUncheckedUpdateManyWithoutCompanyNestedInput;
    loan?: loanUncheckedUpdateManyWithoutCompanyNestedInput;
    loan_officer?: loan_officerUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    established_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    sector?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type financial_advisorUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    experience?: NullableIntFieldUpdateOperationsInput | number | null;
    specialization?: NullableStringFieldUpdateOperationsInput | string | null;
    availability?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutFinancial_advisorNestedInput;
  };

  export type financial_advisorUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    experience?: NullableIntFieldUpdateOperationsInput | number | null;
    specialization?: NullableStringFieldUpdateOperationsInput | string | null;
    company_id?: StringFieldUpdateOperationsInput | string;
    availability?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type financial_advisorUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    experience?: NullableIntFieldUpdateOperationsInput | number | null;
    specialization?: NullableStringFieldUpdateOperationsInput | string | null;
    company_id?: StringFieldUpdateOperationsInput | string;
    availability?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type loanUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    loan_type?: StringFieldUpdateOperationsInput | string;
    loan_amount?: IntFieldUpdateOperationsInput | number;
    interest_rate?: IntFieldUpdateOperationsInput | number;
    loan_duration?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutLoanNestedInput;
    payment_schedule?: payment_scheduleUpdateManyWithoutLoanNestedInput;
  };

  export type loanUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    loan_type?: StringFieldUpdateOperationsInput | string;
    loan_amount?: IntFieldUpdateOperationsInput | number;
    interest_rate?: IntFieldUpdateOperationsInput | number;
    loan_duration?: IntFieldUpdateOperationsInput | number;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    payment_schedule?: payment_scheduleUncheckedUpdateManyWithoutLoanNestedInput;
  };

  export type loanUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    loan_type?: StringFieldUpdateOperationsInput | string;
    loan_amount?: IntFieldUpdateOperationsInput | number;
    interest_rate?: IntFieldUpdateOperationsInput | number;
    loan_duration?: IntFieldUpdateOperationsInput | number;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type loan_officerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    experience?: NullableIntFieldUpdateOperationsInput | number | null;
    availability?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutLoan_officerNestedInput;
  };

  export type loan_officerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    experience?: NullableIntFieldUpdateOperationsInput | number | null;
    company_id?: StringFieldUpdateOperationsInput | string;
    availability?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type loan_officerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    experience?: NullableIntFieldUpdateOperationsInput | number | null;
    company_id?: StringFieldUpdateOperationsInput | string;
    availability?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use CompanyCountOutputTypeDefaultArgs instead
   */
  export type CompanyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    CompanyCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use LoanCountOutputTypeDefaultArgs instead
   */
  export type LoanCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    LoanCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use companyDefaultArgs instead
   */
  export type companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    companyDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use financial_advisorDefaultArgs instead
   */
  export type financial_advisorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    financial_advisorDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use loanDefaultArgs instead
   */
  export type loanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = loanDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use loan_officerDefaultArgs instead
   */
  export type loan_officerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    loan_officerDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use payment_scheduleDefaultArgs instead
   */
  export type payment_scheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    payment_scheduleDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
