// --- PDF generation and download functionality ---
document.getElementById('fillButton')?.addEventListener('click', async () => {
    try {
        const pdfUrl = 'http://localhost:5500/frontend/pdf/original_f8843.pdf';
        const existingPdfBytes = await fetch(pdfUrl).then(res => res.arrayBuffer());
        const pdfDoc = await PDFLib.PDFDocument.load(existingPdfBytes);
        const form = pdfDoc.getForm();

        // Debug: list all available field names
        const fields = form.getFields();
        fields.forEach(field => {
            console.log('Found field:', field.getName());
        });

        // Populate PDF fields from localStorage (example for Part 1)
        const beginningDate = form.getTextField('topmostSubform[0].Page1[0].Pg1Header[0].f1_1[0]');
        const endingDate = form.getTextField('topmostSubform[0].Page1[0].Pg1Header[0].f1_2[0]');
        const filingYear = form.getTextField('topmostSubform[0].Page1[0].Pg1Header[0].f1_3[0]');
        const firstNameField = form.getTextField('topmostSubform[0].Page1[0].f1_4[0]');
        const lastNameField = form.getTextField('topmostSubform[0].Page1[0].f1_5[0]');
        const tin = form.getTextField('topmostSubform[0].Page1[0].f1_6[0]');
        const ForeignAddress = form.getTextField('topmostSubform[0].Page1[0].f1_7[0]');
        const usAddress = form.getTextField('topmostSubform[0].Page1[0].f1_8[0]');
        // Part 1 General Info
        const i_visaType_entry_date = form.getTextField('topmostSubform[0].Page1[0].f1_9[0]');
        const i_cur_nonimmi_status = form.getTextField('topmostSubform[0].Page1[0].f1_10[0]');
        const i_citizen_country = form.getTextField('topmostSubform[0].Page1[0].f1_11[0]');
        const i_passportCountry = form.getTextField('topmostSubform[0].Page1[0].f1_12[0]');
        const i_passportNumber = form.getTextField('topmostSubform[0].Page1[0].f1_13[0]');

        const i_stays_2024 = form.getTextField('topmostSubform[0].Page1[0].f1_14[0]');
        const i_stays_2023 = form.getTextField('topmostSubform[0].Page1[0].f1_15[0]');
        const i_stays_2022 = form.getTextField('topmostSubform[0].Page1[0].f1_16[0]');

        // 日付計算からの直接入力：使用しない
        // i_stays_2024.setText(localStorage.getItem('i_stays_2024') || '');
        // i_stays_2023.setText(localStorage.getItem('i_stays_2023') || '');
        // i_stays_2022.setText(localStorage.getItem('i_stays_2022') || '');

        const i_exclude_stays_2024 = form.getTextField('topmostSubform[0].Page1[0].f1_17[0]');
        
        // Part 3 Students (example fields)
        const iii_school_info_1 = form.getTextField('topmostSubform[0].Page1[0].f1_30[0]');
        const iii_school_info_2 = form.getTextField('topmostSubform[0].Page1[0].f1_31[0]');
        const iii_school_info_3 = form.getTextField('topmostSubform[0].Page1[0].f1_32[0]');
        const iii_director_info_1 = form.getTextField('topmostSubform[0].Page1[0].f1_33[0]');
        const iii_director_info_2 = form.getTextField('topmostSubform[0].Page1[0].f1_34[0]');
        const iii_director_info_3 = form.getTextField('topmostSubform[0].Page1[0].f1_35[0]');
        const iii_visa_type_2018 = form.getTextField('topmostSubform[0].Page1[0].f1_36[0]');
        const iii_visa_type_2019 = form.getTextField('topmostSubform[0].Page1[0].f1_37[0]');
        const iii_visa_type_2020 = form.getTextField('topmostSubform[0].Page1[0].f1_38[0]');
        const iii_visa_type_2021 = form.getTextField('topmostSubform[0].Page1[0].f1_39[0]');
        const iii_visa_type_2022 = form.getTextField('topmostSubform[0].Page1[0].f1_40[0]');
        const iii_visa_type_2023 = form.getTextField('topmostSubform[0].Page1[0].f1_41[0]');
        const iii_more_than_5years_Yes = form.getCheckBox('topmostSubform[0].Page1[0].c1_2[0]');
        const iii_more_than_5years_No = form.getCheckBox('topmostSubform[0].Page1[0].c1_2[1]');
        const iii_apply_residenct_Yes = form.getCheckBox('topmostSubform[0].Page1[0].c1_3[0]');
        const iii_apply_residenct_No = form.getCheckBox('topmostSubform[0].Page1[0].c1_3[1]');
        const iii_apply_residenct_Yes_info_1 = form.getTextField('topmostSubform[0].Page1[0].f1_42[0]');
        const iii_apply_residenct_Yes_info_2 = form.getTextField('topmostSubform[0].Page1[0].f1_43[0]');
        const iii_apply_residenct_Yes_info_3 = form.getTextField('topmostSubform[0].Page1[0].f1_44[0]');

        // Populate each PDF field with the corresponding value from localStorage
        beginningDate.setText(localStorage.getItem('beginningDate') || '');
        endingDate.setText(localStorage.getItem('endingDate') || '');
        filingYear.setText(localStorage.getItem('filingYear') || '');
        firstNameField.setText(localStorage.getItem('firstName') || '');
        lastNameField.setText(localStorage.getItem('lastName') || '');
        tin.setText(localStorage.getItem('tin') || '');
        ForeignAddress.setText(localStorage.getItem('ForeignAddress') || '');
        usAddress.setText(localStorage.getItem('usAddress') || '');
        i_visaType_entry_date.setText(localStorage.getItem('i_visaType_entry_date') || '');
        i_cur_nonimmi_status.setText(localStorage.getItem('i_cur_nonimmi_status') || '');
        i_citizen_country.setText(localStorage.getItem('i_citizen_country') || '');
        i_passportCountry.setText(localStorage.getItem('i_passportCountry') || '');
        i_passportNumber.setText(localStorage.getItem('i_passportNumber') || '');
        i_stays_2024.setText(localStorage.getItem('i_stays_2024') || '');
        i_stays_2023.setText(localStorage.getItem('i_stays_2023') || '');
        i_stays_2022.setText(localStorage.getItem('i_stays_2022') || '');
        i_exclude_stays_2024.setText(localStorage.getItem('i_exclude_stays_2024') || '');
        iii_school_info_1.setText(localStorage.getItem('iii_school_info_1') || '');
        iii_school_info_2.setText(localStorage.getItem('iii_school_info_2') || '');
        iii_school_info_3.setText(localStorage.getItem('iii_school_info_3') || '');
        iii_director_info_1.setText(localStorage.getItem('iii_director_info_1') || '');
        iii_director_info_2.setText(localStorage.getItem('iii_director_info_2') || '');
        iii_director_info_3.setText(localStorage.getItem('iii_director_info_3') || '');
        iii_visa_type_2018.setText(localStorage.getItem('iii_visa_type_2018') || '');
        iii_visa_type_2019.setText(localStorage.getItem('iii_visa_type_2019') || '');
        iii_visa_type_2020.setText(localStorage.getItem('iii_visa_type_2020') || '');
        iii_visa_type_2021.setText(localStorage.getItem('iii_visa_type_2021') || '');
        iii_visa_type_2022.setText(localStorage.getItem('iii_visa_type_2022') || '');
        iii_visa_type_2023.setText(localStorage.getItem('iii_visa_type_2023') || '');
        if (localStorage.getItem('moreThan5Years') === 'iii_more_than_5years_Yes') {
            iii_more_than_5years_Yes.check();
        } else if (localStorage.getItem('moreThan5Years') === 'iii_more_than_5years_No') {
            iii_more_than_5years_No.check();
        }
        if (localStorage.getItem('applyResident') === 'iii_apply_residenct_Yes') {
            iii_apply_residenct_Yes.check();
        } else if (localStorage.getItem('applyResident') === 'iii_apply_residenct_No') {
            iii_apply_residenct_No.check();
        }
        iii_apply_residenct_Yes_info_1.setText(localStorage.getItem('iii_apply_residenct_Yes_info_1') || '');
        iii_apply_residenct_Yes_info_2.setText(localStorage.getItem('iii_apply_residenct_Yes_info_2') || '');
        iii_apply_residenct_Yes_info_3.setText(localStorage.getItem('iii_apply_residenct_Yes_info_3') || '');

        // Save the modified PDF and trigger download
        const modifiedPdfBytes = await pdfDoc.save();
        const blob = new Blob([modifiedPdfBytes], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'f8843_filled.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    } catch (error) {
        console.error('Error filling PDF:', error);
    }
});

// --- LocalStorage handling for both Part 1 and Part 3 forms ---
document.addEventListener('DOMContentLoaded', () => {
    // Part 1 form
    const part1Form = document.getElementById('part1Form');
    if (part1Form) {
        const fieldIds = [
            'beginningDate', 'endingDate', 'filingYear', 'firstName', 'lastName', 'tin',
            'ForeignAddress', 'usAddress', 'i_visaType_entry_date', 'i_cur_nonimmi_status',
            'i_citizen_country', 'i_passportCountry', 'i_passportNumber', 'i_stays_2024',
            'i_stays_2023', 'i_stays_2022', 'i_exclude_stays_2024'
        ];
        fieldIds.forEach(id => {
            const input = document.getElementById(id);
            if (localStorage.getItem(id)) {
                input.value = localStorage.getItem(id);
            }
            input.addEventListener('input', () => {
                localStorage.setItem(id, input.value);
            });
        });
        document.getElementById('clearBtn')?.addEventListener('click', () => {
            fieldIds.forEach(id => {
                localStorage.removeItem(id);
                document.getElementById(id).value = '';
            });
        });
    }

    // Part 3 form
    const part3Form = document.getElementById('part3Form');
    if (part3Form) {
        const fieldIds = [
            'iii_school_info_1', 'iii_school_info_2', 'iii_school_info_3',
            'iii_director_info_1', 'iii_director_info_2', 'iii_director_info_3',
            'iii_visa_type_2018', 'iii_visa_type_2019', 'iii_visa_type_2020',
            'iii_visa_type_2021', 'iii_visa_type_2022', 'iii_visa_type_2023',
            'iii_apply_residenct_Yes_info_1', 'iii_apply_residenct_Yes_info_2', 'iii_apply_residenct_Yes_info_3'
        ];
        // For radio groups in Part 3:
        const radioKeys = {
            moreThan5Years: ['iii_more_than_5years_Yes', 'iii_more_than_5years_No'],
            applyResident: ['iii_apply_residenct_Yes', 'iii_apply_residenct_No']
        };
        fieldIds.forEach(id => {
            const input = document.getElementById(id);
            if (localStorage.getItem(id)) {
                input.value = localStorage.getItem(id);
            }
            input.addEventListener('input', () => {
                localStorage.setItem(id, input.value);
            });
        });
        Object.keys(radioKeys).forEach(groupKey => {
            const saved = localStorage.getItem(groupKey);
            console.log(saved)
            if (saved) {
                const radio = document.getElementById(saved);
                if (radio) radio.checked = true;
            }
            radioKeys[groupKey].forEach(id => {
                const radio = document.getElementById(id);
                radio.addEventListener('change', () => {
                    if (radio.checked) {
                        localStorage.setItem(groupKey, id);
                    }
                });
            });
        });
        document.getElementById('clearBtn')?.addEventListener('click', () => {
            fieldIds.forEach(id => {
                localStorage.removeItem(id);
                document.getElementById(id).value = '';
            });
            Object.keys(radioKeys).forEach(groupKey => {
                localStorage.removeItem(groupKey);
                radioKeys[groupKey].forEach(id => {
                    document.getElementById(id).checked = false;
                });
            });
        });
    }

    // --- Navigation: from part1 to part3 ---
    const nextBtn = document.getElementById('nextBtn');
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            window.location.href = "part3.html";
        });
    }

    // --- Navigation: from part3 back to part1 ---
    const backBtn = document.getElementById('backBtn');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            window.location.href = "part1.html";
        });
    }
});