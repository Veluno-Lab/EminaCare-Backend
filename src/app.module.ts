import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CareServicesModule } from './care_services/care_services.module';
import { UsersModule } from './users/users.module';
import { MommyProfilesModule } from './mommy_profiles/mommy_profiles.module';
import { CaregiverProfilesModule } from './caregiver_profiles/caregiver_profiles.module';
import { BookingsModule } from './bookings/bookings.module';
import { BookingReviewsModule } from './booking_reviews/booking_reviews.module';
import { ChatSessionsModule } from './chat_sessions/chat_sessions.module';
import { ChatMessagesModule } from './chat_messages/chat_messages.module';
import { CaregiverServicesModule } from './caregiver_services/caregiver_services.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  providers: [AppService],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST || 'localhost',
      port: parseInt(process.env.DATABASE_PORT) || 5432,
      username: process.env.DATABASE_USERNAME || 'eminacare_local',
      password: process.env.DATABASE_PASSWORD || 'nnHieu@66',
      database: process.env.DATABASE_NAME || 'eminacare_db',
      entities: ['dist/**/*.entities/**/*.js', 'src/**/*.entities/**/*.ts'],
      synchronize: true,
      logging: true,
      logger: 'advanced-console',
      autoLoadEntities: true,
    }),
    CareServicesModule,
    UsersModule,
    MommyProfilesModule,
    CaregiverProfilesModule,
    BookingsModule,
    BookingReviewsModule,
    ChatSessionsModule,
    ChatMessagesModule,
    CaregiverServicesModule,
    AuthModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
