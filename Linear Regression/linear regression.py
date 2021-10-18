#!/usr/bin/env python
# coding: utf-8

# In[1]:


import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn import linear_model


# In[ ]:


tm=pd.read_csv('canada_per_capita_income.csv')


# In[19]:


get_ipython().run_line_magic('matplotlib', 'inline')
plt.scatter(tm.year,tm.pci)


# In[20]:


reg = linear_model.LinearRegression()
reg.fit(tm[['year']],tm[['pci']])


# In[22]:


reg.predict([[2020]])


# In[27]:


get_ipython().run_line_magic('matplotlib', 'inline')
plt.scatter(tm.year,tm.pci)
plt.plot(tm.year,reg.predict(tm[['year']]))


# In[ ]:




