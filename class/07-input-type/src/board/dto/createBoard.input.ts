import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class CreateBoardInput {
    @Field(() => String)
    writer: string

    @Field(() => String)
    password: string

    @Field(() => String)
    title: string

    @Field(() => String)
    contents: string
}