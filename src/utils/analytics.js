// src/utils/analytics.js
import { logEvent } from 'firebase/analytics';
import { analytics } from '../firebase';

// Track custom events
export const trackEvent = (eventName, parameters = {}) => {
  if (analytics) {
    logEvent(analytics, eventName, {
      ...parameters,
      timestamp: new Date().toISOString()
    });
  }
};

// Track page views
export const trackPageView = (pagePath, pageTitle) => {
  trackEvent('page_view', {
    page_path: pagePath,
    page_title: pageTitle
  });
};

// Track button clicks
export const trackButtonClick = (buttonName, buttonLocation, additionalData = {}) => {
  trackEvent('button_click', {
    button_name: buttonName,
    button_location: buttonLocation,
    ...additionalData
  });
};

// Track form interactions
export const trackFormStart = (formName) => {
  trackEvent('form_start', {
    form_name: formName
  });
};

export const trackFormSubmit = (formName, success = true, errorMessage = null) => {
  trackEvent('form_submit', {
    form_name: formName,
    success: success,
    error_message: errorMessage
  });
};

// Track product interactions
export const trackProductView = (productName, productCategory) => {
  trackEvent('product_view', {
    product_name: productName,
    product_category: productCategory
  });
};

// Track gallery interactions
export const trackGalleryFilter = (filterName) => {
  trackEvent('gallery_filter', {
    filter_name: filterName
  });
};

export const trackGalleryImageView = (imageCategory, imageIndex) => {
  trackEvent('gallery_image_view', {
    image_category: imageCategory,
    image_index: imageIndex
  });
};

// Track process interactions
export const trackProcessStepExpand = (stepNumber, stepTitle) => {
  trackEvent('process_step_expand', {
    step_number: stepNumber,
    step_title: stepTitle
  });
};