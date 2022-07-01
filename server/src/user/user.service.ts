import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Img } from 'src/item/schema/item.schema';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import { User, UserDocument } from './schema/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  findAll(): Promise<User[]> {
    try {
      const users = this.userModel.find({}).exec();
      return users;
    } catch (error) {
      return error;
    }
  }

  findById(_id: string): Promise<User> {
    try {
      const user = this.userModel.findById(_id).exec();
      return user;
    } catch (error) {
      return error;
    }
  }

  create(createUserDto: CreateUserDto, img: Express.Multer.File): Promise<any> {
    try {
      const profilePic: Img = {
        contentType: img.mimetype,
        data: img.buffer,
        fileName: img.originalname,
      };
      const user = this.userModel.create({...createUserDto, profilePic:profilePic});
      return user;
    } catch (error) {
      return error;
    }
  }

  update(_id: string, updateUserDto: UpdateUserDto): Promise<any> {
    try {
      const updatedResult = this.userModel
        .updateOne({ _id: _id }, updateUserDto)
        .exec();
      return updatedResult;
    } catch (error) {
      return error;
    }
  }

  delete(_id: string): Promise<any> {
    try {
      const deletedResult = this.userModel.deleteOne({ _id: _id }).exec();
      return deletedResult;
    } catch (error) {
      return error;
    }
  }
}
