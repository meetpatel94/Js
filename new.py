import matplotlib.pyplot as plt
import numpy as np

enrollment_number = '230133103006'

#==> Line Graph
x = np.arange(0, 10, 1)
y = np.random.randint(1, 10, 10)
plt.figure()
plt.plot(x, y)
plt.title(f'{enrollment_number}_Line Graph')
plt.xlabel('X-axis')
plt.ylabel('Y-axis')
plt.show()

#==> Scatter Graph
x = np.random.rand(10)
y = np.random.rand(10)
plt.figure()
plt.scatter(x, y)
plt.title(f'{enrollment_number}_Scatter Graph')
plt.xlabel('X-axis')
plt.ylabel('Y-axis')
plt.show()

#==> Pie Chart
labels = ['A', 'B', 'C', 'D']
sizes = [15, 30, 45, 10]
plt.figure()
plt.pie(sizes, labels=labels, autopct='%1.1f%%', startangle=90)
plt.title(f'{enrollment_number}_Pie Chart')
plt.show()

#==> Bar Chart
categories = ['Category 1', 'Category 2', 'Category 3']
values = [10, 30, 20]
plt.figure()
plt.bar(categories, values)
plt.title(f'{enrollment_number}_Bar Chart')
plt.ylabel('Values')
plt.show()

#==> Subplot
fig, axs = plt.subplots(2, 2)

#==> Line Graph in subplot
axs[0, 0].plot(x, y)
axs[0, 0].set_title(f'{enrollment_number}_Line Graph')

#==> Scatter Graph in subplot
axs[0, 1].scatter(x, y)
axs[0, 1].set_title(f'{enrollment_number}_Scatter Graph')

#==> Pie Chart in subplot
axs[1, 0].pie(sizes, labels=labels, autopct='%1.1f%%', startangle=90)
axs[1, 0].set_title(f'{enrollment_number}_Pie Chart')

#==> Bar Chart in subplot
axs[1, 1].bar(categories, values)
axs[1, 1].set_title(f'{enrollment_number}_Bar Chart')

plt.tight_layout()
plt.show()
