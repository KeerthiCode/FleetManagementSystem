package com.fleet.demo.service;

import com.fleet.demo.entity.DeliveryTask;
import com.fleet.demo.repository.DeliveryTaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DeliveryTaskService {

    @Autowired
    private DeliveryTaskRepository deliveryTaskRepository;

    public List<DeliveryTask> getAllTasks() {
        return deliveryTaskRepository.findAll();
    }

    public DeliveryTask saveTask(DeliveryTask task) {
        return deliveryTaskRepository.save(task);
    }

    public void deleteTask(Long id) {
        deliveryTaskRepository.deleteById(id);
    }
}