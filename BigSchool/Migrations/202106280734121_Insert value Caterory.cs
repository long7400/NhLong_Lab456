namespace BigSchool.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InsertvalueCaterory : DbMigration
    {
        public override void Up()
        {
            Sql("INSERT INTO CATEGORIES (ID, NAME) VALUES (1,'MATH')");
            Sql("INSERT INTO CATEGORIES (ID, NAME) VALUES (2,'IT')");
            Sql("INSERT INTO CATEGORIES (ID, NAME) VALUES (3,'ENGLISH')");
        }
        
        public override void Down()
        {
        }
    }
}
