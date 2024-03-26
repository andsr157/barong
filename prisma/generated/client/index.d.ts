
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model address
 * 
 */
export type address = $Result.DefaultSelection<Prisma.$addressPayload>
/**
 * Model trashCategory
 * 
 */
export type trashCategory = $Result.DefaultSelection<Prisma.$trashCategoryPayload>
/**
 * Model trash
 * 
 */
export type trash = $Result.DefaultSelection<Prisma.$trashPayload>
/**
 * Model status
 * 
 */
export type status = $Result.DefaultSelection<Prisma.$statusPayload>
/**
 * Model transaction
 * 
 */
export type transaction = $Result.DefaultSelection<Prisma.$transactionPayload>
/**
 * Model transaction_detail
 * 
 */
export type transaction_detail = $Result.DefaultSelection<Prisma.$transaction_detailPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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
  $use(cb: Prisma.Middleware): void

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs>;

  /**
   * `prisma.address`: Exposes CRUD operations for the **address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.addressDelegate<ExtArgs>;

  /**
   * `prisma.trashCategory`: Exposes CRUD operations for the **trashCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TrashCategories
    * const trashCategories = await prisma.trashCategory.findMany()
    * ```
    */
  get trashCategory(): Prisma.trashCategoryDelegate<ExtArgs>;

  /**
   * `prisma.trash`: Exposes CRUD operations for the **trash** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trashes
    * const trashes = await prisma.trash.findMany()
    * ```
    */
  get trash(): Prisma.trashDelegate<ExtArgs>;

  /**
   * `prisma.status`: Exposes CRUD operations for the **status** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Statuses
    * const statuses = await prisma.status.findMany()
    * ```
    */
  get status(): Prisma.statusDelegate<ExtArgs>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.transactionDelegate<ExtArgs>;

  /**
   * `prisma.transaction_detail`: Exposes CRUD operations for the **transaction_detail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transaction_details
    * const transaction_details = await prisma.transaction_detail.findMany()
    * ```
    */
  get transaction_detail(): Prisma.transaction_detailDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.11.0
   * Query Engine version: efd2449663b3d73d637ea1fd226bafbcf45b3102
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

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
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


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
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
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
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    users: 'users',
    address: 'address',
    trashCategory: 'trashCategory',
    trash: 'trash',
    status: 'status',
    transaction: 'transaction',
    transaction_detail: 'transaction_detail'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'users' | 'address' | 'trashCategory' | 'trash' | 'status' | 'transaction' | 'transaction_detail'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>,
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      address: {
        payload: Prisma.$addressPayload<ExtArgs>
        fields: Prisma.addressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.addressFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$addressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.addressFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$addressPayload>
          }
          findFirst: {
            args: Prisma.addressFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$addressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.addressFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$addressPayload>
          }
          findMany: {
            args: Prisma.addressFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$addressPayload>[]
          }
          create: {
            args: Prisma.addressCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$addressPayload>
          }
          createMany: {
            args: Prisma.addressCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.addressDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$addressPayload>
          }
          update: {
            args: Prisma.addressUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$addressPayload>
          }
          deleteMany: {
            args: Prisma.addressDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.addressUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.addressUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$addressPayload>
          }
          aggregate: {
            args: Prisma.AddressAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAddress>
          }
          groupBy: {
            args: Prisma.addressGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.addressCountArgs<ExtArgs>,
            result: $Utils.Optional<AddressCountAggregateOutputType> | number
          }
        }
      }
      trashCategory: {
        payload: Prisma.$trashCategoryPayload<ExtArgs>
        fields: Prisma.trashCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.trashCategoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$trashCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.trashCategoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$trashCategoryPayload>
          }
          findFirst: {
            args: Prisma.trashCategoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$trashCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.trashCategoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$trashCategoryPayload>
          }
          findMany: {
            args: Prisma.trashCategoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$trashCategoryPayload>[]
          }
          create: {
            args: Prisma.trashCategoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$trashCategoryPayload>
          }
          createMany: {
            args: Prisma.trashCategoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.trashCategoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$trashCategoryPayload>
          }
          update: {
            args: Prisma.trashCategoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$trashCategoryPayload>
          }
          deleteMany: {
            args: Prisma.trashCategoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.trashCategoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.trashCategoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$trashCategoryPayload>
          }
          aggregate: {
            args: Prisma.TrashCategoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTrashCategory>
          }
          groupBy: {
            args: Prisma.trashCategoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TrashCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.trashCategoryCountArgs<ExtArgs>,
            result: $Utils.Optional<TrashCategoryCountAggregateOutputType> | number
          }
        }
      }
      trash: {
        payload: Prisma.$trashPayload<ExtArgs>
        fields: Prisma.trashFieldRefs
        operations: {
          findUnique: {
            args: Prisma.trashFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$trashPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.trashFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$trashPayload>
          }
          findFirst: {
            args: Prisma.trashFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$trashPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.trashFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$trashPayload>
          }
          findMany: {
            args: Prisma.trashFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$trashPayload>[]
          }
          create: {
            args: Prisma.trashCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$trashPayload>
          }
          createMany: {
            args: Prisma.trashCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.trashDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$trashPayload>
          }
          update: {
            args: Prisma.trashUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$trashPayload>
          }
          deleteMany: {
            args: Prisma.trashDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.trashUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.trashUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$trashPayload>
          }
          aggregate: {
            args: Prisma.TrashAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTrash>
          }
          groupBy: {
            args: Prisma.trashGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TrashGroupByOutputType>[]
          }
          count: {
            args: Prisma.trashCountArgs<ExtArgs>,
            result: $Utils.Optional<TrashCountAggregateOutputType> | number
          }
        }
      }
      status: {
        payload: Prisma.$statusPayload<ExtArgs>
        fields: Prisma.statusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.statusFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$statusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.statusFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$statusPayload>
          }
          findFirst: {
            args: Prisma.statusFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$statusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.statusFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$statusPayload>
          }
          findMany: {
            args: Prisma.statusFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$statusPayload>[]
          }
          create: {
            args: Prisma.statusCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$statusPayload>
          }
          createMany: {
            args: Prisma.statusCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.statusDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$statusPayload>
          }
          update: {
            args: Prisma.statusUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$statusPayload>
          }
          deleteMany: {
            args: Prisma.statusDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.statusUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.statusUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$statusPayload>
          }
          aggregate: {
            args: Prisma.StatusAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateStatus>
          }
          groupBy: {
            args: Prisma.statusGroupByArgs<ExtArgs>,
            result: $Utils.Optional<StatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.statusCountArgs<ExtArgs>,
            result: $Utils.Optional<StatusCountAggregateOutputType> | number
          }
        }
      }
      transaction: {
        payload: Prisma.$transactionPayload<ExtArgs>
        fields: Prisma.transactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.transactionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.transactionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          findFirst: {
            args: Prisma.transactionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.transactionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          findMany: {
            args: Prisma.transactionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>[]
          }
          create: {
            args: Prisma.transactionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          createMany: {
            args: Prisma.transactionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.transactionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          update: {
            args: Prisma.transactionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          deleteMany: {
            args: Prisma.transactionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.transactionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.transactionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.transactionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.transactionCountArgs<ExtArgs>,
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      transaction_detail: {
        payload: Prisma.$transaction_detailPayload<ExtArgs>
        fields: Prisma.transaction_detailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.transaction_detailFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transaction_detailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.transaction_detailFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transaction_detailPayload>
          }
          findFirst: {
            args: Prisma.transaction_detailFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transaction_detailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.transaction_detailFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transaction_detailPayload>
          }
          findMany: {
            args: Prisma.transaction_detailFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transaction_detailPayload>[]
          }
          create: {
            args: Prisma.transaction_detailCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transaction_detailPayload>
          }
          createMany: {
            args: Prisma.transaction_detailCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.transaction_detailDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transaction_detailPayload>
          }
          update: {
            args: Prisma.transaction_detailUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transaction_detailPayload>
          }
          deleteMany: {
            args: Prisma.transaction_detailDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.transaction_detailUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.transaction_detailUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$transaction_detailPayload>
          }
          aggregate: {
            args: Prisma.Transaction_detailAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTransaction_detail>
          }
          groupBy: {
            args: Prisma.transaction_detailGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Transaction_detailGroupByOutputType>[]
          }
          count: {
            args: Prisma.transaction_detailCountArgs<ExtArgs>,
            result: $Utils.Optional<Transaction_detailCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
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
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
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
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    address: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | UsersCountOutputTypeCountAddressArgs
  }

  // Custom InputTypes

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountAddressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: addressWhereInput
  }



  /**
   * Count Type TrashCategoryCountOutputType
   */

  export type TrashCategoryCountOutputType = {
    subcategory: number
  }

  export type TrashCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subcategory?: boolean | TrashCategoryCountOutputTypeCountSubcategoryArgs
  }

  // Custom InputTypes

  /**
   * TrashCategoryCountOutputType without action
   */
  export type TrashCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrashCategoryCountOutputType
     */
    select?: TrashCategoryCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TrashCategoryCountOutputType without action
   */
  export type TrashCategoryCountOutputTypeCountSubcategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: trashWhereInput
  }



  /**
   * Count Type TrashCountOutputType
   */

  export type TrashCountOutputType = {
    transaction_detail: number
  }

  export type TrashCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction_detail?: boolean | TrashCountOutputTypeCountTransaction_detailArgs
  }

  // Custom InputTypes

  /**
   * TrashCountOutputType without action
   */
  export type TrashCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrashCountOutputType
     */
    select?: TrashCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TrashCountOutputType without action
   */
  export type TrashCountOutputTypeCountTransaction_detailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transaction_detailWhereInput
  }



  /**
   * Count Type StatusCountOutputType
   */

  export type StatusCountOutputType = {
    transaction: number
  }

  export type StatusCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction?: boolean | StatusCountOutputTypeCountTransactionArgs
  }

  // Custom InputTypes

  /**
   * StatusCountOutputType without action
   */
  export type StatusCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusCountOutputType
     */
    select?: StatusCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * StatusCountOutputType without action
   */
  export type StatusCountOutputTypeCountTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionWhereInput
  }



  /**
   * Count Type TransactionCountOutputType
   */

  export type TransactionCountOutputType = {
    transaction_detail: number
  }

  export type TransactionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction_detail?: boolean | TransactionCountOutputTypeCountTransaction_detailArgs
  }

  // Custom InputTypes

  /**
   * TransactionCountOutputType without action
   */
  export type TransactionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionCountOutputType
     */
    select?: TransactionCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TransactionCountOutputType without action
   */
  export type TransactionCountOutputTypeCountTransaction_detailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transaction_detailWhereInput
  }



  /**
   * Models
   */

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    uuid: string | null
    name: string | null
    email: string | null
    telp: string | null
    avatar: string | null
    date_created: Date | null
    update_at: Date | null
    password: string | null
    role: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    uuid: string | null
    name: string | null
    email: string | null
    telp: string | null
    avatar: string | null
    date_created: Date | null
    update_at: Date | null
    password: string | null
    role: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    uuid: number
    name: number
    email: number
    telp: number
    avatar: number
    date_created: number
    update_at: number
    password: number
    role: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    uuid?: true
    name?: true
    email?: true
    telp?: true
    avatar?: true
    date_created?: true
    update_at?: true
    password?: true
    role?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    uuid?: true
    name?: true
    email?: true
    telp?: true
    avatar?: true
    date_created?: true
    update_at?: true
    password?: true
    role?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    uuid?: true
    name?: true
    email?: true
    telp?: true
    avatar?: true
    date_created?: true
    update_at?: true
    password?: true
    role?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    uuid: string
    name: string
    email: string
    telp: string
    avatar: string
    date_created: Date
    update_at: Date | null
    password: string
    role: string
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    name?: boolean
    email?: boolean
    telp?: boolean
    avatar?: boolean
    date_created?: boolean
    update_at?: boolean
    password?: boolean
    role?: boolean
    address?: boolean | users$addressArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    uuid?: boolean
    name?: boolean
    email?: boolean
    telp?: boolean
    avatar?: boolean
    date_created?: boolean
    update_at?: boolean
    password?: boolean
    role?: boolean
  }

  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | users$addressArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      address: Prisma.$addressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uuid: string
      name: string
      email: string
      telp: string
      avatar: string
      date_created: Date
      update_at: Date | null
      password: string
      role: string
    }, ExtArgs["result"]["users"]>
    composites: {}
  }


  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends usersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends usersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends usersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends usersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, usersCreateArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {usersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends usersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends usersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, usersDeleteArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends usersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpdateArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends usersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends usersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends usersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpsertArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    address<T extends users$addressArgs<ExtArgs> = {}>(args?: Subset<T, users$addressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the users model
   */ 
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly uuid: FieldRef<"users", 'String'>
    readonly name: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly telp: FieldRef<"users", 'String'>
    readonly avatar: FieldRef<"users", 'String'>
    readonly date_created: FieldRef<"users", 'DateTime'>
    readonly update_at: FieldRef<"users", 'DateTime'>
    readonly password: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes

  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }


  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
  }


  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }


  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
  }


  /**
   * users.address
   */
  export type users$addressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: addressInclude<ExtArgs> | null
    where?: addressWhereInput
    orderBy?: addressOrderByWithRelationInput | addressOrderByWithRelationInput[]
    cursor?: addressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }


  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
  }



  /**
   * Model address
   */

  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type AddressSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type AddressMinAggregateOutputType = {
    id: number | null
    label: string | null
    address_name: string | null
    detail: string | null
    owner_name: string | null
    owner_telp: string | null
    latitude: string | null
    longitude: string | null
    user_id: number | null
  }

  export type AddressMaxAggregateOutputType = {
    id: number | null
    label: string | null
    address_name: string | null
    detail: string | null
    owner_name: string | null
    owner_telp: string | null
    latitude: string | null
    longitude: string | null
    user_id: number | null
  }

  export type AddressCountAggregateOutputType = {
    id: number
    label: number
    address_name: number
    detail: number
    owner_name: number
    owner_telp: number
    latitude: number
    longitude: number
    user_id: number
    _all: number
  }


  export type AddressAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type AddressSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type AddressMinAggregateInputType = {
    id?: true
    label?: true
    address_name?: true
    detail?: true
    owner_name?: true
    owner_telp?: true
    latitude?: true
    longitude?: true
    user_id?: true
  }

  export type AddressMaxAggregateInputType = {
    id?: true
    label?: true
    address_name?: true
    detail?: true
    owner_name?: true
    owner_telp?: true
    latitude?: true
    longitude?: true
    user_id?: true
  }

  export type AddressCountAggregateInputType = {
    id?: true
    label?: true
    address_name?: true
    detail?: true
    owner_name?: true
    owner_telp?: true
    latitude?: true
    longitude?: true
    user_id?: true
    _all?: true
  }

  export type AddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which address to aggregate.
     */
    where?: addressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addresses to fetch.
     */
    orderBy?: addressOrderByWithRelationInput | addressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: addressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type addressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: addressWhereInput
    orderBy?: addressOrderByWithAggregationInput | addressOrderByWithAggregationInput[]
    by: AddressScalarFieldEnum[] | AddressScalarFieldEnum
    having?: addressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _avg?: AddressAvgAggregateInputType
    _sum?: AddressSumAggregateInputType
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }

  export type AddressGroupByOutputType = {
    id: number
    label: string
    address_name: string
    detail: string
    owner_name: string
    owner_telp: string
    latitude: string
    longitude: string
    user_id: number
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends addressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type addressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    address_name?: boolean
    detail?: boolean
    owner_name?: boolean
    owner_telp?: boolean
    latitude?: boolean
    longitude?: boolean
    user_id?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
    transaction?: boolean | address$transactionArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type addressSelectScalar = {
    id?: boolean
    label?: boolean
    address_name?: boolean
    detail?: boolean
    owner_name?: boolean
    owner_telp?: boolean
    latitude?: boolean
    longitude?: boolean
    user_id?: boolean
  }

  export type addressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
    transaction?: boolean | address$transactionArgs<ExtArgs>
  }


  export type $addressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "address"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
      transaction: Prisma.$transactionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      label: string
      address_name: string
      detail: string
      owner_name: string
      owner_telp: string
      latitude: string
      longitude: string
      user_id: number
    }, ExtArgs["result"]["address"]>
    composites: {}
  }


  type addressGetPayload<S extends boolean | null | undefined | addressDefaultArgs> = $Result.GetResult<Prisma.$addressPayload, S>

  type addressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<addressFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AddressCountAggregateInputType | true
    }

  export interface addressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['address'], meta: { name: 'address' } }
    /**
     * Find zero or one Address that matches the filter.
     * @param {addressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends addressFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, addressFindUniqueArgs<ExtArgs>>
    ): Prisma__addressClient<$Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Address that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {addressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends addressFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, addressFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__addressClient<$Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends addressFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, addressFindFirstArgs<ExtArgs>>
    ): Prisma__addressClient<$Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Address that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends addressFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, addressFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__addressClient<$Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressWithIdOnly = await prisma.address.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends addressFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, addressFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Address.
     * @param {addressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
    **/
    create<T extends addressCreateArgs<ExtArgs>>(
      args: SelectSubset<T, addressCreateArgs<ExtArgs>>
    ): Prisma__addressClient<$Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Addresses.
     *     @param {addressCreateManyArgs} args - Arguments to create many Addresses.
     *     @example
     *     // Create many Addresses
     *     const address = await prisma.address.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends addressCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, addressCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Address.
     * @param {addressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
    **/
    delete<T extends addressDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, addressDeleteArgs<ExtArgs>>
    ): Prisma__addressClient<$Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Address.
     * @param {addressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends addressUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, addressUpdateArgs<ExtArgs>>
    ): Prisma__addressClient<$Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Addresses.
     * @param {addressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends addressDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, addressDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends addressUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, addressUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Address.
     * @param {addressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
    **/
    upsert<T extends addressUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, addressUpsertArgs<ExtArgs>>
    ): Prisma__addressClient<$Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends addressCountArgs>(
      args?: Subset<T, addressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressGroupByArgs} args - Group by arguments.
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
      T extends addressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: addressGroupByArgs['orderBy'] }
        : { orderBy?: addressGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, addressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the address model
   */
  readonly fields: addressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__addressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    transaction<T extends address$transactionArgs<ExtArgs> = {}>(args?: Subset<T, address$transactionArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the address model
   */ 
  interface addressFieldRefs {
    readonly id: FieldRef<"address", 'Int'>
    readonly label: FieldRef<"address", 'String'>
    readonly address_name: FieldRef<"address", 'String'>
    readonly detail: FieldRef<"address", 'String'>
    readonly owner_name: FieldRef<"address", 'String'>
    readonly owner_telp: FieldRef<"address", 'String'>
    readonly latitude: FieldRef<"address", 'String'>
    readonly longitude: FieldRef<"address", 'String'>
    readonly user_id: FieldRef<"address", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * address findUnique
   */
  export type addressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: addressInclude<ExtArgs> | null
    /**
     * Filter, which address to fetch.
     */
    where: addressWhereUniqueInput
  }


  /**
   * address findUniqueOrThrow
   */
  export type addressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: addressInclude<ExtArgs> | null
    /**
     * Filter, which address to fetch.
     */
    where: addressWhereUniqueInput
  }


  /**
   * address findFirst
   */
  export type addressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: addressInclude<ExtArgs> | null
    /**
     * Filter, which address to fetch.
     */
    where?: addressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addresses to fetch.
     */
    orderBy?: addressOrderByWithRelationInput | addressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for addresses.
     */
    cursor?: addressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }


  /**
   * address findFirstOrThrow
   */
  export type addressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: addressInclude<ExtArgs> | null
    /**
     * Filter, which address to fetch.
     */
    where?: addressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addresses to fetch.
     */
    orderBy?: addressOrderByWithRelationInput | addressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for addresses.
     */
    cursor?: addressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }


  /**
   * address findMany
   */
  export type addressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: addressInclude<ExtArgs> | null
    /**
     * Filter, which addresses to fetch.
     */
    where?: addressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addresses to fetch.
     */
    orderBy?: addressOrderByWithRelationInput | addressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing addresses.
     */
    cursor?: addressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addresses.
     */
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }


  /**
   * address create
   */
  export type addressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: addressInclude<ExtArgs> | null
    /**
     * The data needed to create a address.
     */
    data: XOR<addressCreateInput, addressUncheckedCreateInput>
  }


  /**
   * address createMany
   */
  export type addressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many addresses.
     */
    data: addressCreateManyInput | addressCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * address update
   */
  export type addressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: addressInclude<ExtArgs> | null
    /**
     * The data needed to update a address.
     */
    data: XOR<addressUpdateInput, addressUncheckedUpdateInput>
    /**
     * Choose, which address to update.
     */
    where: addressWhereUniqueInput
  }


  /**
   * address updateMany
   */
  export type addressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update addresses.
     */
    data: XOR<addressUpdateManyMutationInput, addressUncheckedUpdateManyInput>
    /**
     * Filter which addresses to update
     */
    where?: addressWhereInput
  }


  /**
   * address upsert
   */
  export type addressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: addressInclude<ExtArgs> | null
    /**
     * The filter to search for the address to update in case it exists.
     */
    where: addressWhereUniqueInput
    /**
     * In case the address found by the `where` argument doesn't exist, create a new address with this data.
     */
    create: XOR<addressCreateInput, addressUncheckedCreateInput>
    /**
     * In case the address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<addressUpdateInput, addressUncheckedUpdateInput>
  }


  /**
   * address delete
   */
  export type addressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: addressInclude<ExtArgs> | null
    /**
     * Filter which address to delete.
     */
    where: addressWhereUniqueInput
  }


  /**
   * address deleteMany
   */
  export type addressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which addresses to delete
     */
    where?: addressWhereInput
  }


  /**
   * address.transaction
   */
  export type address$transactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: transactionInclude<ExtArgs> | null
    where?: transactionWhereInput
  }


  /**
   * address without action
   */
  export type addressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: addressInclude<ExtArgs> | null
  }



  /**
   * Model trashCategory
   */

  export type AggregateTrashCategory = {
    _count: TrashCategoryCountAggregateOutputType | null
    _avg: TrashCategoryAvgAggregateOutputType | null
    _sum: TrashCategorySumAggregateOutputType | null
    _min: TrashCategoryMinAggregateOutputType | null
    _max: TrashCategoryMaxAggregateOutputType | null
  }

  export type TrashCategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type TrashCategorySumAggregateOutputType = {
    id: number | null
  }

  export type TrashCategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TrashCategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TrashCategoryCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type TrashCategoryAvgAggregateInputType = {
    id?: true
  }

  export type TrashCategorySumAggregateInputType = {
    id?: true
  }

  export type TrashCategoryMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type TrashCategoryMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type TrashCategoryCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type TrashCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which trashCategory to aggregate.
     */
    where?: trashCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trashCategories to fetch.
     */
    orderBy?: trashCategoryOrderByWithRelationInput | trashCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: trashCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trashCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trashCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned trashCategories
    **/
    _count?: true | TrashCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrashCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrashCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrashCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrashCategoryMaxAggregateInputType
  }

  export type GetTrashCategoryAggregateType<T extends TrashCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateTrashCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrashCategory[P]>
      : GetScalarType<T[P], AggregateTrashCategory[P]>
  }




  export type trashCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: trashCategoryWhereInput
    orderBy?: trashCategoryOrderByWithAggregationInput | trashCategoryOrderByWithAggregationInput[]
    by: TrashCategoryScalarFieldEnum[] | TrashCategoryScalarFieldEnum
    having?: trashCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrashCategoryCountAggregateInputType | true
    _avg?: TrashCategoryAvgAggregateInputType
    _sum?: TrashCategorySumAggregateInputType
    _min?: TrashCategoryMinAggregateInputType
    _max?: TrashCategoryMaxAggregateInputType
  }

  export type TrashCategoryGroupByOutputType = {
    id: number
    name: string
    _count: TrashCategoryCountAggregateOutputType | null
    _avg: TrashCategoryAvgAggregateOutputType | null
    _sum: TrashCategorySumAggregateOutputType | null
    _min: TrashCategoryMinAggregateOutputType | null
    _max: TrashCategoryMaxAggregateOutputType | null
  }

  type GetTrashCategoryGroupByPayload<T extends trashCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrashCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrashCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrashCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], TrashCategoryGroupByOutputType[P]>
        }
      >
    >


  export type trashCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    subcategory?: boolean | trashCategory$subcategoryArgs<ExtArgs>
    _count?: boolean | TrashCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trashCategory"]>

  export type trashCategorySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type trashCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subcategory?: boolean | trashCategory$subcategoryArgs<ExtArgs>
    _count?: boolean | TrashCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $trashCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "trashCategory"
    objects: {
      subcategory: Prisma.$trashPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["trashCategory"]>
    composites: {}
  }


  type trashCategoryGetPayload<S extends boolean | null | undefined | trashCategoryDefaultArgs> = $Result.GetResult<Prisma.$trashCategoryPayload, S>

  type trashCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<trashCategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TrashCategoryCountAggregateInputType | true
    }

  export interface trashCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['trashCategory'], meta: { name: 'trashCategory' } }
    /**
     * Find zero or one TrashCategory that matches the filter.
     * @param {trashCategoryFindUniqueArgs} args - Arguments to find a TrashCategory
     * @example
     * // Get one TrashCategory
     * const trashCategory = await prisma.trashCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends trashCategoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, trashCategoryFindUniqueArgs<ExtArgs>>
    ): Prisma__trashCategoryClient<$Result.GetResult<Prisma.$trashCategoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TrashCategory that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {trashCategoryFindUniqueOrThrowArgs} args - Arguments to find a TrashCategory
     * @example
     * // Get one TrashCategory
     * const trashCategory = await prisma.trashCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends trashCategoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, trashCategoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__trashCategoryClient<$Result.GetResult<Prisma.$trashCategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TrashCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trashCategoryFindFirstArgs} args - Arguments to find a TrashCategory
     * @example
     * // Get one TrashCategory
     * const trashCategory = await prisma.trashCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends trashCategoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, trashCategoryFindFirstArgs<ExtArgs>>
    ): Prisma__trashCategoryClient<$Result.GetResult<Prisma.$trashCategoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TrashCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trashCategoryFindFirstOrThrowArgs} args - Arguments to find a TrashCategory
     * @example
     * // Get one TrashCategory
     * const trashCategory = await prisma.trashCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends trashCategoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, trashCategoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__trashCategoryClient<$Result.GetResult<Prisma.$trashCategoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TrashCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trashCategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrashCategories
     * const trashCategories = await prisma.trashCategory.findMany()
     * 
     * // Get first 10 TrashCategories
     * const trashCategories = await prisma.trashCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trashCategoryWithIdOnly = await prisma.trashCategory.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends trashCategoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, trashCategoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$trashCategoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TrashCategory.
     * @param {trashCategoryCreateArgs} args - Arguments to create a TrashCategory.
     * @example
     * // Create one TrashCategory
     * const TrashCategory = await prisma.trashCategory.create({
     *   data: {
     *     // ... data to create a TrashCategory
     *   }
     * })
     * 
    **/
    create<T extends trashCategoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, trashCategoryCreateArgs<ExtArgs>>
    ): Prisma__trashCategoryClient<$Result.GetResult<Prisma.$trashCategoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TrashCategories.
     *     @param {trashCategoryCreateManyArgs} args - Arguments to create many TrashCategories.
     *     @example
     *     // Create many TrashCategories
     *     const trashCategory = await prisma.trashCategory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends trashCategoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, trashCategoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TrashCategory.
     * @param {trashCategoryDeleteArgs} args - Arguments to delete one TrashCategory.
     * @example
     * // Delete one TrashCategory
     * const TrashCategory = await prisma.trashCategory.delete({
     *   where: {
     *     // ... filter to delete one TrashCategory
     *   }
     * })
     * 
    **/
    delete<T extends trashCategoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, trashCategoryDeleteArgs<ExtArgs>>
    ): Prisma__trashCategoryClient<$Result.GetResult<Prisma.$trashCategoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TrashCategory.
     * @param {trashCategoryUpdateArgs} args - Arguments to update one TrashCategory.
     * @example
     * // Update one TrashCategory
     * const trashCategory = await prisma.trashCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends trashCategoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, trashCategoryUpdateArgs<ExtArgs>>
    ): Prisma__trashCategoryClient<$Result.GetResult<Prisma.$trashCategoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TrashCategories.
     * @param {trashCategoryDeleteManyArgs} args - Arguments to filter TrashCategories to delete.
     * @example
     * // Delete a few TrashCategories
     * const { count } = await prisma.trashCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends trashCategoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, trashCategoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrashCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trashCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrashCategories
     * const trashCategory = await prisma.trashCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends trashCategoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, trashCategoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TrashCategory.
     * @param {trashCategoryUpsertArgs} args - Arguments to update or create a TrashCategory.
     * @example
     * // Update or create a TrashCategory
     * const trashCategory = await prisma.trashCategory.upsert({
     *   create: {
     *     // ... data to create a TrashCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrashCategory we want to update
     *   }
     * })
    **/
    upsert<T extends trashCategoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, trashCategoryUpsertArgs<ExtArgs>>
    ): Prisma__trashCategoryClient<$Result.GetResult<Prisma.$trashCategoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TrashCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trashCategoryCountArgs} args - Arguments to filter TrashCategories to count.
     * @example
     * // Count the number of TrashCategories
     * const count = await prisma.trashCategory.count({
     *   where: {
     *     // ... the filter for the TrashCategories we want to count
     *   }
     * })
    **/
    count<T extends trashCategoryCountArgs>(
      args?: Subset<T, trashCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrashCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrashCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrashCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TrashCategoryAggregateArgs>(args: Subset<T, TrashCategoryAggregateArgs>): Prisma.PrismaPromise<GetTrashCategoryAggregateType<T>>

    /**
     * Group by TrashCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trashCategoryGroupByArgs} args - Group by arguments.
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
      T extends trashCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: trashCategoryGroupByArgs['orderBy'] }
        : { orderBy?: trashCategoryGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, trashCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrashCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the trashCategory model
   */
  readonly fields: trashCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for trashCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__trashCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    subcategory<T extends trashCategory$subcategoryArgs<ExtArgs> = {}>(args?: Subset<T, trashCategory$subcategoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$trashPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the trashCategory model
   */ 
  interface trashCategoryFieldRefs {
    readonly id: FieldRef<"trashCategory", 'Int'>
    readonly name: FieldRef<"trashCategory", 'String'>
  }
    

  // Custom InputTypes

  /**
   * trashCategory findUnique
   */
  export type trashCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trashCategory
     */
    select?: trashCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: trashCategoryInclude<ExtArgs> | null
    /**
     * Filter, which trashCategory to fetch.
     */
    where: trashCategoryWhereUniqueInput
  }


  /**
   * trashCategory findUniqueOrThrow
   */
  export type trashCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trashCategory
     */
    select?: trashCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: trashCategoryInclude<ExtArgs> | null
    /**
     * Filter, which trashCategory to fetch.
     */
    where: trashCategoryWhereUniqueInput
  }


  /**
   * trashCategory findFirst
   */
  export type trashCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trashCategory
     */
    select?: trashCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: trashCategoryInclude<ExtArgs> | null
    /**
     * Filter, which trashCategory to fetch.
     */
    where?: trashCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trashCategories to fetch.
     */
    orderBy?: trashCategoryOrderByWithRelationInput | trashCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for trashCategories.
     */
    cursor?: trashCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trashCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trashCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of trashCategories.
     */
    distinct?: TrashCategoryScalarFieldEnum | TrashCategoryScalarFieldEnum[]
  }


  /**
   * trashCategory findFirstOrThrow
   */
  export type trashCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trashCategory
     */
    select?: trashCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: trashCategoryInclude<ExtArgs> | null
    /**
     * Filter, which trashCategory to fetch.
     */
    where?: trashCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trashCategories to fetch.
     */
    orderBy?: trashCategoryOrderByWithRelationInput | trashCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for trashCategories.
     */
    cursor?: trashCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trashCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trashCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of trashCategories.
     */
    distinct?: TrashCategoryScalarFieldEnum | TrashCategoryScalarFieldEnum[]
  }


  /**
   * trashCategory findMany
   */
  export type trashCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trashCategory
     */
    select?: trashCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: trashCategoryInclude<ExtArgs> | null
    /**
     * Filter, which trashCategories to fetch.
     */
    where?: trashCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trashCategories to fetch.
     */
    orderBy?: trashCategoryOrderByWithRelationInput | trashCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing trashCategories.
     */
    cursor?: trashCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trashCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trashCategories.
     */
    skip?: number
    distinct?: TrashCategoryScalarFieldEnum | TrashCategoryScalarFieldEnum[]
  }


  /**
   * trashCategory create
   */
  export type trashCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trashCategory
     */
    select?: trashCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: trashCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a trashCategory.
     */
    data: XOR<trashCategoryCreateInput, trashCategoryUncheckedCreateInput>
  }


  /**
   * trashCategory createMany
   */
  export type trashCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many trashCategories.
     */
    data: trashCategoryCreateManyInput | trashCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * trashCategory update
   */
  export type trashCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trashCategory
     */
    select?: trashCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: trashCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a trashCategory.
     */
    data: XOR<trashCategoryUpdateInput, trashCategoryUncheckedUpdateInput>
    /**
     * Choose, which trashCategory to update.
     */
    where: trashCategoryWhereUniqueInput
  }


  /**
   * trashCategory updateMany
   */
  export type trashCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update trashCategories.
     */
    data: XOR<trashCategoryUpdateManyMutationInput, trashCategoryUncheckedUpdateManyInput>
    /**
     * Filter which trashCategories to update
     */
    where?: trashCategoryWhereInput
  }


  /**
   * trashCategory upsert
   */
  export type trashCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trashCategory
     */
    select?: trashCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: trashCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the trashCategory to update in case it exists.
     */
    where: trashCategoryWhereUniqueInput
    /**
     * In case the trashCategory found by the `where` argument doesn't exist, create a new trashCategory with this data.
     */
    create: XOR<trashCategoryCreateInput, trashCategoryUncheckedCreateInput>
    /**
     * In case the trashCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<trashCategoryUpdateInput, trashCategoryUncheckedUpdateInput>
  }


  /**
   * trashCategory delete
   */
  export type trashCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trashCategory
     */
    select?: trashCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: trashCategoryInclude<ExtArgs> | null
    /**
     * Filter which trashCategory to delete.
     */
    where: trashCategoryWhereUniqueInput
  }


  /**
   * trashCategory deleteMany
   */
  export type trashCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which trashCategories to delete
     */
    where?: trashCategoryWhereInput
  }


  /**
   * trashCategory.subcategory
   */
  export type trashCategory$subcategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trash
     */
    select?: trashSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: trashInclude<ExtArgs> | null
    where?: trashWhereInput
    orderBy?: trashOrderByWithRelationInput | trashOrderByWithRelationInput[]
    cursor?: trashWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrashScalarFieldEnum | TrashScalarFieldEnum[]
  }


  /**
   * trashCategory without action
   */
  export type trashCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trashCategory
     */
    select?: trashCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: trashCategoryInclude<ExtArgs> | null
  }



  /**
   * Model trash
   */

  export type AggregateTrash = {
    _count: TrashCountAggregateOutputType | null
    _avg: TrashAvgAggregateOutputType | null
    _sum: TrashSumAggregateOutputType | null
    _min: TrashMinAggregateOutputType | null
    _max: TrashMaxAggregateOutputType | null
  }

  export type TrashAvgAggregateOutputType = {
    id: number | null
    minPrice: number | null
    maxPrice: number | null
    category_id: number | null
  }

  export type TrashSumAggregateOutputType = {
    id: number | null
    minPrice: number | null
    maxPrice: number | null
    category_id: number | null
  }

  export type TrashMinAggregateOutputType = {
    id: number | null
    name: string | null
    minPrice: number | null
    maxPrice: number | null
    category_id: number | null
  }

  export type TrashMaxAggregateOutputType = {
    id: number | null
    name: string | null
    minPrice: number | null
    maxPrice: number | null
    category_id: number | null
  }

  export type TrashCountAggregateOutputType = {
    id: number
    name: number
    minPrice: number
    maxPrice: number
    category_id: number
    _all: number
  }


  export type TrashAvgAggregateInputType = {
    id?: true
    minPrice?: true
    maxPrice?: true
    category_id?: true
  }

  export type TrashSumAggregateInputType = {
    id?: true
    minPrice?: true
    maxPrice?: true
    category_id?: true
  }

  export type TrashMinAggregateInputType = {
    id?: true
    name?: true
    minPrice?: true
    maxPrice?: true
    category_id?: true
  }

  export type TrashMaxAggregateInputType = {
    id?: true
    name?: true
    minPrice?: true
    maxPrice?: true
    category_id?: true
  }

  export type TrashCountAggregateInputType = {
    id?: true
    name?: true
    minPrice?: true
    maxPrice?: true
    category_id?: true
    _all?: true
  }

  export type TrashAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which trash to aggregate.
     */
    where?: trashWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trashes to fetch.
     */
    orderBy?: trashOrderByWithRelationInput | trashOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: trashWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trashes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trashes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned trashes
    **/
    _count?: true | TrashCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrashAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrashSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrashMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrashMaxAggregateInputType
  }

  export type GetTrashAggregateType<T extends TrashAggregateArgs> = {
        [P in keyof T & keyof AggregateTrash]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrash[P]>
      : GetScalarType<T[P], AggregateTrash[P]>
  }




  export type trashGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: trashWhereInput
    orderBy?: trashOrderByWithAggregationInput | trashOrderByWithAggregationInput[]
    by: TrashScalarFieldEnum[] | TrashScalarFieldEnum
    having?: trashScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrashCountAggregateInputType | true
    _avg?: TrashAvgAggregateInputType
    _sum?: TrashSumAggregateInputType
    _min?: TrashMinAggregateInputType
    _max?: TrashMaxAggregateInputType
  }

  export type TrashGroupByOutputType = {
    id: number
    name: string
    minPrice: number
    maxPrice: number
    category_id: number
    _count: TrashCountAggregateOutputType | null
    _avg: TrashAvgAggregateOutputType | null
    _sum: TrashSumAggregateOutputType | null
    _min: TrashMinAggregateOutputType | null
    _max: TrashMaxAggregateOutputType | null
  }

  type GetTrashGroupByPayload<T extends trashGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrashGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrashGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrashGroupByOutputType[P]>
            : GetScalarType<T[P], TrashGroupByOutputType[P]>
        }
      >
    >


  export type trashSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    minPrice?: boolean
    maxPrice?: boolean
    category_id?: boolean
    category?: boolean | trashCategoryDefaultArgs<ExtArgs>
    transaction_detail?: boolean | trash$transaction_detailArgs<ExtArgs>
    _count?: boolean | TrashCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trash"]>

  export type trashSelectScalar = {
    id?: boolean
    name?: boolean
    minPrice?: boolean
    maxPrice?: boolean
    category_id?: boolean
  }

  export type trashInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | trashCategoryDefaultArgs<ExtArgs>
    transaction_detail?: boolean | trash$transaction_detailArgs<ExtArgs>
    _count?: boolean | TrashCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $trashPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "trash"
    objects: {
      category: Prisma.$trashCategoryPayload<ExtArgs>
      transaction_detail: Prisma.$transaction_detailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      minPrice: number
      maxPrice: number
      category_id: number
    }, ExtArgs["result"]["trash"]>
    composites: {}
  }


  type trashGetPayload<S extends boolean | null | undefined | trashDefaultArgs> = $Result.GetResult<Prisma.$trashPayload, S>

  type trashCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<trashFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TrashCountAggregateInputType | true
    }

  export interface trashDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['trash'], meta: { name: 'trash' } }
    /**
     * Find zero or one Trash that matches the filter.
     * @param {trashFindUniqueArgs} args - Arguments to find a Trash
     * @example
     * // Get one Trash
     * const trash = await prisma.trash.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends trashFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, trashFindUniqueArgs<ExtArgs>>
    ): Prisma__trashClient<$Result.GetResult<Prisma.$trashPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Trash that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {trashFindUniqueOrThrowArgs} args - Arguments to find a Trash
     * @example
     * // Get one Trash
     * const trash = await prisma.trash.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends trashFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, trashFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__trashClient<$Result.GetResult<Prisma.$trashPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Trash that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trashFindFirstArgs} args - Arguments to find a Trash
     * @example
     * // Get one Trash
     * const trash = await prisma.trash.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends trashFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, trashFindFirstArgs<ExtArgs>>
    ): Prisma__trashClient<$Result.GetResult<Prisma.$trashPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Trash that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trashFindFirstOrThrowArgs} args - Arguments to find a Trash
     * @example
     * // Get one Trash
     * const trash = await prisma.trash.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends trashFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, trashFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__trashClient<$Result.GetResult<Prisma.$trashPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Trashes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trashFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trashes
     * const trashes = await prisma.trash.findMany()
     * 
     * // Get first 10 Trashes
     * const trashes = await prisma.trash.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trashWithIdOnly = await prisma.trash.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends trashFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, trashFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$trashPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Trash.
     * @param {trashCreateArgs} args - Arguments to create a Trash.
     * @example
     * // Create one Trash
     * const Trash = await prisma.trash.create({
     *   data: {
     *     // ... data to create a Trash
     *   }
     * })
     * 
    **/
    create<T extends trashCreateArgs<ExtArgs>>(
      args: SelectSubset<T, trashCreateArgs<ExtArgs>>
    ): Prisma__trashClient<$Result.GetResult<Prisma.$trashPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Trashes.
     *     @param {trashCreateManyArgs} args - Arguments to create many Trashes.
     *     @example
     *     // Create many Trashes
     *     const trash = await prisma.trash.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends trashCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, trashCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Trash.
     * @param {trashDeleteArgs} args - Arguments to delete one Trash.
     * @example
     * // Delete one Trash
     * const Trash = await prisma.trash.delete({
     *   where: {
     *     // ... filter to delete one Trash
     *   }
     * })
     * 
    **/
    delete<T extends trashDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, trashDeleteArgs<ExtArgs>>
    ): Prisma__trashClient<$Result.GetResult<Prisma.$trashPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Trash.
     * @param {trashUpdateArgs} args - Arguments to update one Trash.
     * @example
     * // Update one Trash
     * const trash = await prisma.trash.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends trashUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, trashUpdateArgs<ExtArgs>>
    ): Prisma__trashClient<$Result.GetResult<Prisma.$trashPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Trashes.
     * @param {trashDeleteManyArgs} args - Arguments to filter Trashes to delete.
     * @example
     * // Delete a few Trashes
     * const { count } = await prisma.trash.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends trashDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, trashDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trashes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trashUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trashes
     * const trash = await prisma.trash.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends trashUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, trashUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Trash.
     * @param {trashUpsertArgs} args - Arguments to update or create a Trash.
     * @example
     * // Update or create a Trash
     * const trash = await prisma.trash.upsert({
     *   create: {
     *     // ... data to create a Trash
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trash we want to update
     *   }
     * })
    **/
    upsert<T extends trashUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, trashUpsertArgs<ExtArgs>>
    ): Prisma__trashClient<$Result.GetResult<Prisma.$trashPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Trashes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trashCountArgs} args - Arguments to filter Trashes to count.
     * @example
     * // Count the number of Trashes
     * const count = await prisma.trash.count({
     *   where: {
     *     // ... the filter for the Trashes we want to count
     *   }
     * })
    **/
    count<T extends trashCountArgs>(
      args?: Subset<T, trashCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrashCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trash.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrashAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TrashAggregateArgs>(args: Subset<T, TrashAggregateArgs>): Prisma.PrismaPromise<GetTrashAggregateType<T>>

    /**
     * Group by Trash.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trashGroupByArgs} args - Group by arguments.
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
      T extends trashGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: trashGroupByArgs['orderBy'] }
        : { orderBy?: trashGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, trashGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrashGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the trash model
   */
  readonly fields: trashFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for trash.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__trashClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    category<T extends trashCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, trashCategoryDefaultArgs<ExtArgs>>): Prisma__trashCategoryClient<$Result.GetResult<Prisma.$trashCategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    transaction_detail<T extends trash$transaction_detailArgs<ExtArgs> = {}>(args?: Subset<T, trash$transaction_detailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaction_detailPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the trash model
   */ 
  interface trashFieldRefs {
    readonly id: FieldRef<"trash", 'Int'>
    readonly name: FieldRef<"trash", 'String'>
    readonly minPrice: FieldRef<"trash", 'Int'>
    readonly maxPrice: FieldRef<"trash", 'Int'>
    readonly category_id: FieldRef<"trash", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * trash findUnique
   */
  export type trashFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trash
     */
    select?: trashSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: trashInclude<ExtArgs> | null
    /**
     * Filter, which trash to fetch.
     */
    where: trashWhereUniqueInput
  }


  /**
   * trash findUniqueOrThrow
   */
  export type trashFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trash
     */
    select?: trashSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: trashInclude<ExtArgs> | null
    /**
     * Filter, which trash to fetch.
     */
    where: trashWhereUniqueInput
  }


  /**
   * trash findFirst
   */
  export type trashFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trash
     */
    select?: trashSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: trashInclude<ExtArgs> | null
    /**
     * Filter, which trash to fetch.
     */
    where?: trashWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trashes to fetch.
     */
    orderBy?: trashOrderByWithRelationInput | trashOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for trashes.
     */
    cursor?: trashWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trashes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trashes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of trashes.
     */
    distinct?: TrashScalarFieldEnum | TrashScalarFieldEnum[]
  }


  /**
   * trash findFirstOrThrow
   */
  export type trashFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trash
     */
    select?: trashSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: trashInclude<ExtArgs> | null
    /**
     * Filter, which trash to fetch.
     */
    where?: trashWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trashes to fetch.
     */
    orderBy?: trashOrderByWithRelationInput | trashOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for trashes.
     */
    cursor?: trashWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trashes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trashes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of trashes.
     */
    distinct?: TrashScalarFieldEnum | TrashScalarFieldEnum[]
  }


  /**
   * trash findMany
   */
  export type trashFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trash
     */
    select?: trashSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: trashInclude<ExtArgs> | null
    /**
     * Filter, which trashes to fetch.
     */
    where?: trashWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trashes to fetch.
     */
    orderBy?: trashOrderByWithRelationInput | trashOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing trashes.
     */
    cursor?: trashWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trashes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trashes.
     */
    skip?: number
    distinct?: TrashScalarFieldEnum | TrashScalarFieldEnum[]
  }


  /**
   * trash create
   */
  export type trashCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trash
     */
    select?: trashSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: trashInclude<ExtArgs> | null
    /**
     * The data needed to create a trash.
     */
    data: XOR<trashCreateInput, trashUncheckedCreateInput>
  }


  /**
   * trash createMany
   */
  export type trashCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many trashes.
     */
    data: trashCreateManyInput | trashCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * trash update
   */
  export type trashUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trash
     */
    select?: trashSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: trashInclude<ExtArgs> | null
    /**
     * The data needed to update a trash.
     */
    data: XOR<trashUpdateInput, trashUncheckedUpdateInput>
    /**
     * Choose, which trash to update.
     */
    where: trashWhereUniqueInput
  }


  /**
   * trash updateMany
   */
  export type trashUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update trashes.
     */
    data: XOR<trashUpdateManyMutationInput, trashUncheckedUpdateManyInput>
    /**
     * Filter which trashes to update
     */
    where?: trashWhereInput
  }


  /**
   * trash upsert
   */
  export type trashUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trash
     */
    select?: trashSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: trashInclude<ExtArgs> | null
    /**
     * The filter to search for the trash to update in case it exists.
     */
    where: trashWhereUniqueInput
    /**
     * In case the trash found by the `where` argument doesn't exist, create a new trash with this data.
     */
    create: XOR<trashCreateInput, trashUncheckedCreateInput>
    /**
     * In case the trash was found with the provided `where` argument, update it with this data.
     */
    update: XOR<trashUpdateInput, trashUncheckedUpdateInput>
  }


  /**
   * trash delete
   */
  export type trashDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trash
     */
    select?: trashSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: trashInclude<ExtArgs> | null
    /**
     * Filter which trash to delete.
     */
    where: trashWhereUniqueInput
  }


  /**
   * trash deleteMany
   */
  export type trashDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which trashes to delete
     */
    where?: trashWhereInput
  }


  /**
   * trash.transaction_detail
   */
  export type trash$transaction_detailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_detail
     */
    select?: transaction_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: transaction_detailInclude<ExtArgs> | null
    where?: transaction_detailWhereInput
    orderBy?: transaction_detailOrderByWithRelationInput | transaction_detailOrderByWithRelationInput[]
    cursor?: transaction_detailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Transaction_detailScalarFieldEnum | Transaction_detailScalarFieldEnum[]
  }


  /**
   * trash without action
   */
  export type trashDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trash
     */
    select?: trashSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: trashInclude<ExtArgs> | null
  }



  /**
   * Model status
   */

  export type AggregateStatus = {
    _count: StatusCountAggregateOutputType | null
    _avg: StatusAvgAggregateOutputType | null
    _sum: StatusSumAggregateOutputType | null
    _min: StatusMinAggregateOutputType | null
    _max: StatusMaxAggregateOutputType | null
  }

  export type StatusAvgAggregateOutputType = {
    id: number | null
  }

  export type StatusSumAggregateOutputType = {
    id: number | null
  }

  export type StatusMinAggregateOutputType = {
    id: number | null
    name: string | null
    label: string | null
    status: string | null
  }

  export type StatusMaxAggregateOutputType = {
    id: number | null
    name: string | null
    label: string | null
    status: string | null
  }

  export type StatusCountAggregateOutputType = {
    id: number
    name: number
    label: number
    status: number
    _all: number
  }


  export type StatusAvgAggregateInputType = {
    id?: true
  }

  export type StatusSumAggregateInputType = {
    id?: true
  }

  export type StatusMinAggregateInputType = {
    id?: true
    name?: true
    label?: true
    status?: true
  }

  export type StatusMaxAggregateInputType = {
    id?: true
    name?: true
    label?: true
    status?: true
  }

  export type StatusCountAggregateInputType = {
    id?: true
    name?: true
    label?: true
    status?: true
    _all?: true
  }

  export type StatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which status to aggregate.
     */
    where?: statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of statuses to fetch.
     */
    orderBy?: statusOrderByWithRelationInput | statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned statuses
    **/
    _count?: true | StatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StatusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StatusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StatusMaxAggregateInputType
  }

  export type GetStatusAggregateType<T extends StatusAggregateArgs> = {
        [P in keyof T & keyof AggregateStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStatus[P]>
      : GetScalarType<T[P], AggregateStatus[P]>
  }




  export type statusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: statusWhereInput
    orderBy?: statusOrderByWithAggregationInput | statusOrderByWithAggregationInput[]
    by: StatusScalarFieldEnum[] | StatusScalarFieldEnum
    having?: statusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StatusCountAggregateInputType | true
    _avg?: StatusAvgAggregateInputType
    _sum?: StatusSumAggregateInputType
    _min?: StatusMinAggregateInputType
    _max?: StatusMaxAggregateInputType
  }

  export type StatusGroupByOutputType = {
    id: number
    name: string
    label: string
    status: string
    _count: StatusCountAggregateOutputType | null
    _avg: StatusAvgAggregateOutputType | null
    _sum: StatusSumAggregateOutputType | null
    _min: StatusMinAggregateOutputType | null
    _max: StatusMaxAggregateOutputType | null
  }

  type GetStatusGroupByPayload<T extends statusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StatusGroupByOutputType[P]>
            : GetScalarType<T[P], StatusGroupByOutputType[P]>
        }
      >
    >


  export type statusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    label?: boolean
    status?: boolean
    transaction?: boolean | status$transactionArgs<ExtArgs>
    _count?: boolean | StatusCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["status"]>

  export type statusSelectScalar = {
    id?: boolean
    name?: boolean
    label?: boolean
    status?: boolean
  }

  export type statusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction?: boolean | status$transactionArgs<ExtArgs>
    _count?: boolean | StatusCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $statusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "status"
    objects: {
      transaction: Prisma.$transactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      label: string
      status: string
    }, ExtArgs["result"]["status"]>
    composites: {}
  }


  type statusGetPayload<S extends boolean | null | undefined | statusDefaultArgs> = $Result.GetResult<Prisma.$statusPayload, S>

  type statusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<statusFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StatusCountAggregateInputType | true
    }

  export interface statusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['status'], meta: { name: 'status' } }
    /**
     * Find zero or one Status that matches the filter.
     * @param {statusFindUniqueArgs} args - Arguments to find a Status
     * @example
     * // Get one Status
     * const status = await prisma.status.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends statusFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, statusFindUniqueArgs<ExtArgs>>
    ): Prisma__statusClient<$Result.GetResult<Prisma.$statusPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Status that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {statusFindUniqueOrThrowArgs} args - Arguments to find a Status
     * @example
     * // Get one Status
     * const status = await prisma.status.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends statusFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, statusFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__statusClient<$Result.GetResult<Prisma.$statusPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Status that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statusFindFirstArgs} args - Arguments to find a Status
     * @example
     * // Get one Status
     * const status = await prisma.status.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends statusFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, statusFindFirstArgs<ExtArgs>>
    ): Prisma__statusClient<$Result.GetResult<Prisma.$statusPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Status that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statusFindFirstOrThrowArgs} args - Arguments to find a Status
     * @example
     * // Get one Status
     * const status = await prisma.status.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends statusFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, statusFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__statusClient<$Result.GetResult<Prisma.$statusPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Statuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statusFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Statuses
     * const statuses = await prisma.status.findMany()
     * 
     * // Get first 10 Statuses
     * const statuses = await prisma.status.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const statusWithIdOnly = await prisma.status.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends statusFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, statusFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$statusPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Status.
     * @param {statusCreateArgs} args - Arguments to create a Status.
     * @example
     * // Create one Status
     * const Status = await prisma.status.create({
     *   data: {
     *     // ... data to create a Status
     *   }
     * })
     * 
    **/
    create<T extends statusCreateArgs<ExtArgs>>(
      args: SelectSubset<T, statusCreateArgs<ExtArgs>>
    ): Prisma__statusClient<$Result.GetResult<Prisma.$statusPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Statuses.
     *     @param {statusCreateManyArgs} args - Arguments to create many Statuses.
     *     @example
     *     // Create many Statuses
     *     const status = await prisma.status.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends statusCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, statusCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Status.
     * @param {statusDeleteArgs} args - Arguments to delete one Status.
     * @example
     * // Delete one Status
     * const Status = await prisma.status.delete({
     *   where: {
     *     // ... filter to delete one Status
     *   }
     * })
     * 
    **/
    delete<T extends statusDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, statusDeleteArgs<ExtArgs>>
    ): Prisma__statusClient<$Result.GetResult<Prisma.$statusPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Status.
     * @param {statusUpdateArgs} args - Arguments to update one Status.
     * @example
     * // Update one Status
     * const status = await prisma.status.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends statusUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, statusUpdateArgs<ExtArgs>>
    ): Prisma__statusClient<$Result.GetResult<Prisma.$statusPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Statuses.
     * @param {statusDeleteManyArgs} args - Arguments to filter Statuses to delete.
     * @example
     * // Delete a few Statuses
     * const { count } = await prisma.status.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends statusDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, statusDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Statuses
     * const status = await prisma.status.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends statusUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, statusUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Status.
     * @param {statusUpsertArgs} args - Arguments to update or create a Status.
     * @example
     * // Update or create a Status
     * const status = await prisma.status.upsert({
     *   create: {
     *     // ... data to create a Status
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Status we want to update
     *   }
     * })
    **/
    upsert<T extends statusUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, statusUpsertArgs<ExtArgs>>
    ): Prisma__statusClient<$Result.GetResult<Prisma.$statusPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statusCountArgs} args - Arguments to filter Statuses to count.
     * @example
     * // Count the number of Statuses
     * const count = await prisma.status.count({
     *   where: {
     *     // ... the filter for the Statuses we want to count
     *   }
     * })
    **/
    count<T extends statusCountArgs>(
      args?: Subset<T, statusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StatusAggregateArgs>(args: Subset<T, StatusAggregateArgs>): Prisma.PrismaPromise<GetStatusAggregateType<T>>

    /**
     * Group by Status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statusGroupByArgs} args - Group by arguments.
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
      T extends statusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: statusGroupByArgs['orderBy'] }
        : { orderBy?: statusGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, statusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the status model
   */
  readonly fields: statusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for status.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__statusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    transaction<T extends status$transactionArgs<ExtArgs> = {}>(args?: Subset<T, status$transactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the status model
   */ 
  interface statusFieldRefs {
    readonly id: FieldRef<"status", 'Int'>
    readonly name: FieldRef<"status", 'String'>
    readonly label: FieldRef<"status", 'String'>
    readonly status: FieldRef<"status", 'String'>
  }
    

  // Custom InputTypes

  /**
   * status findUnique
   */
  export type statusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the status
     */
    select?: statusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: statusInclude<ExtArgs> | null
    /**
     * Filter, which status to fetch.
     */
    where: statusWhereUniqueInput
  }


  /**
   * status findUniqueOrThrow
   */
  export type statusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the status
     */
    select?: statusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: statusInclude<ExtArgs> | null
    /**
     * Filter, which status to fetch.
     */
    where: statusWhereUniqueInput
  }


  /**
   * status findFirst
   */
  export type statusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the status
     */
    select?: statusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: statusInclude<ExtArgs> | null
    /**
     * Filter, which status to fetch.
     */
    where?: statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of statuses to fetch.
     */
    orderBy?: statusOrderByWithRelationInput | statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for statuses.
     */
    cursor?: statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of statuses.
     */
    distinct?: StatusScalarFieldEnum | StatusScalarFieldEnum[]
  }


  /**
   * status findFirstOrThrow
   */
  export type statusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the status
     */
    select?: statusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: statusInclude<ExtArgs> | null
    /**
     * Filter, which status to fetch.
     */
    where?: statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of statuses to fetch.
     */
    orderBy?: statusOrderByWithRelationInput | statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for statuses.
     */
    cursor?: statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of statuses.
     */
    distinct?: StatusScalarFieldEnum | StatusScalarFieldEnum[]
  }


  /**
   * status findMany
   */
  export type statusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the status
     */
    select?: statusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: statusInclude<ExtArgs> | null
    /**
     * Filter, which statuses to fetch.
     */
    where?: statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of statuses to fetch.
     */
    orderBy?: statusOrderByWithRelationInput | statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing statuses.
     */
    cursor?: statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` statuses.
     */
    skip?: number
    distinct?: StatusScalarFieldEnum | StatusScalarFieldEnum[]
  }


  /**
   * status create
   */
  export type statusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the status
     */
    select?: statusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: statusInclude<ExtArgs> | null
    /**
     * The data needed to create a status.
     */
    data: XOR<statusCreateInput, statusUncheckedCreateInput>
  }


  /**
   * status createMany
   */
  export type statusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many statuses.
     */
    data: statusCreateManyInput | statusCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * status update
   */
  export type statusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the status
     */
    select?: statusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: statusInclude<ExtArgs> | null
    /**
     * The data needed to update a status.
     */
    data: XOR<statusUpdateInput, statusUncheckedUpdateInput>
    /**
     * Choose, which status to update.
     */
    where: statusWhereUniqueInput
  }


  /**
   * status updateMany
   */
  export type statusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update statuses.
     */
    data: XOR<statusUpdateManyMutationInput, statusUncheckedUpdateManyInput>
    /**
     * Filter which statuses to update
     */
    where?: statusWhereInput
  }


  /**
   * status upsert
   */
  export type statusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the status
     */
    select?: statusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: statusInclude<ExtArgs> | null
    /**
     * The filter to search for the status to update in case it exists.
     */
    where: statusWhereUniqueInput
    /**
     * In case the status found by the `where` argument doesn't exist, create a new status with this data.
     */
    create: XOR<statusCreateInput, statusUncheckedCreateInput>
    /**
     * In case the status was found with the provided `where` argument, update it with this data.
     */
    update: XOR<statusUpdateInput, statusUncheckedUpdateInput>
  }


  /**
   * status delete
   */
  export type statusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the status
     */
    select?: statusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: statusInclude<ExtArgs> | null
    /**
     * Filter which status to delete.
     */
    where: statusWhereUniqueInput
  }


  /**
   * status deleteMany
   */
  export type statusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which statuses to delete
     */
    where?: statusWhereInput
  }


  /**
   * status.transaction
   */
  export type status$transactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: transactionInclude<ExtArgs> | null
    where?: transactionWhereInput
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    cursor?: transactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }


  /**
   * status without action
   */
  export type statusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the status
     */
    select?: statusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: statusInclude<ExtArgs> | null
  }



  /**
   * Model transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    partner_id: number | null
    address_id: number | null
    status_id: number | null
    partner_rate: number | null
    total: number | null
  }

  export type TransactionSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    partner_id: number | null
    address_id: number | null
    status_id: number | null
    partner_rate: number | null
    total: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    partner_id: number | null
    address_id: number | null
    image: string | null
    status_id: number | null
    partner_rate: number | null
    partner_review: string | null
    note: string | null
    total: number | null
    date_created: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    partner_id: number | null
    address_id: number | null
    image: string | null
    status_id: number | null
    partner_rate: number | null
    partner_review: string | null
    note: string | null
    total: number | null
    date_created: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    user_id: number
    partner_id: number
    address_id: number
    image: number
    status_id: number
    partner_rate: number
    partner_review: number
    note: number
    total: number
    date_created: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    id?: true
    user_id?: true
    partner_id?: true
    address_id?: true
    status_id?: true
    partner_rate?: true
    total?: true
  }

  export type TransactionSumAggregateInputType = {
    id?: true
    user_id?: true
    partner_id?: true
    address_id?: true
    status_id?: true
    partner_rate?: true
    total?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    user_id?: true
    partner_id?: true
    address_id?: true
    image?: true
    status_id?: true
    partner_rate?: true
    partner_review?: true
    note?: true
    total?: true
    date_created?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    user_id?: true
    partner_id?: true
    address_id?: true
    image?: true
    status_id?: true
    partner_rate?: true
    partner_review?: true
    note?: true
    total?: true
    date_created?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    user_id?: true
    partner_id?: true
    address_id?: true
    image?: true
    status_id?: true
    partner_rate?: true
    partner_review?: true
    note?: true
    total?: true
    date_created?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transaction to aggregate.
     */
    where?: transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type transactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionWhereInput
    orderBy?: transactionOrderByWithAggregationInput | transactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: transactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: number
    user_id: number
    partner_id: number
    address_id: number
    image: string
    status_id: number
    partner_rate: number
    partner_review: string
    note: string
    total: number
    date_created: Date
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends transactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type transactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    partner_id?: boolean
    address_id?: boolean
    image?: boolean
    status_id?: boolean
    partner_rate?: boolean
    partner_review?: boolean
    note?: boolean
    total?: boolean
    date_created?: boolean
    address?: boolean | addressDefaultArgs<ExtArgs>
    status?: boolean | statusDefaultArgs<ExtArgs>
    transaction_detail?: boolean | transaction$transaction_detailArgs<ExtArgs>
    _count?: boolean | TransactionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type transactionSelectScalar = {
    id?: boolean
    user_id?: boolean
    partner_id?: boolean
    address_id?: boolean
    image?: boolean
    status_id?: boolean
    partner_rate?: boolean
    partner_review?: boolean
    note?: boolean
    total?: boolean
    date_created?: boolean
  }

  export type transactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | addressDefaultArgs<ExtArgs>
    status?: boolean | statusDefaultArgs<ExtArgs>
    transaction_detail?: boolean | transaction$transaction_detailArgs<ExtArgs>
    _count?: boolean | TransactionCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $transactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "transaction"
    objects: {
      address: Prisma.$addressPayload<ExtArgs>
      status: Prisma.$statusPayload<ExtArgs>
      transaction_detail: Prisma.$transaction_detailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      partner_id: number
      address_id: number
      image: string
      status_id: number
      partner_rate: number
      partner_review: string
      note: string
      total: number
      date_created: Date
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }


  type transactionGetPayload<S extends boolean | null | undefined | transactionDefaultArgs> = $Result.GetResult<Prisma.$transactionPayload, S>

  type transactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<transactionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface transactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['transaction'], meta: { name: 'transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {transactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends transactionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, transactionFindUniqueArgs<ExtArgs>>
    ): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Transaction that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {transactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends transactionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, transactionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends transactionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, transactionFindFirstArgs<ExtArgs>>
    ): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends transactionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, transactionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends transactionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, transactionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Transaction.
     * @param {transactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
    **/
    create<T extends transactionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, transactionCreateArgs<ExtArgs>>
    ): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Transactions.
     *     @param {transactionCreateManyArgs} args - Arguments to create many Transactions.
     *     @example
     *     // Create many Transactions
     *     const transaction = await prisma.transaction.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends transactionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, transactionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Transaction.
     * @param {transactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
    **/
    delete<T extends transactionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, transactionDeleteArgs<ExtArgs>>
    ): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Transaction.
     * @param {transactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends transactionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, transactionUpdateArgs<ExtArgs>>
    ): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Transactions.
     * @param {transactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends transactionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, transactionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends transactionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, transactionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transaction.
     * @param {transactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
    **/
    upsert<T extends transactionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, transactionUpsertArgs<ExtArgs>>
    ): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends transactionCountArgs>(
      args?: Subset<T, transactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionGroupByArgs} args - Group by arguments.
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
      T extends transactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: transactionGroupByArgs['orderBy'] }
        : { orderBy?: transactionGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, transactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the transaction model
   */
  readonly fields: transactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__transactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    address<T extends addressDefaultArgs<ExtArgs> = {}>(args?: Subset<T, addressDefaultArgs<ExtArgs>>): Prisma__addressClient<$Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    status<T extends statusDefaultArgs<ExtArgs> = {}>(args?: Subset<T, statusDefaultArgs<ExtArgs>>): Prisma__statusClient<$Result.GetResult<Prisma.$statusPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    transaction_detail<T extends transaction$transaction_detailArgs<ExtArgs> = {}>(args?: Subset<T, transaction$transaction_detailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaction_detailPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the transaction model
   */ 
  interface transactionFieldRefs {
    readonly id: FieldRef<"transaction", 'Int'>
    readonly user_id: FieldRef<"transaction", 'Int'>
    readonly partner_id: FieldRef<"transaction", 'Int'>
    readonly address_id: FieldRef<"transaction", 'Int'>
    readonly image: FieldRef<"transaction", 'String'>
    readonly status_id: FieldRef<"transaction", 'Int'>
    readonly partner_rate: FieldRef<"transaction", 'Int'>
    readonly partner_review: FieldRef<"transaction", 'String'>
    readonly note: FieldRef<"transaction", 'String'>
    readonly total: FieldRef<"transaction", 'Int'>
    readonly date_created: FieldRef<"transaction", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * transaction findUnique
   */
  export type transactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter, which transaction to fetch.
     */
    where: transactionWhereUniqueInput
  }


  /**
   * transaction findUniqueOrThrow
   */
  export type transactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter, which transaction to fetch.
     */
    where: transactionWhereUniqueInput
  }


  /**
   * transaction findFirst
   */
  export type transactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter, which transaction to fetch.
     */
    where?: transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transactions.
     */
    cursor?: transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }


  /**
   * transaction findFirstOrThrow
   */
  export type transactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter, which transaction to fetch.
     */
    where?: transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transactions.
     */
    cursor?: transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }


  /**
   * transaction findMany
   */
  export type transactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where?: transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing transactions.
     */
    cursor?: transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }


  /**
   * transaction create
   */
  export type transactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * The data needed to create a transaction.
     */
    data: XOR<transactionCreateInput, transactionUncheckedCreateInput>
  }


  /**
   * transaction createMany
   */
  export type transactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many transactions.
     */
    data: transactionCreateManyInput | transactionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * transaction update
   */
  export type transactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * The data needed to update a transaction.
     */
    data: XOR<transactionUpdateInput, transactionUncheckedUpdateInput>
    /**
     * Choose, which transaction to update.
     */
    where: transactionWhereUniqueInput
  }


  /**
   * transaction updateMany
   */
  export type transactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update transactions.
     */
    data: XOR<transactionUpdateManyMutationInput, transactionUncheckedUpdateManyInput>
    /**
     * Filter which transactions to update
     */
    where?: transactionWhereInput
  }


  /**
   * transaction upsert
   */
  export type transactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * The filter to search for the transaction to update in case it exists.
     */
    where: transactionWhereUniqueInput
    /**
     * In case the transaction found by the `where` argument doesn't exist, create a new transaction with this data.
     */
    create: XOR<transactionCreateInput, transactionUncheckedCreateInput>
    /**
     * In case the transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<transactionUpdateInput, transactionUncheckedUpdateInput>
  }


  /**
   * transaction delete
   */
  export type transactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter which transaction to delete.
     */
    where: transactionWhereUniqueInput
  }


  /**
   * transaction deleteMany
   */
  export type transactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transactions to delete
     */
    where?: transactionWhereInput
  }


  /**
   * transaction.transaction_detail
   */
  export type transaction$transaction_detailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_detail
     */
    select?: transaction_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: transaction_detailInclude<ExtArgs> | null
    where?: transaction_detailWhereInput
    orderBy?: transaction_detailOrderByWithRelationInput | transaction_detailOrderByWithRelationInput[]
    cursor?: transaction_detailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Transaction_detailScalarFieldEnum | Transaction_detailScalarFieldEnum[]
  }


  /**
   * transaction without action
   */
  export type transactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: transactionInclude<ExtArgs> | null
  }



  /**
   * Model transaction_detail
   */

  export type AggregateTransaction_detail = {
    _count: Transaction_detailCountAggregateOutputType | null
    _avg: Transaction_detailAvgAggregateOutputType | null
    _sum: Transaction_detailSumAggregateOutputType | null
    _min: Transaction_detailMinAggregateOutputType | null
    _max: Transaction_detailMaxAggregateOutputType | null
  }

  export type Transaction_detailAvgAggregateOutputType = {
    id: number | null
    transaction_id: number | null
    trash_id: number | null
    price: number | null
    weight: number | null
  }

  export type Transaction_detailSumAggregateOutputType = {
    id: number | null
    transaction_id: number | null
    trash_id: number | null
    price: number | null
    weight: number | null
  }

  export type Transaction_detailMinAggregateOutputType = {
    id: number | null
    transaction_id: number | null
    trash_id: number | null
    price: number | null
    weight: number | null
  }

  export type Transaction_detailMaxAggregateOutputType = {
    id: number | null
    transaction_id: number | null
    trash_id: number | null
    price: number | null
    weight: number | null
  }

  export type Transaction_detailCountAggregateOutputType = {
    id: number
    transaction_id: number
    trash_id: number
    price: number
    weight: number
    _all: number
  }


  export type Transaction_detailAvgAggregateInputType = {
    id?: true
    transaction_id?: true
    trash_id?: true
    price?: true
    weight?: true
  }

  export type Transaction_detailSumAggregateInputType = {
    id?: true
    transaction_id?: true
    trash_id?: true
    price?: true
    weight?: true
  }

  export type Transaction_detailMinAggregateInputType = {
    id?: true
    transaction_id?: true
    trash_id?: true
    price?: true
    weight?: true
  }

  export type Transaction_detailMaxAggregateInputType = {
    id?: true
    transaction_id?: true
    trash_id?: true
    price?: true
    weight?: true
  }

  export type Transaction_detailCountAggregateInputType = {
    id?: true
    transaction_id?: true
    trash_id?: true
    price?: true
    weight?: true
    _all?: true
  }

  export type Transaction_detailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transaction_detail to aggregate.
     */
    where?: transaction_detailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaction_details to fetch.
     */
    orderBy?: transaction_detailOrderByWithRelationInput | transaction_detailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: transaction_detailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaction_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaction_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned transaction_details
    **/
    _count?: true | Transaction_detailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Transaction_detailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Transaction_detailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Transaction_detailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Transaction_detailMaxAggregateInputType
  }

  export type GetTransaction_detailAggregateType<T extends Transaction_detailAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction_detail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction_detail[P]>
      : GetScalarType<T[P], AggregateTransaction_detail[P]>
  }




  export type transaction_detailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transaction_detailWhereInput
    orderBy?: transaction_detailOrderByWithAggregationInput | transaction_detailOrderByWithAggregationInput[]
    by: Transaction_detailScalarFieldEnum[] | Transaction_detailScalarFieldEnum
    having?: transaction_detailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Transaction_detailCountAggregateInputType | true
    _avg?: Transaction_detailAvgAggregateInputType
    _sum?: Transaction_detailSumAggregateInputType
    _min?: Transaction_detailMinAggregateInputType
    _max?: Transaction_detailMaxAggregateInputType
  }

  export type Transaction_detailGroupByOutputType = {
    id: number
    transaction_id: number
    trash_id: number
    price: number
    weight: number
    _count: Transaction_detailCountAggregateOutputType | null
    _avg: Transaction_detailAvgAggregateOutputType | null
    _sum: Transaction_detailSumAggregateOutputType | null
    _min: Transaction_detailMinAggregateOutputType | null
    _max: Transaction_detailMaxAggregateOutputType | null
  }

  type GetTransaction_detailGroupByPayload<T extends transaction_detailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Transaction_detailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Transaction_detailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Transaction_detailGroupByOutputType[P]>
            : GetScalarType<T[P], Transaction_detailGroupByOutputType[P]>
        }
      >
    >


  export type transaction_detailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transaction_id?: boolean
    trash_id?: boolean
    price?: boolean
    weight?: boolean
    trash?: boolean | trashDefaultArgs<ExtArgs>
    transaction?: boolean | transactionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction_detail"]>

  export type transaction_detailSelectScalar = {
    id?: boolean
    transaction_id?: boolean
    trash_id?: boolean
    price?: boolean
    weight?: boolean
  }

  export type transaction_detailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trash?: boolean | trashDefaultArgs<ExtArgs>
    transaction?: boolean | transactionDefaultArgs<ExtArgs>
  }


  export type $transaction_detailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "transaction_detail"
    objects: {
      trash: Prisma.$trashPayload<ExtArgs>
      transaction: Prisma.$transactionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      transaction_id: number
      trash_id: number
      price: number
      weight: number
    }, ExtArgs["result"]["transaction_detail"]>
    composites: {}
  }


  type transaction_detailGetPayload<S extends boolean | null | undefined | transaction_detailDefaultArgs> = $Result.GetResult<Prisma.$transaction_detailPayload, S>

  type transaction_detailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<transaction_detailFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Transaction_detailCountAggregateInputType | true
    }

  export interface transaction_detailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['transaction_detail'], meta: { name: 'transaction_detail' } }
    /**
     * Find zero or one Transaction_detail that matches the filter.
     * @param {transaction_detailFindUniqueArgs} args - Arguments to find a Transaction_detail
     * @example
     * // Get one Transaction_detail
     * const transaction_detail = await prisma.transaction_detail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends transaction_detailFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, transaction_detailFindUniqueArgs<ExtArgs>>
    ): Prisma__transaction_detailClient<$Result.GetResult<Prisma.$transaction_detailPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Transaction_detail that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {transaction_detailFindUniqueOrThrowArgs} args - Arguments to find a Transaction_detail
     * @example
     * // Get one Transaction_detail
     * const transaction_detail = await prisma.transaction_detail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends transaction_detailFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, transaction_detailFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__transaction_detailClient<$Result.GetResult<Prisma.$transaction_detailPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Transaction_detail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_detailFindFirstArgs} args - Arguments to find a Transaction_detail
     * @example
     * // Get one Transaction_detail
     * const transaction_detail = await prisma.transaction_detail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends transaction_detailFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, transaction_detailFindFirstArgs<ExtArgs>>
    ): Prisma__transaction_detailClient<$Result.GetResult<Prisma.$transaction_detailPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Transaction_detail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_detailFindFirstOrThrowArgs} args - Arguments to find a Transaction_detail
     * @example
     * // Get one Transaction_detail
     * const transaction_detail = await prisma.transaction_detail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends transaction_detailFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, transaction_detailFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__transaction_detailClient<$Result.GetResult<Prisma.$transaction_detailPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Transaction_details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_detailFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transaction_details
     * const transaction_details = await prisma.transaction_detail.findMany()
     * 
     * // Get first 10 Transaction_details
     * const transaction_details = await prisma.transaction_detail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transaction_detailWithIdOnly = await prisma.transaction_detail.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends transaction_detailFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, transaction_detailFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaction_detailPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Transaction_detail.
     * @param {transaction_detailCreateArgs} args - Arguments to create a Transaction_detail.
     * @example
     * // Create one Transaction_detail
     * const Transaction_detail = await prisma.transaction_detail.create({
     *   data: {
     *     // ... data to create a Transaction_detail
     *   }
     * })
     * 
    **/
    create<T extends transaction_detailCreateArgs<ExtArgs>>(
      args: SelectSubset<T, transaction_detailCreateArgs<ExtArgs>>
    ): Prisma__transaction_detailClient<$Result.GetResult<Prisma.$transaction_detailPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Transaction_details.
     *     @param {transaction_detailCreateManyArgs} args - Arguments to create many Transaction_details.
     *     @example
     *     // Create many Transaction_details
     *     const transaction_detail = await prisma.transaction_detail.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends transaction_detailCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, transaction_detailCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Transaction_detail.
     * @param {transaction_detailDeleteArgs} args - Arguments to delete one Transaction_detail.
     * @example
     * // Delete one Transaction_detail
     * const Transaction_detail = await prisma.transaction_detail.delete({
     *   where: {
     *     // ... filter to delete one Transaction_detail
     *   }
     * })
     * 
    **/
    delete<T extends transaction_detailDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, transaction_detailDeleteArgs<ExtArgs>>
    ): Prisma__transaction_detailClient<$Result.GetResult<Prisma.$transaction_detailPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Transaction_detail.
     * @param {transaction_detailUpdateArgs} args - Arguments to update one Transaction_detail.
     * @example
     * // Update one Transaction_detail
     * const transaction_detail = await prisma.transaction_detail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends transaction_detailUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, transaction_detailUpdateArgs<ExtArgs>>
    ): Prisma__transaction_detailClient<$Result.GetResult<Prisma.$transaction_detailPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Transaction_details.
     * @param {transaction_detailDeleteManyArgs} args - Arguments to filter Transaction_details to delete.
     * @example
     * // Delete a few Transaction_details
     * const { count } = await prisma.transaction_detail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends transaction_detailDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, transaction_detailDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transaction_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_detailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transaction_details
     * const transaction_detail = await prisma.transaction_detail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends transaction_detailUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, transaction_detailUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transaction_detail.
     * @param {transaction_detailUpsertArgs} args - Arguments to update or create a Transaction_detail.
     * @example
     * // Update or create a Transaction_detail
     * const transaction_detail = await prisma.transaction_detail.upsert({
     *   create: {
     *     // ... data to create a Transaction_detail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction_detail we want to update
     *   }
     * })
    **/
    upsert<T extends transaction_detailUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, transaction_detailUpsertArgs<ExtArgs>>
    ): Prisma__transaction_detailClient<$Result.GetResult<Prisma.$transaction_detailPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Transaction_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_detailCountArgs} args - Arguments to filter Transaction_details to count.
     * @example
     * // Count the number of Transaction_details
     * const count = await prisma.transaction_detail.count({
     *   where: {
     *     // ... the filter for the Transaction_details we want to count
     *   }
     * })
    **/
    count<T extends transaction_detailCountArgs>(
      args?: Subset<T, transaction_detailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Transaction_detailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction_detail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Transaction_detailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Transaction_detailAggregateArgs>(args: Subset<T, Transaction_detailAggregateArgs>): Prisma.PrismaPromise<GetTransaction_detailAggregateType<T>>

    /**
     * Group by Transaction_detail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_detailGroupByArgs} args - Group by arguments.
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
      T extends transaction_detailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: transaction_detailGroupByArgs['orderBy'] }
        : { orderBy?: transaction_detailGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, transaction_detailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransaction_detailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the transaction_detail model
   */
  readonly fields: transaction_detailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for transaction_detail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__transaction_detailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    trash<T extends trashDefaultArgs<ExtArgs> = {}>(args?: Subset<T, trashDefaultArgs<ExtArgs>>): Prisma__trashClient<$Result.GetResult<Prisma.$trashPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    transaction<T extends transactionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, transactionDefaultArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the transaction_detail model
   */ 
  interface transaction_detailFieldRefs {
    readonly id: FieldRef<"transaction_detail", 'Int'>
    readonly transaction_id: FieldRef<"transaction_detail", 'Int'>
    readonly trash_id: FieldRef<"transaction_detail", 'Int'>
    readonly price: FieldRef<"transaction_detail", 'Int'>
    readonly weight: FieldRef<"transaction_detail", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * transaction_detail findUnique
   */
  export type transaction_detailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_detail
     */
    select?: transaction_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: transaction_detailInclude<ExtArgs> | null
    /**
     * Filter, which transaction_detail to fetch.
     */
    where: transaction_detailWhereUniqueInput
  }


  /**
   * transaction_detail findUniqueOrThrow
   */
  export type transaction_detailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_detail
     */
    select?: transaction_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: transaction_detailInclude<ExtArgs> | null
    /**
     * Filter, which transaction_detail to fetch.
     */
    where: transaction_detailWhereUniqueInput
  }


  /**
   * transaction_detail findFirst
   */
  export type transaction_detailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_detail
     */
    select?: transaction_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: transaction_detailInclude<ExtArgs> | null
    /**
     * Filter, which transaction_detail to fetch.
     */
    where?: transaction_detailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaction_details to fetch.
     */
    orderBy?: transaction_detailOrderByWithRelationInput | transaction_detailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transaction_details.
     */
    cursor?: transaction_detailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaction_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaction_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transaction_details.
     */
    distinct?: Transaction_detailScalarFieldEnum | Transaction_detailScalarFieldEnum[]
  }


  /**
   * transaction_detail findFirstOrThrow
   */
  export type transaction_detailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_detail
     */
    select?: transaction_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: transaction_detailInclude<ExtArgs> | null
    /**
     * Filter, which transaction_detail to fetch.
     */
    where?: transaction_detailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaction_details to fetch.
     */
    orderBy?: transaction_detailOrderByWithRelationInput | transaction_detailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transaction_details.
     */
    cursor?: transaction_detailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaction_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaction_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transaction_details.
     */
    distinct?: Transaction_detailScalarFieldEnum | Transaction_detailScalarFieldEnum[]
  }


  /**
   * transaction_detail findMany
   */
  export type transaction_detailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_detail
     */
    select?: transaction_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: transaction_detailInclude<ExtArgs> | null
    /**
     * Filter, which transaction_details to fetch.
     */
    where?: transaction_detailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaction_details to fetch.
     */
    orderBy?: transaction_detailOrderByWithRelationInput | transaction_detailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing transaction_details.
     */
    cursor?: transaction_detailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaction_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaction_details.
     */
    skip?: number
    distinct?: Transaction_detailScalarFieldEnum | Transaction_detailScalarFieldEnum[]
  }


  /**
   * transaction_detail create
   */
  export type transaction_detailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_detail
     */
    select?: transaction_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: transaction_detailInclude<ExtArgs> | null
    /**
     * The data needed to create a transaction_detail.
     */
    data: XOR<transaction_detailCreateInput, transaction_detailUncheckedCreateInput>
  }


  /**
   * transaction_detail createMany
   */
  export type transaction_detailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many transaction_details.
     */
    data: transaction_detailCreateManyInput | transaction_detailCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * transaction_detail update
   */
  export type transaction_detailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_detail
     */
    select?: transaction_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: transaction_detailInclude<ExtArgs> | null
    /**
     * The data needed to update a transaction_detail.
     */
    data: XOR<transaction_detailUpdateInput, transaction_detailUncheckedUpdateInput>
    /**
     * Choose, which transaction_detail to update.
     */
    where: transaction_detailWhereUniqueInput
  }


  /**
   * transaction_detail updateMany
   */
  export type transaction_detailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update transaction_details.
     */
    data: XOR<transaction_detailUpdateManyMutationInput, transaction_detailUncheckedUpdateManyInput>
    /**
     * Filter which transaction_details to update
     */
    where?: transaction_detailWhereInput
  }


  /**
   * transaction_detail upsert
   */
  export type transaction_detailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_detail
     */
    select?: transaction_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: transaction_detailInclude<ExtArgs> | null
    /**
     * The filter to search for the transaction_detail to update in case it exists.
     */
    where: transaction_detailWhereUniqueInput
    /**
     * In case the transaction_detail found by the `where` argument doesn't exist, create a new transaction_detail with this data.
     */
    create: XOR<transaction_detailCreateInput, transaction_detailUncheckedCreateInput>
    /**
     * In case the transaction_detail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<transaction_detailUpdateInput, transaction_detailUncheckedUpdateInput>
  }


  /**
   * transaction_detail delete
   */
  export type transaction_detailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_detail
     */
    select?: transaction_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: transaction_detailInclude<ExtArgs> | null
    /**
     * Filter which transaction_detail to delete.
     */
    where: transaction_detailWhereUniqueInput
  }


  /**
   * transaction_detail deleteMany
   */
  export type transaction_detailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transaction_details to delete
     */
    where?: transaction_detailWhereInput
  }


  /**
   * transaction_detail without action
   */
  export type transaction_detailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_detail
     */
    select?: transaction_detailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: transaction_detailInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    name: 'name',
    email: 'email',
    telp: 'telp',
    avatar: 'avatar',
    date_created: 'date_created',
    update_at: 'update_at',
    password: 'password',
    role: 'role'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const AddressScalarFieldEnum: {
    id: 'id',
    label: 'label',
    address_name: 'address_name',
    detail: 'detail',
    owner_name: 'owner_name',
    owner_telp: 'owner_telp',
    latitude: 'latitude',
    longitude: 'longitude',
    user_id: 'user_id'
  };

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const TrashCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type TrashCategoryScalarFieldEnum = (typeof TrashCategoryScalarFieldEnum)[keyof typeof TrashCategoryScalarFieldEnum]


  export const TrashScalarFieldEnum: {
    id: 'id',
    name: 'name',
    minPrice: 'minPrice',
    maxPrice: 'maxPrice',
    category_id: 'category_id'
  };

  export type TrashScalarFieldEnum = (typeof TrashScalarFieldEnum)[keyof typeof TrashScalarFieldEnum]


  export const StatusScalarFieldEnum: {
    id: 'id',
    name: 'name',
    label: 'label',
    status: 'status'
  };

  export type StatusScalarFieldEnum = (typeof StatusScalarFieldEnum)[keyof typeof StatusScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    partner_id: 'partner_id',
    address_id: 'address_id',
    image: 'image',
    status_id: 'status_id',
    partner_rate: 'partner_rate',
    partner_review: 'partner_review',
    note: 'note',
    total: 'total',
    date_created: 'date_created'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const Transaction_detailScalarFieldEnum: {
    id: 'id',
    transaction_id: 'transaction_id',
    trash_id: 'trash_id',
    price: 'price',
    weight: 'weight'
  };

  export type Transaction_detailScalarFieldEnum = (typeof Transaction_detailScalarFieldEnum)[keyof typeof Transaction_detailScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    uuid?: StringFilter<"users"> | string
    name?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    telp?: StringFilter<"users"> | string
    avatar?: StringFilter<"users"> | string
    date_created?: DateTimeFilter<"users"> | Date | string
    update_at?: DateTimeNullableFilter<"users"> | Date | string | null
    password?: StringFilter<"users"> | string
    role?: StringFilter<"users"> | string
    address?: AddressListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    email?: SortOrder
    telp?: SortOrder
    avatar?: SortOrder
    date_created?: SortOrder
    update_at?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
    address?: addressOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    uuid?: StringFilter<"users"> | string
    name?: StringFilter<"users"> | string
    telp?: StringFilter<"users"> | string
    avatar?: StringFilter<"users"> | string
    date_created?: DateTimeFilter<"users"> | Date | string
    update_at?: DateTimeNullableFilter<"users"> | Date | string | null
    password?: StringFilter<"users"> | string
    role?: StringFilter<"users"> | string
    address?: AddressListRelationFilter
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    email?: SortOrder
    telp?: SortOrder
    avatar?: SortOrder
    date_created?: SortOrder
    update_at?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    uuid?: StringWithAggregatesFilter<"users"> | string
    name?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    telp?: StringWithAggregatesFilter<"users"> | string
    avatar?: StringWithAggregatesFilter<"users"> | string
    date_created?: DateTimeWithAggregatesFilter<"users"> | Date | string
    update_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    password?: StringWithAggregatesFilter<"users"> | string
    role?: StringWithAggregatesFilter<"users"> | string
  }

  export type addressWhereInput = {
    AND?: addressWhereInput | addressWhereInput[]
    OR?: addressWhereInput[]
    NOT?: addressWhereInput | addressWhereInput[]
    id?: IntFilter<"address"> | number
    label?: StringFilter<"address"> | string
    address_name?: StringFilter<"address"> | string
    detail?: StringFilter<"address"> | string
    owner_name?: StringFilter<"address"> | string
    owner_telp?: StringFilter<"address"> | string
    latitude?: StringFilter<"address"> | string
    longitude?: StringFilter<"address"> | string
    user_id?: IntFilter<"address"> | number
    user?: XOR<UsersRelationFilter, usersWhereInput>
    transaction?: XOR<TransactionNullableRelationFilter, transactionWhereInput> | null
  }

  export type addressOrderByWithRelationInput = {
    id?: SortOrder
    label?: SortOrder
    address_name?: SortOrder
    detail?: SortOrder
    owner_name?: SortOrder
    owner_telp?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    user_id?: SortOrder
    user?: usersOrderByWithRelationInput
    transaction?: transactionOrderByWithRelationInput
  }

  export type addressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: addressWhereInput | addressWhereInput[]
    OR?: addressWhereInput[]
    NOT?: addressWhereInput | addressWhereInput[]
    label?: StringFilter<"address"> | string
    address_name?: StringFilter<"address"> | string
    detail?: StringFilter<"address"> | string
    owner_name?: StringFilter<"address"> | string
    owner_telp?: StringFilter<"address"> | string
    latitude?: StringFilter<"address"> | string
    longitude?: StringFilter<"address"> | string
    user_id?: IntFilter<"address"> | number
    user?: XOR<UsersRelationFilter, usersWhereInput>
    transaction?: XOR<TransactionNullableRelationFilter, transactionWhereInput> | null
  }, "id">

  export type addressOrderByWithAggregationInput = {
    id?: SortOrder
    label?: SortOrder
    address_name?: SortOrder
    detail?: SortOrder
    owner_name?: SortOrder
    owner_telp?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    user_id?: SortOrder
    _count?: addressCountOrderByAggregateInput
    _avg?: addressAvgOrderByAggregateInput
    _max?: addressMaxOrderByAggregateInput
    _min?: addressMinOrderByAggregateInput
    _sum?: addressSumOrderByAggregateInput
  }

  export type addressScalarWhereWithAggregatesInput = {
    AND?: addressScalarWhereWithAggregatesInput | addressScalarWhereWithAggregatesInput[]
    OR?: addressScalarWhereWithAggregatesInput[]
    NOT?: addressScalarWhereWithAggregatesInput | addressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"address"> | number
    label?: StringWithAggregatesFilter<"address"> | string
    address_name?: StringWithAggregatesFilter<"address"> | string
    detail?: StringWithAggregatesFilter<"address"> | string
    owner_name?: StringWithAggregatesFilter<"address"> | string
    owner_telp?: StringWithAggregatesFilter<"address"> | string
    latitude?: StringWithAggregatesFilter<"address"> | string
    longitude?: StringWithAggregatesFilter<"address"> | string
    user_id?: IntWithAggregatesFilter<"address"> | number
  }

  export type trashCategoryWhereInput = {
    AND?: trashCategoryWhereInput | trashCategoryWhereInput[]
    OR?: trashCategoryWhereInput[]
    NOT?: trashCategoryWhereInput | trashCategoryWhereInput[]
    id?: IntFilter<"trashCategory"> | number
    name?: StringFilter<"trashCategory"> | string
    subcategory?: TrashListRelationFilter
  }

  export type trashCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    subcategory?: trashOrderByRelationAggregateInput
  }

  export type trashCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: trashCategoryWhereInput | trashCategoryWhereInput[]
    OR?: trashCategoryWhereInput[]
    NOT?: trashCategoryWhereInput | trashCategoryWhereInput[]
    name?: StringFilter<"trashCategory"> | string
    subcategory?: TrashListRelationFilter
  }, "id">

  export type trashCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: trashCategoryCountOrderByAggregateInput
    _avg?: trashCategoryAvgOrderByAggregateInput
    _max?: trashCategoryMaxOrderByAggregateInput
    _min?: trashCategoryMinOrderByAggregateInput
    _sum?: trashCategorySumOrderByAggregateInput
  }

  export type trashCategoryScalarWhereWithAggregatesInput = {
    AND?: trashCategoryScalarWhereWithAggregatesInput | trashCategoryScalarWhereWithAggregatesInput[]
    OR?: trashCategoryScalarWhereWithAggregatesInput[]
    NOT?: trashCategoryScalarWhereWithAggregatesInput | trashCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"trashCategory"> | number
    name?: StringWithAggregatesFilter<"trashCategory"> | string
  }

  export type trashWhereInput = {
    AND?: trashWhereInput | trashWhereInput[]
    OR?: trashWhereInput[]
    NOT?: trashWhereInput | trashWhereInput[]
    id?: IntFilter<"trash"> | number
    name?: StringFilter<"trash"> | string
    minPrice?: IntFilter<"trash"> | number
    maxPrice?: IntFilter<"trash"> | number
    category_id?: IntFilter<"trash"> | number
    category?: XOR<TrashCategoryRelationFilter, trashCategoryWhereInput>
    transaction_detail?: Transaction_detailListRelationFilter
  }

  export type trashOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    minPrice?: SortOrder
    maxPrice?: SortOrder
    category_id?: SortOrder
    category?: trashCategoryOrderByWithRelationInput
    transaction_detail?: transaction_detailOrderByRelationAggregateInput
  }

  export type trashWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: trashWhereInput | trashWhereInput[]
    OR?: trashWhereInput[]
    NOT?: trashWhereInput | trashWhereInput[]
    name?: StringFilter<"trash"> | string
    minPrice?: IntFilter<"trash"> | number
    maxPrice?: IntFilter<"trash"> | number
    category_id?: IntFilter<"trash"> | number
    category?: XOR<TrashCategoryRelationFilter, trashCategoryWhereInput>
    transaction_detail?: Transaction_detailListRelationFilter
  }, "id">

  export type trashOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    minPrice?: SortOrder
    maxPrice?: SortOrder
    category_id?: SortOrder
    _count?: trashCountOrderByAggregateInput
    _avg?: trashAvgOrderByAggregateInput
    _max?: trashMaxOrderByAggregateInput
    _min?: trashMinOrderByAggregateInput
    _sum?: trashSumOrderByAggregateInput
  }

  export type trashScalarWhereWithAggregatesInput = {
    AND?: trashScalarWhereWithAggregatesInput | trashScalarWhereWithAggregatesInput[]
    OR?: trashScalarWhereWithAggregatesInput[]
    NOT?: trashScalarWhereWithAggregatesInput | trashScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"trash"> | number
    name?: StringWithAggregatesFilter<"trash"> | string
    minPrice?: IntWithAggregatesFilter<"trash"> | number
    maxPrice?: IntWithAggregatesFilter<"trash"> | number
    category_id?: IntWithAggregatesFilter<"trash"> | number
  }

  export type statusWhereInput = {
    AND?: statusWhereInput | statusWhereInput[]
    OR?: statusWhereInput[]
    NOT?: statusWhereInput | statusWhereInput[]
    id?: IntFilter<"status"> | number
    name?: StringFilter<"status"> | string
    label?: StringFilter<"status"> | string
    status?: StringFilter<"status"> | string
    transaction?: TransactionListRelationFilter
  }

  export type statusOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    label?: SortOrder
    status?: SortOrder
    transaction?: transactionOrderByRelationAggregateInput
  }

  export type statusWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: statusWhereInput | statusWhereInput[]
    OR?: statusWhereInput[]
    NOT?: statusWhereInput | statusWhereInput[]
    name?: StringFilter<"status"> | string
    label?: StringFilter<"status"> | string
    status?: StringFilter<"status"> | string
    transaction?: TransactionListRelationFilter
  }, "id">

  export type statusOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    label?: SortOrder
    status?: SortOrder
    _count?: statusCountOrderByAggregateInput
    _avg?: statusAvgOrderByAggregateInput
    _max?: statusMaxOrderByAggregateInput
    _min?: statusMinOrderByAggregateInput
    _sum?: statusSumOrderByAggregateInput
  }

  export type statusScalarWhereWithAggregatesInput = {
    AND?: statusScalarWhereWithAggregatesInput | statusScalarWhereWithAggregatesInput[]
    OR?: statusScalarWhereWithAggregatesInput[]
    NOT?: statusScalarWhereWithAggregatesInput | statusScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"status"> | number
    name?: StringWithAggregatesFilter<"status"> | string
    label?: StringWithAggregatesFilter<"status"> | string
    status?: StringWithAggregatesFilter<"status"> | string
  }

  export type transactionWhereInput = {
    AND?: transactionWhereInput | transactionWhereInput[]
    OR?: transactionWhereInput[]
    NOT?: transactionWhereInput | transactionWhereInput[]
    id?: IntFilter<"transaction"> | number
    user_id?: IntFilter<"transaction"> | number
    partner_id?: IntFilter<"transaction"> | number
    address_id?: IntFilter<"transaction"> | number
    image?: StringFilter<"transaction"> | string
    status_id?: IntFilter<"transaction"> | number
    partner_rate?: IntFilter<"transaction"> | number
    partner_review?: StringFilter<"transaction"> | string
    note?: StringFilter<"transaction"> | string
    total?: IntFilter<"transaction"> | number
    date_created?: DateTimeFilter<"transaction"> | Date | string
    address?: XOR<AddressRelationFilter, addressWhereInput>
    status?: XOR<StatusRelationFilter, statusWhereInput>
    transaction_detail?: Transaction_detailListRelationFilter
  }

  export type transactionOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    partner_id?: SortOrder
    address_id?: SortOrder
    image?: SortOrder
    status_id?: SortOrder
    partner_rate?: SortOrder
    partner_review?: SortOrder
    note?: SortOrder
    total?: SortOrder
    date_created?: SortOrder
    address?: addressOrderByWithRelationInput
    status?: statusOrderByWithRelationInput
    transaction_detail?: transaction_detailOrderByRelationAggregateInput
  }

  export type transactionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    address_id?: number
    AND?: transactionWhereInput | transactionWhereInput[]
    OR?: transactionWhereInput[]
    NOT?: transactionWhereInput | transactionWhereInput[]
    user_id?: IntFilter<"transaction"> | number
    partner_id?: IntFilter<"transaction"> | number
    image?: StringFilter<"transaction"> | string
    status_id?: IntFilter<"transaction"> | number
    partner_rate?: IntFilter<"transaction"> | number
    partner_review?: StringFilter<"transaction"> | string
    note?: StringFilter<"transaction"> | string
    total?: IntFilter<"transaction"> | number
    date_created?: DateTimeFilter<"transaction"> | Date | string
    address?: XOR<AddressRelationFilter, addressWhereInput>
    status?: XOR<StatusRelationFilter, statusWhereInput>
    transaction_detail?: Transaction_detailListRelationFilter
  }, "id" | "address_id">

  export type transactionOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    partner_id?: SortOrder
    address_id?: SortOrder
    image?: SortOrder
    status_id?: SortOrder
    partner_rate?: SortOrder
    partner_review?: SortOrder
    note?: SortOrder
    total?: SortOrder
    date_created?: SortOrder
    _count?: transactionCountOrderByAggregateInput
    _avg?: transactionAvgOrderByAggregateInput
    _max?: transactionMaxOrderByAggregateInput
    _min?: transactionMinOrderByAggregateInput
    _sum?: transactionSumOrderByAggregateInput
  }

  export type transactionScalarWhereWithAggregatesInput = {
    AND?: transactionScalarWhereWithAggregatesInput | transactionScalarWhereWithAggregatesInput[]
    OR?: transactionScalarWhereWithAggregatesInput[]
    NOT?: transactionScalarWhereWithAggregatesInput | transactionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"transaction"> | number
    user_id?: IntWithAggregatesFilter<"transaction"> | number
    partner_id?: IntWithAggregatesFilter<"transaction"> | number
    address_id?: IntWithAggregatesFilter<"transaction"> | number
    image?: StringWithAggregatesFilter<"transaction"> | string
    status_id?: IntWithAggregatesFilter<"transaction"> | number
    partner_rate?: IntWithAggregatesFilter<"transaction"> | number
    partner_review?: StringWithAggregatesFilter<"transaction"> | string
    note?: StringWithAggregatesFilter<"transaction"> | string
    total?: IntWithAggregatesFilter<"transaction"> | number
    date_created?: DateTimeWithAggregatesFilter<"transaction"> | Date | string
  }

  export type transaction_detailWhereInput = {
    AND?: transaction_detailWhereInput | transaction_detailWhereInput[]
    OR?: transaction_detailWhereInput[]
    NOT?: transaction_detailWhereInput | transaction_detailWhereInput[]
    id?: IntFilter<"transaction_detail"> | number
    transaction_id?: IntFilter<"transaction_detail"> | number
    trash_id?: IntFilter<"transaction_detail"> | number
    price?: IntFilter<"transaction_detail"> | number
    weight?: IntFilter<"transaction_detail"> | number
    trash?: XOR<TrashRelationFilter, trashWhereInput>
    transaction?: XOR<TransactionRelationFilter, transactionWhereInput>
  }

  export type transaction_detailOrderByWithRelationInput = {
    id?: SortOrder
    transaction_id?: SortOrder
    trash_id?: SortOrder
    price?: SortOrder
    weight?: SortOrder
    trash?: trashOrderByWithRelationInput
    transaction?: transactionOrderByWithRelationInput
  }

  export type transaction_detailWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: transaction_detailWhereInput | transaction_detailWhereInput[]
    OR?: transaction_detailWhereInput[]
    NOT?: transaction_detailWhereInput | transaction_detailWhereInput[]
    transaction_id?: IntFilter<"transaction_detail"> | number
    trash_id?: IntFilter<"transaction_detail"> | number
    price?: IntFilter<"transaction_detail"> | number
    weight?: IntFilter<"transaction_detail"> | number
    trash?: XOR<TrashRelationFilter, trashWhereInput>
    transaction?: XOR<TransactionRelationFilter, transactionWhereInput>
  }, "id">

  export type transaction_detailOrderByWithAggregationInput = {
    id?: SortOrder
    transaction_id?: SortOrder
    trash_id?: SortOrder
    price?: SortOrder
    weight?: SortOrder
    _count?: transaction_detailCountOrderByAggregateInput
    _avg?: transaction_detailAvgOrderByAggregateInput
    _max?: transaction_detailMaxOrderByAggregateInput
    _min?: transaction_detailMinOrderByAggregateInput
    _sum?: transaction_detailSumOrderByAggregateInput
  }

  export type transaction_detailScalarWhereWithAggregatesInput = {
    AND?: transaction_detailScalarWhereWithAggregatesInput | transaction_detailScalarWhereWithAggregatesInput[]
    OR?: transaction_detailScalarWhereWithAggregatesInput[]
    NOT?: transaction_detailScalarWhereWithAggregatesInput | transaction_detailScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"transaction_detail"> | number
    transaction_id?: IntWithAggregatesFilter<"transaction_detail"> | number
    trash_id?: IntWithAggregatesFilter<"transaction_detail"> | number
    price?: IntWithAggregatesFilter<"transaction_detail"> | number
    weight?: IntWithAggregatesFilter<"transaction_detail"> | number
  }

  export type usersCreateInput = {
    uuid?: string
    name: string
    email: string
    telp: string
    avatar: string
    date_created?: Date | string
    update_at?: Date | string | null
    password: string
    role: string
    address?: addressCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    uuid?: string
    name: string
    email: string
    telp: string
    avatar: string
    date_created?: Date | string
    update_at?: Date | string | null
    password: string
    role: string
    address?: addressUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telp?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    address?: addressUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telp?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    address?: addressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    uuid?: string
    name: string
    email: string
    telp: string
    avatar: string
    date_created?: Date | string
    update_at?: Date | string | null
    password: string
    role: string
  }

  export type usersUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telp?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telp?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type addressCreateInput = {
    label: string
    address_name: string
    detail: string
    owner_name: string
    owner_telp: string
    latitude: string
    longitude: string
    user: usersCreateNestedOneWithoutAddressInput
    transaction?: transactionCreateNestedOneWithoutAddressInput
  }

  export type addressUncheckedCreateInput = {
    id?: number
    label: string
    address_name: string
    detail: string
    owner_name: string
    owner_telp: string
    latitude: string
    longitude: string
    user_id: number
    transaction?: transactionUncheckedCreateNestedOneWithoutAddressInput
  }

  export type addressUpdateInput = {
    label?: StringFieldUpdateOperationsInput | string
    address_name?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    owner_name?: StringFieldUpdateOperationsInput | string
    owner_telp?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    user?: usersUpdateOneRequiredWithoutAddressNestedInput
    transaction?: transactionUpdateOneWithoutAddressNestedInput
  }

  export type addressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    address_name?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    owner_name?: StringFieldUpdateOperationsInput | string
    owner_telp?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    transaction?: transactionUncheckedUpdateOneWithoutAddressNestedInput
  }

  export type addressCreateManyInput = {
    id?: number
    label: string
    address_name: string
    detail: string
    owner_name: string
    owner_telp: string
    latitude: string
    longitude: string
    user_id: number
  }

  export type addressUpdateManyMutationInput = {
    label?: StringFieldUpdateOperationsInput | string
    address_name?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    owner_name?: StringFieldUpdateOperationsInput | string
    owner_telp?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
  }

  export type addressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    address_name?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    owner_name?: StringFieldUpdateOperationsInput | string
    owner_telp?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type trashCategoryCreateInput = {
    name: string
    subcategory?: trashCreateNestedManyWithoutCategoryInput
  }

  export type trashCategoryUncheckedCreateInput = {
    id?: number
    name: string
    subcategory?: trashUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type trashCategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    subcategory?: trashUpdateManyWithoutCategoryNestedInput
  }

  export type trashCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subcategory?: trashUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type trashCategoryCreateManyInput = {
    id?: number
    name: string
  }

  export type trashCategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type trashCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type trashCreateInput = {
    name: string
    minPrice: number
    maxPrice: number
    category: trashCategoryCreateNestedOneWithoutSubcategoryInput
    transaction_detail?: transaction_detailCreateNestedManyWithoutTrashInput
  }

  export type trashUncheckedCreateInput = {
    id?: number
    name: string
    minPrice: number
    maxPrice: number
    category_id: number
    transaction_detail?: transaction_detailUncheckedCreateNestedManyWithoutTrashInput
  }

  export type trashUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    minPrice?: IntFieldUpdateOperationsInput | number
    maxPrice?: IntFieldUpdateOperationsInput | number
    category?: trashCategoryUpdateOneRequiredWithoutSubcategoryNestedInput
    transaction_detail?: transaction_detailUpdateManyWithoutTrashNestedInput
  }

  export type trashUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    minPrice?: IntFieldUpdateOperationsInput | number
    maxPrice?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    transaction_detail?: transaction_detailUncheckedUpdateManyWithoutTrashNestedInput
  }

  export type trashCreateManyInput = {
    id?: number
    name: string
    minPrice: number
    maxPrice: number
    category_id: number
  }

  export type trashUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    minPrice?: IntFieldUpdateOperationsInput | number
    maxPrice?: IntFieldUpdateOperationsInput | number
  }

  export type trashUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    minPrice?: IntFieldUpdateOperationsInput | number
    maxPrice?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
  }

  export type statusCreateInput = {
    name: string
    label: string
    status: string
    transaction?: transactionCreateNestedManyWithoutStatusInput
  }

  export type statusUncheckedCreateInput = {
    id?: number
    name: string
    label: string
    status: string
    transaction?: transactionUncheckedCreateNestedManyWithoutStatusInput
  }

  export type statusUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    transaction?: transactionUpdateManyWithoutStatusNestedInput
  }

  export type statusUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    transaction?: transactionUncheckedUpdateManyWithoutStatusNestedInput
  }

  export type statusCreateManyInput = {
    id?: number
    name: string
    label: string
    status: string
  }

  export type statusUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type statusUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type transactionCreateInput = {
    user_id: number
    partner_id: number
    image: string
    partner_rate: number
    partner_review: string
    note: string
    total: number
    date_created?: Date | string
    address: addressCreateNestedOneWithoutTransactionInput
    status: statusCreateNestedOneWithoutTransactionInput
    transaction_detail?: transaction_detailCreateNestedManyWithoutTransactionInput
  }

  export type transactionUncheckedCreateInput = {
    id?: number
    user_id: number
    partner_id: number
    address_id: number
    image: string
    status_id: number
    partner_rate: number
    partner_review: string
    note: string
    total: number
    date_created?: Date | string
    transaction_detail?: transaction_detailUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type transactionUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    partner_id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    partner_rate?: IntFieldUpdateOperationsInput | number
    partner_review?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: addressUpdateOneRequiredWithoutTransactionNestedInput
    status?: statusUpdateOneRequiredWithoutTransactionNestedInput
    transaction_detail?: transaction_detailUpdateManyWithoutTransactionNestedInput
  }

  export type transactionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    partner_id?: IntFieldUpdateOperationsInput | number
    address_id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    status_id?: IntFieldUpdateOperationsInput | number
    partner_rate?: IntFieldUpdateOperationsInput | number
    partner_review?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_detail?: transaction_detailUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type transactionCreateManyInput = {
    id?: number
    user_id: number
    partner_id: number
    address_id: number
    image: string
    status_id: number
    partner_rate: number
    partner_review: string
    note: string
    total: number
    date_created?: Date | string
  }

  export type transactionUpdateManyMutationInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    partner_id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    partner_rate?: IntFieldUpdateOperationsInput | number
    partner_review?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    partner_id?: IntFieldUpdateOperationsInput | number
    address_id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    status_id?: IntFieldUpdateOperationsInput | number
    partner_rate?: IntFieldUpdateOperationsInput | number
    partner_review?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transaction_detailCreateInput = {
    price: number
    weight: number
    trash: trashCreateNestedOneWithoutTransaction_detailInput
    transaction: transactionCreateNestedOneWithoutTransaction_detailInput
  }

  export type transaction_detailUncheckedCreateInput = {
    id?: number
    transaction_id: number
    trash_id: number
    price: number
    weight: number
  }

  export type transaction_detailUpdateInput = {
    price?: IntFieldUpdateOperationsInput | number
    weight?: IntFieldUpdateOperationsInput | number
    trash?: trashUpdateOneRequiredWithoutTransaction_detailNestedInput
    transaction?: transactionUpdateOneRequiredWithoutTransaction_detailNestedInput
  }

  export type transaction_detailUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    transaction_id?: IntFieldUpdateOperationsInput | number
    trash_id?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    weight?: IntFieldUpdateOperationsInput | number
  }

  export type transaction_detailCreateManyInput = {
    id?: number
    transaction_id: number
    trash_id: number
    price: number
    weight: number
  }

  export type transaction_detailUpdateManyMutationInput = {
    price?: IntFieldUpdateOperationsInput | number
    weight?: IntFieldUpdateOperationsInput | number
  }

  export type transaction_detailUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    transaction_id?: IntFieldUpdateOperationsInput | number
    trash_id?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    weight?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AddressListRelationFilter = {
    every?: addressWhereInput
    some?: addressWhereInput
    none?: addressWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type addressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    email?: SortOrder
    telp?: SortOrder
    avatar?: SortOrder
    date_created?: SortOrder
    update_at?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    email?: SortOrder
    telp?: SortOrder
    avatar?: SortOrder
    date_created?: SortOrder
    update_at?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    email?: SortOrder
    telp?: SortOrder
    avatar?: SortOrder
    date_created?: SortOrder
    update_at?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UsersRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type TransactionNullableRelationFilter = {
    is?: transactionWhereInput | null
    isNot?: transactionWhereInput | null
  }

  export type addressCountOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    address_name?: SortOrder
    detail?: SortOrder
    owner_name?: SortOrder
    owner_telp?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    user_id?: SortOrder
  }

  export type addressAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type addressMaxOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    address_name?: SortOrder
    detail?: SortOrder
    owner_name?: SortOrder
    owner_telp?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    user_id?: SortOrder
  }

  export type addressMinOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    address_name?: SortOrder
    detail?: SortOrder
    owner_name?: SortOrder
    owner_telp?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    user_id?: SortOrder
  }

  export type addressSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type TrashListRelationFilter = {
    every?: trashWhereInput
    some?: trashWhereInput
    none?: trashWhereInput
  }

  export type trashOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type trashCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type trashCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type trashCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type trashCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type trashCategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TrashCategoryRelationFilter = {
    is?: trashCategoryWhereInput
    isNot?: trashCategoryWhereInput
  }

  export type Transaction_detailListRelationFilter = {
    every?: transaction_detailWhereInput
    some?: transaction_detailWhereInput
    none?: transaction_detailWhereInput
  }

  export type transaction_detailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type trashCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    minPrice?: SortOrder
    maxPrice?: SortOrder
    category_id?: SortOrder
  }

  export type trashAvgOrderByAggregateInput = {
    id?: SortOrder
    minPrice?: SortOrder
    maxPrice?: SortOrder
    category_id?: SortOrder
  }

  export type trashMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    minPrice?: SortOrder
    maxPrice?: SortOrder
    category_id?: SortOrder
  }

  export type trashMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    minPrice?: SortOrder
    maxPrice?: SortOrder
    category_id?: SortOrder
  }

  export type trashSumOrderByAggregateInput = {
    id?: SortOrder
    minPrice?: SortOrder
    maxPrice?: SortOrder
    category_id?: SortOrder
  }

  export type TransactionListRelationFilter = {
    every?: transactionWhereInput
    some?: transactionWhereInput
    none?: transactionWhereInput
  }

  export type transactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type statusCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    label?: SortOrder
    status?: SortOrder
  }

  export type statusAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type statusMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    label?: SortOrder
    status?: SortOrder
  }

  export type statusMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    label?: SortOrder
    status?: SortOrder
  }

  export type statusSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AddressRelationFilter = {
    is?: addressWhereInput
    isNot?: addressWhereInput
  }

  export type StatusRelationFilter = {
    is?: statusWhereInput
    isNot?: statusWhereInput
  }

  export type transactionCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    partner_id?: SortOrder
    address_id?: SortOrder
    image?: SortOrder
    status_id?: SortOrder
    partner_rate?: SortOrder
    partner_review?: SortOrder
    note?: SortOrder
    total?: SortOrder
    date_created?: SortOrder
  }

  export type transactionAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    partner_id?: SortOrder
    address_id?: SortOrder
    status_id?: SortOrder
    partner_rate?: SortOrder
    total?: SortOrder
  }

  export type transactionMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    partner_id?: SortOrder
    address_id?: SortOrder
    image?: SortOrder
    status_id?: SortOrder
    partner_rate?: SortOrder
    partner_review?: SortOrder
    note?: SortOrder
    total?: SortOrder
    date_created?: SortOrder
  }

  export type transactionMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    partner_id?: SortOrder
    address_id?: SortOrder
    image?: SortOrder
    status_id?: SortOrder
    partner_rate?: SortOrder
    partner_review?: SortOrder
    note?: SortOrder
    total?: SortOrder
    date_created?: SortOrder
  }

  export type transactionSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    partner_id?: SortOrder
    address_id?: SortOrder
    status_id?: SortOrder
    partner_rate?: SortOrder
    total?: SortOrder
  }

  export type TrashRelationFilter = {
    is?: trashWhereInput
    isNot?: trashWhereInput
  }

  export type TransactionRelationFilter = {
    is?: transactionWhereInput
    isNot?: transactionWhereInput
  }

  export type transaction_detailCountOrderByAggregateInput = {
    id?: SortOrder
    transaction_id?: SortOrder
    trash_id?: SortOrder
    price?: SortOrder
    weight?: SortOrder
  }

  export type transaction_detailAvgOrderByAggregateInput = {
    id?: SortOrder
    transaction_id?: SortOrder
    trash_id?: SortOrder
    price?: SortOrder
    weight?: SortOrder
  }

  export type transaction_detailMaxOrderByAggregateInput = {
    id?: SortOrder
    transaction_id?: SortOrder
    trash_id?: SortOrder
    price?: SortOrder
    weight?: SortOrder
  }

  export type transaction_detailMinOrderByAggregateInput = {
    id?: SortOrder
    transaction_id?: SortOrder
    trash_id?: SortOrder
    price?: SortOrder
    weight?: SortOrder
  }

  export type transaction_detailSumOrderByAggregateInput = {
    id?: SortOrder
    transaction_id?: SortOrder
    trash_id?: SortOrder
    price?: SortOrder
    weight?: SortOrder
  }

  export type addressCreateNestedManyWithoutUserInput = {
    create?: XOR<addressCreateWithoutUserInput, addressUncheckedCreateWithoutUserInput> | addressCreateWithoutUserInput[] | addressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: addressCreateOrConnectWithoutUserInput | addressCreateOrConnectWithoutUserInput[]
    createMany?: addressCreateManyUserInputEnvelope
    connect?: addressWhereUniqueInput | addressWhereUniqueInput[]
  }

  export type addressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<addressCreateWithoutUserInput, addressUncheckedCreateWithoutUserInput> | addressCreateWithoutUserInput[] | addressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: addressCreateOrConnectWithoutUserInput | addressCreateOrConnectWithoutUserInput[]
    createMany?: addressCreateManyUserInputEnvelope
    connect?: addressWhereUniqueInput | addressWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type addressUpdateManyWithoutUserNestedInput = {
    create?: XOR<addressCreateWithoutUserInput, addressUncheckedCreateWithoutUserInput> | addressCreateWithoutUserInput[] | addressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: addressCreateOrConnectWithoutUserInput | addressCreateOrConnectWithoutUserInput[]
    upsert?: addressUpsertWithWhereUniqueWithoutUserInput | addressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: addressCreateManyUserInputEnvelope
    set?: addressWhereUniqueInput | addressWhereUniqueInput[]
    disconnect?: addressWhereUniqueInput | addressWhereUniqueInput[]
    delete?: addressWhereUniqueInput | addressWhereUniqueInput[]
    connect?: addressWhereUniqueInput | addressWhereUniqueInput[]
    update?: addressUpdateWithWhereUniqueWithoutUserInput | addressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: addressUpdateManyWithWhereWithoutUserInput | addressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: addressScalarWhereInput | addressScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type addressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<addressCreateWithoutUserInput, addressUncheckedCreateWithoutUserInput> | addressCreateWithoutUserInput[] | addressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: addressCreateOrConnectWithoutUserInput | addressCreateOrConnectWithoutUserInput[]
    upsert?: addressUpsertWithWhereUniqueWithoutUserInput | addressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: addressCreateManyUserInputEnvelope
    set?: addressWhereUniqueInput | addressWhereUniqueInput[]
    disconnect?: addressWhereUniqueInput | addressWhereUniqueInput[]
    delete?: addressWhereUniqueInput | addressWhereUniqueInput[]
    connect?: addressWhereUniqueInput | addressWhereUniqueInput[]
    update?: addressUpdateWithWhereUniqueWithoutUserInput | addressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: addressUpdateManyWithWhereWithoutUserInput | addressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: addressScalarWhereInput | addressScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutAddressInput = {
    create?: XOR<usersCreateWithoutAddressInput, usersUncheckedCreateWithoutAddressInput>
    connectOrCreate?: usersCreateOrConnectWithoutAddressInput
    connect?: usersWhereUniqueInput
  }

  export type transactionCreateNestedOneWithoutAddressInput = {
    create?: XOR<transactionCreateWithoutAddressInput, transactionUncheckedCreateWithoutAddressInput>
    connectOrCreate?: transactionCreateOrConnectWithoutAddressInput
    connect?: transactionWhereUniqueInput
  }

  export type transactionUncheckedCreateNestedOneWithoutAddressInput = {
    create?: XOR<transactionCreateWithoutAddressInput, transactionUncheckedCreateWithoutAddressInput>
    connectOrCreate?: transactionCreateOrConnectWithoutAddressInput
    connect?: transactionWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutAddressNestedInput = {
    create?: XOR<usersCreateWithoutAddressInput, usersUncheckedCreateWithoutAddressInput>
    connectOrCreate?: usersCreateOrConnectWithoutAddressInput
    upsert?: usersUpsertWithoutAddressInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutAddressInput, usersUpdateWithoutAddressInput>, usersUncheckedUpdateWithoutAddressInput>
  }

  export type transactionUpdateOneWithoutAddressNestedInput = {
    create?: XOR<transactionCreateWithoutAddressInput, transactionUncheckedCreateWithoutAddressInput>
    connectOrCreate?: transactionCreateOrConnectWithoutAddressInput
    upsert?: transactionUpsertWithoutAddressInput
    disconnect?: transactionWhereInput | boolean
    delete?: transactionWhereInput | boolean
    connect?: transactionWhereUniqueInput
    update?: XOR<XOR<transactionUpdateToOneWithWhereWithoutAddressInput, transactionUpdateWithoutAddressInput>, transactionUncheckedUpdateWithoutAddressInput>
  }

  export type transactionUncheckedUpdateOneWithoutAddressNestedInput = {
    create?: XOR<transactionCreateWithoutAddressInput, transactionUncheckedCreateWithoutAddressInput>
    connectOrCreate?: transactionCreateOrConnectWithoutAddressInput
    upsert?: transactionUpsertWithoutAddressInput
    disconnect?: transactionWhereInput | boolean
    delete?: transactionWhereInput | boolean
    connect?: transactionWhereUniqueInput
    update?: XOR<XOR<transactionUpdateToOneWithWhereWithoutAddressInput, transactionUpdateWithoutAddressInput>, transactionUncheckedUpdateWithoutAddressInput>
  }

  export type trashCreateNestedManyWithoutCategoryInput = {
    create?: XOR<trashCreateWithoutCategoryInput, trashUncheckedCreateWithoutCategoryInput> | trashCreateWithoutCategoryInput[] | trashUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: trashCreateOrConnectWithoutCategoryInput | trashCreateOrConnectWithoutCategoryInput[]
    createMany?: trashCreateManyCategoryInputEnvelope
    connect?: trashWhereUniqueInput | trashWhereUniqueInput[]
  }

  export type trashUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<trashCreateWithoutCategoryInput, trashUncheckedCreateWithoutCategoryInput> | trashCreateWithoutCategoryInput[] | trashUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: trashCreateOrConnectWithoutCategoryInput | trashCreateOrConnectWithoutCategoryInput[]
    createMany?: trashCreateManyCategoryInputEnvelope
    connect?: trashWhereUniqueInput | trashWhereUniqueInput[]
  }

  export type trashUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<trashCreateWithoutCategoryInput, trashUncheckedCreateWithoutCategoryInput> | trashCreateWithoutCategoryInput[] | trashUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: trashCreateOrConnectWithoutCategoryInput | trashCreateOrConnectWithoutCategoryInput[]
    upsert?: trashUpsertWithWhereUniqueWithoutCategoryInput | trashUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: trashCreateManyCategoryInputEnvelope
    set?: trashWhereUniqueInput | trashWhereUniqueInput[]
    disconnect?: trashWhereUniqueInput | trashWhereUniqueInput[]
    delete?: trashWhereUniqueInput | trashWhereUniqueInput[]
    connect?: trashWhereUniqueInput | trashWhereUniqueInput[]
    update?: trashUpdateWithWhereUniqueWithoutCategoryInput | trashUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: trashUpdateManyWithWhereWithoutCategoryInput | trashUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: trashScalarWhereInput | trashScalarWhereInput[]
  }

  export type trashUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<trashCreateWithoutCategoryInput, trashUncheckedCreateWithoutCategoryInput> | trashCreateWithoutCategoryInput[] | trashUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: trashCreateOrConnectWithoutCategoryInput | trashCreateOrConnectWithoutCategoryInput[]
    upsert?: trashUpsertWithWhereUniqueWithoutCategoryInput | trashUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: trashCreateManyCategoryInputEnvelope
    set?: trashWhereUniqueInput | trashWhereUniqueInput[]
    disconnect?: trashWhereUniqueInput | trashWhereUniqueInput[]
    delete?: trashWhereUniqueInput | trashWhereUniqueInput[]
    connect?: trashWhereUniqueInput | trashWhereUniqueInput[]
    update?: trashUpdateWithWhereUniqueWithoutCategoryInput | trashUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: trashUpdateManyWithWhereWithoutCategoryInput | trashUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: trashScalarWhereInput | trashScalarWhereInput[]
  }

  export type trashCategoryCreateNestedOneWithoutSubcategoryInput = {
    create?: XOR<trashCategoryCreateWithoutSubcategoryInput, trashCategoryUncheckedCreateWithoutSubcategoryInput>
    connectOrCreate?: trashCategoryCreateOrConnectWithoutSubcategoryInput
    connect?: trashCategoryWhereUniqueInput
  }

  export type transaction_detailCreateNestedManyWithoutTrashInput = {
    create?: XOR<transaction_detailCreateWithoutTrashInput, transaction_detailUncheckedCreateWithoutTrashInput> | transaction_detailCreateWithoutTrashInput[] | transaction_detailUncheckedCreateWithoutTrashInput[]
    connectOrCreate?: transaction_detailCreateOrConnectWithoutTrashInput | transaction_detailCreateOrConnectWithoutTrashInput[]
    createMany?: transaction_detailCreateManyTrashInputEnvelope
    connect?: transaction_detailWhereUniqueInput | transaction_detailWhereUniqueInput[]
  }

  export type transaction_detailUncheckedCreateNestedManyWithoutTrashInput = {
    create?: XOR<transaction_detailCreateWithoutTrashInput, transaction_detailUncheckedCreateWithoutTrashInput> | transaction_detailCreateWithoutTrashInput[] | transaction_detailUncheckedCreateWithoutTrashInput[]
    connectOrCreate?: transaction_detailCreateOrConnectWithoutTrashInput | transaction_detailCreateOrConnectWithoutTrashInput[]
    createMany?: transaction_detailCreateManyTrashInputEnvelope
    connect?: transaction_detailWhereUniqueInput | transaction_detailWhereUniqueInput[]
  }

  export type trashCategoryUpdateOneRequiredWithoutSubcategoryNestedInput = {
    create?: XOR<trashCategoryCreateWithoutSubcategoryInput, trashCategoryUncheckedCreateWithoutSubcategoryInput>
    connectOrCreate?: trashCategoryCreateOrConnectWithoutSubcategoryInput
    upsert?: trashCategoryUpsertWithoutSubcategoryInput
    connect?: trashCategoryWhereUniqueInput
    update?: XOR<XOR<trashCategoryUpdateToOneWithWhereWithoutSubcategoryInput, trashCategoryUpdateWithoutSubcategoryInput>, trashCategoryUncheckedUpdateWithoutSubcategoryInput>
  }

  export type transaction_detailUpdateManyWithoutTrashNestedInput = {
    create?: XOR<transaction_detailCreateWithoutTrashInput, transaction_detailUncheckedCreateWithoutTrashInput> | transaction_detailCreateWithoutTrashInput[] | transaction_detailUncheckedCreateWithoutTrashInput[]
    connectOrCreate?: transaction_detailCreateOrConnectWithoutTrashInput | transaction_detailCreateOrConnectWithoutTrashInput[]
    upsert?: transaction_detailUpsertWithWhereUniqueWithoutTrashInput | transaction_detailUpsertWithWhereUniqueWithoutTrashInput[]
    createMany?: transaction_detailCreateManyTrashInputEnvelope
    set?: transaction_detailWhereUniqueInput | transaction_detailWhereUniqueInput[]
    disconnect?: transaction_detailWhereUniqueInput | transaction_detailWhereUniqueInput[]
    delete?: transaction_detailWhereUniqueInput | transaction_detailWhereUniqueInput[]
    connect?: transaction_detailWhereUniqueInput | transaction_detailWhereUniqueInput[]
    update?: transaction_detailUpdateWithWhereUniqueWithoutTrashInput | transaction_detailUpdateWithWhereUniqueWithoutTrashInput[]
    updateMany?: transaction_detailUpdateManyWithWhereWithoutTrashInput | transaction_detailUpdateManyWithWhereWithoutTrashInput[]
    deleteMany?: transaction_detailScalarWhereInput | transaction_detailScalarWhereInput[]
  }

  export type transaction_detailUncheckedUpdateManyWithoutTrashNestedInput = {
    create?: XOR<transaction_detailCreateWithoutTrashInput, transaction_detailUncheckedCreateWithoutTrashInput> | transaction_detailCreateWithoutTrashInput[] | transaction_detailUncheckedCreateWithoutTrashInput[]
    connectOrCreate?: transaction_detailCreateOrConnectWithoutTrashInput | transaction_detailCreateOrConnectWithoutTrashInput[]
    upsert?: transaction_detailUpsertWithWhereUniqueWithoutTrashInput | transaction_detailUpsertWithWhereUniqueWithoutTrashInput[]
    createMany?: transaction_detailCreateManyTrashInputEnvelope
    set?: transaction_detailWhereUniqueInput | transaction_detailWhereUniqueInput[]
    disconnect?: transaction_detailWhereUniqueInput | transaction_detailWhereUniqueInput[]
    delete?: transaction_detailWhereUniqueInput | transaction_detailWhereUniqueInput[]
    connect?: transaction_detailWhereUniqueInput | transaction_detailWhereUniqueInput[]
    update?: transaction_detailUpdateWithWhereUniqueWithoutTrashInput | transaction_detailUpdateWithWhereUniqueWithoutTrashInput[]
    updateMany?: transaction_detailUpdateManyWithWhereWithoutTrashInput | transaction_detailUpdateManyWithWhereWithoutTrashInput[]
    deleteMany?: transaction_detailScalarWhereInput | transaction_detailScalarWhereInput[]
  }

  export type transactionCreateNestedManyWithoutStatusInput = {
    create?: XOR<transactionCreateWithoutStatusInput, transactionUncheckedCreateWithoutStatusInput> | transactionCreateWithoutStatusInput[] | transactionUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutStatusInput | transactionCreateOrConnectWithoutStatusInput[]
    createMany?: transactionCreateManyStatusInputEnvelope
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
  }

  export type transactionUncheckedCreateNestedManyWithoutStatusInput = {
    create?: XOR<transactionCreateWithoutStatusInput, transactionUncheckedCreateWithoutStatusInput> | transactionCreateWithoutStatusInput[] | transactionUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutStatusInput | transactionCreateOrConnectWithoutStatusInput[]
    createMany?: transactionCreateManyStatusInputEnvelope
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
  }

  export type transactionUpdateManyWithoutStatusNestedInput = {
    create?: XOR<transactionCreateWithoutStatusInput, transactionUncheckedCreateWithoutStatusInput> | transactionCreateWithoutStatusInput[] | transactionUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutStatusInput | transactionCreateOrConnectWithoutStatusInput[]
    upsert?: transactionUpsertWithWhereUniqueWithoutStatusInput | transactionUpsertWithWhereUniqueWithoutStatusInput[]
    createMany?: transactionCreateManyStatusInputEnvelope
    set?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    disconnect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    delete?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    update?: transactionUpdateWithWhereUniqueWithoutStatusInput | transactionUpdateWithWhereUniqueWithoutStatusInput[]
    updateMany?: transactionUpdateManyWithWhereWithoutStatusInput | transactionUpdateManyWithWhereWithoutStatusInput[]
    deleteMany?: transactionScalarWhereInput | transactionScalarWhereInput[]
  }

  export type transactionUncheckedUpdateManyWithoutStatusNestedInput = {
    create?: XOR<transactionCreateWithoutStatusInput, transactionUncheckedCreateWithoutStatusInput> | transactionCreateWithoutStatusInput[] | transactionUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutStatusInput | transactionCreateOrConnectWithoutStatusInput[]
    upsert?: transactionUpsertWithWhereUniqueWithoutStatusInput | transactionUpsertWithWhereUniqueWithoutStatusInput[]
    createMany?: transactionCreateManyStatusInputEnvelope
    set?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    disconnect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    delete?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    update?: transactionUpdateWithWhereUniqueWithoutStatusInput | transactionUpdateWithWhereUniqueWithoutStatusInput[]
    updateMany?: transactionUpdateManyWithWhereWithoutStatusInput | transactionUpdateManyWithWhereWithoutStatusInput[]
    deleteMany?: transactionScalarWhereInput | transactionScalarWhereInput[]
  }

  export type addressCreateNestedOneWithoutTransactionInput = {
    create?: XOR<addressCreateWithoutTransactionInput, addressUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: addressCreateOrConnectWithoutTransactionInput
    connect?: addressWhereUniqueInput
  }

  export type statusCreateNestedOneWithoutTransactionInput = {
    create?: XOR<statusCreateWithoutTransactionInput, statusUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: statusCreateOrConnectWithoutTransactionInput
    connect?: statusWhereUniqueInput
  }

  export type transaction_detailCreateNestedManyWithoutTransactionInput = {
    create?: XOR<transaction_detailCreateWithoutTransactionInput, transaction_detailUncheckedCreateWithoutTransactionInput> | transaction_detailCreateWithoutTransactionInput[] | transaction_detailUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: transaction_detailCreateOrConnectWithoutTransactionInput | transaction_detailCreateOrConnectWithoutTransactionInput[]
    createMany?: transaction_detailCreateManyTransactionInputEnvelope
    connect?: transaction_detailWhereUniqueInput | transaction_detailWhereUniqueInput[]
  }

  export type transaction_detailUncheckedCreateNestedManyWithoutTransactionInput = {
    create?: XOR<transaction_detailCreateWithoutTransactionInput, transaction_detailUncheckedCreateWithoutTransactionInput> | transaction_detailCreateWithoutTransactionInput[] | transaction_detailUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: transaction_detailCreateOrConnectWithoutTransactionInput | transaction_detailCreateOrConnectWithoutTransactionInput[]
    createMany?: transaction_detailCreateManyTransactionInputEnvelope
    connect?: transaction_detailWhereUniqueInput | transaction_detailWhereUniqueInput[]
  }

  export type addressUpdateOneRequiredWithoutTransactionNestedInput = {
    create?: XOR<addressCreateWithoutTransactionInput, addressUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: addressCreateOrConnectWithoutTransactionInput
    upsert?: addressUpsertWithoutTransactionInput
    connect?: addressWhereUniqueInput
    update?: XOR<XOR<addressUpdateToOneWithWhereWithoutTransactionInput, addressUpdateWithoutTransactionInput>, addressUncheckedUpdateWithoutTransactionInput>
  }

  export type statusUpdateOneRequiredWithoutTransactionNestedInput = {
    create?: XOR<statusCreateWithoutTransactionInput, statusUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: statusCreateOrConnectWithoutTransactionInput
    upsert?: statusUpsertWithoutTransactionInput
    connect?: statusWhereUniqueInput
    update?: XOR<XOR<statusUpdateToOneWithWhereWithoutTransactionInput, statusUpdateWithoutTransactionInput>, statusUncheckedUpdateWithoutTransactionInput>
  }

  export type transaction_detailUpdateManyWithoutTransactionNestedInput = {
    create?: XOR<transaction_detailCreateWithoutTransactionInput, transaction_detailUncheckedCreateWithoutTransactionInput> | transaction_detailCreateWithoutTransactionInput[] | transaction_detailUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: transaction_detailCreateOrConnectWithoutTransactionInput | transaction_detailCreateOrConnectWithoutTransactionInput[]
    upsert?: transaction_detailUpsertWithWhereUniqueWithoutTransactionInput | transaction_detailUpsertWithWhereUniqueWithoutTransactionInput[]
    createMany?: transaction_detailCreateManyTransactionInputEnvelope
    set?: transaction_detailWhereUniqueInput | transaction_detailWhereUniqueInput[]
    disconnect?: transaction_detailWhereUniqueInput | transaction_detailWhereUniqueInput[]
    delete?: transaction_detailWhereUniqueInput | transaction_detailWhereUniqueInput[]
    connect?: transaction_detailWhereUniqueInput | transaction_detailWhereUniqueInput[]
    update?: transaction_detailUpdateWithWhereUniqueWithoutTransactionInput | transaction_detailUpdateWithWhereUniqueWithoutTransactionInput[]
    updateMany?: transaction_detailUpdateManyWithWhereWithoutTransactionInput | transaction_detailUpdateManyWithWhereWithoutTransactionInput[]
    deleteMany?: transaction_detailScalarWhereInput | transaction_detailScalarWhereInput[]
  }

  export type transaction_detailUncheckedUpdateManyWithoutTransactionNestedInput = {
    create?: XOR<transaction_detailCreateWithoutTransactionInput, transaction_detailUncheckedCreateWithoutTransactionInput> | transaction_detailCreateWithoutTransactionInput[] | transaction_detailUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: transaction_detailCreateOrConnectWithoutTransactionInput | transaction_detailCreateOrConnectWithoutTransactionInput[]
    upsert?: transaction_detailUpsertWithWhereUniqueWithoutTransactionInput | transaction_detailUpsertWithWhereUniqueWithoutTransactionInput[]
    createMany?: transaction_detailCreateManyTransactionInputEnvelope
    set?: transaction_detailWhereUniqueInput | transaction_detailWhereUniqueInput[]
    disconnect?: transaction_detailWhereUniqueInput | transaction_detailWhereUniqueInput[]
    delete?: transaction_detailWhereUniqueInput | transaction_detailWhereUniqueInput[]
    connect?: transaction_detailWhereUniqueInput | transaction_detailWhereUniqueInput[]
    update?: transaction_detailUpdateWithWhereUniqueWithoutTransactionInput | transaction_detailUpdateWithWhereUniqueWithoutTransactionInput[]
    updateMany?: transaction_detailUpdateManyWithWhereWithoutTransactionInput | transaction_detailUpdateManyWithWhereWithoutTransactionInput[]
    deleteMany?: transaction_detailScalarWhereInput | transaction_detailScalarWhereInput[]
  }

  export type trashCreateNestedOneWithoutTransaction_detailInput = {
    create?: XOR<trashCreateWithoutTransaction_detailInput, trashUncheckedCreateWithoutTransaction_detailInput>
    connectOrCreate?: trashCreateOrConnectWithoutTransaction_detailInput
    connect?: trashWhereUniqueInput
  }

  export type transactionCreateNestedOneWithoutTransaction_detailInput = {
    create?: XOR<transactionCreateWithoutTransaction_detailInput, transactionUncheckedCreateWithoutTransaction_detailInput>
    connectOrCreate?: transactionCreateOrConnectWithoutTransaction_detailInput
    connect?: transactionWhereUniqueInput
  }

  export type trashUpdateOneRequiredWithoutTransaction_detailNestedInput = {
    create?: XOR<trashCreateWithoutTransaction_detailInput, trashUncheckedCreateWithoutTransaction_detailInput>
    connectOrCreate?: trashCreateOrConnectWithoutTransaction_detailInput
    upsert?: trashUpsertWithoutTransaction_detailInput
    connect?: trashWhereUniqueInput
    update?: XOR<XOR<trashUpdateToOneWithWhereWithoutTransaction_detailInput, trashUpdateWithoutTransaction_detailInput>, trashUncheckedUpdateWithoutTransaction_detailInput>
  }

  export type transactionUpdateOneRequiredWithoutTransaction_detailNestedInput = {
    create?: XOR<transactionCreateWithoutTransaction_detailInput, transactionUncheckedCreateWithoutTransaction_detailInput>
    connectOrCreate?: transactionCreateOrConnectWithoutTransaction_detailInput
    upsert?: transactionUpsertWithoutTransaction_detailInput
    connect?: transactionWhereUniqueInput
    update?: XOR<XOR<transactionUpdateToOneWithWhereWithoutTransaction_detailInput, transactionUpdateWithoutTransaction_detailInput>, transactionUncheckedUpdateWithoutTransaction_detailInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type addressCreateWithoutUserInput = {
    label: string
    address_name: string
    detail: string
    owner_name: string
    owner_telp: string
    latitude: string
    longitude: string
    transaction?: transactionCreateNestedOneWithoutAddressInput
  }

  export type addressUncheckedCreateWithoutUserInput = {
    id?: number
    label: string
    address_name: string
    detail: string
    owner_name: string
    owner_telp: string
    latitude: string
    longitude: string
    transaction?: transactionUncheckedCreateNestedOneWithoutAddressInput
  }

  export type addressCreateOrConnectWithoutUserInput = {
    where: addressWhereUniqueInput
    create: XOR<addressCreateWithoutUserInput, addressUncheckedCreateWithoutUserInput>
  }

  export type addressCreateManyUserInputEnvelope = {
    data: addressCreateManyUserInput | addressCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type addressUpsertWithWhereUniqueWithoutUserInput = {
    where: addressWhereUniqueInput
    update: XOR<addressUpdateWithoutUserInput, addressUncheckedUpdateWithoutUserInput>
    create: XOR<addressCreateWithoutUserInput, addressUncheckedCreateWithoutUserInput>
  }

  export type addressUpdateWithWhereUniqueWithoutUserInput = {
    where: addressWhereUniqueInput
    data: XOR<addressUpdateWithoutUserInput, addressUncheckedUpdateWithoutUserInput>
  }

  export type addressUpdateManyWithWhereWithoutUserInput = {
    where: addressScalarWhereInput
    data: XOR<addressUpdateManyMutationInput, addressUncheckedUpdateManyWithoutUserInput>
  }

  export type addressScalarWhereInput = {
    AND?: addressScalarWhereInput | addressScalarWhereInput[]
    OR?: addressScalarWhereInput[]
    NOT?: addressScalarWhereInput | addressScalarWhereInput[]
    id?: IntFilter<"address"> | number
    label?: StringFilter<"address"> | string
    address_name?: StringFilter<"address"> | string
    detail?: StringFilter<"address"> | string
    owner_name?: StringFilter<"address"> | string
    owner_telp?: StringFilter<"address"> | string
    latitude?: StringFilter<"address"> | string
    longitude?: StringFilter<"address"> | string
    user_id?: IntFilter<"address"> | number
  }

  export type usersCreateWithoutAddressInput = {
    uuid?: string
    name: string
    email: string
    telp: string
    avatar: string
    date_created?: Date | string
    update_at?: Date | string | null
    password: string
    role: string
  }

  export type usersUncheckedCreateWithoutAddressInput = {
    id?: number
    uuid?: string
    name: string
    email: string
    telp: string
    avatar: string
    date_created?: Date | string
    update_at?: Date | string | null
    password: string
    role: string
  }

  export type usersCreateOrConnectWithoutAddressInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutAddressInput, usersUncheckedCreateWithoutAddressInput>
  }

  export type transactionCreateWithoutAddressInput = {
    user_id: number
    partner_id: number
    image: string
    partner_rate: number
    partner_review: string
    note: string
    total: number
    date_created?: Date | string
    status: statusCreateNestedOneWithoutTransactionInput
    transaction_detail?: transaction_detailCreateNestedManyWithoutTransactionInput
  }

  export type transactionUncheckedCreateWithoutAddressInput = {
    id?: number
    user_id: number
    partner_id: number
    image: string
    status_id: number
    partner_rate: number
    partner_review: string
    note: string
    total: number
    date_created?: Date | string
    transaction_detail?: transaction_detailUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type transactionCreateOrConnectWithoutAddressInput = {
    where: transactionWhereUniqueInput
    create: XOR<transactionCreateWithoutAddressInput, transactionUncheckedCreateWithoutAddressInput>
  }

  export type usersUpsertWithoutAddressInput = {
    update: XOR<usersUpdateWithoutAddressInput, usersUncheckedUpdateWithoutAddressInput>
    create: XOR<usersCreateWithoutAddressInput, usersUncheckedCreateWithoutAddressInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutAddressInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutAddressInput, usersUncheckedUpdateWithoutAddressInput>
  }

  export type usersUpdateWithoutAddressInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telp?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateWithoutAddressInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telp?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
    update_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type transactionUpsertWithoutAddressInput = {
    update: XOR<transactionUpdateWithoutAddressInput, transactionUncheckedUpdateWithoutAddressInput>
    create: XOR<transactionCreateWithoutAddressInput, transactionUncheckedCreateWithoutAddressInput>
    where?: transactionWhereInput
  }

  export type transactionUpdateToOneWithWhereWithoutAddressInput = {
    where?: transactionWhereInput
    data: XOR<transactionUpdateWithoutAddressInput, transactionUncheckedUpdateWithoutAddressInput>
  }

  export type transactionUpdateWithoutAddressInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    partner_id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    partner_rate?: IntFieldUpdateOperationsInput | number
    partner_review?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: statusUpdateOneRequiredWithoutTransactionNestedInput
    transaction_detail?: transaction_detailUpdateManyWithoutTransactionNestedInput
  }

  export type transactionUncheckedUpdateWithoutAddressInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    partner_id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    status_id?: IntFieldUpdateOperationsInput | number
    partner_rate?: IntFieldUpdateOperationsInput | number
    partner_review?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_detail?: transaction_detailUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type trashCreateWithoutCategoryInput = {
    name: string
    minPrice: number
    maxPrice: number
    transaction_detail?: transaction_detailCreateNestedManyWithoutTrashInput
  }

  export type trashUncheckedCreateWithoutCategoryInput = {
    id?: number
    name: string
    minPrice: number
    maxPrice: number
    transaction_detail?: transaction_detailUncheckedCreateNestedManyWithoutTrashInput
  }

  export type trashCreateOrConnectWithoutCategoryInput = {
    where: trashWhereUniqueInput
    create: XOR<trashCreateWithoutCategoryInput, trashUncheckedCreateWithoutCategoryInput>
  }

  export type trashCreateManyCategoryInputEnvelope = {
    data: trashCreateManyCategoryInput | trashCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type trashUpsertWithWhereUniqueWithoutCategoryInput = {
    where: trashWhereUniqueInput
    update: XOR<trashUpdateWithoutCategoryInput, trashUncheckedUpdateWithoutCategoryInput>
    create: XOR<trashCreateWithoutCategoryInput, trashUncheckedCreateWithoutCategoryInput>
  }

  export type trashUpdateWithWhereUniqueWithoutCategoryInput = {
    where: trashWhereUniqueInput
    data: XOR<trashUpdateWithoutCategoryInput, trashUncheckedUpdateWithoutCategoryInput>
  }

  export type trashUpdateManyWithWhereWithoutCategoryInput = {
    where: trashScalarWhereInput
    data: XOR<trashUpdateManyMutationInput, trashUncheckedUpdateManyWithoutCategoryInput>
  }

  export type trashScalarWhereInput = {
    AND?: trashScalarWhereInput | trashScalarWhereInput[]
    OR?: trashScalarWhereInput[]
    NOT?: trashScalarWhereInput | trashScalarWhereInput[]
    id?: IntFilter<"trash"> | number
    name?: StringFilter<"trash"> | string
    minPrice?: IntFilter<"trash"> | number
    maxPrice?: IntFilter<"trash"> | number
    category_id?: IntFilter<"trash"> | number
  }

  export type trashCategoryCreateWithoutSubcategoryInput = {
    name: string
  }

  export type trashCategoryUncheckedCreateWithoutSubcategoryInput = {
    id?: number
    name: string
  }

  export type trashCategoryCreateOrConnectWithoutSubcategoryInput = {
    where: trashCategoryWhereUniqueInput
    create: XOR<trashCategoryCreateWithoutSubcategoryInput, trashCategoryUncheckedCreateWithoutSubcategoryInput>
  }

  export type transaction_detailCreateWithoutTrashInput = {
    price: number
    weight: number
    transaction: transactionCreateNestedOneWithoutTransaction_detailInput
  }

  export type transaction_detailUncheckedCreateWithoutTrashInput = {
    id?: number
    transaction_id: number
    price: number
    weight: number
  }

  export type transaction_detailCreateOrConnectWithoutTrashInput = {
    where: transaction_detailWhereUniqueInput
    create: XOR<transaction_detailCreateWithoutTrashInput, transaction_detailUncheckedCreateWithoutTrashInput>
  }

  export type transaction_detailCreateManyTrashInputEnvelope = {
    data: transaction_detailCreateManyTrashInput | transaction_detailCreateManyTrashInput[]
    skipDuplicates?: boolean
  }

  export type trashCategoryUpsertWithoutSubcategoryInput = {
    update: XOR<trashCategoryUpdateWithoutSubcategoryInput, trashCategoryUncheckedUpdateWithoutSubcategoryInput>
    create: XOR<trashCategoryCreateWithoutSubcategoryInput, trashCategoryUncheckedCreateWithoutSubcategoryInput>
    where?: trashCategoryWhereInput
  }

  export type trashCategoryUpdateToOneWithWhereWithoutSubcategoryInput = {
    where?: trashCategoryWhereInput
    data: XOR<trashCategoryUpdateWithoutSubcategoryInput, trashCategoryUncheckedUpdateWithoutSubcategoryInput>
  }

  export type trashCategoryUpdateWithoutSubcategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type trashCategoryUncheckedUpdateWithoutSubcategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type transaction_detailUpsertWithWhereUniqueWithoutTrashInput = {
    where: transaction_detailWhereUniqueInput
    update: XOR<transaction_detailUpdateWithoutTrashInput, transaction_detailUncheckedUpdateWithoutTrashInput>
    create: XOR<transaction_detailCreateWithoutTrashInput, transaction_detailUncheckedCreateWithoutTrashInput>
  }

  export type transaction_detailUpdateWithWhereUniqueWithoutTrashInput = {
    where: transaction_detailWhereUniqueInput
    data: XOR<transaction_detailUpdateWithoutTrashInput, transaction_detailUncheckedUpdateWithoutTrashInput>
  }

  export type transaction_detailUpdateManyWithWhereWithoutTrashInput = {
    where: transaction_detailScalarWhereInput
    data: XOR<transaction_detailUpdateManyMutationInput, transaction_detailUncheckedUpdateManyWithoutTrashInput>
  }

  export type transaction_detailScalarWhereInput = {
    AND?: transaction_detailScalarWhereInput | transaction_detailScalarWhereInput[]
    OR?: transaction_detailScalarWhereInput[]
    NOT?: transaction_detailScalarWhereInput | transaction_detailScalarWhereInput[]
    id?: IntFilter<"transaction_detail"> | number
    transaction_id?: IntFilter<"transaction_detail"> | number
    trash_id?: IntFilter<"transaction_detail"> | number
    price?: IntFilter<"transaction_detail"> | number
    weight?: IntFilter<"transaction_detail"> | number
  }

  export type transactionCreateWithoutStatusInput = {
    user_id: number
    partner_id: number
    image: string
    partner_rate: number
    partner_review: string
    note: string
    total: number
    date_created?: Date | string
    address: addressCreateNestedOneWithoutTransactionInput
    transaction_detail?: transaction_detailCreateNestedManyWithoutTransactionInput
  }

  export type transactionUncheckedCreateWithoutStatusInput = {
    id?: number
    user_id: number
    partner_id: number
    address_id: number
    image: string
    partner_rate: number
    partner_review: string
    note: string
    total: number
    date_created?: Date | string
    transaction_detail?: transaction_detailUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type transactionCreateOrConnectWithoutStatusInput = {
    where: transactionWhereUniqueInput
    create: XOR<transactionCreateWithoutStatusInput, transactionUncheckedCreateWithoutStatusInput>
  }

  export type transactionCreateManyStatusInputEnvelope = {
    data: transactionCreateManyStatusInput | transactionCreateManyStatusInput[]
    skipDuplicates?: boolean
  }

  export type transactionUpsertWithWhereUniqueWithoutStatusInput = {
    where: transactionWhereUniqueInput
    update: XOR<transactionUpdateWithoutStatusInput, transactionUncheckedUpdateWithoutStatusInput>
    create: XOR<transactionCreateWithoutStatusInput, transactionUncheckedCreateWithoutStatusInput>
  }

  export type transactionUpdateWithWhereUniqueWithoutStatusInput = {
    where: transactionWhereUniqueInput
    data: XOR<transactionUpdateWithoutStatusInput, transactionUncheckedUpdateWithoutStatusInput>
  }

  export type transactionUpdateManyWithWhereWithoutStatusInput = {
    where: transactionScalarWhereInput
    data: XOR<transactionUpdateManyMutationInput, transactionUncheckedUpdateManyWithoutStatusInput>
  }

  export type transactionScalarWhereInput = {
    AND?: transactionScalarWhereInput | transactionScalarWhereInput[]
    OR?: transactionScalarWhereInput[]
    NOT?: transactionScalarWhereInput | transactionScalarWhereInput[]
    id?: IntFilter<"transaction"> | number
    user_id?: IntFilter<"transaction"> | number
    partner_id?: IntFilter<"transaction"> | number
    address_id?: IntFilter<"transaction"> | number
    image?: StringFilter<"transaction"> | string
    status_id?: IntFilter<"transaction"> | number
    partner_rate?: IntFilter<"transaction"> | number
    partner_review?: StringFilter<"transaction"> | string
    note?: StringFilter<"transaction"> | string
    total?: IntFilter<"transaction"> | number
    date_created?: DateTimeFilter<"transaction"> | Date | string
  }

  export type addressCreateWithoutTransactionInput = {
    label: string
    address_name: string
    detail: string
    owner_name: string
    owner_telp: string
    latitude: string
    longitude: string
    user: usersCreateNestedOneWithoutAddressInput
  }

  export type addressUncheckedCreateWithoutTransactionInput = {
    id?: number
    label: string
    address_name: string
    detail: string
    owner_name: string
    owner_telp: string
    latitude: string
    longitude: string
    user_id: number
  }

  export type addressCreateOrConnectWithoutTransactionInput = {
    where: addressWhereUniqueInput
    create: XOR<addressCreateWithoutTransactionInput, addressUncheckedCreateWithoutTransactionInput>
  }

  export type statusCreateWithoutTransactionInput = {
    name: string
    label: string
    status: string
  }

  export type statusUncheckedCreateWithoutTransactionInput = {
    id?: number
    name: string
    label: string
    status: string
  }

  export type statusCreateOrConnectWithoutTransactionInput = {
    where: statusWhereUniqueInput
    create: XOR<statusCreateWithoutTransactionInput, statusUncheckedCreateWithoutTransactionInput>
  }

  export type transaction_detailCreateWithoutTransactionInput = {
    price: number
    weight: number
    trash: trashCreateNestedOneWithoutTransaction_detailInput
  }

  export type transaction_detailUncheckedCreateWithoutTransactionInput = {
    id?: number
    trash_id: number
    price: number
    weight: number
  }

  export type transaction_detailCreateOrConnectWithoutTransactionInput = {
    where: transaction_detailWhereUniqueInput
    create: XOR<transaction_detailCreateWithoutTransactionInput, transaction_detailUncheckedCreateWithoutTransactionInput>
  }

  export type transaction_detailCreateManyTransactionInputEnvelope = {
    data: transaction_detailCreateManyTransactionInput | transaction_detailCreateManyTransactionInput[]
    skipDuplicates?: boolean
  }

  export type addressUpsertWithoutTransactionInput = {
    update: XOR<addressUpdateWithoutTransactionInput, addressUncheckedUpdateWithoutTransactionInput>
    create: XOR<addressCreateWithoutTransactionInput, addressUncheckedCreateWithoutTransactionInput>
    where?: addressWhereInput
  }

  export type addressUpdateToOneWithWhereWithoutTransactionInput = {
    where?: addressWhereInput
    data: XOR<addressUpdateWithoutTransactionInput, addressUncheckedUpdateWithoutTransactionInput>
  }

  export type addressUpdateWithoutTransactionInput = {
    label?: StringFieldUpdateOperationsInput | string
    address_name?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    owner_name?: StringFieldUpdateOperationsInput | string
    owner_telp?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    user?: usersUpdateOneRequiredWithoutAddressNestedInput
  }

  export type addressUncheckedUpdateWithoutTransactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    address_name?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    owner_name?: StringFieldUpdateOperationsInput | string
    owner_telp?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type statusUpsertWithoutTransactionInput = {
    update: XOR<statusUpdateWithoutTransactionInput, statusUncheckedUpdateWithoutTransactionInput>
    create: XOR<statusCreateWithoutTransactionInput, statusUncheckedCreateWithoutTransactionInput>
    where?: statusWhereInput
  }

  export type statusUpdateToOneWithWhereWithoutTransactionInput = {
    where?: statusWhereInput
    data: XOR<statusUpdateWithoutTransactionInput, statusUncheckedUpdateWithoutTransactionInput>
  }

  export type statusUpdateWithoutTransactionInput = {
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type statusUncheckedUpdateWithoutTransactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type transaction_detailUpsertWithWhereUniqueWithoutTransactionInput = {
    where: transaction_detailWhereUniqueInput
    update: XOR<transaction_detailUpdateWithoutTransactionInput, transaction_detailUncheckedUpdateWithoutTransactionInput>
    create: XOR<transaction_detailCreateWithoutTransactionInput, transaction_detailUncheckedCreateWithoutTransactionInput>
  }

  export type transaction_detailUpdateWithWhereUniqueWithoutTransactionInput = {
    where: transaction_detailWhereUniqueInput
    data: XOR<transaction_detailUpdateWithoutTransactionInput, transaction_detailUncheckedUpdateWithoutTransactionInput>
  }

  export type transaction_detailUpdateManyWithWhereWithoutTransactionInput = {
    where: transaction_detailScalarWhereInput
    data: XOR<transaction_detailUpdateManyMutationInput, transaction_detailUncheckedUpdateManyWithoutTransactionInput>
  }

  export type trashCreateWithoutTransaction_detailInput = {
    name: string
    minPrice: number
    maxPrice: number
    category: trashCategoryCreateNestedOneWithoutSubcategoryInput
  }

  export type trashUncheckedCreateWithoutTransaction_detailInput = {
    id?: number
    name: string
    minPrice: number
    maxPrice: number
    category_id: number
  }

  export type trashCreateOrConnectWithoutTransaction_detailInput = {
    where: trashWhereUniqueInput
    create: XOR<trashCreateWithoutTransaction_detailInput, trashUncheckedCreateWithoutTransaction_detailInput>
  }

  export type transactionCreateWithoutTransaction_detailInput = {
    user_id: number
    partner_id: number
    image: string
    partner_rate: number
    partner_review: string
    note: string
    total: number
    date_created?: Date | string
    address: addressCreateNestedOneWithoutTransactionInput
    status: statusCreateNestedOneWithoutTransactionInput
  }

  export type transactionUncheckedCreateWithoutTransaction_detailInput = {
    id?: number
    user_id: number
    partner_id: number
    address_id: number
    image: string
    status_id: number
    partner_rate: number
    partner_review: string
    note: string
    total: number
    date_created?: Date | string
  }

  export type transactionCreateOrConnectWithoutTransaction_detailInput = {
    where: transactionWhereUniqueInput
    create: XOR<transactionCreateWithoutTransaction_detailInput, transactionUncheckedCreateWithoutTransaction_detailInput>
  }

  export type trashUpsertWithoutTransaction_detailInput = {
    update: XOR<trashUpdateWithoutTransaction_detailInput, trashUncheckedUpdateWithoutTransaction_detailInput>
    create: XOR<trashCreateWithoutTransaction_detailInput, trashUncheckedCreateWithoutTransaction_detailInput>
    where?: trashWhereInput
  }

  export type trashUpdateToOneWithWhereWithoutTransaction_detailInput = {
    where?: trashWhereInput
    data: XOR<trashUpdateWithoutTransaction_detailInput, trashUncheckedUpdateWithoutTransaction_detailInput>
  }

  export type trashUpdateWithoutTransaction_detailInput = {
    name?: StringFieldUpdateOperationsInput | string
    minPrice?: IntFieldUpdateOperationsInput | number
    maxPrice?: IntFieldUpdateOperationsInput | number
    category?: trashCategoryUpdateOneRequiredWithoutSubcategoryNestedInput
  }

  export type trashUncheckedUpdateWithoutTransaction_detailInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    minPrice?: IntFieldUpdateOperationsInput | number
    maxPrice?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
  }

  export type transactionUpsertWithoutTransaction_detailInput = {
    update: XOR<transactionUpdateWithoutTransaction_detailInput, transactionUncheckedUpdateWithoutTransaction_detailInput>
    create: XOR<transactionCreateWithoutTransaction_detailInput, transactionUncheckedCreateWithoutTransaction_detailInput>
    where?: transactionWhereInput
  }

  export type transactionUpdateToOneWithWhereWithoutTransaction_detailInput = {
    where?: transactionWhereInput
    data: XOR<transactionUpdateWithoutTransaction_detailInput, transactionUncheckedUpdateWithoutTransaction_detailInput>
  }

  export type transactionUpdateWithoutTransaction_detailInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    partner_id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    partner_rate?: IntFieldUpdateOperationsInput | number
    partner_review?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: addressUpdateOneRequiredWithoutTransactionNestedInput
    status?: statusUpdateOneRequiredWithoutTransactionNestedInput
  }

  export type transactionUncheckedUpdateWithoutTransaction_detailInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    partner_id?: IntFieldUpdateOperationsInput | number
    address_id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    status_id?: IntFieldUpdateOperationsInput | number
    partner_rate?: IntFieldUpdateOperationsInput | number
    partner_review?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type addressCreateManyUserInput = {
    id?: number
    label: string
    address_name: string
    detail: string
    owner_name: string
    owner_telp: string
    latitude: string
    longitude: string
  }

  export type addressUpdateWithoutUserInput = {
    label?: StringFieldUpdateOperationsInput | string
    address_name?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    owner_name?: StringFieldUpdateOperationsInput | string
    owner_telp?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    transaction?: transactionUpdateOneWithoutAddressNestedInput
  }

  export type addressUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    address_name?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    owner_name?: StringFieldUpdateOperationsInput | string
    owner_telp?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
    transaction?: transactionUncheckedUpdateOneWithoutAddressNestedInput
  }

  export type addressUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    address_name?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    owner_name?: StringFieldUpdateOperationsInput | string
    owner_telp?: StringFieldUpdateOperationsInput | string
    latitude?: StringFieldUpdateOperationsInput | string
    longitude?: StringFieldUpdateOperationsInput | string
  }

  export type trashCreateManyCategoryInput = {
    id?: number
    name: string
    minPrice: number
    maxPrice: number
  }

  export type trashUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    minPrice?: IntFieldUpdateOperationsInput | number
    maxPrice?: IntFieldUpdateOperationsInput | number
    transaction_detail?: transaction_detailUpdateManyWithoutTrashNestedInput
  }

  export type trashUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    minPrice?: IntFieldUpdateOperationsInput | number
    maxPrice?: IntFieldUpdateOperationsInput | number
    transaction_detail?: transaction_detailUncheckedUpdateManyWithoutTrashNestedInput
  }

  export type trashUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    minPrice?: IntFieldUpdateOperationsInput | number
    maxPrice?: IntFieldUpdateOperationsInput | number
  }

  export type transaction_detailCreateManyTrashInput = {
    id?: number
    transaction_id: number
    price: number
    weight: number
  }

  export type transaction_detailUpdateWithoutTrashInput = {
    price?: IntFieldUpdateOperationsInput | number
    weight?: IntFieldUpdateOperationsInput | number
    transaction?: transactionUpdateOneRequiredWithoutTransaction_detailNestedInput
  }

  export type transaction_detailUncheckedUpdateWithoutTrashInput = {
    id?: IntFieldUpdateOperationsInput | number
    transaction_id?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    weight?: IntFieldUpdateOperationsInput | number
  }

  export type transaction_detailUncheckedUpdateManyWithoutTrashInput = {
    id?: IntFieldUpdateOperationsInput | number
    transaction_id?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    weight?: IntFieldUpdateOperationsInput | number
  }

  export type transactionCreateManyStatusInput = {
    id?: number
    user_id: number
    partner_id: number
    address_id: number
    image: string
    partner_rate: number
    partner_review: string
    note: string
    total: number
    date_created?: Date | string
  }

  export type transactionUpdateWithoutStatusInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    partner_id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    partner_rate?: IntFieldUpdateOperationsInput | number
    partner_review?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: addressUpdateOneRequiredWithoutTransactionNestedInput
    transaction_detail?: transaction_detailUpdateManyWithoutTransactionNestedInput
  }

  export type transactionUncheckedUpdateWithoutStatusInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    partner_id?: IntFieldUpdateOperationsInput | number
    address_id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    partner_rate?: IntFieldUpdateOperationsInput | number
    partner_review?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction_detail?: transaction_detailUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type transactionUncheckedUpdateManyWithoutStatusInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    partner_id?: IntFieldUpdateOperationsInput | number
    address_id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    partner_rate?: IntFieldUpdateOperationsInput | number
    partner_review?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    date_created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transaction_detailCreateManyTransactionInput = {
    id?: number
    trash_id: number
    price: number
    weight: number
  }

  export type transaction_detailUpdateWithoutTransactionInput = {
    price?: IntFieldUpdateOperationsInput | number
    weight?: IntFieldUpdateOperationsInput | number
    trash?: trashUpdateOneRequiredWithoutTransaction_detailNestedInput
  }

  export type transaction_detailUncheckedUpdateWithoutTransactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    trash_id?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    weight?: IntFieldUpdateOperationsInput | number
  }

  export type transaction_detailUncheckedUpdateManyWithoutTransactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    trash_id?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    weight?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UsersCountOutputTypeDefaultArgs instead
     */
    export type UsersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TrashCategoryCountOutputTypeDefaultArgs instead
     */
    export type TrashCategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TrashCategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TrashCountOutputTypeDefaultArgs instead
     */
    export type TrashCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TrashCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StatusCountOutputTypeDefaultArgs instead
     */
    export type StatusCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StatusCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TransactionCountOutputTypeDefaultArgs instead
     */
    export type TransactionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TransactionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use usersDefaultArgs instead
     */
    export type usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = usersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use addressDefaultArgs instead
     */
    export type addressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = addressDefaultArgs<ExtArgs>
    /**
     * @deprecated Use trashCategoryDefaultArgs instead
     */
    export type trashCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = trashCategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use trashDefaultArgs instead
     */
    export type trashArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = trashDefaultArgs<ExtArgs>
    /**
     * @deprecated Use statusDefaultArgs instead
     */
    export type statusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = statusDefaultArgs<ExtArgs>
    /**
     * @deprecated Use transactionDefaultArgs instead
     */
    export type transactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = transactionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use transaction_detailDefaultArgs instead
     */
    export type transaction_detailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = transaction_detailDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}