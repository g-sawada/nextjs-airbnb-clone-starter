import { ApiProperty } from "@nestjs/swagger";
import { InputType, Field, InputType } from "@nestjs/graphql";
import { IsString } from "class-validator";

@InputType()
export class Credentials {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String, { nullable: false })
  username!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String, { nullable: false })
  password!: string;
}

// サインアップ用
@InputType()
export class SignupCredentials {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String, { nullable: false })
  username!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String, { nullable: false })
  password!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String, { nullable: false })
  firstName!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String, { nullable: false })
  lastName!: string;
}

// ユーザーが存在する場合の処理
@InputType()
export class CheckUserValues {
  @ApiProperty({ 
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String, { nullable: false })
  email!: string;
}
