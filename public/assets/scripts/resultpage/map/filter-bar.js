document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    // trigger check jQuery is ready
    if($ || jQuery){
      console.log('jQuery is ready!');
    }
    /* trigger dropdown-menu click do not close */
    const menus = document.querySelectorAll('.top-additional .dropdown-menu');
    const handleClickMenu = (e) => {
      e.stopPropagation();
    }
    menus.forEach(menu => (
      menu.addEventListener('click', (e) => handleClickMenu(e))
    ));

    /* HANDLE SWITCH TYPE FILTER */
    const filterTypeContainer = $('#filterType');
    const switchFilter = $('#filter__switch-type');
    const switchFilterText = $('#filter-type');
    const filterProject = $("#filters-project");
    const filterProperties = $("#filters-properties");

    const handleSwitchFilter = (event) => {
      clearFilterInput();
      let target = $(event.currentTarget);
      if(target.prop('checked')) {
        switchFilterText.html(filterTypeContainer.find('.toggle-on')[0].innerHTML);
        filterProject.addClass('show');
        filterProperties.removeClass('show');
      } else {
        switchFilterText.html(filterTypeContainer.find('.toggle-off')[0].innerHTML)
        filterProperties.addClass('show');
        filterProject.removeClass('show');
      }
    };
    // init boostrap toggle
    $(switchFilter).bootstrapToggle('on');
    // add event switch filter
    switchFilter.on('change', (event) => handleSwitchFilter(event));

    // HANDLE CHECKBOX ONCHANGE EVENTS
    const checkboxChangeAction = (event, input) => {
      const changeProperties = {
        event: event,
        checkedList: getCheckboxChecked(input),
        currentInput: input,
        inputContainer: getInputContainer(input, '.top-additional--filter')
      };
      onCheckboxChange(changeProperties);
    };
    // get input container
    const getInputContainer = (input, selector) => $(input).parents(selector);

    // get checkbox is checked
    const getCheckboxChecked = (input) => $(input).parents('.dropdown-menu').find('input:checked');

    // handleChangeCheckbox
    const onCheckboxChange = (changeProperties) => {
      // handle filter options total
      let optionType = '';
      let optionText = [];
      if (changeProperties.inputContainer.hasClass('filter-options-total')) {
        optionType = 'option-total';
      }
      if (optionType == 'option-total') {
        let optionTotalText = $(changeProperties.inputContainer).data('title');
        // get Option Total Text
        let options = $(changeProperties.checkedList).siblings('label');

        for (let [index, item] of Object.entries(options)) {
          if (item.innerHTML) optionText.push(item.innerHTML);
        }
        if (optionText.length > 0 ) {
          optionTotalText += ': ' + optionText.join(', ');
        }
        $(changeProperties.inputContainer).find('.filter--text').html(optionTotalText);
      }
      // Filter options radio
      if(changeProperties.inputContainer.hasClass('filter-options-radio')) {
        let optionText = $(changeProperties.inputContainer).data('title');
        $(changeProperties.inputContainer).find('.form-check-input').prop('checked', false);
        $(changeProperties.currentInput).prop('checked', true);
        $(changeProperties.inputContainer).find('.filter--text').html(optionText + ': ' + $(changeProperties.currentInput).siblings('.form-check-label').html());
      }
    }

    /* Handle Click checkbox */
    const inputs = document.querySelectorAll('.dropdown-menu .dropdown-item .form-check-input');
    // add events
    inputs.forEach(input => (
      input.addEventListener('click', (event) => checkboxChangeAction(event, input))
    ));

    //#region MIN-MAX PRICE 
    // MIN-MAX PRICE
    const $rangeMin = $('.min-options'),
      $rangeMax = $('.max-options');
    let priceText = 'Mức giá',
        priceUnit = ' triệu';
    $('.filter-price .dropdown-toggle').on('click', function () {
      let optionMin = $(this).parents('.filter-price').find('.min-options'),
          optionMax = $(this).parents('.filter-price').find('.max-options'),
          inputPriceMin = $(this).parents('.filter-price').find('.input-price-min'),
          inputPriceMax = $(this).parents('.filter-price').find('.input-price-max');
      // init
      optionMin.find('.dropdown-item').show();
      if (inputPriceMax.val() != '' && inputPriceMax.val() != -1) {
        optionMin.find('.dropdown-item').toArray().forEach(minItem => {
          if (Number($(minItem).attr('tabindex')) >= inputPriceMax.val()) {
            $(minItem).hide();
          }
        })
      }
      if (inputPriceMax.val() == '') {
        optionMin.show();
        optionMax.hide();
        inputPriceMin.focus();
      } else {
        optionMax.show();
        optionMin.hide();
        inputPriceMax.focus();
      }
    });

    $('.input-price-min').focus(() => {
      $rangeMin.show();
      $rangeMax.hide();
    });

    $('.input-price-max').focus(() => {
      $rangeMax.show();
      $rangeMin.hide();
    });
    
    $('.min-options .dropdown-item').on('click', function (e) {
      let target = e.currentTarget,
          val = Number($(target).attr('tabindex')),
          pricelistMin = $(target).parents('.pricelist-range'),
          optionMin = $(pricelistMin).find('.min-options'),
          pricelistMax = $(target).parents('.pricelist-range').siblings(),
          optionMax = $(pricelistMax).find('.max-options .dropdown-item'),
          inpMin = pricelistMin.find('.input-price-min'),
          inpMax = pricelistMax.find('.input-price-max'),
          filterText = $(target).parents('.filter-price').find('.filter--text');
      inpMin.val(val);
      inpMax.focus();
      if (val && val != -1) {
        if (inpMin.val() != '') {
          priceText = inpMin.val() + priceUnit + ' - ' + inpMax.val() + priceUnit;
          filterText.html(priceText);
        }
      } else {
        priceText = inpMin.val() + priceUnit + ' + ';
        filterText.html(priceText);
      }
    });

    $('.max-options .dropdown-item').on('click', function (e) {
      let target = e.currentTarget,
          val = Number($(target).attr('tabindex')),
          pricelistMax = $(target).parents('.pricelist-range'),
          optionMax = $(pricelistMin).find('.max-options'),
          pricelistMin = $(target).parents('.pricelist-range').siblings(),
          optionMin = $(pricelistMin).find('.min-options .dropdown-item'),
          inpMin = pricelistMin.find('.input-price-min'),
          inpMax = pricelistMax.find('.input-price-max'),
          filterText = $(target).parents('.filter-price').find('.filter--text');
      if(val && val != -1) {
        inpMax.val(val);
        if (inpMin.val() != '' && inpMin.val() != 0) {
          priceText = inpMin.val() + priceUnit + ' - ' + inpMax.val() + priceUnit;
          filterText.html(priceText);
        } else {
          priceText = 'Trên ' + inpMax.val() + priceUnit;
          filterText.html(priceText);
        }
      } else {
        inpMax.val('');
        priceText = inpMin.val() + priceUnit + ' + ';
        filterText.html(priceText);
      }
      $('.filter-price .dropdown-menu').removeClass('show');
    });

    // Land square
    $('input[type="range"').on('change', function (e) {
      let $target = $(e.currentTarget),
        label = $target.val();
      $target.siblings('label').html(label + '+ m&sup2');
    });
    // Favorite
    $('.sr-item__favorite, .sr-item__non-favorite').on('click', function (e) {
      let $target = $(e.currentTarget);
      $target.parents('.search-result__item').toggleClass('active')
    });
    //#endregion 

    // handle clear input
    const clearFilterInput = () => {
      let filterInput = $('.top-additional .dropdown-menu input[type="text"]');
      filterInput.toArray().forEach(input => {
        input.value = '';
        if (typeof $(input).tagsinput == 'function') {
          // $(input).tagsinput('removeAll');
          $('.bootstrap-tagsinput .tag').remove();
        }
      });
      let filterCheckbox = $('.top-additional .dropdown-menu input[type="checkbox"]');
      filterCheckbox.toArray().forEach(checkbox => {
        checkbox.checked = false;
      });
      let filterSelect = $('.top-additional .dropdown-menu select');
      filterSelect.toArray().forEach(select => {
        select.value = '';
      });
      let filterRange = $('.top-additional .dropdown-menu input[type="range"]');
      filterRange.toArray().forEach(range => {
        range.value = '0';
      });
      let filterNumber = $('.top-additional .dropdown-menu input[type="number"]');
      filterNumber.toArray().forEach(number => {
        number.value = '0';
      });
    }

    clearFilterInput();

    $('#filterRoom .dropdown-menu .dropdown-item').on('click', function (e) {
      let $target = $(e.currentTarget),
        inp = $target.siblings(".form-check-input");
      if (!$(inp).is(":checked")) {
        $target.siblings().find(".form-check-input").prop('checked', false);
      }
    });
    // FILTER TRADING
    const handleTradingFilter = (e) => {
      let $target = $(e.currentTarget),
        $tradingText = $('#filterTradingList'),
        inp = $target.find(".dropdown-item--checkbox .form-check-input"),
        tradingType = inp.data('trading');
      $(inp).is(':checked') ? $tradingText.addClass(`has-${tradingType}`) : $tradingText.removeClass(`has-${tradingType}`);
    }
    $('#filterTrading .dropdown-menu .dropdown-item').on('click', function (e) {
      handleTradingFilter(e);
    });
    // Handle checkbox radio area
    const handleRadioArea = (e) => {
      let target = $(e.currentTarget);
      let inputs = target.parents('.checkbox-radio-area').find('input[type="checkbox"]');
      inputs.toArray().forEach(input => input.checked = false); 
      target.prop('checked', true); 
    }
    $('.checkbox-radio-area input[type="checkbox"]').on('click', (e) => handleRadioArea(e));
    // HANDLE INPUT FILTER COUNT
    $('.filter-options-count .filter-input-count').on('change', (e) => inputChangeAction(e));
    const inputChangeAction = (e) => {
      let target = $(e.currentTarget),
          filterOptionContainer = target.parents('.filter-options-count'),
          filterOptionText = filterOptionContainer.data('title'),
          filterOptionCount = filterOptionContainer.data('option-count'),
          filterTextElement = filterOptionContainer.find('.filter--text'),
          countTotal = 0;
      
      if(target.val() && target.val() != '') {
        let inputCountElements = filterOptionContainer.find('.filter-input-count');
        inputCountElements.toArray().forEach(input => {
          if(input.value && target.value != '') {
            if (($(input).hasClass('form-control-range') || $(input).hasClass('form-check-input') || $(input).prop('type') == 'number') && input.value == '0') return;
            if (($(input).prop('type') == 'checkbox') && input.checked == false) return;
            countTotal++;
          }
        })
      }
      // set
      filterOptionContainer.data('option-count', countTotal);
      filterTextElement.html(filterOptionText + (countTotal > 0 ? (': ' + countTotal) : ''));
    }
    // HANDLE FILTER INVESTMENT
    $('#filterInvesment input').on('change', (e) => {
      let input = $(e.currentTarget),
          filterText = $('#filterInvesment').data('title');
      if (input.val() != '') {
        filterText += ': ' + input.val();
      }
      $('#filterInvesment .filter--text').html(filterText);
      $('#filterInvesment .dropdown-menu').removeClass('show');
    })
  }
};