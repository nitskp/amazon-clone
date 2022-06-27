import { Module } from '@nestjs/common';
import { ItemModule } from './item/item.module';
import { UserModule } from './user/user.module';
import { OrderModule } from './order/order.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ItemModule,
    UserModule,
    OrderModule,
    ConfigModule.forRoot(),
    // didn't understand this part. why we need to pass config here.
    // why can't we use process.env.MONGO_URI
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'),
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
