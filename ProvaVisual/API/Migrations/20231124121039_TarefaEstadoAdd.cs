using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Migrations
{
    public partial class TarefaEstadoAdd : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Estado",
                table: "Tarefas",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.UpdateData(
                table: "Categorias",
                keyColumn: "CategoriaId",
                keyValue: 1,
                column: "CriadoEm",
                value: new DateTime(2023, 11, 25, 9, 10, 39, 825, DateTimeKind.Local).AddTicks(1238));

            migrationBuilder.UpdateData(
                table: "Categorias",
                keyColumn: "CategoriaId",
                keyValue: 2,
                column: "CriadoEm",
                value: new DateTime(2023, 11, 26, 9, 10, 39, 825, DateTimeKind.Local).AddTicks(1242));

            migrationBuilder.UpdateData(
                table: "Categorias",
                keyColumn: "CategoriaId",
                keyValue: 3,
                column: "CriadoEm",
                value: new DateTime(2023, 11, 27, 9, 10, 39, 825, DateTimeKind.Local).AddTicks(1243));

            migrationBuilder.UpdateData(
                table: "Tarefas",
                keyColumn: "TarefaId",
                keyValue: 1,
                columns: new[] { "CriadoEm", "Estado" },
                values: new object[] { new DateTime(2023, 12, 1, 9, 10, 39, 825, DateTimeKind.Local).AddTicks(1298), "Não iniciada" });

            migrationBuilder.UpdateData(
                table: "Tarefas",
                keyColumn: "TarefaId",
                keyValue: 2,
                columns: new[] { "CriadoEm", "Estado" },
                values: new object[] { new DateTime(2023, 11, 27, 9, 10, 39, 825, DateTimeKind.Local).AddTicks(1299), "Não iniciada" });

            migrationBuilder.UpdateData(
                table: "Tarefas",
                keyColumn: "TarefaId",
                keyValue: 3,
                columns: new[] { "CriadoEm", "Estado" },
                values: new object[] { new DateTime(2023, 12, 8, 9, 10, 39, 825, DateTimeKind.Local).AddTicks(1301), "Não iniciada" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Estado",
                table: "Tarefas");

            migrationBuilder.UpdateData(
                table: "Categorias",
                keyColumn: "CategoriaId",
                keyValue: 1,
                column: "CriadoEm",
                value: new DateTime(2023, 11, 25, 9, 5, 50, 1, DateTimeKind.Local).AddTicks(7651));

            migrationBuilder.UpdateData(
                table: "Categorias",
                keyColumn: "CategoriaId",
                keyValue: 2,
                column: "CriadoEm",
                value: new DateTime(2023, 11, 26, 9, 5, 50, 1, DateTimeKind.Local).AddTicks(7655));

            migrationBuilder.UpdateData(
                table: "Categorias",
                keyColumn: "CategoriaId",
                keyValue: 3,
                column: "CriadoEm",
                value: new DateTime(2023, 11, 27, 9, 5, 50, 1, DateTimeKind.Local).AddTicks(7656));

            migrationBuilder.UpdateData(
                table: "Tarefas",
                keyColumn: "TarefaId",
                keyValue: 1,
                column: "CriadoEm",
                value: new DateTime(2023, 12, 1, 9, 5, 50, 1, DateTimeKind.Local).AddTicks(7725));

            migrationBuilder.UpdateData(
                table: "Tarefas",
                keyColumn: "TarefaId",
                keyValue: 2,
                column: "CriadoEm",
                value: new DateTime(2023, 11, 27, 9, 5, 50, 1, DateTimeKind.Local).AddTicks(7727));

            migrationBuilder.UpdateData(
                table: "Tarefas",
                keyColumn: "TarefaId",
                keyValue: 3,
                column: "CriadoEm",
                value: new DateTime(2023, 12, 8, 9, 5, 50, 1, DateTimeKind.Local).AddTicks(7728));
        }
    }
}
