#!/bin/bash

# Run ng build
ng build

# Check if ng build was successful
if [ $? -eq 0 ]; then
  echo "ng build succeeded, running npx cap sync..."
  
  # Run npx cap sync
  npx cap sync
  
  # Check if npx cap sync was successful
  if [ $? -eq 0 ]; then
    echo "npx cap sync succeeded"
  else
    echo "npx cap sync failed"
    exit 1
  fi
else
  echo "ng build failed"
  exit 1
fi