const request = require('supertest');
const app = require('../index');


describe("testing/task", () => {
    const task = {
      title: "Esto es una tarea guay",
     completed: "Esta completado",
    };
    test('create a task', async () =>{
        const res = await request(app)
        .post('/tasks')
        .send(task)
        .expect(201)
        expect(res.body._id).toBeDefined();
        expect(res.body.task.createdAt).toBeDefined();
        expect(res.body.task.updatedAt).toBeDefined();
    });
});