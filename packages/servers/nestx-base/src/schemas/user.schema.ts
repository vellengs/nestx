import * as bcrypt from "bcrypt";
import {
  Typegoose,
  prop,
  Ref,
  arrayProp,
  pre,
  instanceMethod
} from "typegoose";
import { Role } from "./role.schema";
import { Group } from "./group.schema";
import { Profile } from "./profile.schema";
import { SchemaDefaultOptions } from "nestx-common";

function preSave(next: Function) {
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }
  bcrypt.genSalt(10, (err: any, salt: any) => {
    if (err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, (err: Error, hash: string) => {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
}

function preUpdate(next: Function) {
  const updateDoc = this.getUpdate();
  const rawPassword = (updateDoc.$set || updateDoc).password;
  if (rawPassword) {
    const password = bcrypt.hashSync(rawPassword, bcrypt.genSaltSync(10));
    this.findOneAndUpdate({}, { password: password });
  }
  next();
}

export class Location {
  country: string;
  province: string;
  district: string;
  address: string;
}

@pre<User>("save", preSave)
@pre<User>("findOneAndUpdate", preUpdate)
export class User extends Typegoose {
  id: string; // TODO;

  @prop({
    minlength: 5,
    unique: true,
    required: true
  })
  username: string;

  @prop()
  password?: string;

  @prop()
  avatar?: string;

  @prop({ required: true, unique: true })
  email: string;

  @prop()
  name?: string;

  @prop()
  about?: string;

  @prop()
  location?: Location;

  @prop()
  type?: string;

  @prop({ required: true, unique: true })
  mobile: string;

  @arrayProp({ itemsRef: Role, default: [] })
  roles: Ref<Role>[];

  @arrayProp({ itemsRef: Group, default: [] })
  groups: Ref<Group>[];

  @prop({ ref: Profile })
  profile?: Ref<Profile>;

  @prop({ default: false })
  isDisable: boolean;

  @prop({ default: false })
  isAdmin: boolean;

  @prop({ default: true })
  isApproved: boolean;

  @prop()
  expired?: Date;

  @instanceMethod
  public comparePassword(
    candidatePassword: string,
    cb: (err: Error, isMatch: boolean) => void
  ) {
    bcrypt.compare(
      candidatePassword,
      this.password,
      (err: Error, isMatch: boolean) => {
        if (cb) {
          cb(err, isMatch);
        }
      }
    );
  }

  static get Model() {
    return new User().getModelForClass(User, SchemaDefaultOptions);
  }
}
