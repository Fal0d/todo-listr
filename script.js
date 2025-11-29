 // All listed items
          const items = document.querySelectorAll('.todo-list li');
      
          items.forEach(item => {
            item.addEventListener('click', () => {
              // On click toggle
              item.classList.toggle('completed');
            });
          });