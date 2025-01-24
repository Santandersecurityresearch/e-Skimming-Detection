![](img/CSRLogoV2-whitebackground.png)

# Semgrep Rules for Detecting Magecart Skimmers and Obfuscated JavaScript

## 🛡️ Why We Created These Rules
The global threat posed by Magecart and similar skimming malware continues to grow. Criminals use JavaScript obfuscation and data exfiltration techniques to steal sensitive information, such as credit card details, directly from websites. These attacks often go undetected due to the complexity and variability of the malicious code.

At **Santander Cyber Security Research (CSR)**, we believe in contributing to the security community by sharing actionable tools to detect and mitigate these threats. These Semgrep rules were crafted to identify malicious JavaScript patterns, obfuscation techniques, and credit card skimming operations at scale. Our goal is to help developers, security engineers, and organizations protect their websites and users.

---

## 🔥 Common Attack Vectors and Approaches
Magecart attacks target online payment systems by injecting malicious JavaScript into websites, often stealing payment data in real-time. The key challenges include:

- **Obfuscation Techniques:** Skimmers heavily obfuscate their code to evade detection.
- **Dynamic Code Execution:** Attackers use `eval`, `Function`, and other runtime techniques to hide their operations.
- **Data Exfiltration:** Skimmers exfiltrate data using `fetch`, `WebSocket`, or other covert channels.
- **Storage Abuse:** Malicious scripts abuse localStorage and sessionStorage to persist stolen data.

This repository provides robust Semgrep rules to detect these patterns and disrupt such attacks before they cause harm.

---

## 🚀 How to Use These Rules

### 1. Prerequisites

**Install Semgrep**: You can install Semgrep via `pip` or by following instructions on [semgrep.dev](https://semgrep.dev/):

  ```bash
  pip install semgrep
  ```

### 2. Clone This Repository
```
git clone https://github.com/Santandersecurityresearch/e-Skimming-Detection.git
cd e-Skimming-Detection
```

### 3. Run Semgrep
```
semgrep --config ./ path/to/your/codebase
```

### 4. Understand the Results

Each rule is designed to detect specific malicious patterns. The results will include:

    Rule ID: The name of the rule that triggered the match.
    Message: Why this code is flagged.
    Severity: Level of concern (e.g., WARNING).

### 5. Customize and Extend

Modify and adjust these rules to how you see fit. We love PR's too if you wish to make the project better for all. 

### 6. 🧩 Rules Overview

| **Rule ID**                        | **Description**                                             | **Severity** |
|------------------------------------|-------------------------------------------------------------|--------------|
| `detect-obfuscated-js`             | Detects obfuscated JavaScript and encoded strings           | WARNING      |
| `detect-credit-card-extraction`    | Flags patterns for extracting and manipulating credit card data | WARNING      |
| `obfuscated-data-exfiltration`     | Identifies encoded data exfiltration techniques             | WARNING      |
| `detect-devtools-debugger-check`   | Detects devtools and debugger anti-debugging techniques     | WARNING      |
| `detect-localStorage`              | Flags abuse of localStorage for skimming purposes           | WARNING      |


### ⚠️ Disclaimer

These rules are provided as-is, without any guarantees or warranties. While they can significantly enhance detection capabilities, security is a shared responsibility. Always conduct your own testing and threat analysis. We have also added two Magecart samples for you to test these rules on. Both obsfuctated and reverse engineered. 

### 📧 Contact

For questions or suggestions, feel free to reach out to us via here as an issue. 

