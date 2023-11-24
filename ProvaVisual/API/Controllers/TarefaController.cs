using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API.Data;
using API.Models;

namespace API.Controllers;

[Route("api/tarefa")]
[ApiController]
public class TarefaController : ControllerBase
{
    private readonly AppDataContext _context;

    public TarefaController(AppDataContext context) =>
        _context = context;

    // GET: api/tarefa/listar
    [HttpGet]
    [Route("listar")]
    public IActionResult Listar()
    {
        try
        {
            List<Tarefa> tarefas = _context.Tarefas.Include(x => x.Categoria).ToList();
            return Ok(tarefas);
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }

    // POST: api/tarefa/cadastrar
    [HttpPost]
    [Route("cadastrar")]
    public IActionResult Cadastrar([FromBody] Tarefa tarefa)
    {
        try
        {
            Categoria? categoria = _context.Categorias.Find(tarefa.CategoriaId);
            if (categoria == null)
            {
                return NotFound();
            }
            tarefa.Categoria = categoria;
            _context.Tarefas.Add(tarefa);
            _context.SaveChanges();
            return Created("", tarefa);
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }

    [HttpPatch("alterar/{id}")]
    public IActionResult Alterar([FromRoute] int id){
        try
        {
            Tarefa? tarefa = _context.Tarefas.Find(id);
            if(tarefa == null){
                return NotFound();
            }
            if(tarefa.Estado.Equals("Não iniciada")){
                tarefa.Estado = "Em andamento";
            } else if(tarefa.Estado.Equals("Em andamento")) {
                tarefa.Estado = "Concluída";
            }
            _context.Tarefas.Update(tarefa);
            _context.SaveChanges();
            return Ok(tarefa);
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }
}
