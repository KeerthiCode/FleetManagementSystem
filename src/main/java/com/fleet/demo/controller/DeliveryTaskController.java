package com.fleet.demo.controller;

import com.fleet.demo.entity.DeliveryTask;
import com.fleet.demo.service.DeliveryTaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tasks")
public class DeliveryTaskController {

    @Autowired
    private DeliveryTaskService deliveryTaskService;

    @GetMapping
    public List<DeliveryTask> getAllTasks() {
        return deliveryTaskService.getAllTasks();
    }

    @PostMapping
    public DeliveryTask saveTask(@RequestBody DeliveryTask task) {
        return deliveryTaskService.saveTask(task);
    }
}