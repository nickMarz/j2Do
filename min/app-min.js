$(document).ready(function(){function e(e,t,a,o){this.todo=e,this.completed=t,this.createdAt=a,this.dueDate=o}function t(){$(".done-btn").click(function(e){e.preventDefault(),console.log("Done Button Clicked "),$(this).parent().toggleClass("done-item")}),$(".del-btn").click(function(e){e.preventDefault(),console.log("Delete Button Clicked "),$(this).parent().remove()})}function a(){var e=JSON.parse(localStorage.getItem("dashMe_todos"));console.log(e),$.each(function(){$(this)})}function o(){for(var e=$(".todo-item"),t=0;t<e.length;t++)console.log($(e).eq(t).text()+" "+$(e).eq(t).attr("data-due")+" "+$(e).eq(t).attr("data-done"))}function n(){a(),o(),$("#datepicker").datepicker({defaultDate:7,nextText:"Later"}),console.log(window.localStorage.dashMe_todos)}function d(){var e=new Date,t=e.getDate(),a=e.getMonth()+1,o=e.getUTCFullYear();return""+a+"/"+t+"/"+o}var l='<li class="todo-item" data-due="%dueDate%" data-done="%done%">%data% | <a href="#" class="done-btn">Done</a> | <a href="#" class="del-btn">Delete</a></li>',c="#todo-list";todo_item=new e("string",!1,Date(),$("#datepicker").datepicker("getDate")),$("#add-btn").click(function(e){e.preventDefault();var a=$("#todoEnter").val(),o=$("#datepicker").val(),n="false";if(""===a)return!1;var d=l.replace("%data%",a).replace("%dueDate%",o).replace("%done%",n);$(c).append(d),$("#todoEnter").val(""),t()}),n(),d()});