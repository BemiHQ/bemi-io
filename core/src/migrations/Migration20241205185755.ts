import { Migration } from '@mikro-orm/migrations'

export class Migration20241205185755 extends Migration {
  async up(): Promise<void> {
    // add a column of hash which is nullable
    this.addSql('alter table "changes" add column "hash" varchar(255) null;')
  }

  async down(): Promise<void> {
    this.addSql('alter table "changes" drop column "hash";')
  }
}
