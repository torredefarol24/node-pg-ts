"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class createDBStructure1541597835041 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "profile" ("id" SERIAL NOT NULL, "gender" character varying NOT NULL, "username" character varying NOT NULL, "bio" character varying NOT NULL, CONSTRAINT "UQ_d80b94dc62f7467403009d88062" UNIQUE ("username"), CONSTRAINT "PK_3dd8bfc97e4a77c70971591bdcb" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "address" character varying NOT NULL, "email" character varying NOT NULL, "profileId" integer, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "REL_9466682df91534dd95e4dbaa61" UNIQUE ("profileId"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "talent" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_bb69d9cea50aa835af369a4c2b8" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "pet" ("id" SERIAL NOT NULL, "nickname" character varying NOT NULL, "color" character varying NOT NULL, "age" integer NOT NULL, "ownerId" integer, CONSTRAINT "PK_b1ac2e88e89b9480e0c5b53fa60" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "pet_talents_talent" ("petId" integer NOT NULL, "talentId" integer NOT NULL, CONSTRAINT "PK_3e2e22e31e51641359d6b61798d" PRIMARY KEY ("petId", "talentId"))`);
            yield queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_9466682df91534dd95e4dbaa616" FOREIGN KEY ("profileId") REFERENCES "profile"("id")`);
            yield queryRunner.query(`ALTER TABLE "pet" ADD CONSTRAINT "FK_20acc45f799c122ec3735a3b8b1" FOREIGN KEY ("ownerId") REFERENCES "user"("id")`);
            yield queryRunner.query(`ALTER TABLE "pet_talents_talent" ADD CONSTRAINT "FK_e77cb89ccdc549f8f2ab2c19aa2" FOREIGN KEY ("petId") REFERENCES "pet"("id") ON DELETE CASCADE`);
            yield queryRunner.query(`ALTER TABLE "pet_talents_talent" ADD CONSTRAINT "FK_62134d5a1fc5b09d9d98bafa15a" FOREIGN KEY ("talentId") REFERENCES "talent"("id") ON DELETE CASCADE`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "pet_talents_talent" DROP CONSTRAINT "FK_62134d5a1fc5b09d9d98bafa15a"`);
            yield queryRunner.query(`ALTER TABLE "pet_talents_talent" DROP CONSTRAINT "FK_e77cb89ccdc549f8f2ab2c19aa2"`);
            yield queryRunner.query(`ALTER TABLE "pet" DROP CONSTRAINT "FK_20acc45f799c122ec3735a3b8b1"`);
            yield queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_9466682df91534dd95e4dbaa616"`);
            yield queryRunner.query(`DROP TABLE "pet_talents_talent"`);
            yield queryRunner.query(`DROP TABLE "pet"`);
            yield queryRunner.query(`DROP TABLE "talent"`);
            yield queryRunner.query(`DROP TABLE "user"`);
            yield queryRunner.query(`DROP TABLE "profile"`);
        });
    }
}
exports.createDBStructure1541597835041 = createDBStructure1541597835041;
//# sourceMappingURL=1541597835041-createDBStructure.js.map