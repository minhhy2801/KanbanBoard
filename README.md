# KanbanBoard

## Developer branch ES5
install Node  
check node version `node -v`  
install NPM  
check npm version `npm -v`  
install [local-web-server](https://www.npmjs.com/package/local-web-server)  
run **local-web-server**  `ws` or `ws --https`
go to KanbanBoard app on kintone, choose App Setting > Javascript and CSS Customization 
get https links after run local-web-server then Upload JavaScript for PC  
finally, click "Update App"

## Usage

### Setting with Kintone  

1. Custom Form (Required)
Field name: field type: Field Code  
- Project Title: Text: txt_projectTitle  
- Task Title: Text: txt_taskTitle  
- Description: Rich text: rich_text_description  
- Status: Radio Button: rb_status (*default value: Todo-Implement-Testing-Done*)
- Assignee: User selection: user_selection_assignee

2. Custom View (Required):
import this code in custom view HTML CODE

```
    <div class="drop-target" style="display: flex; width: 100%; align-items: stretch; ">
        <div class="div--task--state">
            <div>
                <button class="btn--new--task" id="btnOpenModalNewTask">+</button>
                <h1>Todo <span id="numOfTodo">(0)</span></h1><hr>
            </div>
            <div class="div--task--container"></div>
        </div>
        <div class="div--task--state">
            <div><h1>Implement <span id="numOfImplement">(0)</span></h1><hr></div>
            <div class="div--task--container"></div>
        </div>
        <div class="div--task--state">
            <div><h1>Testing <span id="numOfTesting">(0)</span></h1><hr></div>
            <div class="div--task--container"></div>
        </div>
        <div class="div--task--state">
            <div><h1>Done <span id="numOfDone">(0)</span></h1><hr></div>
            <div class="div--task--container"></div>
        </div>
    </div>
    <!-- Quick Add Modal -->
    <div id="divCreateModal" class="modal--create--task">
        <div class="modal-content--create--task">
            <span id="closeCreateModal" class="close--div--create--task--modal">&times;</span>
            <h1>Add New Task</h1>
            <p>Project Title: </p>
            <input type="text" name="txtProjectTitle" />
            <p>Task Title</p>
            <input type="text" name="txtTaskTitle" /><br>
            <button type="submit" id="btnCreateTask">Submit</button>
        </div>
    </div>
```

3. Add Javascript and CSS Customization   
Choose App Setting > Javascript and CSS Customization > Add File  
Click on "Save" button and "Update App" 
