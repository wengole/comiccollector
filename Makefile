.PHONY: requirements pip pip-tools

pip: ## Check pip is installed in current path
	@[ ! "type -p pip" ] && echo "pip not found. Create and activate virtualenv" || exit 0

pip-tools: pip ## Install pip-tools
	@[ ! "type -p pip-compile" ] && pip install pip-tools || exit 0

requirements: pip-tools ## Compile all requirements.in files
	@for file in *.in; do pip-compile $i; done

dev: requirements ## Install pip dev requirements
	@pip-sync requirements-dev.txt

test: requirements ## Install pip dev requirements and run tests

	@pip-sync requirements-test.txt
	@pytest
